'use client';

import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function ProductosPage() {
  const categories = [
    { id: 'all', name: 'Todos', count: products.length },
    { id: 'yogurt', name: 'Yogurt', count: products.filter(p => p.category === 'yogurt').length },
    { id: 'yogurt-griego', name: 'Yogurt Griego', count: products.filter(p => p.category === 'yogurt-griego').length },
    { id: 'helado', name: 'Helado', count: products.filter(p => p.category === 'helado').length },
    { id: 'mermelada', name: 'Mermeladas', count: products.filter(p => p.category === 'mermelada').length },
    { id: 'combo', name: 'Combos', count: products.filter(p => p.category === 'combo').length },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Productos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra línea completa de productos artesanales, elaborados con los más altos 
            estándares de calidad y pensados para tu bienestar.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className="px-6 py-2 rounded-full border-2 border-gray-300 text-gray-700 font-medium hover:border-green-500 hover:text-green-600 transition-all duration-200"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
