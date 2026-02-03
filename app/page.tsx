'use client';

import Link from 'next/link';
import { ArrowRight, Heart, Leaf, Award, Truck, Star } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts } from '@/data/products';

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="bg-white">
      {/* Hero — Morado profundo como el logo */}
      <section className="relative bg-[var(--galactea-deep)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-[var(--galactea-star)]" />
          <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-white" />
          <div className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-[var(--galactea-lavender)]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[var(--galactea-star)]">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-sm font-medium uppercase tracking-wider">Hecho en Risaralda</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Yogurt Artesanal
                <span className="block text-[var(--galactea-lavender)]">Hecho con Amor</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Fábrica artesanal de yogurt y alimentos funcionales. 
                Elaborados con procesos cuidadosos, sin azúcar añadido y 
                con el respeto por la vida y el planeta. 🥛💚
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/productos"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-[var(--galactea-deep)] font-semibold rounded-xl hover:bg-[var(--galactea-lavender)] transition-all duration-200 shadow-lg"
                >
                  Ver Productos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/sobre-nosotros"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/50 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
                >
                  Conoce Más
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur p-8 border border-white/20 flex items-center justify-center">
                <span className="text-8xl">🥛</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features — Tarjetas con bordes suaves (estilo caparazón) */}
      <section className="py-16 bg-[var(--galactea-lavender)]/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-[var(--galactea-lavender)]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 bg-[var(--galactea-lavender)]">
                <Leaf className="h-8 w-8 text-[var(--galactea-primary)]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Natural</h3>
              <p className="text-gray-600 text-sm">Sin conservantes artificiales ni azúcar añadido</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-[var(--galactea-lavender)]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 bg-[var(--galactea-lavender)]">
                <Heart className="h-8 w-8 text-[var(--galactea-primary)]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hecho Artesanalmente</h3>
              <p className="text-gray-600 text-sm">Procesos cuidadosos y tradicionales</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-[var(--galactea-lavender)]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 bg-[var(--galactea-lavender)]">
                <Award className="h-8 w-8 text-[var(--galactea-primary)]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hecho en Risaralda</h3>
              <p className="text-gray-600 text-sm">Licenciatario oficial de la marca regional</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-[var(--galactea-lavender)]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 bg-[var(--galactea-lavender)]">
                <Truck className="h-8 w-8 text-[var(--galactea-primary)]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Envíos Nacionales</h3>
              <p className="text-gray-600 text-sm">Llevamos nuestros productos a toda Colombia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[var(--galactea-primary)] mb-4">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
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
              className="inline-flex items-center px-6 py-3 bg-[var(--galactea-primary)] text-white font-semibold rounded-xl hover:bg-[var(--galactea-mid)] transition-all duration-200"
            >
              Ver Todos los Productos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-[var(--galactea-lavender)]/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nuestros Valores
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-4 border border-[var(--galactea-lavender)]">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="mr-2">💚</span>
                    Conciencia y Salud
                  </h3>
                  <p className="text-gray-600">
                    Creemos en la importancia de una alimentación consciente y saludable. 
                    Todos nuestros productos están pensados para nutrir tu cuerpo y mente.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-[var(--galactea-lavender)]">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="mr-2">🌱</span>
                    Respeto por el Planeta
                  </h3>
                  <p className="text-gray-600">
                    Queremos contribuir a dejar un mundo mejor. Nuestros procesos respetan 
                    los recursos naturales y promueven la sostenibilidad.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-[var(--galactea-lavender)]">
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
              <div className="aspect-square rounded-2xl bg-[var(--galactea-deep)] p-8 flex items-center justify-center text-8xl border-4 border-white/20 shadow-xl">
                🐢
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--galactea-deep)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para probar nuestros productos?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Descubre el sabor auténtico del yogurt artesanal colombiano
          </p>
          <Link
            href="/productos"
            className="inline-flex items-center px-8 py-3 bg-white text-[var(--galactea-deep)] font-semibold rounded-xl hover:bg-[var(--galactea-lavender)] transition-all duration-200 shadow-lg"
          >
            Comprar Ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
