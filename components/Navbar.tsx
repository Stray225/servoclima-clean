"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/80">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* IZQUIERDA: LOGO + TEXTO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/serviclima-logo.png"
            alt="Serviclima"
            width={140}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />

          <span className="hidden md:block text-sm text-slate-600 dark:text-slate-300">
            Serviclima Heating & Cooling SRL
          </span>
        </Link>

        {/* DERECHA: SURREY + TOGGLE */}
        <div className="flex items-center gap-4">

          {/* SELLO AGENTE OFICIAL */}
          <div className="hidden sm:flex items-center">
            <Image
              src="/surrey-agente-navbar.png"
              alt="Agente Oficial Surrey"
              width={110}
              height={50}
              className="object-contain opacity-90"
            />

          </div>

          {/* MODO CLARO / OSCURO */}
          <ThemeToggle />
        </div>

      </nav>
    </header>
  );
}
