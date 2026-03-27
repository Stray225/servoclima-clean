import Image from "next/image";

const imgs = [
  { src: "foto1.webp", alt: "Proyecto de climatización ejecutado por Serviclima" },
];

export default function Gallery() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10" aria-label="Trabajos recientes">
      <h2 className="text-2xl font-semibold mb-4">Trabajos recientes</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {imgs.map((img, i) => (
          <div key={i} className="relative w-full h-40 md:h-48 rounded-lg border overflow-hidden">
            <Image
              src={`/galeria/${img.src}`}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
