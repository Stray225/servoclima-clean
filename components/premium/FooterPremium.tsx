import Image from "next/image";

export default function FooterPremium() {
  return (
    <footer className="bg-blue-900 text-white">

      {/* CTA final */}
      <div className="border-b border-blue-800">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-blue-300 text-sm font-medium mb-1">
              ¿Listo para hablar de su proyecto?
            </p>
            <h3 className="text-2xl font-bold text-white">
              Su operación no puede esperar.
            </h3>
          </div>
          <a
            href="#cotizacion"
            className="flex-shrink-0 bg-white hover:bg-blue-50 text-blue-900 font-bold px-7 py-3.5 rounded-lg transition text-sm"
          >
            Solicitar cotización
          </a>
        </div>
      </div>

      {/* Columnas */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        <div>
          <Image
            src="/serviclimas-logo.png"
            alt="Serviclimas"
            width={160}
            height={45}
            className="h-10 w-auto object-contain mb-4 mix-blend-screen opacity-90"
          />
          <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
            Climatización profesional para empresas, industrias y edificios corporativos.
            Ingeniería, instalación y mantenimiento con estándares técnicos reales.
          </p>
          <div className="mt-4">
            <Image
              src="/surrey-agente-navbar.png"
              alt="Agente Oficial Surrey"
              width={80}
              height={38}
              className="object-contain brightness-200 opacity-50"
            />
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-blue-400 mb-4 font-medium">Servicios</p>
          <ul className="space-y-2 text-sm text-blue-200">
            {[
              "Instalación de aire acondicionado",
              "Sistemas VRF/VRV",
              "Chillers y Rooftops",
              "Contratos de mantenimiento",
              "Proyectos termomecánicos",
              "Ingeniería y auditoría energética",
            ].map((s) => (
              <li key={s}>
                <a href="#servicios" className="hover:text-white transition">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-blue-400 mb-4 font-medium">Contacto</p>
          <div className="space-y-3 text-sm text-blue-200">
            <a
              href="tel:+541121732871"
              aria-label="Llamar a Serviclima al (011) 2173-2871"
              className="flex items-center gap-2.5 hover:text-white transition"
            >
              <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (011) 2173-2871
            </a>
            <a
              href="https://wa.me/5491121732871"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Serviclima"
              className="flex items-center gap-2.5 hover:text-white transition"
            >
              <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.115 1.523 5.847L.057 23.571a.75.75 0 00.918.919l5.801-1.484A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.867 0-3.617-.484-5.135-1.336l-.363-.21-3.795.97.999-3.697-.229-.374A9.97 9.97 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp directo
            </a>
            <a
              href="mailto:serviclima@serviclim.com.ar"
              aria-label="Email Serviclima"
              className="flex items-center gap-2.5 hover:text-white transition"
            >
              <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              serviclima@serviclim.com.ar
            </a>
            <p className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Lun–Vie 8–19 hs · Sáb 9–14 hs
            </p>
            <p className="flex items-start gap-2.5">
              <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              CABA · GBA Sur · GBA Oeste · GBA Norte
            </p>
          </div>
        </div>

      </div>

      <div className="border-t border-blue-800 py-4">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs text-blue-400">
          © {new Date().getFullYear()} Serviclima Heating &amp; Cooling S.R.L. · Todos los derechos reservados · serviclim.ar
        </div>
      </div>

    </footer>
  );
}
