import Image from "next/image";

const CLIENTS = [
  { src: "/iconos/coca.png",         name: "Coca-Cola",         sector: "Industria alimenticia" },
  { src: "/iconos/iconoempresa4.png", name: "Nestlé",            sector: "Alimentos y Bebidas" },
  { src: "/iconos/gancia.png",       name: "Gancia",            sector: "Planta industrial" },
  { src: "/iconos/barbieri.png",     name: "Dapsa",             sector: "Energía y combustibles" },
  { src: "/iconos/bam.png",          name: "Barbieri",          sector: "Empresa" },
  { src: "/iconos/parque.png",       name: "Parque Avellaneda", sector: "Centro comercial" },
  { src: "/iconos/puppis.png",       name: "Puppis",            sector: "Cadena retail" },
  { src: "/iconos/sherwin.png",      name: "Sherwin Williams",  sector: "Industria química" },
];

export default function ClientsPremium() {
  return (
    <section id="clientes" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Empresas que operan con Serviclima
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Líderes de industria que confían en nosotros para mantener
            sus instalaciones en operación continua.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CLIENTS.map((c, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl h-[140px] flex flex-col items-center justify-center gap-2 p-5 hover:border-blue-300 transition"
            >
              <div className="relative w-full h-[70px]">
                <Image
                  src={c.src}
                  alt={`${c.name} — cliente de Serviclima`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
              <div className="text-center">
                <p className="font-medium text-slate-700 text-xs">{c.name}</p>
                <p className="text-xs text-slate-400">{c.sector}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
