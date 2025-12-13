const imgs = ["foto1.webp","foto2.webp"];
export default function Gallery() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-4">Trabajos recientes</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {imgs.map((src,i)=>(
          <img key={i} src={`/galeria/${src}`} alt="Proyecto Serviclima"
               className="w-full h-40 md:h-48 object-cover rounded-lg border"/>
        ))}
      </div>
    </section>
  );
}