export const AMAZON_AFFILIATE_TAG =
  process.env.NEXT_PUBLIC_AMAZON_TAG ?? "sugstore-21";

export function amazonUrl(asin: string): string {
  return `https://www.amazon.es/dp/${asin}?tag=${AMAZON_AFFILIATE_TAG}`;
}

export function pccomponentesUrl(slug: string): string {
  return `https://www.pccomponentes.com/${slug}`;
}

export function elCorteInglesUrl(slug: string): string {
  return `https://www.elcorteingles.es/${slug}`;
}
