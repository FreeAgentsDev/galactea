import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Yogurt Griego Natural Extra Cremoso',
    slug: 'yogurt-griego-natural',
    description: 'Yogurt griego artesanal sin azúcar añadido, extra cremoso y natural.',
    longDescription: 'Nuestro yogurt griego natural es elaborado con procesos artesanales cuidadosos, sin azúcar añadido. Perfecto para desayunos saludables, snacks o como base para tus recetas favoritas. Extra cremoso y con un sabor auténtico.',
    price: 12000,
    image: '/products/yogurt-griego-natural.jpg',
    images: [
      '/products/yogurt-griego-natural.jpg',
      '/products/yogurt-griego-natural-2.jpg',
    ],
    category: 'yogurt-griego',
    inStock: true,
    featured: true,
    tags: ['sin azúcar', 'natural', 'extra cremoso', 'artesanal'],
    nutritionalInfo: {
      calories: 120,
      protein: 15,
      carbs: 6,
      fat: 5,
      sugar: 4,
    },
  },
  {
    id: '2',
    name: 'Yogurt Natural para Niños',
    slug: 'yogurt-natural-ninos',
    description: 'El yogurt que más les gusta a los niños. Natural, nutritivo y delicioso.',
    longDescription: 'Especialmente formulado para los más pequeños, nuestro yogurt natural es el favorito de los niños. Sin conservantes artificiales, rico en proteínas y calcio. Enséñales lo mejor, dales lo mejor.',
    price: 10000,
    image: '/products/yogurt-natural-ninos.jpg',
    category: 'yogurt',
    inStock: true,
    featured: true,
    tags: ['para niños', 'natural', 'nutritivo', 'sin conservantes'],
    nutritionalInfo: {
      calories: 100,
      protein: 8,
      carbs: 12,
      fat: 3,
      sugar: 10,
    },
  },
  {
    id: '3',
    name: 'Yogurt Griego con Arándanos',
    slug: 'yogurt-griego-arandanos',
    description: 'Spread untable de arándanos y yogurt griego. Extra cremoso, sin azúcar añadido.',
    longDescription: 'Una mezcla extra cremosa de yogurt griego con arándanos confitados. Perfecto para pancakes, waffles, fruta, galletas o como postre. Sin azúcar añadido, super natural y nutritivo.',
    price: 15000,
    image: '/products/yogurt-arandanos.jpg',
    category: 'yogurt-griego',
    inStock: true,
    featured: false,
    tags: ['arándanos', 'sin azúcar', 'spread', 'postre'],
  },
  {
    id: '4',
    name: 'Helado de Yogurt Natural',
    slug: 'helado-yogurt-natural',
    description: 'Helado artesanal de yogurt, cremoso y refrescante. Sin azúcar añadido.',
    longDescription: 'Disfruta de nuestro helado de yogurt artesanal, elaborado con nuestro yogurt natural. Perfecto para cualquier momento del día, cremoso, refrescante y saludable.',
    price: 18000,
    image: '/products/helado-yogurt.jpg',
    category: 'helado',
    inStock: true,
    featured: false,
    tags: ['helado', 'sin azúcar', 'artesanal', 'refrescante'],
  },
  {
    id: '5',
    name: 'Mermelada de Frutos Rojos',
    slug: 'mermelada-frutos-rojos',
    description: 'Mermelada artesanal de frutos rojos, elaborada con frutas naturales.',
    longDescription: 'Nuestra mermelada de frutos rojos es elaborada artesanalmente con frutas naturales seleccionadas. Perfecta como aditivo natural para nuestros yogures o para disfrutar en tus desayunos.',
    price: 12000,
    image: '/products/mermelada-frutos-rojos.jpg',
    category: 'mermelada',
    inStock: true,
    featured: false,
    tags: ['mermelada', 'artesanal', 'frutos rojos', 'natural'],
  },
  {
    id: '6',
    name: 'Combo Familiar',
    slug: 'combo-familiar',
    description: 'Pack familiar con yogurt griego, yogurt natural y mermelada. Ideal para toda la familia.',
    longDescription: 'Nuestro combo familiar incluye 2 unidades de yogurt griego natural, 2 unidades de yogurt natural para niños y 1 mermelada de frutos rojos. Perfecto para toda la familia.',
    price: 45000,
    originalPrice: 50000,
    image: '/products/combo-familiar.jpg',
    category: 'combo',
    inStock: true,
    featured: true,
    tags: ['combo', 'familiar', 'ahorro', 'pack'],
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
