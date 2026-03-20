"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "¿Trabajan con empresas e industrias de gran escala?",
    a: "Sí. La mayor parte de nuestra cartera son empresas, industrias, plantas productivas y edificios corporativos. Tenemos experiencia en proyectos de gran escala, gestión de obra y documentación para auditorías. También atendemos residencial premium y consorcios.",
  },
  {
    q: "¿Emiten documentación técnica para licitaciones y auditorías?",
    a: "Absolutamente. Entregamos memoria descriptiva, cálculo térmico, planos, certificados de instalación y todo lo que necesite su área técnica o de compliance para validar la instalación.",
  },
  {
    q: "¿Ofrecen contratos de mantenimiento con SLA?",
    a: "Sí. Diseñamos programas de mantenimiento preventivo con frecuencias acordadas (mensual, trimestral, semestral) e incluimos respuesta correctiva con tiempos de atención definidos. Ideal para empresas que no pueden permitirse paradas imprevistas.",
  },
  {
    q: "¿Son agentes oficiales de alguna marca?",
    a: "Somos agentes oficiales de Surrey, lo que nos da acceso directo a repuestos originales, soporte técnico de fábrica y garantías formales. Trabajamos con las principales marcas del mercado: Daikin, Carrier, Trane, Midea, entre otras.",
  },
  {
    q: "¿Qué zonas de cobertura tienen?",
    a: "Operamos en CABA, GBA Sur, GBA Oeste y GBA Norte. Para proyectos de gran escala en el interior del país, consultenos; tenemos experiencia en obras en distintas provincias.",
  },
  {
    q: "¿Trabajan con factura y garantía formal?",
    a: "Siempre. Emitimos factura por todos nuestros trabajos y garantizamos por escrito cada instalación. La seriedad comercial es parte de nuestra propuesta de valor.",
  },
];

export default function FAQPremium() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-slate-50 dark:bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-blue-600 dark:text-blue-400 text-sm uppercase tracking-widest font-medium mb-3">
            Preguntas frecuentes
          </p>
          <h2 className="text-4xl font-bold">Lo que suelen preguntarnos</h2>
        </div>

        <div className="max-w-4xl mx-auto divide-y divide-slate-200 dark:divide-slate-800">
          {ITEMS.map((item, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left group"
              >
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition text-base">
                  {item.q}
                </h3>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center transition-transform duration-200 ${open === i ? "rotate-45 border-blue-500 text-blue-500" : "text-slate-500"}`}>
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
    </section>
  );
}
