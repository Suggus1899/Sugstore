import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductCard } from "@/components/ProductCard";
import { ShareButton } from "@/components/ShareButton";
import { StoreLinks } from "@/components/StoreLinks";
import { TrackView } from "@/components/TrackView";
import {
  getAllSlugs,
  getCategoryMeta,
  getProductBySlug,
  products,
} from "@/lib/data/products";
import { formatPrice, SITE_URL } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado" };

  return {
    title: product.name,
    description: product.tagline,
    openGraph: {
      title: product.name,
      description: product.tagline,
      images: [{ url: product.images[0] }],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryMeta(product.category);
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.tagline,
    category: category?.label,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: product.currency,
      lowPrice: product.priceFrom,
      offers: product.stores.map((s) => ({
        "@type": "Offer",
        url: s.url,
        name: s.name,
        price: s.price,
        priceCurrency: s.currency ?? product.currency,
      })),
    },
    image: product.images[0],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Catálogo",
        item: `${SITE_URL}/#catalogo`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${SITE_URL}/producto/${product.slug}`,
      },
    ],
  };

  return (
    <article className="pt-24 pb-20 lg:pt-28">
      <TrackView slug={product.slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <nav className="mb-8 flex items-center gap-2 font-mono text-xs text-ink-faint">
          <Link href="/" className="transition-colors hover:text-brand">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/#catalogo" className="transition-colors hover:text-brand">
            Catálogo
          </Link>
          <span>/</span>
          <span className="text-ink-muted">{product.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ProductGallery images={product.images} name={product.name} />

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg bg-elevated px-3 py-1 font-mono text-xs text-ink-muted">
                {category?.icon} {category?.label}
              </span>
              {product.featured && (
                <span className="rounded-lg bg-gold/10 px-3 py-1 font-mono text-xs text-gold">
                  ★ Destacado
                </span>
              )}
              {product.editorPick && (
                <span className="rounded-lg bg-brand/10 px-3 py-1 font-mono text-xs text-brand">
                  Pick del editor
                </span>
              )}
            </div>

            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>
            <p className="mt-3 text-xl text-brand">{product.tagline}</p>

            <div className="mt-6 rounded-2xl border border-brand/20 bg-brand/5 p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-brand">
                Nuestro veredicto
              </p>
              <p className="mt-2 text-ink leading-relaxed">{product.verdict}</p>
            </div>

            <p className="mt-6 leading-relaxed text-ink-muted">
              {product.description}
            </p>

            {product.extraInfo.length > 0 && (
              <div className="mt-8">
                <h2 className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                  Detalles clave
                </h2>
                <ul className="mt-4 space-y-3">
                  {product.extraInfo.map((info) => (
                    <li
                      key={info}
                      className="flex items-start gap-3 text-sm text-ink-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {info}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-border px-3 py-1 font-mono text-xs text-ink-faint"
                >
                  #{tag}
                </span>
              ))}
              <ShareButton name={product.name} slug={product.slug} />
            </div>

            <div className="mt-10">
              <h2 className="font-display text-xl font-bold">
                Dónde comprarlo
              </h2>
              <p className="mt-1 text-sm text-ink-muted">
                Enlaces directos a tiendas reales. Desde{" "}
                <span className="font-mono text-brand">{formatPrice(product.priceFrom, product.currency)}</span>
              </p>
              <div className="mt-4">
                <StoreLinks stores={product.stores} />
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20 border-t border-border-subtle pt-16">
            <h2 className="font-display text-2xl font-bold">
              Más en {category?.label}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
