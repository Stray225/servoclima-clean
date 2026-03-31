"use client";

import Image from "next/image";
import Link from "next/link";

export default function NavbarPremium() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/serviclima-logo.png"
            alt="Serviclima"
            width={160}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
          <span className="hidden lg:block text-sm text-slate-500 border-l border-slate-200 pl-3">
            Heating &amp; Cooling S.R.L.
          </span>
        </Link>

        {/* NAV */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { href: "#servicios", label: "Servicios" },
            { href: "#proceso", label: "Metodología" },
            { href: "#clientes", label: "Clientes" },
            { href: "#faq", label: "Preguntas" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-600 hover:text-blue-700 transition font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* DERECHA */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <Image
              src="/surrey-agente-navbar.png"
              alt="Agente Oficial Surrey"
              width={90}
              height={40}
              className="object-contain opacity-70"
            />
          </div>
          <a
            href="#cotizacion"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-lg transition text-sm"
          >
            Solicitar cotización
          </a>
        </div>

      </nav>
    </header>
  );
}
