export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

        <div>
          <h3 className="text-base font-semibold mb-2">
            Serviclima Heating &amp; Cooling S.R.L.
          </h3>

          <p className="text-sm text-blue-200 leading-6 max-w-md">
            Instalación, service y mantenimiento de aire acondicionado en CABA y GBA.<br />
            Soluciones técnicas para empresas, industrias y hogares.
          </p>
        </div>

        <div className="text-sm space-y-2">
          <p>
            <a
              href="tel:+541123579760"
              aria-label="Llamar a Serviclima al (011) 2357-9760"
              className="hover:text-blue-300 transition"
            >
              <span aria-hidden="true">📞 </span>(011) 2357-9760
            </a>
          </p>

          <p>
            <a
              href="https://wa.me/5491123579760"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar a Serviclima por WhatsApp"
              className="hover:text-blue-300 transition"
            >
              <span aria-hidden="true">💬 </span>WhatsApp directo
            </a>
          </p>
        </div>

      </div>

      {/* BARRA LEGAL */}
      <div className="bg-blue-950 text-blue-300 text-center text-xs py-2">
        © {new Date().getFullYear()} Serviclima · Todos los derechos reservados
      </div>
    </footer>
  );
}
