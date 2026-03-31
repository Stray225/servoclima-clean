const STATS = [
  {
    value: "+15",
    label: "Años en el mercado",
    context: "Desde 2009 operando en CABA y GBA",
  },
  {
    value: "+200",
    label: "Instalaciones ejecutadas",
    context: "Proyectos industriales, corporativos y comerciales",
  },
  {
    value: "+50",
    label: "Contratos activos",
    context: "Empresas con mantenimiento programado hoy",
  },
  {
    value: "24/7",
    label: "Guardia técnica",
    context: "Respuesta de emergencia incluida en contrato",
  },
];

export default function StatsBannerPremium() {
  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-0 divide-y divide-slate-200 md:divide-y-0 md:divide-x md:flex">
        {STATS.map((s) => (
          <div key={s.label} className="flex-1 px-6 py-8 text-center md:text-left">
            <div className="text-4xl font-bold text-blue-700 mb-1">{s.value}</div>
            <div className="text-slate-900 font-semibold text-sm mb-1">{s.label}</div>
            <div className="text-slate-500 text-xs">{s.context}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
