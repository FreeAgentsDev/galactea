'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Tag } from 'lucide-react';
import { Product } from '@/types/product';
import { useCartStore } from '@/store/cartStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-[var(--galactea-lavender)]">
      <Link href={`/productos/${product.slug}`}>
        <div className="aspect-square w-full overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHhYdICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          {product.originalPrice && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
              <Tag className="h-3 w-3" />
              <span>Oferta</span>
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold">Agotado</span>
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/productos/${product.slug}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[var(--galactea-primary)] transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
        </Link>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {product.originalPrice ? (
              <>
                <span className="text-2xl font-bold text-[var(--galactea-primary)]">
                  ${product.price.toLocaleString('es-CO')}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice.toLocaleString('es-CO')}
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold text-[var(--galactea-primary)]">
                ${product.price.toLocaleString('es-CO')}
              </span>
            )}
          </div>
        </div>

        {product.tags && product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {product.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-[var(--galactea-lavender)] text-[var(--galactea-primary)] px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="mt-4 w-full bg-[var(--galactea-primary)] text-white py-2 px-4 rounded-xl font-medium hover:bg-[var(--galactea-mid)] transition-all duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Agregar al carrito</span>
        </button>
      </div>
    </div>
  );
}
