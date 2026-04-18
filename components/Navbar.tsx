"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Sectores", href: "#sectores" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#cotizacion" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ minHeight: scrolled ? "68px" : "84px", transition: "min-height 0.3s" }}>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Serviclima - Inicio">
          <div className={`transition-all duration-300 ${scrolled ? "bg-transparent" : "bg-white rounded-xl px-3 py-2 shadow-md"}`}>
            <Image
              src="/serviclimas-logo-trimmed.png"
              alt="Serviclimas"
              width={300}
              height={90}
              className={`w-auto object-contain ${scrolled ? "mix-blend-multiply" : ""}`}
              style={{ height: scrolled ? "44px" : "56px", transition: "height 0.3s" }}
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                scrolled
                  ? "text-slate-700 hover:text-blue-700 hover:bg-blue-50"
                  : "text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm"
              }`}
            >
              {n.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">

          {/* Surrey badge - only when scrolled to avoid competing with hero */}
          <div className={`hidden md:flex items-center transition-opacity duration-300 ${scrolled ? "opacity-80" : "opacity-0 pointer-events-none"}`}>
            <Image
              src="/surrey-agente-navbar.png"
              alt="Agente Oficial Surrey"
              width={90}
              height={40}
              className="object-contain"
            />
          </div>

          {/* CTA */}
          <a
            href="#cotizacion"
            className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
              scrolled
                ? "bg-slate-900 text-white hover:bg-slate-800 shadow-sm"
                : "bg-white text-slate-900 hover:bg-blue-50 shadow-xl"
            }`}
          >
            Cotizar
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>

          {/* Mobile menu */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
            className={`lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              scrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-t border-slate-200" : "max-h-0"
        } bg-white`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#cotizacion"
            onClick={() => setOpen(false)}
            className="mt-2 bg-slate-900 text-white px-3 py-3 rounded-lg text-sm font-semibold text-center"
          >
            Solicitar cotización
          </a>
        </div>
      </div>
    </header>
  );
}
