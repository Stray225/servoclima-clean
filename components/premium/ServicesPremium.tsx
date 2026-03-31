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
    title: "Instalaciones de aire acondicionado",
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
    title: "Proyectos termomecánicos",
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
    title: "Mantenimiento de aire acondicionado",
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
    title: "Ingeniería en climatización",
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
    <section id="servicios" aria-label="Servicios de climatización" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Servicios de climatización
          </h2>
          <p className="text-slate-600 text-base">
            Instalación, mantenimiento e ingeniería para empresas que necesitan
            climatización confiable.
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-4">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id as keyof typeof CONTENT)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
                active === tab.id
                  ? "bg-blue-700 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENIDO del tab */}
        <div
          key={active}
          className="bg-white rounded-xl border border-slate-200 overflow-hidden"
        >
          {/* Header del tab */}
          <div className="bg-blue-900 text-white p-8">
            <h3 className="text-2xl font-bold mb-2">{data.title}</h3>
            <p className="text-blue-200 mb-3">{data.subtitle}</p>
            <p className="text-blue-100 text-sm max-w-3xl leading-relaxed">{data.desc}</p>
          </div>

          {/* Grid de items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {data.items.map((item, i) => (
              <div key={i} className="p-6 border-b border-slate-100 last:border-b-0">
                <h4 className="font-semibold text-slate-900 mb-1 text-sm">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA del tab */}
          <div className="px-8 py-5 border-t border-slate-200 flex items-center justify-between bg-slate-50">
            <p className="text-slate-500 text-sm">
              ¿Tiene un proyecto en mente?
            </p>
            <a
              href="#cotizacion"
              className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg font-semibold text-sm transition"
            >
              Solicitar cotización
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
