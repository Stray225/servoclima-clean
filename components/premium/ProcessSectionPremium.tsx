const STEPS = [
  {
    n: "01",
    title: "Diagnóstico técnico",
    desc: "Relevamiento in situ de su instalación actual, necesidades operativas, superficies y condiciones críticas. Sin supuestos, sin planillas genéricas.",
    tags: ["Visita técnica sin costo", "Relevamiento detallado"],
  },
  {
    n: "02",
    title: "Propuesta de ingeniería",
    desc: "Cálculo térmico, selección de equipos y documentación técnica formal. Entregamos especificaciones listas para licitación o aprobación interna.",
    tags: ["Memoria técnica", "Planos y cómputos"],
  },
  {
    n: "03",
    title: "Ejecución de obra",
    desc: "Gestión integral con técnicos propios, cronograma acordado y seguimiento semanal. Minimizamos la afectación a su operación durante la instalación.",
    tags: ["Técnicos propios", "Cronograma comprometido"],
  },
  {
    n: "04",
    title: "Mantenimiento y seguimiento",
    desc: "Contrato de mantenimiento con SLA, informes por visita y acceso al portal de clientes. Su equipo técnico siempre informado.",
    tags: ["SLA definido", "Portal de clientes"],
  },
];

export default function ProcessSectionPremium() {
  return (
    <section id="proceso" className="bg-white dark:bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16 items-end">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-amber-400" />
              <span className="text-amber-600 dark:text-amber-400 text-xs uppercase tracking-[0.2em] font-semibold">
                Metodología
              </span>
            </div>
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Cómo trabajamos
            </h2>
          </div>
          <div>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Un proceso claro de principio a fin. Sin sorpresas en la ejecución,
              sin vacíos en la documentación, sin excusas en el mantenimiento.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div key={step.n} className="relative group">

              {/* Conector horizontal (desktop) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-slate-200 dark:bg-slate-800 z-0 -translate-y-px" style={{ width: "calc(100% - 2rem)", left: "calc(100% - 1rem)" }} />
              )}

              <div className="relative z-10 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-amber-300 dark:group-hover:border-amber-600 rounded-2xl p-7 h-full transition-all duration-200 hover:shadow-lg">

                {/* Número */}
                <div className="text-5xl font-black text-slate-100 dark:text-slate-800 mb-4 leading-none select-none">
                  {step.n}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5">
                  {step.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
