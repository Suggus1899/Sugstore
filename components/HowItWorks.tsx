const steps = [
  {
    step: "01",
    title: "Curamos con criterio",
    description:
      "Seleccionamos productos que usamos o que la comunidad dev recomienda de verdad. Sin pagos por posición.",
  },
  {
    step: "02",
    title: "Enlaces a tiendas reales",
    description:
      "Cada producto enlaza a Amazon, Apple Store o la web oficial del fabricante. Compras donde siempre lo has hecho.",
  },
  {
    step: "03",
    title: "Afiliados transparentes",
    description:
      "Los enlaces de Amazon llevan nuestro código de referido. Ganas el mismo precio; nosotros una pequeña comisión.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-t border-border-subtle bg-canvas-subtle py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            Modelo
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            ¿Cómo funciona Sugstore?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Una tienda online sin tienda. Te ayudamos a descubrir el gear
            correcto y te llevamos directo a donde comprarlo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((item, i) => (
            <div
              key={item.step}
              className={`animate-rise delay-${i + 1} rounded-2xl border border-border bg-surface p-8 transition-all hover:border-brand/20 hover:shadow-lg hover:shadow-brand/5`}
            >
              <span className="font-display text-4xl font-bold text-brand/30">
                {item.step}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
