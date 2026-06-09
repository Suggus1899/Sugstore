export type Category =
  | "setup"
  | "hardware"
  | "books"
  | "audio"
  | "productivity";

export type StoreId =
  | "amazon"
  | "apple"
  | "keychron"
  | "logitech"
  | "sony"
  | "elgato"
  | "remarkable"
  | "herman-miller"
  | "caldigit"
  | "oreilly"
  | "pccomponentes"
  | "el-corte-ingles";

export interface StoreLink {
  id: StoreId;
  name: string;
  url: string;
  price?: number;
  currency?: string;
  affiliate: boolean;
  recommended?: boolean;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  verdict: string;
  extraInfo: string[];
  category: Category;
  priceFrom: number;
  currency: string;
  images: string[];
  featured: boolean;
  editorPick?: boolean;
  tags: string[];
  stores: StoreLink[];
}

export interface CategoryMeta {
  id: Category | "all";
  label: string;
  icon: string;
  description: string;
  color: string;
}
