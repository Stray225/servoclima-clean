// Logos de marcas fabricantes con las que trabaja Serviclima

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
    <section className="bg-slate-100 dark:bg-slate-900 py-14 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium">
            Trabajamos con las primeras marcas del mercado
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {BRANDS.map((b) => (
            <div
              key={b.name}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-8 py-4 flex flex-col items-center gap-1 shadow-sm hover:shadow-md transition-all hover:border-blue-300 dark:hover:border-blue-700 min-w-[130px]"
            >
              <span className="text-xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
                {b.name}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500">{b.note}</span>
            </div>
          ))}
        </div>

        {/* Surrey destacado */}
        <div className="mt-8 text-center">
          <span className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 text-blue-700 dark:text-blue-400 text-xs px-4 py-2 rounded-full font-medium">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Como agente oficial Surrey: repuestos originales, garantía de fábrica y soporte técnico directo
          </span>
        </div>

      </div>
    </section>
  );
}
