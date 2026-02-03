import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Galáctea Factory - Yogurt Artesanal y Alimentos Funcionales",
  description: "Fábrica artesanal de yogurt, yogurt griego y alimentos funcionales. Hecho en Colombia con conciencia y salud. Envíos nacionales.",
  keywords: "yogurt artesanal, yogurt griego, alimentos funcionales, saludable, sin azúcar, Colombia, Risaralda",
  openGraph: {
    title: "Galáctea Factory - Yogurt Artesanal",
    description: "Fábrica artesanal de yogurt y alimentos funcionales. Hecho en Colombia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
