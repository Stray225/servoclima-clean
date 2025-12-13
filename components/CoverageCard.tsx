// 
export default function CoverageCard() {
  // .
  const src =
    "https://maps.google.com/maps?q=Buenos%20Aires%20Argentina&z=10&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="rounded-2xl border bg-white/80 shadow-sm p-5 h-full">
      <h3 className="text-xl font-semibold">Zonas de cobertura</h3>
      <p className="text-slate-600 mt-1 mb-4">
        CABA y Gran Buenos Aires (Zona Sur, Oeste y Norte).
      </p>
      <div className="rounded-lg overflow-hidden border">
        <iframe
          src={src}
          className="w-full h-[260px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa cobertura Serviclima"
        />
      </div>
    </div>
  );
}
