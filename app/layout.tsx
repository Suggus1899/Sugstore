import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CookieConsent } from "@/components/CookieConsent";
import { SITE_URL } from "@/lib/utils";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sugstore — Gear curado para developers",
    template: "%s | Sugstore",
  },
  description:
    "Productos que todo developer debería conocer. Curación independiente con enlaces a tiendas reales.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sugstore — Gear curado para developers",
    description: "Curación independiente de productos para developers.",
    type: "website",
    locale: "es_ES",
    siteName: "Sugstore",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sugstore — Gear curado para developers",
    description: "Curación independiente de productos para developers.",
  },
  other: {
    "theme-color": "#08090c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sugstore",
    url: SITE_URL,
    description:
      "Curación independiente de productos para developers. Enlaces reales a tiendas, sin inventario.",
    knowsAbout: ["Software Development", "Developer Tools", "Tech Gear"],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sugstore",
    url: SITE_URL,
  };

  return (
    <html
      lang="es"
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <a
            href="#main-content"
            className="fixed left-4 -top-20 z-[100] rounded-xl bg-brand px-4 py-2 font-mono text-sm text-white transition-all focus:top-4"
          >
            Saltar al contenido
          </a>
          <div className="noise-overlay fixed inset-0 pointer-events-none z-50" />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <ScrollToTop />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
