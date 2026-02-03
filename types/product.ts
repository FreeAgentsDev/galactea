export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: 'yogurt' | 'yogurt-griego' | 'helado' | 'mermelada' | 'combo';
  inStock: boolean;
  featured?: boolean;
  tags?: string[];
  nutritionalInfo?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
    sugar?: number;
  };
}

export interface CartItem extends Product {
  quantity: number;
}
