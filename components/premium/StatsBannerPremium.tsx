const STATS = [
  { value: "+15", label: "Años en el mercado" },
  { value: "+200", label: "Instalaciones realizadas" },
  { value: "+50", label: "Empresas activas" },
  { value: "24/7", label: "Respuesta técnica" },
];

export default function StatsBannerPremium() {
  return (
    <section className="bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {STATS.map((s) => (
          <div key={s.label} className="py-4">
            <div className="text-4xl font-bold text-blue-400">{s.value}</div>
            <div className="text-sm text-slate-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
