"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="w-full border-b-4 border-blue-700 bg-white/95 dark:bg-slate-900/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/80">
      <nav className="max-w-7xl mx-auto px-6 py-0 flex items-stretch justify-between">

        {/* IZQUIERDA: LOGO */}
        <Link href="/" className="flex items-stretch">
          <Image
            src="/serviclimas-logo2.png"
            alt="Serviclimas"
            width={340}
            height={96}
            className="h-24 w-auto object-contain mix-blend-multiply dark:mix-blend-screen"
            priority
          />
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
