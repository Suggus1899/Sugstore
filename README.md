# Sugstore

Tienda online sin tienda — curación de productos que todo developer debería conocer, con enlaces reales a Amazon, Apple Store y fabricantes oficiales.

## Características

- **Next.js 15** con App Router y páginas estáticas por producto (`/producto/[slug]`)
- **Diseño editorial** — tipografía Syne + DM Sans, paleta oscura con acento naranja
- **Múltiples tiendas** — Amazon (afiliado), Apple, Keychron, Logitech, Sony, etc.
- **Sección destacados** + filtros por categoría
- **Fichas completas** — galería, veredicto editorial, detalles y enlaces de compra
- **SEO** — metadata dinámica por producto

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Crea `.env.local`:

```env
NEXT_PUBLIC_AMAZON_TAG=tu-tag-de-amazon-associates
```

## Personalización

| Qué | Dónde |
|-----|-------|
| Productos y tiendas | `lib/data/products.ts` |
| Tag Amazon afiliado | `.env.local` o `lib/config/affiliate.ts` |
| Estilos y colores | `app/globals.css` |

## Build

```bash
npm run build
npm start
```

## Stack

- Next.js 15 + React 19
- TypeScript
- Tailwind CSS 4
- next/image para imágenes optimizadas
