# 🥛 Galáctea Factory - Sitio Web E-commerce

Sitio web profesional con e-commerce para Galáctea Factory, fábrica artesanal de yogurt y alimentos funcionales.

## 🚀 Características

- ✅ **Diseño Moderno y Responsive**: Optimizado para todos los dispositivos
- ✅ **E-commerce Completo**: Catálogo de productos, carrito de compras y checkout
- ✅ **SEO Optimizado**: Meta tags, estructura semántica y optimización para buscadores
- ✅ **Performance**: Carga rápida con Next.js y optimización de imágenes
- ✅ **Gestión de Estado**: Carrito persistente con Zustand
- ✅ **TypeScript**: Código type-safe y mantenible

## 📦 Tecnologías Utilizadas

- **Next.js 16**: Framework React con App Router
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos utilitarios
- **Zustand**: Gestión de estado del carrito
- **Lucide React**: Iconos modernos
- **Next/Image**: Optimización de imágenes

## 🛠️ Instalación

1. **Clonar el repositorio** (si aplica):
```bash
cd galactea-website
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Ejecutar en desarrollo**:
```bash
npm run dev
```

4. **Abrir en el navegador**:
```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
galactea-website/
├── app/                    # Páginas y rutas (App Router)
│   ├── page.tsx           # Página de inicio
│   ├── layout.tsx         # Layout principal
│   ├── productos/         # Páginas de productos
│   ├── carrito/           # Página del carrito
│   ├── sobre-nosotros/    # Página sobre nosotros
│   ├── contacto/          # Página de contacto
│   └── recetas/           # Página de recetas
├── components/            # Componentes reutilizables
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
├── data/                  # Datos estáticos
│   └── products.ts        # Catálogo de productos
├── store/                 # Estado global
│   └── cartStore.ts       # Store del carrito
├── types/                 # Tipos TypeScript
│   └── product.ts
└── public/                # Archivos estáticos
    ├── products/          # Imágenes de productos
    └── recipes/           # Imágenes de recetas
```

## 🎨 Personalización

### Colores de la Marca

Los colores principales están definidos en `app/globals.css`:
- **Verde**: `#22c55e` (primary-green)
- **Morado**: `#a855f7` (primary-purple)

### Productos

Los productos se gestionan en `data/products.ts`. Para agregar nuevos productos:

```typescript
{
  id: 'nuevo-id',
  name: 'Nombre del Producto',
  slug: 'nombre-del-producto',
  description: 'Descripción corta',
  price: 15000,
  image: '/products/imagen.jpg',
  category: 'yogurt',
  inStock: true,
  // ... más propiedades
}
```

## 🚢 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. El despliegue se realizará automáticamente

### Otros Proveedores

```bash
# Build de producción
npm run build

# Iniciar servidor de producción
npm start
```

## 🔧 Próximos Pasos

### Integración de Pagos

Para integrar Mercado Pago u otra pasarela de pagos:

1. Instalar SDK de la pasarela
2. Crear API routes en `app/api/`
3. Configurar webhooks para confirmación de pagos
4. Actualizar el botón de checkout en `app/carrito/page.tsx`

### Base de Datos

Para gestionar productos dinámicamente:

1. Configurar base de datos (PostgreSQL, MongoDB, etc.)
2. Crear modelos de datos
3. Implementar API routes para CRUD
4. Migrar datos de `data/products.ts` a la base de datos

### Imágenes de Productos

1. Agregar imágenes reales en `public/products/`
2. Actualizar rutas en `data/products.ts`
3. Optimizar imágenes con herramientas como ImageOptim

### Email Marketing

1. Integrar servicio de email (SendGrid, Resend, etc.)
2. Configurar formulario de contacto
3. Implementar newsletter
4. Automatizaciones de email

## 📝 Notas

- El carrito se guarda en `localStorage` del navegador
- Las imágenes de productos son placeholders - reemplazar con imágenes reales
- El formulario de contacto necesita integración con servicio de email
- El checkout necesita integración con pasarela de pagos

## 📞 Soporte

Para preguntas o soporte, contacta a:
- Email: contacto@galacteafactory.com
- Instagram: @galacteafactory

## 📄 Licencia

Este proyecto es propiedad de Galáctea Factory.

---

Hecho con 💚 en Colombia 🇨🇴
