// components/TrustBar.tsx
import Image from "next/image";

const CLIENTS = [
  { src: "/iconos/coca.png",         name: "Coca-Cola",             sector: "Industria alimenticia" },
  { src: "/iconos/iconoempresa4.png", name: "Nestlé",               sector: "Alimentos y Bebidas" },
  { src: "/iconos/parque.png",        name: "Parque Avellaneda",    sector: "Centro comercial" },
  { src: "/iconos/gancia.png",        name: "Gancia",               sector: "Planta industrial" },
  { src: "/iconos/barbieri.png",      name: "Dapsa",                sector: "Energía y combustibles" },
  { src: "/iconos/bam.png",           name: "Barbieri",             sector: "Empresa" },
  { src: "/iconos/puppis.png",        name: "Puppis",               sector: "Cadena retail" },
  { src: "/iconos/sherwin.png",       name: "Sherwin Williams",     sector: "Industria química" },
];

export default function TrustBar() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-1" aria-label="Clientes que confían en Serviclima">

      {/* Header */}
      <div className="text-center mb-10 reveal">
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Quiénes nos eligen</p>
        <h2 className="text-4xl font-bold mb-3">
          Clientes que confían en nosotros
        </h2>
        <div className="w-12 h-1 bg-blue-600 rounded mx-auto mb-4" />
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Empresas líderes que operan con estándares industriales y confían
          en Serviclima para la climatización de sus instalaciones.
        </p>
      </div>

      {/* Grid clientes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CLIENTS.map((c, i) => (
          <div
            key={i}
            style={{ transitionDelay: `${i * 60}ms` }}
            className="reveal bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl h-[260px] flex flex-col justify-between p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            {/* LOGO */}
            <div className="relative flex-1 w-full">
              <Image
                src={c.src}
                alt={`${c.name} — cliente de Serviclima`}
                fill
                priority={i === 0}
                className="object-contain"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            {/* TEXTO */}
            <div className="text-center mt-30">
              <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm">
                {c.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {c.sector}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
