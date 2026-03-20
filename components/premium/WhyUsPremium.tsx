import Image from "next/image";

const DIFFERENTIATORS = [
  {
    title: "Ingeniería en campo",
    desc: "Técnicos propios con formación en sistemas complejos. No subcontratamos lo que importa.",
  },
  {
    title: "Documentación para auditorías",
    desc: "Toda instalación entrega memoria técnica, planos y certificados. Su área de compliance lo agradecerá.",
  },
  {
    title: "Agente oficial Surrey",
    desc: "Acceso directo a repuestos originales, garantías de fábrica y soporte técnico del fabricante.",
  },
  {
    title: "Contratos de mantenimiento con SLA",
    desc: "Respuesta programada y tiempos de atención acordados en contrato. Sin excusas ante una falla.",
  },
];

const SECTORS = [
  "Plantas industriales",
  "Edificios corporativos",
  "Parques logísticos",
  "Centros comerciales",
  "Industrias de laboratorio",
  "Plantas farmacéuticas",
  "Plantas productivas",
  "Consorcios premium",
];

export default function WhyUsPremium() {
  return (
    <section className="bg-white dark:bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Izquierda */}
          <div>
            <p className="text-blue-600 dark:text-blue-400 text-sm uppercase tracking-widest font-medium mb-3">
              Por qué elegirnos
            </p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              El socio técnico que su empresa necesita
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
              No somos un instalador genérico. Somos un equipo técnico especializado
              que entiende las necesidades operativas de empresas, industrias
              y edificios con exigencias reales.
            </p>

            <div className="space-y-6">
              {DIFFERENTIATORS.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Derecha */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/galeria/foto1.webp"
                alt="Proyecto corporativo Serviclima"
                width={1200}
                height={700}
                className="w-full h-[340px] object-cover"
              />
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
                Sectores que atendemos
              </p>
              <div className="grid grid-cols-2 gap-3">
                {SECTORS.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
