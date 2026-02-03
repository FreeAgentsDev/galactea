import Link from 'next/link';
import { Clock, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Recetas - Galáctea Factory',
  description: 'Descubre deliciosas recetas saludables con nuestros productos. Ideas creativas para desayunos, snacks y postres.',
};

const recipes = [
  {
    id: '1',
    title: 'Spread de Arándanos y Yogurt Griego',
    description: 'Una mezcla extra cremosa, con un toque ácido pero dulce y sin azúcar añadido.',
    image: '/recipes/spread-arandanos.jpg',
    time: '20 min',
    servings: '4 porciones',
    difficulty: 'Fácil',
    ingredients: [
      '1 cajita de arándanos (125g)',
      '3 cucharadas o 180g de yogurt griego NATURAL EXTRA CREMOSO Galáctea',
    ],
    steps: [
      'Confita 1 cajita de arándanos (125g) a fuego lento por 20 min. Revuelve hasta que quede pegajoso. Déjalo enfriar hasta temperatura ambiente.',
      'Mezcla 3 cucharadas o 180g de nuestro yogurt griego NATURAL EXTRA CREMOSO Galáctea. Bate en una sola dirección hasta que quede súper sedoso.',
      'Refrigera y usa como spread en TODO lo que se te ocurra o consúmelo directamente como postre.',
    ],
  },
  {
    id: '2',
    title: 'Snack Saludable con Fresas',
    description: 'Un snack perfecto para cualquier momento del día, sin remordimientos.',
    image: '/recipes/snack-fresas.jpg',
    time: '10 min',
    servings: '2 porciones',
    difficulty: 'Fácil',
    ingredients: [
      '300g de yogurt griego Galáctea',
      '1 taza de fresas',
      'Chocolate al % que quieras',
      'Endulzante (opcional)',
    ],
    steps: [
      'Lava y corta las fresas en trozos pequeños.',
      'Mezcla el yogurt griego con el chocolate derretido y endulzante si lo deseas.',
      'Sirve las fresas con el yogurt y disfruta.',
    ],
  },
  {
    id: '3',
    title: 'Yogurt Griego de Noche',
    description: 'Un postre ligero y nutritivo perfecto para antes de dormir.',
    image: '/recipes/yogurt-noche.jpg',
    time: '5 min',
    servings: '1 porción',
    difficulty: 'Fácil',
    ingredients: [
      '200g de yogurt griego Galáctea',
      'Frutos secos (opcional)',
      'Miel o endulzante natural (opcional)',
    ],
    steps: [
      'Sirve el yogurt griego en un bowl.',
      'Agrega frutos secos si lo deseas.',
      'Endulza con miel o endulzante natural al gusto.',
    ],
  },
];

export default function RecetasPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recetas Saludables
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre deliciosas recetas con nuestros productos. Ideas creativas para 
            desayunos, snacks y postres que nutren tu cuerpo y deleitan tu paladar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-[var(--galactea-lavender)]"
            >
              <div className="aspect-video w-full relative overflow-hidden bg-gray-100">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{recipe.title}</h2>
                <p className="text-gray-600 mb-4">{recipe.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{recipe.servings}</span>
                  </div>
                </div>

                <Link
                  href={`/recetas/${recipe.id}`}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  Ver receta completa
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            ¿Tienes una receta favorita con nuestros productos?
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center px-6 py-3 border-2 border-green-500 text-green-600 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200"
          >
            Compártela con nosotros
          </Link>
        </div>
      </div>
    </div>
  );
}
