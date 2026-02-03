'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Leaf, Award, Truck } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts } from '@/data/products';

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-purple-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Yogurt Artesanal
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-purple-600">
                  Hecho con Amor
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Fábrica artesanal de yogurt y alimentos funcionales. 
                Elaborados con procesos cuidadosos, sin azúcar añadido y 
                con el respeto por la vida y el planeta. 🥛💚
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/productos"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-500 to-purple-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Ver Productos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/sobre-nosotros"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-green-500 hover:text-green-600 transition-all duration-200"
                >
                  Conoce Más
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-100 to-purple-100 p-8 shadow-2xl">
                <div className="h-full w-full bg-white rounded-xl flex items-center justify-center">
                  <span className="text-6xl">🥛</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Natural</h3>
              <p className="text-gray-600">Sin conservantes artificiales ni azúcar añadido</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hecho Artesanalmente</h3>
              <p className="text-gray-600">Procesos cuidadosos y tradicionales</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hecho en Risaralda</h3>
              <p className="text-gray-600">Licenciatario oficial de la marca regional</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Truck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Envíos Nacionales</h3>
              <p className="text-gray-600">Llevamos nuestros productos a toda Colombia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Productos Destacados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestros productos más populares, elaborados con los más altos estándares de calidad
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/productos"
              className="inline-flex items-center px-6 py-3 border-2 border-green-500 text-green-600 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200"
            >
              Ver Todos los Productos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nuestros Valores
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="mr-2">💚</span>
                    Conciencia y Salud
                  </h3>
                  <p className="text-gray-600">
                    Creemos en la importancia de una alimentación consciente y saludable. 
                    Todos nuestros productos están pensados para nutrir tu cuerpo y mente.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="mr-2">🌱</span>
                    Respeto por el Planeta
                  </h3>
                  <p className="text-gray-600">
                    Queremos contribuir a dejar un mundo mejor. Nuestros procesos respetan 
                    los recursos naturales y promueven la sostenibilidad.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="mr-2">🇨🇴</span>
                    Orgullo Colombiano
                  </h3>
                  <p className="text-gray-600">
                    Hecho en Colombia, con ingredientes locales y procesos artesanales 
                    que reflejan la calidad y tradición de nuestra tierra.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-green-100 p-8 shadow-xl">
                <div className="h-full w-full bg-white rounded-xl flex items-center justify-center text-6xl">
                  🐢💜
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-purple-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para probar nuestros productos?
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Descubre el sabor auténtico del yogurt artesanal colombiano
          </p>
          <Link
            href="/productos"
            className="inline-flex items-center px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
          >
            Comprar Ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
