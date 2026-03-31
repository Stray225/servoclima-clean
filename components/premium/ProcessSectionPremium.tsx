const STEPS = [
  {
    n: "1",
    title: "Diagnóstico técnico",
    desc: "Relevamiento in situ de su instalación actual, necesidades operativas, superficies y condiciones críticas.",
    tags: ["Visita técnica sin costo", "Relevamiento detallado"],
  },
  {
    n: "2",
    title: "Propuesta de ingeniería",
    desc: "Cálculo térmico, selección de equipos y documentación técnica formal lista para aprobación o licitación.",
    tags: ["Memoria técnica", "Planos y cómputos"],
  },
  {
    n: "3",
    title: "Ejecución de obra",
    desc: "Gestión integral con técnicos propios, cronograma acordado y seguimiento semanal. Mínima afectación a su operación.",
    tags: ["Técnicos propios", "Cronograma comprometido"],
  },
  {
    n: "4",
    title: "Mantenimiento y seguimiento",
    desc: "Contrato de mantenimiento con SLA, informes por visita y seguimiento continuo. Su equipo técnico siempre informado.",
    tags: ["SLA definido", "Informes periódicos"],
  },
];

export default function ProcessSectionPremium() {
  return (
    <section id="proceso" aria-label="Metodología de trabajo" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Cómo trabajamos
            </h2>
          </div>
          <div>
            <p className="text-slate-600 text-base leading-relaxed">
              Un proceso claro de principio a fin. Sin sorpresas en la ejecución,
              sin vacíos en la documentación, sin excusas en el mantenimiento.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 transition"
            >
              <div className="text-2xl font-bold text-blue-700 mb-3">
                {step.n}.
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2">
                {step.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {step.desc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
