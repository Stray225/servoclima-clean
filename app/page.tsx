// app/page.tsx
import Image from "next/image";
import TrustBar from "@/components/TrustBar";
import HeroSlider from "@/components/HeroSlider";

const WHATS = "54911XXXXXXXX";
const TEL = "+5411XXXXXXXX";
const FORMSPREE = "https://formspree.io/f/TU_ID";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm text-blue-700/80">
            Climatización • Ingeniería • Mantenimiento
          </p>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-slate-50 mt-2">
            Climatización empresarial y residencial, sin vueltas
          </h1>

          <p className="text-lg text-gray-700 dark:text-slate-200 mt-4">
            Instalación de sistemas centrales y VRF/VRV, salas de máquinas y
            soluciones llave en mano para empresas, condominios y plantas.
            También splits y multisplits para hogares y locales.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#cotizacion-empresarial"
              className="bg-gray-900 hover:bg-black text-white px-5 py-3 rounded-lg font-medium"
            >
              Solicitar cotización empresarial
            </a>

            <a
              href="#servicios"
              className="border border-gray-300 dark:border-slate-600 px-5 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800"
            >
              Ver servicios
            </a>

            <a
              href={`https://wa.me/${WHATS}?text=Hola%20quisiera%20asesoramiento%20en%20climatizaci%C3%B3n`}
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-lg font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <ul className="mt-4 text-gray-600 dark:text-slate-300 space-y-1">
            <li>✅ Ingeniería y dimensionamiento</li>
            <li>✅ Obras con factura y garantía</li>
            <li>✅ Cobertura CABA y Zona Sur</li>
          </ul>
        </div>

        {/* Slider de fotos en el hero */}
        <HeroSlider />
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* SERVICIOS */}
      <section id="servicios" className="max-w-6xl mx-auto px-4 py-10">
        <header className="text-center mb-8">
          <h2 className="text-4xl font-bold">Nuestros servicios</h2>
          <p className="text-slate-600 dark:text-slate-300">
            Expertos en climatización para empresas, condominios y hogares.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900 shadow-sm p-6 text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-blue-50 dark:bg-slate-800 flex items-center justify-center mb-4">
              <span className="text-3xl">⚙️</span>
            </div>
            <h3 className="text-xl font-semibold">Instalación</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-2">
              VRF/VRV, roof-tops, chiller, conductos, salas de máquinas,
              tableros y puesta a punto. Trabajos con factura y garantía.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900 shadow-sm p-6 text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-blue-50 dark:bg-slate-800 flex items-center justify-center mb-4">
              <span className="text-3xl">🏢</span>
            </div>
            <h3 className="text-xl font-semibold">Service</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-2">
              Diagnóstico y mantenimiento programado. Contratos 24/7 y soporte
              para auditorías.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900 shadow-sm p-6 text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-blue-50 dark:bg-slate-800 flex items-center justify-center mb-4">
              <span className="text-3xl">🧰</span>
            </div>
            <h3 className="text-xl font-semibold">Mantenimiento</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-2">
              Limpieza profunda, carga de gas, reparación de placas y
              sanitización. Instalaciones prolijas y garantizadas.
            </p>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm text-blue-700/80">Nuestra historia</p>
            <h2 className="text-4xl font-bold mt-1 mb-4">¿Quiénes somos?</h2>

            <p className="text-slate-700 dark:text-slate-200">
              Somos una empresa especializada en climatización con años de
              experiencia. Nacimos atendiendo obras residenciales y hoy
              lideramos proyectos empresariales, condominios y plantas con
              soluciones llave en mano.
            </p>

            <p className="text-slate-700 dark:text-slate-200 mt-3">
              Trabajamos con ingeniería y dimensionamiento serio, instalación
              prolija y documentación para auditorías, con mantenimiento
              planificado. Nuestro objetivo es simple:{" "}
              <b>calidad, confianza y cero vueltas</b>.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm">
            <Image
              src="/galeria/foto1.webp"
              alt="Nuestra historia"
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* MAPA + FORMULARIOS */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Título + mapa horizontal */}
        <h2 className="text-3xl font-bold mb-1">Zonas de cobertura</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Zona Sur (Avellaneda, Quilmes, Berazategui, etc.), CABA y La Plata.
        </p>

        <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm mb-10 relative">
          {/* Badge sobre el mapa */}
          <div className="absolute z-10 top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-4 py-1 rounded-full text-xs font-medium text-slate-700 dark:text-slate-100 shadow-sm">
            Zona Sur • CABA • La Plata
          </div>

          <div className="aspect-[16/6] w-full">
            <iframe
              title="Cobertura Zona Sur, CABA y La Plata"
              src="AQUI_VA_TU_LINK_DE_GOOGLE_MAPS"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        {/* FORMULARIOS IGUALES A LO QUE YA TENÍAS */}
        {/* ... (dejé todo igual desde acá para abajo, lo podés mantener tal cual) */}
      </section>
    </main>
  );
}
