// components/TrustBar.tsx
import Image from "next/image";

const CLIENTS = [
  { src: "/iconos/coca.png", name: "Coca-Cola", sector: "Industria alimenticia" },
  { src: "/iconos/iconoempresa4.png", name: "Nestlé", sector: "Alimentos y Bebidas" },
  { src: "/iconos/parque.png", name: "Parqué Avellaneda Shopping", sector: "Parque Shopping" },  
  { src: "/iconos/gancia.png", name: "GANCIA", sector: "Planta industrial" },
  { src: "/iconos/barbieri.png", name: "Dapsa", sector: "Energía y combustibles" },
  { src: "/iconos/bam.png", name: "Barbieri", sector: "Empresa" },
  { src: "/iconos/puppis.png", name: "Puppis", sector: "Empresa" },
  { src: "/iconos/sherwin.png", name: "Sherwwin Williams", sector: "Desarrollo de pinturas" },
];

export default function TrustBar() {
  return (
    <section className="max-w-7xl mx-auto px-100 py-1">

      {/* Header */}
      <div className="text-center mb-3">
        <h2 className="text-4xl font-bold mb-3">
          Clientes que confían en nosotros
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
          Empresas líderes que operan con estándares industriales y confían
          en Serviclima para la climatización de sus instalaciones.
        </p>
      </div>

      {/* Grid clientes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {CLIENTS.map((c, i) => (
          <div
            key={i}
            className="
              bg-white dark:bg-slate-900
              border border-slate-200 dark:border-slate-700
              rounded-2xl
              h-[300px]
              flex flex-col justify-between
              p-4
              shadow-sm
              hover:shadow-lg transition
            "
          >
            {/* LOGO GRANDE */}
            <div className="relative flex-1 w-full">
              <Image
                src={c.src}
                alt={c.name}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* TEXTO CHICO, DISCRETO */}
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
