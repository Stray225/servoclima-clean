export default function FAQ() {
  const qs = [
    {
      q: "¿Trabajan con facturación y garantía?",
      a: "Sí, emitimos factura y todas nuestras instalaciones quedan cubiertas por garantía escrita.",
    },
    {
      q: "¿Hacen contratos de mantenimiento?",
      a: "Sí, ofrecemos PM planificado y servicio 24/7 para empresas, condominios y plantas.",
    },
    {
      q: "¿Cobertura de zonas?",
      a: "CABA y GBA (Zona Sur, Oeste y Norte). Consultanos por WhatsApp para confirmar tu barrio.",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 pb-16">
      <h2 className="text-3xl font-bold text-center mb-8">Preguntas frecuentes</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {qs.map((x, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg">{x.q}</h3>
            <p className="text-slate-700 mt-2">{x.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
