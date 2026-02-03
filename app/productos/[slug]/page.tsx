'use client';

import { use } from 'react';
import Image from 'next/image';
import { ShoppingCart, Minus, Plus, Check, Truck, Leaf } from 'lucide-react';
import { getProductBySlug } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { useState } from 'react';
import Link from 'next/link';

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const product = getProductBySlug(resolvedParams.slug);
  const addItem = useCartStore(state => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
          <Link href="/productos" className="text-green-600 hover:text-green-700">
            Volver a productos
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            {product.images && product.images.length > 0 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      width={200}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center space-x-4 mb-6">
              {product.originalPrice ? (
                <>
                  <span className="text-4xl font-bold text-green-600">
                    ${product.price.toLocaleString('es-CO')}
                  </span>
                  <span className="text-2xl text-gray-500 line-through">
                    ${product.originalPrice.toLocaleString('es-CO')}
                  </span>
                </>
              ) : (
                <span className="text-4xl font-bold text-gray-900">
                  ${product.price.toLocaleString('es-CO')}
                </span>
              )}
            </div>

            <p className="text-lg text-gray-600 mb-6">{product.description}</p>
            
            {product.longDescription && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Descripción</h2>
                <p className="text-gray-600 leading-relaxed">{product.longDescription}</p>
              </div>
            )}

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Nutritional Info */}
            {product.nutritionalInfo && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Leaf className="h-5 w-5 mr-2 text-green-600" />
                  Información Nutricional (por porción)
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {product.nutritionalInfo.calories && (
                    <div>
                      <span className="text-gray-600">Calorías:</span>
                      <span className="ml-2 font-semibold">{product.nutritionalInfo.calories} kcal</span>
                    </div>
                  )}
                  {product.nutritionalInfo.protein && (
                    <div>
                      <span className="text-gray-600">Proteína:</span>
                      <span className="ml-2 font-semibold">{product.nutritionalInfo.protein}g</span>
                    </div>
                  )}
                  {product.nutritionalInfo.carbs && (
                    <div>
                      <span className="text-gray-600">Carbohidratos:</span>
                      <span className="ml-2 font-semibold">{product.nutritionalInfo.carbs}g</span>
                    </div>
                  )}
                  {product.nutritionalInfo.fat && (
                    <div>
                      <span className="text-gray-600">Grasas:</span>
                      <span className="ml-2 font-semibold">{product.nutritionalInfo.fat}g</span>
                    </div>
                  )}
                  {product.nutritionalInfo.sugar && (
                    <div>
                      <span className="text-gray-600">Azúcares:</span>
                      <span className="ml-2 font-semibold">{product.nutritionalInfo.sugar}g</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cantidad
              </label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="text-2xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                addedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-gradient-to-r from-green-500 to-purple-600 text-white hover:from-green-600 hover:to-purple-700'
              } disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl`}
            >
              {addedToCart ? (
                <>
                  <Check className="h-5 w-5" />
                  <span>Agregado al carrito</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="h-5 w-5" />
                  <span>Agregar al Carrito</span>
                </>
              )}
            </button>

            {/* Shipping Info */}
            <div className="mt-6 p-4 bg-green-50 rounded-lg flex items-start space-x-3">
              <Truck className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-green-900">Envíos Nacionales</p>
                <p className="text-sm text-green-700">
                  Realizamos envíos a toda Colombia. El tiempo de entrega varía según la ubicación.
                </p>
              </div>
            </div>

            {!product.inStock && (
              <div className="mt-4 p-4 bg-red-50 rounded-lg">
                <p className="text-red-800 font-medium">Producto temporalmente agotado</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
