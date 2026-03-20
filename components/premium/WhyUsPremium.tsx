const PILLARS = [
  {
    number: "I",
    title: "Ingeniería propia, no subcontratada",
    desc: "Nuestros técnicos ejecutan lo que nuestros ingenieros diseñan. La calidad no depende de terceros ni de la disponibilidad del mercado.",
    highlight: "Cero subcontratación en lo crítico",
  },
  {
    number: "II",
    title: "Documentación que resiste auditorías",
    desc: "Cada proyecto entrega memoria técnica, planos as-built y certificados firmados. Su área legal, técnica y de compliance tiene todo lo que necesita.",
    highlight: "Listos para licitaciones y habilitaciones",
  },
  {
    number: "III",
    title: "Agente oficial Surrey — ventaja real",
    desc: "No somos un revendedor. Somos agente oficial: acceso directo a stock de repuestos, garantía de fábrica y soporte técnico prioritario.",
    highlight: "Garantía de fábrica en cada instalación",
  },
  {
    number: "IV",
    title: "SLA con consecuencias contractuales",
    desc: "Nuestros contratos de mantenimiento incluyen tiempos de respuesta acordados. Si fallamos, hay consecuencias. Así de simple.",
    highlight: "Tiempos de respuesta escritos en contrato",
  },
];

const SECTORS = [
  "Plantas industriales",
  "Edificios corporativos",
  "Parques logísticos",
  "Centros comerciales",
  "Industrias de laboratorio",
  "Plantas farmacéuticas",
  "Data centers",
  "Consorcios de edificios",
];

export default function WhyUsPremium() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-amber-400 text-xs uppercase tracking-[0.2em] font-semibold">
              Diferenciadores
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-5xl font-bold text-white leading-tight">
              Por qué las empresas nos eligen cuando el riesgo es real
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Cualquier instalador puede aparecer cuando todo funciona.
              Nosotros somos los que aparecen cuando la planta no puede parar.
            </p>
          </div>
        </div>

        {/* Pilares */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {PILLARS.map((p) => (
            <div
              key={p.number}
              className="group border border-slate-800 hover:border-amber-400/40 rounded-2xl p-8 transition-all duration-200 hover:bg-slate-900/50"
            >
              <div className="flex items-start gap-6">
                <span className="text-4xl font-black text-slate-800 group-hover:text-amber-400/30 transition-colors leading-none flex-shrink-0 select-none">
                  {p.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="inline-flex items-center gap-2 text-xs text-amber-400 font-medium">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {p.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sectores */}
        <div className="border border-slate-800 rounded-2xl p-8">
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-6 font-medium">
            Sectores que atendemos
          </p>
          <div className="flex flex-wrap gap-3">
            {SECTORS.map((s) => (
              <span
                key={s}
                className="bg-slate-900 border border-slate-700 text-slate-300 text-sm px-4 py-2 rounded-full hover:border-amber-400/40 hover:text-white transition"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
