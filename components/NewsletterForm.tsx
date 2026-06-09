"use client";

export function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-2xl border border-border bg-surface p-5"
    >
      <h3 className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
        Newsletter
      </h3>
      <p className="mt-2 text-sm text-ink-muted">
        Recibe novedades cuando añadamos nuevos productos.
      </p>
      <div className="mt-3 flex gap-2">
        <input
          type="email"
          required
          placeholder="tu@email.com"
          aria-label="Email para newsletter"
          className="flex-1 rounded-xl border border-border bg-elevated px-3 py-2 font-mono text-sm text-ink placeholder-ink-faint outline-none transition-all focus:border-brand/40"
        />
        <button
          type="submit"
          className="rounded-xl bg-brand px-4 py-2 font-mono text-sm font-medium text-white transition-all hover:bg-brand-soft"
        >
          Suscribir
        </button>
      </div>
      <p className="mt-2 font-mono text-[9px] text-ink-faint">
        Sin spam. Solo productos nuevos.
      </p>
    </form>
  );
}
