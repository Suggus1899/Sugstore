export function formatPrice(
  amount: number,
  currency = "EUR",
  locale = "es-ES"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function parsePriceInput(value: string): number {
  return parseFloat(value.replace(/[€$]/g, "").replace(/\./g, "").replace(",", ".")) || 0;
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sugstore.vercel.app";

export const blurPlaceholder =
  "data:image/svg+xml;base64," +
  btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><filter id="b"><feGaussianBlur stdDeviation="20"/></filter></defs><rect width="100%" height="100%" fill="#14161f" filter="url(#b)"/></svg>`
  );
