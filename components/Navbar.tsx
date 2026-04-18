"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="w-full border-b-4 border-blue-700 bg-white dark:bg-slate-900">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{minHeight: "96px"}}>

        {/* IZQUIERDA: LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/serviclimas-logo2.png"
            alt="Serviclimas"
            width={400}
            height={120}
            className="w-auto object-contain mix-blend-multiply dark:mix-blend-screen"
            style={{height: "90px"}}
            priority
          />
          <span className="hidden md:block text-sm text-slate-600 dark:text-slate-300">
            Serviclima Heating &amp; Cooling SRL
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
