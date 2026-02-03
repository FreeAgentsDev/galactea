'use client';

import { create } from 'zustand';
import { Product, CartItem } from '@/types/product';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const getInitialItems = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem('galactea-cart');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: getInitialItems(),
  
  addItem: (product, quantity = 1) => {
    const items = get().items;
    const existingItem = items.find(item => item.id === product.id);
    
    let newItems: CartItem[];
    if (existingItem) {
      newItems = items.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      newItems = [...items, { ...product, quantity }];
    }
    
    set({ items: newItems });
    if (typeof window !== 'undefined') {
      localStorage.setItem('galactea-cart', JSON.stringify(newItems));
    }
  },
  
  removeItem: (productId) => {
    const newItems = get().items.filter(item => item.id !== productId);
    set({ items: newItems });
    if (typeof window !== 'undefined') {
      localStorage.setItem('galactea-cart', JSON.stringify(newItems));
    }
  },
  
  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId);
      return;
    }
    
    const newItems = get().items.map(item =>
      item.id === productId ? { ...item, quantity } : item
    );
    set({ items: newItems });
    if (typeof window !== 'undefined') {
      localStorage.setItem('galactea-cart', JSON.stringify(newItems));
    }
  },
  
  clearCart: () => {
    set({ items: [] });
    if (typeof window !== 'undefined') {
      localStorage.setItem('galactea-cart', '[]');
    }
  },
  
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
  
  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
}));
