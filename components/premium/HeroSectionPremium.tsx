"use client";

import HeroSlider from "@/components/HeroSlider";

const WHATS = "5491123579760";

export default function HeroSectionPremium() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Línea corporativa · Industrial · Edificios comerciales
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Climatización de{" "}
            <span className="text-blue-400">alto rendimiento</span>{" "}
            para empresas que no se detienen
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
            Diseñamos, instalamos y mantenemos sistemas de climatización
            para entornos corporativos, industriales y edificios comerciales.
            Continuidad operativa garantizada.
          </p>

          {/* Badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["Agente oficial Surrey", "+15 años de experiencia", "Cobertura CABA y GBA"].map((b) => (
              <span
                key={b}
                className="bg-white/10 border border-white/20 text-white/80 text-xs px-3 py-1.5 rounded-full"
              >
                {b}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#cotizacion"
              className="bg-blue-500 hover:bg-blue-400 text-white px-7 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40"
            >
              Solicitar consulta técnica
            </a>
            <a
              href={`https://wa.me/${WHATS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold transition-all backdrop-blur-sm"
            >
              WhatsApp directo
            </a>
          </div>
        </div>

        {/* Slider */}
        <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
          <HeroSlider />
        </div>

      </div>
    </section>
  );
}
