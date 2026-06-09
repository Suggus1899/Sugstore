import {
  amazonUrl,
  pccomponentesUrl,
  elCorteInglesUrl,
} from "../config/affiliate";
import type { Product, CategoryMeta } from "../types/product";
import { categories } from "./categories";

export const products: Product[] = [
  {
    slug: "keychron-k2",
    name: "Keychron K2",
    tagline: "El teclado mecánico que convence a los escépticos",
    description:
      "Teclado mecánico compacto 75% con switches intercambiables, conectividad Bluetooth y USB-C. Perfecto para quien escribe código horas seguidas sin sacrificar portabilidad ni estética.",
    verdict:
      "Nuestro teclado de referencia para developers. El equilibrio perfecto entre tamaño, sonido y versatilidad Mac/Windows.",
    extraInfo: [
      "Layout 75% — compacto pero con flechas y teclas de función",
      "Compatible Mac/Windows con interruptor lateral",
      "Hot-swappable: cambia switches sin soldar",
      "Batería de hasta 240h con retroiluminación apagada",
    ],
    category: "setup",
    priceFrom: 89,
    currency: "EUR",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1200&q=85",
      "https://images.unsplash.com/photo-1511467687858-23d96c271e3e?w=1200&q=85",
    ],
    featured: true,
    editorPick: true,
    tags: ["mecánico", "wireless", "ergonomía"],
    stores: [
      {
        id: "amazon",
        name: "Amazon España",
        url: amazonUrl("B08B5WHY4K"),
        price: 89,
        affiliate: true,
        recommended: true,
      },
      {
        id: "keychron",
        name: "Keychron (oficial)",
        url: "https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard",
        price: 99,
        currency: "USD",
        affiliate: false,
      },
      {
        id: "pccomponentes",
        name: "PCComponentes",
        url: pccomponentesUrl("teclados/teclado-mecanico-keychron-k2-aluminio-blanco-rgb-switch-gateron-g-pro-red"),
        affiliate: false,
      },
    ],
  },
  {
    slug: "lg-ultrafine-4k",
    name: 'LG UltraFine 4K 27"',
    tagline: "El monitor que Apple no quiso seguir haciendo",
    description:
      "Monitor 4K IPS de 27 pulgadas con Thunderbolt 3, 99% P3 y altura ajustable. Si trabajas con Mac, es la referencia en calidad de imagen y simplicidad de cableado.",
    verdict:
      "Si tienes Mac y presupuesto, este monitor elimina el caos de cables y entrega color preciso para diseño y código.",
    extraInfo: [
      "Resolución 3840×2160 — ideal para código y diseño",
      "Un solo cable Thunderbolt para video, datos y carga",
      "Altavoces integrados y cámara FaceTime HD",
      "Compatible con macOS y Windows vía USB-C",
    ],
    category: "setup",
    priceFrom: 550,
    currency: "EUR",
    images: [
      "https://images.unsplash.com/photo-1527443220154-c4a3942d3acf?w=1200&q=85",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=1200&q=85",
    ],
    featured: true,
    tags: ["4K", "Thunderbolt", "Mac"],
    stores: [
      {
        id: "amazon",
        name: "Amazon España",
        url: amazonUrl("B07HHQ2L9K"),
        price: 550,
        affiliate: true,
        recommended: true,
      },
      {
        id: "pccomponentes",
        name: "PCComponentes",
        url: pccomponentesUrl("monitores/monitor-lg-27un880-b-ultrafine-27-4k-ips-hdr10"),
        affiliate: false,
      },
    ],
  },
  {
    slug: "herman-miller-aeron",
    name: "Herman Miller Aeron",
    tagline: "Invierte en tu espalda, no en otra silla barata",
    description:
      "La silla ergonómica de referencia en la industria tech. Ajuste PostureFit SL, malla transpirable y garantía de 12 años. Tu columna te lo agradecerá después del décimo sprint.",
    verdict:
      "Cara, sí. Pero amortizable en salud. La mayoría de seniors con 10+ años de carrera la tienen o la desean.",
    extraInfo: [
      "Tres tamaños (A/B/C) — elige según tu altura",
      "Malla Pellicle que distribuye la presión uniformemente",
      "Reposabrazos 4D completamente ajustables",
      "Certificación Cradle to Cradle y 12 años de garantía",
    ],
    category: "setup",
    priceFrom: 1200,
    currency: "EUR",
    images: [
      "https://images.unsplash.com/photo-1580480051063-87d3b6d85654?w=1200&q=85",
    ],
    featured: false,
    tags: ["ergonomía", "premium", "home office"],
    stores: [
      {
        id: "amazon",
        name: "Amazon España",
        url: amazonUrl("B000PSD8LK"),
        price: 1200,
        affiliate: true,
      },
      {
        id: "herman-miller",
        name: "Herman Miller (oficial)",
        url: "https://www.hermanmiller.com/products/seating/office-chairs/aeron-chairs/",
        price: 1395,
        currency: "USD",
        affiliate: false,
        recommended: true,
      },
    ],
  },
  {
    slug: "macbook-pro-m3",
    name: 'MacBook Pro 14" M3',
    tagline: "Silencioso, potente, y dura todo el día",
    description:
      "El portátil que la mayoría de developers eligen cuando el presupuesto lo permite. Chip M3 con 18h de batería, pantalla Liquid Retina XDR y un trackpad que sigue siendo imbatible.",
    verdict:
      "El estándar de facto en startups y big tech. Docker, IDE y 40 tabs sin sudar — literalmente.",
    extraInfo: [
      "18GB RAM unificada — suficiente para Docker + IDE + browser",
      "512GB SSD — ampliable con almacenamiento externo",
      "Tres puertos Thunderbolt 4 + HDMI + SD",
      "Ventiladores casi inaudibles en carga normal de desarrollo",
    ],
    category: "hardware",
    priceFrom: 1899,
    currency: "EUR",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=85",
      "https://images.unsplash.com/photo-1611186874728-180b57fe1d41?w=1200&q=85",
    ],
    featured: true,
    editorPick: true,
    tags: ["Apple", "M3", "portátil"],
    stores: [
      {
        id: "apple",
        name: "Apple Store",
        url: "https://www.apple.com/es/shop/buy-mac/macbook-pro/14-pulgadas",
        price: 1899,
        affiliate: false,
        recommended: true,
      },
      {
        id: "amazon",
        name: "Amazon España",
        url: amazonUrl("B0CM5J8X9M"),
        price: 1849,
        affiliate: true,
      },
      {
        id: "pccomponentes",
        name: "PCComponentes",
        url: pccomponentesUrl("portatiles/macbook-pro-14-m3-pro-18-gb-512-gb-ssd-espacio-gris-oscuro"),
        affiliate: false,
      },
      {
        id: "el-corte-ingles",
        name: "El Corte Inglés",
        url: elCorteInglesUrl("electronica/informatica/portatiles/apple-macbook-pro-14-m3-2023.html"),
        affiliate: false,
      },
    ],
  },
  {
    slug: "caldigit-ts4",
    name: "CalDigit TS4 Thunderbolt 4 Hub",
    tagline: "Un cable, dieciocho puertos",
    description:
      "El hub Thunderbolt 4 definitivo para developers con setup de un solo cable. 18 puertos incluyendo 2.5GbE, SD UHS-II, DisplayPort y 98W de carga para tu laptop.",
    verdict:
      "Termina con el dongle-hell. Un solo cable desde el Mac y tienes todo el escritorio conectado.",
    extraInfo: [
      "18 puertos en un solo dispositivo compacto",
      "Carga de hasta 98W para MacBook Pro",
      "Ethernet 2.5GbE integrado",
      "Compatible con Mac, Windows y ChromeOS",
    ],
    category: "hardware",
    priceFrom: 399,
    currency: "EUR",
    images: [
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=1200&q=85",
    ],
    featured: false,
    tags: ["Thunderbolt", "dock", "setup"],
    stores: [
      {
        id: "amazon",
        name: "Amazon España",
        url: amazonUrl("B09N3M9L6K"),
        price: 399,
        affiliate: true,
        recommended: true,
      },
      {
        id: "caldigit",
        name: "CalDigit (oficial)",
        url: "https://www.caldigit.com/thunderbolt-station-4/",
        price: 399,
        currency: "USD",
        affiliate: false,
      },
    ],
  },
  {
    slug: "clean-code",
    name: "Clean Code — Robert C. Martin",
    tagline: "El libro que deberías haber leído antes del primer PR",
    description:
      "Guía fundamental sobre cómo escribir código legible, mantenible y profesional. No es sobre un lenguaje concreto — es sobre la mentalidad que separa a un programador de un craftsperson.",
    verdict:
      "Polarizante para algunos, esencial para otros. Si solo lees un libro de craft, que sea este.",
    extraInfo: [
      "Capítulos sobre naming, funciones, clases y tests",
      "Ejemplos en Java pero aplicables a cualquier lenguaje",
      "Ideal para juniors y como refresco para seniors",
      "Edición en inglés y español disponible",
    ],
    category: "books",
    priceFrom: 35,
    currency: "EUR",
    images: [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&q=85",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200&q=85",
    ],
    featured: true,
    tags: ["clásico", "craft", "best practices"],
    stores: [
      {
        id: "amazon",
        name: "Amazon España",
        url: amazonUrl("0132350882"),
        price: 35,
        affiliate: true,
        recommended: true,
      },
      {
        id: "el-corte-ingles",
        name: "El Corte Inglés",
        url: elCorteInglesUrl("libros/libros-de-informatica/clean-code.html"),
        affiliate: false,
      },
    ],
  },
  {
    slug: "designing-data-intensive",
    name: "Designing Data-Intensive Applications",
    tagline: "La biblia de sistemas distribuidos",
    description:
      "Martin Kleppmann desglosa bases de datos, streaming, consistencia y escalabilidad con una claridad excepcional. Si trabajas con backend o infra, este libro cambia cómo piensas sobre los sistemas.",
    verdict:
      "El libro que más devs backend recomiendan cuando les preguntas '¿qué debería leer?'",
    extraInfo: [
      "Cubre SQL, NoSQL, message queues y consenso",
      "Sin vendor lock-in — conceptos atemporales",
      "Usado como referencia en entrevistas de big tech",
      "Más de 500 páginas de contenido denso y práctico",
    ],
    category: "books",
    priceFrom: 45,
    currency: "EUR",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85",
    ],
    featured: false,
    tags: ["backend", "arquitectura", "sistemas"],
    stores: [
      {
        id: "amazon",
        name: "Amazon España",
        url: amazonUrl("1449373321"),
        price: 45,
        affiliate: true,
        recommended: true,
      },
      {
        id: "oreilly",
        name: "O'Reilly",
        url: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/",
        price: 49,
        currency: "USD",
        affiliate: false,
      },
    ],
  },
  {
    slug: "pragmatic-programmer",
    name: "The Pragmatic Programmer",
    tagline: "20th Anniversary Edition — sigue siendo oro",
    description:
      "Actualizado para 2024, este clásico enseña a pensar como programador pragmático: DRY, tracer bullets, rubber duck debugging y docenas de tips que aplicarás desde el día uno.",
    verdict:
      "Menos dogmático que Clean Code, más orientado a carrera. Perfecto complemento.",
    extraInfo: [
      "Edición 20 aniversario con capítulos nuevos",
      "Tips accionables, no teoría abstracta",
      "Perfecto regalo para developers en formación",
      "Referencia constante en mesa de trabajo",
    ],
    category: "books",
    priceFrom: 40,
    currency: "EUR",
    images: [
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=85",
    ],
    featured: false,
    tags: ["carrera", "mindset", "clásico"],
    stores: [
      {
        id: "amazon",
        name: "Amazon España",
        url: amazonUrl("0135957052"),
        price: 40,
        affiliate: true,
        recommended: true,
      },
    ],
  },
  {
    slug: "sony-wh1000xm5",
    name: "Sony WH-1000XM5",
    tagline: "Silencio absoluto para deep work",
    description:
      "Los auriculares con la mejor cancelación de ruido del mercado. Multipoint Bluetooth, 30h de batería y comodidad para sesiones de coding de 8 horas sin fatiga.",
    verdict:
      "Open office, café ruidoso o casa con niños — estos auriculares crean tu burbuja de focus.",
    extraInfo: [
      "Cancelación de ruido líder con procesador V1",
      "Multipoint: conecta laptop y móvil a la vez",
      "Speak-to-chat pausa la música automáticamente",
      "Estuche rígido incluido — perfecto para viajes",
    ],
    category: "audio",
    priceFrom: 349,
    currency: "EUR",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1200&q=85",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&q=85",
    ],
    featured: true,
    tags: ["ANC", "focus", "bluetooth"],
    stores: [
      {
        id: "amazon",
        name: "Amazon España",
        url: amazonUrl("B09XS7JWHH"),
        price: 349,
        affiliate: true,
        recommended: true,
      },
      {
        id: "sony",
        name: "Sony (oficial)",
        url: "https://www.sony.es/electronics/headband-headphones/wh-1000xm5",
        price: 399,
        affiliate: false,
      },
      {
        id: "pccomponentes",
        name: "PCComponentes",
        url: pccomponentesUrl("auriculares/auriculares-sony-wh-1000xm5-inalambricos-cancelacion-ruido-negro"),
        affiliate: false,
      },
      {
        id: "el-corte-ingles",
        name: "El Corte Inglés",
        url: elCorteInglesUrl("electronica/auriculares/auriculares-sony-wh-1000xm5.html"),
        affiliate: false,
      },
    ],
  },
  {
    slug: "elgato-wave-3",
    name: "Elgato Wave:3",
    tagline: "Tu voz en stand-ups nunca sonó tan bien",
    description:
      "Micrófono USB condensador con Clipguard anti-distorsión y software Wave Link para mezclar fuentes de audio. Ideal para pair programming, streams y reuniones remotas.",
    verdict:
      "Calidad broadcast sin la complejidad de un XLR. Plug & play para remote devs.",
    extraInfo: [
      "Capsule condensador de 17mm — calidad broadcast",
      "Clipguard integrado previene picos de audio",
      "Wave Link: mezcla mic + audio del sistema",
      "Soporte de escritorio incluido, montaje boom opcional",
    ],
    category: "audio",
    priceFrom: 149,
    currency: "EUR",
    images: [
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1200&q=85",
    ],
    featured: false,
    tags: ["micro", "streaming", "remote"],
    stores: [
      {
        id: "amazon",
        name: "Amazon España",
        url: amazonUrl("B088HH6NKL"),
        price: 149,
        affiliate: true,
        recommended: true,
      },
      {
        id: "elgato",
        name: "Elgato (oficial)",
        url: "https://www.elgato.com/es/p/wave3",
        price: 159,
        affiliate: false,
      },
    ],
  },
  {
    slug: "logitech-mx-master-3s",
    name: "Logitech MX Master 3S",
    tagline: "El ratón que tus dedos memorizan en un día",
    description:
      "Ratón ergonómico con scroll MagSpeed silencioso, 8K DPI y botones personalizables por app. El compañero perfecto del teclado mecánico en cualquier setup de developer.",
    verdict:
      "El scroll infinito solo ya justifica la compra. Añade Flow entre máquinas y es imbatible.",
    extraInfo: [
      "Scroll electromagnético — 1000 líneas/segundo",
      "Flow: controla hasta 3 equipos con un ratón",
      "Batería de 70 días, carga USB-C rápida",
      "Silencioso: 90% menos ruido de click que MX Master 3",
    ],
    category: "productivity",
    priceFrom: 99,
    currency: "EUR",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=1200&q=85",
    ],
    featured: true,
    tags: ["ratón", "ergonomía", "Logitech"],
    stores: [
      {
        id: "amazon",
        name: "Amazon España",
        url: amazonUrl("B09HM94VDS"),
        price: 99,
        affiliate: true,
        recommended: true,
      },
      {
        id: "logitech",
        name: "Logitech (oficial)",
        url: "https://www.logitech.com/es-es/products/mice/mx-master-3s.html",
        price: 109,
        affiliate: false,
      },
      {
        id: "pccomponentes",
        name: "PCComponentes",
        url: pccomponentesUrl("ratones/raton-logitech-mx-master-3s-inalambrico-negro"),
        affiliate: false,
      },
      {
        id: "el-corte-ingles",
        name: "El Corte Inglés",
        url: elCorteInglesUrl("electronica/informatica/ratones/logitech-mx-master-3s.html"),
        affiliate: false,
      },
    ],
  },
  {
    slug: "remarkable-2",
    name: "reMarkable 2",
    tagline: "Papel digital para diagramas y notas de arquitectura",
    description:
      "Tablet de tinta electrónica para tomar notas, dibujar diagramas de sistema y revisar documentos sin distracciones. Cero notificaciones, cero redes sociales — solo tu pluma y tus ideas.",
    verdict:
      "Para system design en whiteboard y notas de arquitectura, nada se acerca a la sensación de papel.",
    extraInfo: [
      "Pantalla Canvas con latencia de 21ms — sensación de papel",
      "Sincroniza notas con Google Drive, Dropbox y OneDrive",
      "Batería de semanas de duración",
      "Ideal para system design en whiteboard sessions",
    ],
    category: "productivity",
    priceFrom: 399,
    currency: "EUR",
    images: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=85",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=85",
    ],
    featured: false,
    tags: ["notas", "focus", "diagramas"],
    stores: [
      {
        id: "amazon",
        name: "Amazon España",
        url: amazonUrl("B08J4CWHY7"),
        price: 399,
        affiliate: true,
      },
      {
        id: "remarkable",
        name: "reMarkable (oficial)",
        url: "https://remarkable.com/products/remarkable-2",
        price: 399,
        affiliate: false,
        recommended: true,
      },
    ],
  },
];

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getEditorPicks(): Product[] {
  return products.filter((p) => p.editorPick);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryMeta(id: string): CategoryMeta | undefined {
  return categories.find((c) => c.id === id);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}
