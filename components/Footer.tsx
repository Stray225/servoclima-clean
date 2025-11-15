export default function Footer() {
  return (
    <footer className="mt-0">
      <div className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold">Serviclima</h3>
            <p className="text-sm text-blue-200 leading-6">
              Climatización para empresas, condominios y hogares.<br />
              Atención en CABA y GBA · Facturación y garantía. <br />
              Página creada por Agustin Pazos. +54 9 11 6204-2896.
            </p>
          </div>

          <div className="text-sm space-y-1">
            <p>📞 <a href="tel:+541123579760" className="underline hover:text-blue-300">(011) 2357-9760</a></p>
            <p>💬 <a href="https://wa.me/5491123579760" target="_blank" className="underline hover:text-blue-300">WhatsApp directo</a></p>
          </div>
        </div>
      </div>

      <div className="bg-blue-950 text-blue-300 text-center text-[12px] py-2">
        © {new Date().getFullYear()} Serviclima · Todos los derechos reservados
      </div>
    </footer>
  );
}
