"use client";

import Image from "next/image";
import Link from "next/link";

export default function NavbarPremium() {
  return (
    <header className="w-full sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-white/10 supports-[backdrop-filter]:bg-slate-950/80">
      <nav className="max-w-7xl mx-auto px-6 py-0 flex items-center justify-between h-16">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/serviclima-logo.png"
            alt="Serviclima"
            width={190}
            height={56}
            className="h-12 w-auto object-contain brightness-200"
            priority
          />
          <div className="hidden lg:block w-px h-6 bg-white/20" />
          <span className="hidden lg:block text-xs text-slate-400 tracking-wide">
            Heating & Cooling S.R.L.
          </span>
        </Link>

        {/* NAV */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { href: "#servicios", label: "Servicios" },
            { href: "#proceso", label: "Metodología" },
            { href: "#clientes", label: "Clientes" },
            { href: "#faq", label: "FAQ" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-400 hover:text-white transition font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* DERECHA */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Image
              src="/surrey-agente-navbar.png"
              alt="Agente Oficial Surrey"
              width={90}
              height={40}
              className="object-contain brightness-200 opacity-60"
            />
          </div>
          <a
            href="#cotizacion"
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-5 py-2 rounded-lg transition text-sm"
          >
            Agendar evaluación
          </a>
        </div>

      </nav>
    </header>
  );
}
