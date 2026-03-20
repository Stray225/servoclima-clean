const ITEMS = [
  {
    quote: "Nos diseñaron e instalaron un sistema VRV completo en la planta. Bajamos el consumo eléctrico un 18% y el confort operativo mejoró notablemente. La documentación para auditorías fue impecable.",
    name: "Mariana S.",
    role: "Jefa de Mantenimiento",
    company: "Parque Industrial · Zona Sur",
    initial: "M",
  },
  {
    quote: "Instalación prolija, en fecha y con toda la documentación entregada. El PM mensual nos evita paradas imprevistas; siempre responden rápido y tienen criterio técnico real.",
    name: "Diego R.",
    role: "Administrador General",
    company: "Consorcio edilicio · Quilmes",
    initial: "D",
  },
  {
    quote: "Se encargaron de todo: cálculo térmico, gestión de obra, tableros y puesta a punto. Un solo interlocutor para todo el proyecto. Los volvería a elegir sin dudarlo.",
    name: "Carla V.",
    role: "Gerencia de Infraestructura",
    company: "Empresa logística · GBA Norte",
    initial: "C",
  },
];

export default function TestimonialsPremium() {
  return (
    <section className="bg-slate-900 py-24 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-amber-400" />
          <span className="text-amber-400 text-xs uppercase tracking-[0.2em] font-semibold">
            Testimonios
          </span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-14">
          Lo que dicen quienes contrataron
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {ITEMS.map((t, i) => (
            <figure
              key={i}
              className="bg-slate-950 border border-slate-800 hover:border-amber-400/30 rounded-2xl p-8 flex flex-col transition-all duration-200"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array(5).fill(0).map((_, si) => (
                  <svg key={si} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-slate-300 leading-relaxed flex-1 text-sm">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-slate-800">
                <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold text-sm flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role} · {t.company}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}
