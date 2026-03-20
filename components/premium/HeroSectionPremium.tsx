"use client";

import Image from "next/image";

const WHATS = "5491123579760";

export default function HeroSectionPremium() {
  return (
    <section className="relative min-h-screen bg-slate-950 flex flex-col justify-center overflow-hidden">

      {/* Fondo: imagen con overlay fuerte */}
      <div className="absolute inset-0">
        <Image
          src="/fotoslide1.webp"
          alt="Instalación industrial Serviclima"
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/60" />
      </div>

      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-12 gap-12 items-center">

        {/* TEXTO — 7 columnas */}
        <div className="lg:col-span-7">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-amber-400 text-xs uppercase tracking-[0.25em] font-semibold">
              Climatización industrial y corporativa
            </span>
          </div>

          {/* Headline principal */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8">
            Su operación<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              no se detiene.
            </span><br />
            La nuestra tampoco.
          </h1>

          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mb-10">
            Serviclima diseña, instala y mantiene sistemas de climatización
            para empresas que no pueden permitirse interrupciones.
            Ingeniería real. Documentación completa. Respuesta garantizada.
          </p>

          {/* Proof points */}
          <div className="flex flex-wrap gap-6 mb-12 text-sm text-slate-400">
            {[
              { n: "+15", label: "años de operación" },
              { n: "+200", label: "instalaciones" },
              { n: "+50", label: "empresas activas" },
            ].map((p) => (
              <div key={p.label} className="flex items-center gap-2">
                <span className="text-amber-400 font-bold text-base">{p.n}</span>
                <span>{p.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#cotizacion"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 px-8 py-4 rounded-xl font-bold text-base transition-all shadow-xl shadow-amber-400/20 hover:shadow-amber-300/30"
            >
              Agendar evaluación técnica
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${WHATS}?text=Hola%2C%20quiero%20consultar%20sobre%20climatizaci%C3%B3n%20para%20mi%20empresa.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all hover:bg-white/5"
            >
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.115 1.523 5.847L.057 23.571a.75.75 0 00.918.919l5.801-1.484A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.867 0-3.617-.484-5.135-1.336l-.363-.21-3.795.97.999-3.697-.229-.374A9.97 9.97 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp directo
            </a>
          </div>

        </div>

        {/* LADO DERECHO — badges flotantes — 5 columnas */}
        <div className="hidden lg:flex lg:col-span-5 flex-col gap-4 justify-center">

          {[
            {
              icon: "🏭",
              title: "Plantas industriales",
              desc: "VRF/VRV, chillers, salas de máquinas",
            },
            {
              icon: "🏢",
              title: "Edificios corporativos",
              desc: "Sistemas centrales y multi-split",
            },
            {
              icon: "🔬",
              title: "Laboratorios y farmacéuticas",
              desc: "Climatización de precisión y control",
            },
            {
              icon: "📋",
              title: "Contratos de mantenimiento",
              desc: "SLA definido, respuesta 24/7",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-4 hover:bg-white/8 hover:border-amber-400/30 transition-all backdrop-blur-sm"
            >
              <span className="text-2xl">{card.icon}</span>
              <div>
                <p className="font-semibold text-white text-sm">{card.title}</p>
                <p className="text-slate-400 text-xs mt-0.5">{card.desc}</p>
              </div>
            </div>
          ))}

          {/* Surrey badge */}
          <div className="border border-amber-400/30 bg-amber-400/5 rounded-2xl px-6 py-4 flex items-center gap-4">
            <Image
              src="/surrey-agente-navbar.png"
              alt="Agente oficial Surrey"
              width={70}
              height={36}
              className="object-contain brightness-200 opacity-80"
            />
            <div>
              <p className="font-semibold text-amber-300 text-sm">Agente oficial Surrey</p>
              <p className="text-slate-400 text-xs mt-0.5">Repuestos y garantía de fábrica</p>
            </div>
          </div>

        </div>

      </div>

      {/* Línea decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs">
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>

    </section>
  );
}
