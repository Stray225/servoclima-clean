export default function Testimonials() {
  const items = [
    {
      quote:
        "Nos diseñaron e instalaron VRV en la planta. Bajamos consumo y mejoró el confort. Documentación impecable para auditorías.",
      name: "Mariana S.",
      role: "Jefa de Mantenimiento – Parque Industrial",
    },
    {
      quote:
        "Instalación prolija y en fecha. El PM mensual nos evita paradas; siempre responden rápido por WhatsApp.",
      name: "Diego R.",
      role: "Administrador – Consorcio en Quilmes",
    },
    {
      quote:
        "Se encargaron de todo: ingeniería, tableros y puesta a punto. Los volveríamos a elegir.",
      name: "Carla V.",
      role: "Gerencia – Empresa Logística",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Lo que dicen nuestros clientes</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <figure key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <blockquote className="text-slate-700">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-slate-600">
              <span className="font-semibold text-slate-800">{t.name}</span> — {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
