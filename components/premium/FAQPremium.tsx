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
    a: "Somos agentes oficiales de Surrey, lo que nos da acceso directo a repuestos originales, soporte técnico de fábrica y garantías formales. Trabajamos con las principales marcas del mercado: Daikin, Carrier, Trane, Midea, entre otras.",
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
    <section id="faq" aria-label="Preguntas frecuentes" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Izquierda */}
          <div className="lg:sticky lg:top-24 self-start">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Preguntas frecuentes
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Preguntas reales de gerentes, responsables de compras
              y directores técnicos.
            </p>
            <a
              href="#cotizacion"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition"
            >
              Consultar ahora
            </a>
          </div>

          {/* Acordeón */}
          <div className="lg:col-span-2 divide-y divide-slate-200">
            {ITEMS.map((item, i) => (
              <div key={i} className="py-4">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 text-left group"
                  aria-expanded={open === i}
                >
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 transition text-sm leading-snug">
                    {item.q}
                  </h3>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center transition-transform mt-0.5 ${open === i ? "rotate-45 border-blue-500" : ""}`}>
                    <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed pr-8">
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
