"use client";

import { useState } from "react";

const TABS = [
  { id: "instalaciones", label: "Instalaciones" },
  { id: "proyectos", label: "Proyectos" },
  { id: "mantenimiento", label: "Mantenimiento" },
  { id: "ingenieria", label: "Ingeniería" },
];

const CONTENT = {
  instalaciones: {
    title: "Instalaciones",
    subtitle: "Sistemas de climatización de alto rendimiento para cualquier escala",
    desc: "Sistemas VRF/VRV, chillers, rooftops y distribución zonal para oficinas, plantas industriales, centros logísticos y edificios corporativos. Instalaciones con documentación técnica completa desde el inicio.",
    items: [
      { title: "VRF / VRV Multi-split", desc: "Sistemas de volumen de refrigerante variable para edificios corporativos y plantas de múltiples zonas." },
      { title: "Chillers y Fan Coils", desc: "Equipos centrales de agua helada para grandes superficies industriales y centros comerciales." },
      { title: "Rooftops", desc: "Unidades de tejado para supermercados, grandes superficies y naves logísticas." },
      { title: "Salas de máquinas y Data Centers", desc: "Climatización de precisión para entornos críticos con control de temperatura y humedad." },
      { title: "Splits y Multi-splits", desc: "Instalaciones en oficinas, locales comerciales y espacios medianos con criterio técnico." },
      { title: "Conductos y distribución de aire", desc: "Diseño y ejecución de redes de distribución zonal para entornos de alta exigencia." },
    ],
  },
  proyectos: {
    title: "Proyectos",
    subtitle: "Gestión integral de obras termomecánicas de gran escala",
    desc: "Desde el anteproyecto hasta la puesta en marcha y entrega. Un solo interlocutor para todo el ciclo de la obra, con documentación técnica certificada y soporte post-entrega.",
    items: [
      { title: "Parques industriales", desc: "Climatización de naves, plantas productivas y espacios de manufactura en parques industriales." },
      { title: "Edificios corporativos", desc: "Sistemas centrales VRF/Chiller para torres de oficinas y sedes empresariales." },
      { title: "Centros comerciales y shoppings", desc: "Proyectos de climatización para grandes superficies comerciales con gestión de zonas." },
      { title: "Plantas de producción", desc: "Control de temperatura y calidad de aire en líneas de producción alimentaria, farmacéutica e industrial." },
      { title: "Industrias de laboratorio", desc: "Climatización de precisión para laboratorios farmacéuticos, de análisis y control de calidad." },
      { title: "Centros logísticos", desc: "Sistemas para depósitos, cámaras y espacios de distribución a escala." },
    ],
  },
  mantenimiento: {
    title: "Mantenimiento",
    subtitle: "Contratos de mantenimiento con SLA definido para operación continua",
    desc: "Programas preventivos y correctivos que eliminan el riesgo de paradas imprevistas. SLA acordado, técnicos propios, informes por visita y gestión multi-sede para empresas con múltiples instalaciones.",
    items: [
      { title: "Mantenimiento preventivo (PM)", desc: "Visitas programadas mensual, trimestral o semestral con checklist técnico y reporte." },
      { title: "Respuesta correctiva 24/7", desc: "Guardia técnica con tiempo de respuesta acordado en el contrato." },
      { title: "Contratos anuales multi-sede", desc: "Gestión centralizada de múltiples instalaciones bajo un único contrato." },
      { title: "Informes técnicos por visita", desc: "Documentación detallada de cada intervención para trazabilidad y auditoría." },
      { title: "Gestión de repuestos originales", desc: "Acceso directo a stock de repuestos como agente oficial Surrey." },
      { title: "Plan de reposición de equipos", desc: "Asesoramiento técnico para renovación y actualización de equipos en contratos de largo plazo." },
    ],
  },
  ingenieria: {
    title: "Ingeniería",
    subtitle: "Documentación técnica profesional para licitaciones, auditorías y compliance",
    desc: "Cálculo térmico, memorias descriptivas y especificaciones técnicas que respaldan cada instalación. Soporte completo para licitaciones públicas y privadas, habilitaciones municipales y auditorías internas.",
    items: [
      { title: "Cálculo de cargas térmicas", desc: "Dimensionamiento preciso según normas ASHRAE para optimizar eficiencia y costo." },
      { title: "Memorias técnicas y descriptivas", desc: "Documentación completa para habilitaciones, permisos y auditorías de compliance." },
      { title: "Especificaciones para licitaciones", desc: "Pliegos técnicos y especificaciones formales para concursos públicos y privados." },
      { title: "Auditorías energéticas", desc: "Análisis de consumo y eficiencia con propuestas de optimización documentadas." },
      { title: "Planos y as-built", desc: "Documentación gráfica de las instalaciones ejecutadas para el historial técnico del inmueble." },
      { title: "Consultoría en proyectos de terceros", desc: "Soporte técnico a estudios de arquitectura, desarrolladoras e ingeniería." },
    ],
  },
};

export default function ServicesPremium() {
  const [active, setActive] = useState<keyof typeof CONTENT>("instalaciones");
  const data = CONTENT[active];

  return (
    <section id="servicios" className="bg-slate-50 dark:bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-blue-600 dark:text-blue-400 text-sm uppercase tracking-widest font-medium mb-3">
            Nuestros servicios
          </p>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Soluciones técnicas para entornos que exigen más
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Trabajamos con empresas que no pueden permitirse paradas.
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id as keyof typeof CONTENT)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                active === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENIDO del tab */}
        <div
          key={active}
          className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm"
        >
          {/* Header del tab */}
          <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-10">
            <h3 className="text-3xl font-bold mb-2">{data.title}</h3>
            <p className="text-blue-200 text-lg mb-4">{data.subtitle}</p>
            <p className="text-slate-300 max-w-3xl leading-relaxed">{data.desc}</p>
          </div>

          {/* Grid de items */}
          <div
            id={active === "proyectos" ? "proyectos" : active === "mantenimiento" ? "mantenimiento" : undefined}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y divide-x divide-slate-100 dark:divide-slate-800"
          >
            {data.items.map((item, i) => (
              <div key={i} className="p-7 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA del tab */}
          <div className="px-10 py-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              ¿Tiene un proyecto en mente?
            </p>
            <a
              href="#cotizacion"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition"
            >
              Solicitar cotización →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
