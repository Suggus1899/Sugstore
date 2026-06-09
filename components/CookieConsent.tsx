"use client";

import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "sugstore_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    setLeaving(true);
    setTimeout(() => {
      localStorage.setItem(COOKIE_CONSENT_KEY, "true");
      setVisible(false);
    }, 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-[60] border-t border-border bg-surface/95 backdrop-blur-xl p-4 transition-all duration-300 ${
        leaving ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <p className="text-sm text-ink-muted">
          Usamos enlaces de afiliado y almacenamiento local para mejorar tu
          experiencia. Al continuar, aceptas nuestra política.
        </p>
        <button
          onClick={accept}
          className="shrink-0 rounded-xl bg-brand px-5 py-2 font-mono text-sm font-medium text-white transition-all hover:bg-brand-soft"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
