const ITEMS = [
  {
    quote: "Nos diseñaron e instalaron un sistema VRV completo en la planta. Bajamos el consumo eléctrico un 18% y el confort operativo mejoró notablemente. La documentación para auditorías fue impecable.",
    name: "Mariana S.",
    role: "Jefa de Mantenimiento",
    company: "Parque Industrial · Zona Sur",
  },
  {
    quote: "Instalación prolija, en fecha y con toda la documentación entregada. El PM mensual nos evita paradas imprevistas; siempre responden rápido y tienen criterio técnico real.",
    name: "Diego R.",
    role: "Administrador General",
    company: "Consorcio edilicio · Quilmes",
  },
  {
    quote: "Se encargaron de todo: cálculo térmico, gestión de obra, tableros y puesta a punto. Un solo interlocutor para todo el proyecto. Los volvería a elegir sin dudarlo.",
    name: "Carla V.",
    role: "Gerencia de Infraestructura",
    company: "Empresa logística · GBA Norte",
  },
];

export default function TestimonialsPremium() {
  return (
    <section aria-label="Testimonios" className="bg-slate-50 py-20 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-slate-900 mb-10">
          Lo que dicen quienes contrataron
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {ITEMS.map((t, i) => (
            <figure
              key={i}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col"
            >
              <blockquote className="text-slate-600 leading-relaxed flex-1 text-sm">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-5 pt-4 border-t border-slate-100">
                <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role} · {t.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}
