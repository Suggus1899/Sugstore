import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";

const navLinks = [
  { href: "/#destacados", label: "Destacados" },
  { href: "/#catalogo", label: "Catálogo" },
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/favoritos", label: "Favoritos" },
  { href: "/comparar", label: "Comparar" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-canvas-subtle">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 font-display text-sm font-bold text-brand">
                S
              </span>
              <span className="font-display text-lg font-bold">Sugstore</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              Curación independiente de productos para developers. Sin inventario,
              sin checkout — solo recomendaciones honestas.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                Transparencia
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Los enlaces marcados como afiliado (Amazon, etc.) generan una
                pequeña comisión sin coste extra para ti. Las tiendas oficiales no
                son afiliadas. Nuestras recomendaciones no dependen de esto.
              </p>
            </div>

            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 sm:flex-row">
          <p className="font-mono text-xs text-ink-faint">
            © {new Date().getFullYear()} Sugstore
          </p>
          <p className="font-mono text-xs text-ink-faint">
            Hecho con ☕ para developers
          </p>
        </div>
      </div>
    </footer>
  );
}
