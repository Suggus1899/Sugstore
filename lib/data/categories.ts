import type { CategoryMeta } from "@/lib/types/product";

export const categories: CategoryMeta[] = [
  {
    id: "all",
    label: "Todos",
    icon: "◈",
    description: "Todo el catálogo curado",
    color: "from-stone-400 to-stone-500",
  },
  {
    id: "setup",
    label: "Setup",
    icon: "⌨",
    description: "Teclados, monitores y ergonomía",
    color: "from-violet-400 to-purple-500",
  },
  {
    id: "hardware",
    label: "Hardware",
    icon: "⬡",
    description: "Laptops, hubs y gadgets",
    color: "from-sky-400 to-blue-500",
  },
  {
    id: "books",
    label: "Libros",
    icon: "📖",
    description: "Lecturas esenciales para devs",
    color: "from-amber-400 to-orange-500",
  },
  {
    id: "audio",
    label: "Audio",
    icon: "🎧",
    description: "Focus, calls y cancelación",
    color: "from-rose-400 to-pink-500",
  },
  {
    id: "productivity",
    label: "Productividad",
    icon: "⚡",
    description: "Herramientas que aceleran tu flujo",
    color: "from-emerald-400 to-teal-500",
  },
];
