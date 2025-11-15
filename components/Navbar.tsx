"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/80">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO + SUBTÍTULO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/serviclima-logo.png"  //
            alt="Serviclima"
            width={140}
            height={40}
            className="w-auto h-10 object-contain"
          />

          <span className="text-sm text-slate-600 dark:text-slate-300 hidden md:block">
            Climatización • Ingeniería • Mantenimiento
          </span>
        </Link>

        {/* Toggle de tema a la derecha */}
        <ThemeToggle />
      </nav>
    </header>
  );
}
