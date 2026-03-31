"use client";

import Image from "next/image";

const WHATS = "5491123579760";

export default function HeroSectionPremium() {
  return (
    <section className="relative bg-blue-900 overflow-hidden">

      {/* Fondo */}
      <div className="absolute inset-0">
        <Image
          src="/fotoslide1.webp"
          alt="Instalación industrial de climatización"
          fill
          priority
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/95 to-blue-800/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">

        {/* TEXTO — 7 columnas */}
        <div className="lg:col-span-7">

          <p className="text-blue-300 text-sm uppercase tracking-wider font-medium mb-6">
            Climatización industrial y corporativa
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Su operación no se detiene.<br />
            La nuestra tampoco.
          </h1>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-10">
            Serviclima diseña, instala y mantiene sistemas de climatización
            para empresas que no pueden permitirse interrupciones.
            Ingeniería real. Documentación completa. Respuesta garantizada.
          </p>

          {/* Datos clave */}
          <div className="flex flex-wrap gap-8 mb-10 text-sm text-blue-200">
            {[
              { n: "+15", label: "años de operación" },
              { n: "+200", label: "instalaciones" },
              { n: "+50", label: "empresas activas" },
            ].map((p) => (
              <div key={p.label} className="flex items-center gap-2">
                <span className="text-white font-bold text-lg">{p.n}</span>
                <span>{p.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#cotizacion"
              className="bg-white hover:bg-blue-50 text-blue-900 px-7 py-3.5 rounded-lg font-semibold text-base transition shadow-sm"
            >
              Solicitar cotización
            </a>
            <a
              href={`https://wa.me/${WHATS}?text=Hola%2C%20quiero%20consultar%20sobre%20climatizaci%C3%B3n%20para%20mi%20empresa.`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 hover:border-white/60 text-white px-7 py-3.5 rounded-lg font-semibold text-base transition hover:bg-white/5"
            >
              WhatsApp directo
            </a>
          </div>

        </div>

        {/* LADO DERECHO — info compacta */}
        <div className="hidden lg:flex lg:col-span-5 flex-col gap-3">

          {[
            {
              title: "Plantas industriales",
              desc: "VRF/VRV, chillers, salas de máquinas",
            },
            {
              title: "Edificios corporativos",
              desc: "Sistemas centrales y multi-split",
            },
            {
              title: "Laboratorios y farmacéuticas",
              desc: "Climatización de precisión y control",
            },
            {
              title: "Contratos de mantenimiento",
              desc: "SLA definido, respuesta 24/7",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/15 rounded-lg px-5 py-4 flex items-start gap-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white text-sm">{card.title}</p>
                <p className="text-blue-200 text-xs mt-0.5">{card.desc}</p>
              </div>
            </div>
          ))}

          {/* Surrey badge */}
          <div className="border border-blue-400/30 bg-blue-800/30 rounded-lg px-5 py-4 flex items-center gap-4 mt-1">
            <Image
              src="/surrey-agente-navbar.png"
              alt="Agente oficial Surrey"
              width={70}
              height={36}
              className="object-contain brightness-200 opacity-80"
            />
            <div>
              <p className="font-semibold text-blue-200 text-sm">Agente oficial Surrey</p>
              <p className="text-blue-300 text-xs mt-0.5">Repuestos y garantía de fábrica</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
