export default function Testimonials() {
  const items = [
    {
      quote:
        "Nos diseñaron e instalaron un sistema VRV completo en la planta. Bajamos el consumo eléctrico un 18% y el confort operativo mejoró notablemente. La documentación para auditorías fue impecable.",
      name: "Mariana S.",
      role: "Jefa de Mantenimiento",
      company: "Parque Industrial Zona Sur",
      initial: "M",
    },
    {
      quote:
        "Instalación prolija, en fecha y con toda la documentación entregada. El PM mensual nos evita paradas imprevistas; siempre responden rápido y tienen criterio técnico real.",
      name: "Diego R.",
      role: "Administrador General",
      company: "Consorcio edilicio · Quilmes",
      initial: "D",
    },
    {
      quote:
        "Se encargaron de todo: cálculo térmico, gestión de obra, tableros y puesta a punto. Un solo interlocutor para todo el proyecto. Los volvería a elegir sin dudarlo.",
      name: "Carla V.",
      role: "Gerencia de Infraestructura",
      company: "Empresa logística · GBA Norte",
      initial: "C",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((t, i) => (
        <figure
          key={i}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col"
        >
          {/* Stars */}
          <div className="flex gap-1 mb-5">
            {Array(5).fill(0).map((_, si) => (
              <svg key={si} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <blockquote className="text-slate-700 dark:text-slate-300 leading-relaxed flex-1">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold text-sm flex-shrink-0">
              {t.initial}
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{t.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.role} · {t.company}</p>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
