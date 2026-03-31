const BRANDS = [
  { name: "Surrey", note: "Agente oficial" },
  { name: "Daikin", note: "Fabricante líder" },
  { name: "Carrier", note: "Sistemas centrales" },
  { name: "Trane", note: "Climatización industrial" },
  { name: "Midea", note: "VRF / VRV" },
  { name: "Rheem", note: "Equipos residenciales" },
];

export default function BrandsPremium() {
  return (
    <section className="bg-slate-50 py-10 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-sm text-slate-500 font-medium mb-6">
          Trabajamos con las primeras marcas del mercado
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {BRANDS.map((b) => (
            <div
              key={b.name}
              className="bg-white border border-slate-200 rounded-lg px-6 py-3 flex flex-col items-center gap-0.5 min-w-[120px]"
            >
              <span className="text-lg font-bold text-slate-800 tracking-tight">
                {b.name}
              </span>
              <span className="text-xs text-slate-400">{b.note}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-blue-700 font-medium">
          Agente oficial Surrey: repuestos originales, garantía de fábrica y soporte técnico directo
        </p>

      </div>
    </section>
  );
}
