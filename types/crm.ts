export interface Customer {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  createdAt: string;
  totalOrders: number;
  totalSpent: number;
  lastOrderDate?: string;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  shippingAddress: string;
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  subtotal: number;
}

export interface ProductCRM {
  id: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  category: string;
  status: 'active' | 'inactive';
  sales: number;
  revenue: number;
}

export interface DashboardStats {
  totalCustomers: number;
  totalOrders: number;
  totalRevenue: number;
  pendingOrders: number;
  averageOrderValue: number;
  topProducts: { name: string; sales: number; revenue: number }[];
  recentOrders: Order[];
}
