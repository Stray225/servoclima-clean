const PILLARS = [
  {
    title: "Ingeniería propia, no subcontratada",
    desc: "Nuestros técnicos ejecutan lo que nuestros ingenieros diseñan. La calidad no depende de terceros ni de la disponibilidad del mercado.",
    highlight: "Cero subcontratación en lo crítico",
  },
  {
    title: "Documentación que resiste auditorías",
    desc: "Cada proyecto entrega memoria técnica, planos as-built y certificados firmados. Su área legal, técnica y de compliance tiene todo lo que necesita.",
    highlight: "Listos para licitaciones y habilitaciones",
  },
  {
    title: "Agente oficial Surrey",
    desc: "No somos un revendedor. Somos agente oficial: acceso directo a stock de repuestos, garantía de fábrica y soporte técnico prioritario.",
    highlight: "Garantía de fábrica en cada instalación",
  },
  {
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
  "Laboratorios",
  "Plantas farmacéuticas",
  "Data centers",
  "Consorcios de edificios",
];

export default function WhyUsPremium() {
  return (
    <section aria-label="Por qué elegirnos" className="bg-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-3xl font-bold text-white">
              Por qué las empresas nos eligen
            </h2>
            <p className="text-blue-200 text-base leading-relaxed">
              Cualquier instalador puede aparecer cuando todo funciona.
              Nosotros somos los que aparecen cuando la planta no puede parar.
            </p>
          </div>
        </div>

        {/* Pilares */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="bg-white/10 border border-white/15 rounded-xl p-6"
            >
              <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed mb-3">{p.desc}</p>
              <p className="text-xs text-blue-300 font-medium">
                {p.highlight}
              </p>
            </div>
          ))}
        </div>

        {/* Sectores */}
        <div className="border border-white/15 rounded-xl p-6">
          <p className="text-xs uppercase tracking-wider text-blue-300 mb-4 font-medium">
            Sectores que atendemos
          </p>
          <div className="flex flex-wrap gap-2">
            {SECTORS.map((s) => (
              <span
                key={s}
                className="bg-white/10 border border-white/15 text-blue-100 text-sm px-3 py-1.5 rounded-lg"
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
