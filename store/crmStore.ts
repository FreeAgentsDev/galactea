'use client';

import { create } from 'zustand';
import { Customer, Order, ProductCRM, DashboardStats } from '@/types/crm';

interface CRMStore {
  // Auth
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  
  // Customers
  customers: Customer[];
  addCustomer: (customer: Omit<Customer, 'id' | 'createdAt' | 'totalOrders' | 'totalSpent'>) => void;
  updateCustomer: (id: string, customer: Partial<Customer>) => void;
  deleteCustomer: (id: string) => void;
  getCustomer: (id: string) => Customer | undefined;
  
  // Orders
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateOrder: (id: string, order: Partial<Order>) => void;
  deleteOrder: (id: string) => void;
  getOrder: (id: string) => Order | undefined;
  
  // Products
  products: ProductCRM[];
  updateProduct: (id: string, product: Partial<ProductCRM>) => void;
  syncProducts: () => void;
  
  // Stats
  getDashboardStats: () => DashboardStats;
  
  // Load/Save
  loadData: () => void;
  saveData: () => void;
}

const defaultPassword = 'galactea2024'; // Cambiar en producción

export const useCRMStore = create<CRMStore>((set, get) => ({
  isAuthenticated: typeof window !== 'undefined' 
    ? localStorage.getItem('crm_authenticated') === 'true'
    : false,
  
  customers: [],
  orders: [],
  products: [],
  
  login: (username, password) => {
    // Autenticación simple - en producción usar sistema real
    if (username === 'admin' && password === defaultPassword) {
      set({ isAuthenticated: true });
      if (typeof window !== 'undefined') {
        localStorage.setItem('crm_authenticated', 'true');
      }
      get().loadData();
      return true;
    }
    return false;
  },
  
  logout: () => {
    set({ isAuthenticated: false });
    if (typeof window !== 'undefined') {
      localStorage.removeItem('crm_authenticated');
    }
  },
  
  addCustomer: (customerData) => {
    const newCustomer: Customer = {
      ...customerData,
      id: `cust_${Date.now()}`,
      createdAt: new Date().toISOString(),
      totalOrders: 0,
      totalSpent: 0,
    };
    set(state => ({ customers: [...state.customers, newCustomer] }));
    get().saveData();
  },
  
  updateCustomer: (id, updates) => {
    set(state => ({
      customers: state.customers.map(c => c.id === id ? { ...c, ...updates } : c),
    }));
    get().saveData();
  },
  
  deleteCustomer: (id) => {
    set(state => ({ customers: state.customers.filter(c => c.id !== id) }));
    get().saveData();
  },
  
  getCustomer: (id) => {
    return get().customers.find(c => c.id === id);
  },
  
  addOrder: (orderData) => {
    const newOrder: Order = {
      ...orderData,
      id: `order_${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    // Actualizar estadísticas del cliente
    const customer = get().getCustomer(orderData.customerId);
    if (customer) {
      get().updateCustomer(orderData.customerId, {
        totalOrders: customer.totalOrders + 1,
        totalSpent: customer.totalSpent + orderData.total,
        lastOrderDate: newOrder.createdAt,
      });
    }
    
    set(state => ({ orders: [...state.orders, newOrder] }));
    get().saveData();
  },
  
  updateOrder: (id, updates) => {
    set(state => ({
      orders: state.orders.map(o => 
        o.id === id 
          ? { ...o, ...updates, updatedAt: new Date().toISOString() }
          : o
      ),
    }));
    get().saveData();
  },
  
  deleteOrder: (id) => {
    set(state => ({ orders: state.orders.filter(o => o.id !== id) }));
    get().saveData();
  },
  
  getOrder: (id) => {
    return get().orders.find(o => o.id === id);
  },
  
  updateProduct: (id, updates) => {
    set(state => ({
      products: state.products.map(p => p.id === id ? { ...p, ...updates } : p),
    }));
    get().saveData();
  },
  
  syncProducts: () => {
    // Sincronizar productos desde el catálogo
    import('@/data/products').then(({ products }) => {
      const crmProducts: ProductCRM[] = products.map(p => ({
        id: p.id,
        name: p.name,
        slug: p.slug,
        price: p.price,
        stock: p.inStock ? 100 : 0, // Valor por defecto
        category: p.category,
        status: p.inStock ? 'active' : 'inactive',
        sales: 0,
        revenue: 0,
      }));
      
      // Mantener datos existentes
      const existing = get().products;
      const merged = crmProducts.map(newP => {
        const existingP = existing.find(e => e.id === newP.id);
        return existingP ? { ...newP, sales: existingP.sales, revenue: existingP.revenue, stock: existingP.stock } : newP;
      });
      
      set({ products: merged });
      get().saveData();
    });
  },
  
  getDashboardStats: () => {
    const { customers, orders, products } = get();
    const totalRevenue = orders
      .filter(o => o.paymentStatus === 'paid')
      .reduce((sum, o) => sum + o.total, 0);
    
    const pendingOrders = orders.filter(o => 
      o.status === 'pending' || o.status === 'processing'
    ).length;
    
    const averageOrderValue = orders.length > 0
      ? orders.reduce((sum, o) => sum + o.total, 0) / orders.length
      : 0;
    
    // Top productos
    const productSales = new Map<string, { name: string; sales: number; revenue: number }>();
    orders.forEach(order => {
      order.items.forEach(item => {
        const existing = productSales.get(item.productId) || { name: item.productName, sales: 0, revenue: 0 };
        productSales.set(item.productId, {
          name: item.productName,
          sales: existing.sales + item.quantity,
          revenue: existing.revenue + item.subtotal,
        });
      });
    });
    
    const topProducts = Array.from(productSales.values())
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 5);
    
    const recentOrders = [...orders]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 5);
    
    return {
      totalCustomers: customers.length,
      totalOrders: orders.length,
      totalRevenue,
      pendingOrders,
      averageOrderValue,
      topProducts,
      recentOrders,
    };
  },
  
  loadData: () => {
    if (typeof window === 'undefined') return;
    
    try {
      const customers = localStorage.getItem('crm_customers');
      const orders = localStorage.getItem('crm_orders');
      const products = localStorage.getItem('crm_products');
      
      if (customers) set({ customers: JSON.parse(customers) });
      if (orders) set({ orders: JSON.parse(orders) });
      if (products) set({ products: JSON.parse(products) });
      
      // Sincronizar productos si no existen
      if (!products) {
        get().syncProducts();
      }
    } catch (error) {
      console.error('Error loading CRM data:', error);
    }
  },
  
  saveData: () => {
    if (typeof window === 'undefined') return;
    
    try {
      const { customers, orders, products } = get();
      localStorage.setItem('crm_customers', JSON.stringify(customers));
      localStorage.setItem('crm_orders', JSON.stringify(orders));
      localStorage.setItem('crm_products', JSON.stringify(products));
    } catch (error) {
      console.error('Error saving CRM data:', error);
    }
  },
}));
