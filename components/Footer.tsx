import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--galactea-deep)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                <Image
                  src="/logo.png"
                  alt="Galáctea Factory"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </span>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">Galáctea</span>
                <span className="text-sm text-[var(--galactea-lavender)]">Factory</span>
              </div>
            </Link>
            <p className="text-white/80 mb-4 max-w-md">
              Fábrica artesanal de yogurt y alimentos funcionales. 
              Hecho en Colombia con conciencia y salud. 🥛💚
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/galacteafactory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[var(--galactea-star)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:contacto@galacteafactory.com"
                className="text-white/70 hover:text-[var(--galactea-star)] transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/productos" className="text-white/80 hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/recetas" className="text-white/80 hover:text-white transition-colors">
                  Recetas
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-white/80 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-white/80 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[var(--galactea-light)] mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">Risaralda, Colombia</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-[var(--galactea-light)] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contacto@galacteafactory.com"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  contacto@galacteafactory.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-white/80">✈️ Envíos nacionales</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Galáctea Factory. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-1 text-sm text-white/70">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-[var(--galactea-star)] fill-current" />
              <span>en Colombia</span>
              <span className="ml-2">🇨🇴</span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-white/60">Licenciatario "Hecho en Risaralda" 💚</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
