const SERVICES = [
  {
    id: "instalaciones",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Instalaciones",
    desc: "Sistemas VRF/VRV, chillers, rooftops y distribución zonal para oficinas, plantas industriales, centros logísticos y edificios corporativos de cualquier escala.",
    bullets: [
      "VRF/VRV multi-split corporativo",
      "Chillers y fan coils",
      "Salas de máquinas y data centers",
      "Rooftops para superficies comerciales",
    ],
    dark: false,
  },
  {
    id: "mantenimiento",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Mantenimiento con contrato",
    desc: "Programas preventivos y correctivos con SLA definido. Reducimos el riesgo de paradas no programadas y extendemos la vida útil de los equipos.",
    bullets: [
      "PM mensual / trimestral / semestral",
      "Respuesta de emergencia 24/7",
      "Informes técnicos por visita",
      "Gestión centralizada multi-sede",
    ],
    dark: false,
  },
  {
    id: "ingenieria",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Ingeniería y consultoría",
    desc: "Cálculo térmico, memorias técnicas y especificaciones para licitaciones, habilitaciones y auditorías internas. Documentación que respalda cada decisión de diseño.",
    bullets: [
      "Cálculo de cargas térmicas",
      "Memorias descriptivas y técnicas",
      "Soporte para licitaciones y concursos",
      "Auditorías energéticas",
    ],
    dark: false,
  },
  {
    id: "proyectos",
    icon: (
      <svg className="w-6 h-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Proyectos de gran escala",
    desc: "Gestión integral de obras termomecánicas: desde el anteproyecto hasta la puesta en marcha y entrega con documentación técnica completa.",
    bullets: [
      "Gestión de obra llave en mano",
      "Parques industriales y logísticos",
      "Centros comerciales y corporativos",
      "Plantas de producción y control de calidad",
    ],
    dark: true,
  },
];

export default function ServicesPremium() {
  return (
    <section id="servicios" className="bg-slate-50 dark:bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-2xl mb-16">
          <p className="text-blue-600 dark:text-blue-400 text-sm uppercase tracking-widest font-medium mb-3">
            Nuestros servicios
          </p>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Soluciones técnicas para entornos que exigen más
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Trabajamos con empresas que no pueden permitirse paradas.
            Cada servicio está diseñado para operar con precisión,
            escalabilidad y documentación técnica completa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className={
                s.dark
                  ? "group bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-800/50 text-white"
                  : "group bg-white dark:bg-slate-900 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800"
              }
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${s.dark ? "bg-blue-500/20 border border-blue-400/30" : "bg-blue-600"}`}>
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className={`mb-5 leading-relaxed ${s.dark ? "text-blue-200" : "text-slate-600 dark:text-slate-400"}`}>
                {s.desc}
              </p>
              <ul className="space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className={`flex items-center gap-2 text-sm ${s.dark ? "text-blue-300" : "text-slate-500 dark:text-slate-400"}`}>
                    <span className={s.dark ? "text-blue-400" : "text-blue-500"}>→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
