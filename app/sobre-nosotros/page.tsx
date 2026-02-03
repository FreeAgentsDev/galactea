import { Heart, Leaf, Award, Users, MapPin, Factory } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Sobre Nosotros - Galáctea Factory',
  description: 'Conoce la historia de Galáctea Factory, nuestra misión, valores y compromiso con la producción artesanal de alimentos saludables.',
};

export default function SobreNosotrosPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-purple-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre Galáctea Factory
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fábrica artesanal de yogurt y alimentos funcionales, 
              comprometida con la salud, la calidad y el respeto por el planeta.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Galáctea es una planta de producción de alimentos especializada en lácteos, 
                  elaboración de yogurt, yogurt griego y helado de yogurt, además de producir 
                  sus propias mermeladas como aditivos naturales para sus productos.
                </p>
                <p>
                  Nuestro enfoque está en ofrecer alimentos frescos y de calidad, hechos con 
                  procesos cuidadosos y responsables. Cada producto que elaboramos refleja 
                  nuestro compromiso con la excelencia y el respeto por los recursos naturales.
                </p>
                <p>
                  Hoy nos enorgullece ser licenciatarios oficiales de la marca "Hecho en Risaralda", 
                  un reconocimiento que refleja nuestro compromiso con la producción local y 
                  la calidad colombiana.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-100 to-purple-100 p-8 shadow-xl">
                <div className="h-full w-full bg-white rounded-xl flex items-center justify-center text-6xl">
                  🥛💚
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Nuestra Misión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Producir alimentos artesanales de la más alta calidad, que nutran el cuerpo 
                y el alma, mientras contribuimos a un mundo más sostenible y consciente.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Leaf className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Nuestra Visión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ser reconocidos como líderes en la producción de alimentos funcionales 
                artesanales en Colombia, promoviendo una alimentación saludable y consciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Conciencia y Salud</h3>
              <p className="text-gray-600">
                Creemos en la importancia de una alimentación consciente que nutra 
                tanto el cuerpo como la mente.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Leaf className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Respeto por el Planeta</h3>
              <p className="text-gray-600">
                Queremos contribuir a dejar un mundo mejor. Nuestros procesos respetan 
                los recursos naturales y promueven la sostenibilidad.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calidad Artesanal</h3>
              <p className="text-gray-600">
                Cada producto es elaborado con procesos cuidadosos y tradicionales, 
                garantizando la más alta calidad en cada bocado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <MapPin className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Ubicación</h3>
              </div>
              <p className="text-gray-600 mb-4">
                <strong>Risaralda, Colombia</strong>
              </p>
              <p className="text-gray-600">
                Orgullosamente colombianos, producimos nuestros alimentos con ingredientes 
                locales y procesos que reflejan la calidad y tradición de nuestra tierra.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Certificaciones</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">💚</span>
                  <div>
                    <p className="font-semibold text-gray-900">Hecho en Risaralda</p>
                    <p className="text-sm text-gray-600">Licenciatario oficial</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🇨🇴</span>
                  <div>
                    <p className="font-semibold text-gray-900">Made in Colombia</p>
                    <p className="text-sm text-gray-600">Producto 100% colombiano</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-purple-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Quieres conocer más?
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Contáctanos y descubre cómo podemos ayudarte a llevar una alimentación más saludable
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
          >
            Contáctanos
          </a>
        </div>
      </section>
    </div>
  );
}
