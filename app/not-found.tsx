import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-6xl font-bold text-brand/30">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold">
        Producto no encontrado
      </h1>
      <p className="mt-2 text-ink-muted">
        Este producto no existe en nuestro catálogo.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-soft"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
