"use client";

import Image from "next/image";
import Link from "next/link";

export default function NavbarPremium() {
  return (
    <header className="w-full sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-900/90">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/serviclima-logo.png"
            alt="Serviclima"
            width={140}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* NAV CENTRAL */}
        <div className="hidden md:flex items-center gap-7">
          {[
            { href: "#servicios", label: "Servicios" },
            { href: "#proyectos", label: "Proyectos" },
            { href: "#mantenimiento", label: "Mantenimiento" },
            { href: "#faq", label: "FAQ" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* DERECHA */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center">
            <Image
              src="/surrey-agente-navbar.png"
              alt="Agente Oficial Surrey"
              width={100}
              height={46}
              className="object-contain opacity-90"
            />
          </div>
          <a
            href="#cotizacion"
            className="hidden sm:inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
          >
            Consulta técnica
          </a>
        </div>

      </nav>
    </header>
  );
}
