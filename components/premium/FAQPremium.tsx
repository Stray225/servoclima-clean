"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "¿Trabajan con empresas e industrias de gran escala?",
    a: "Sí. La mayor parte de nuestra cartera son empresas, industrias, plantas productivas y edificios corporativos. Tenemos experiencia en proyectos de gran escala, gestión de obra llave en mano y documentación completa para auditorías. También atendemos residencial premium y consorcios de edificios.",
  },
  {
    q: "¿Emiten documentación técnica para licitaciones y auditorías?",
    a: "Absolutamente. Entregamos memoria descriptiva, cálculo térmico, planos as-built, certificados de instalación y toda la documentación que necesite su área técnica, legal o de compliance. Estamos acostumbrados a trabajar con plazos y requerimientos de licitaciones públicas y privadas.",
  },
  {
    q: "¿Ofrecen contratos de mantenimiento con SLA definido?",
    a: "Sí. Diseñamos programas de mantenimiento preventivo con frecuencias acordadas (mensual, trimestral, semestral) e incluimos respuesta correctiva con tiempos de atención definidos y escritos en contrato. Es la diferencia entre un servicio de mantenimiento real y uno de palabra.",
  },
  {
    q: "¿Son agentes oficiales de alguna marca?",
    a: "Somos agentes oficiales de Surrey, lo que nos da acceso directo a repuestos originales, soporte técnico de fábrica y garantías formales. Trabajamos con las principales marcas del mercado: Daikin, Carrier, Trane, Midea, entre otras, con acceso a soporte técnico directo.",
  },
  {
    q: "¿Qué zonas de cobertura tienen?",
    a: "Operamos en CABA, GBA Sur, GBA Oeste y GBA Norte. Para proyectos de gran escala en el interior del país, consultenos directamente — tenemos experiencia en obras en distintas provincias con coordinación in situ.",
  },
  {
    q: "¿Trabajan con factura A y garantía formal por escrito?",
    a: "Siempre. Factura A o B según corresponda, y garantía escrita en cada instalación. La seriedad comercial y la documentación formal son parte del servicio, no un extra.",
  },
];

export default function FAQPremium() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white dark:bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-16">

          {/* Izquierda — título fijo */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-amber-400" />
              <span className="text-amber-600 dark:text-amber-400 text-xs uppercase tracking-[0.2em] font-semibold">
                FAQ
              </span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
              Lo que preguntan antes de contratar
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">
              Preguntas reales de gerentes, responsables de compras
              y directores técnicos.
            </p>
            <div className="mt-8">
              <a
                href="#cotizacion"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 px-5 py-2.5 rounded-xl font-bold text-sm transition"
              >
                ¿Otra pregunta? Hablemos
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Derecha — acordeón */}
          <div className="lg:col-span-2 divide-y divide-slate-200 dark:divide-slate-800">
            {ITEMS.map((item, i) => (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 text-left group"
                >
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition text-base leading-snug">
                    {item.q}
                  </h3>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 mt-0.5 ${open === i ? "rotate-45 border-amber-400 text-amber-400 bg-amber-400/10" : "border-slate-300 dark:border-slate-600 text-slate-500"}`}>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed pr-10">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
