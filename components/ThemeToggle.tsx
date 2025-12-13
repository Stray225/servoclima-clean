"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("theme");
    const initial = stored === "dark"; 

    setIsDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;

      document.documentElement.classList.toggle("dark", next);
      window.localStorage.setItem("theme", next ? "dark" : "light");

      return next;
    });
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Cambiar modo de color"
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-100 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
    >
      <span className="text-lg">{isDark ? "🌙" : "☀️"}</span>
      <span className="hidden sm:inline">
        {isDark ? "Modo oscuro" : "Modo claro"}
      </span>
    </button>
  );
}
