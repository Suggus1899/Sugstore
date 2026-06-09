"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/#destacados", label: "Destacados" },
  { href: "/#catalogo", label: "Catálogo" },
  { href: "/#como-funciona", label: "Cómo funciona" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/?q=${encodeURIComponent(query)}#catalogo`);
    }
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-canvas/80 backdrop-blur-2xl border-b border-border-subtle shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Ir al inicio">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 font-display text-lg font-bold text-brand transition-all group-hover:bg-brand group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand/25">
            S
          </span>
          <div>
            <span className="font-display text-lg font-bold tracking-tight">
              Sugstore
            </span>
            <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-ink-faint">
              curated dev gear
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Navegación principal">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm text-ink-muted transition-colors hover:bg-surface hover:text-ink"
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {searchOpen ? (
            <form onSubmit={handleSearch} role="search" className="flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar..."
                aria-label="Buscar productos"
                className="w-40 rounded-xl border border-border bg-surface py-1.5 pl-3 pr-2 font-mono text-sm text-ink placeholder-ink-faint outline-none transition-all focus:border-brand/40 focus-visible:ring-2 focus-visible:ring-brand/50"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="ml-1 rounded-lg p-1.5 text-ink-faint hover:text-ink transition-colors"
                aria-label="Cerrar búsqueda"
              >
                <span aria-hidden="true">✕</span>
              </button>
            </form>
          ) : (
            <>
              <button
                onClick={() => setSearchOpen(true)}
                className="rounded-lg p-2 text-ink-muted transition-colors hover:bg-surface hover:text-ink sm:hidden"
                aria-label="Abrir búsqueda"
              >
                <span aria-hidden="true">🔍</span>
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="rounded-lg p-2 text-ink-muted transition-colors hover:bg-surface hover:text-ink sm:hidden"
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
              >
                <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
              </button>

              <Link
                href="/#catalogo"
                className="hidden rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-soft hover:shadow-lg hover:shadow-brand/20 sm:inline-flex"
              >
                Explorar
              </Link>
              <ThemeToggle />
            </>
          )}
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-border-subtle bg-canvas/95 backdrop-blur-2xl sm:hidden"
          aria-label="Navegación móvil"
        >
          <div className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-ink-muted transition-colors hover:bg-surface hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#catalogo"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-xl bg-brand px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Explorar
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
