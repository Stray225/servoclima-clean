// components/TrustBar.tsx
import Image from "next/image";

const CLIENTS = [
  { src: "/iconos/coca.png", name: "Coca-Cola", sector: "Industria alimenticia" },
  { src: "/iconos/iconoempresa4.png", name: "Nestlé", sector: "Alimentos y Bebidas" },
  { src: "/iconos/parque.png", name: "Parque Avellaneda", sector: "Centro comercial" },
  { src: "/iconos/gancia.png", name: "Gancia", sector: "Planta industrial" },
  { src: "/iconos/barbieri.png", name: "Dapsa", sector: "Energía y combustibles" },
  { src: "/iconos/bam.png", name: "Barbieri", sector: "Empresa" },
  { src: "/iconos/puppis.png", name: "Puppis", sector: "Cadena retail" },
  { src: "/iconos/sherwin.png", name: "Sherwin Williams", sector: "Industria química" },
];

export default function TrustBar() {
  return (
    <div className="max-w-7xl mx-auto px-6">

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-blue-600 dark:text-blue-400 text-sm uppercase tracking-widest font-medium mb-3">
          Clientes
        </p>
        <h2 className="text-4xl font-bold mb-4">
          Empresas que operan con Serviclima
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
          Líderes de industria que confían en nosotros para mantener
          sus instalaciones en operación continua.
        </p>
      </div>

      {/* Grid clientes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CLIENTS.map((c, i) => (
          <div
            key={i}
            className="
              group
              bg-white dark:bg-slate-900
              border border-slate-200 dark:border-slate-700
              hover:border-blue-300 dark:hover:border-blue-700
              rounded-2xl
              h-[160px]
              flex flex-col items-center justify-center gap-3
              p-6
              shadow-sm hover:shadow-md
              transition-all duration-200
            "
          >
            {/* LOGO */}
            <div className="relative w-full h-[80px]">
              <Image
                src={c.src}
                alt={c.name}
                fill
                className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* TEXTO */}
            <div className="text-center">
              <p className="font-medium text-slate-700 dark:text-slate-300 text-xs">
                {c.name}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                {c.sector}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
