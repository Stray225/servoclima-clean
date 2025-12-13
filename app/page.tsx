// app/page.tsx
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import TrustBar from "@/components/TrustBar";
import ContactForm from "@/components/ContactForm";

const WHATS = "54911XXXXXXXX";

export default function Page() {
  return (
    <main className="bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-50">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="uppercase tracking-widest text-blue-300 text-sm mb-4">
              Línea empresarial · Línea comercial · Residencial selectivo
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Climatización <span className="text-blue-400">profesional</span><br />
              pensada para operar
            </h1>

            <p className="mt-6 text-lg text-blue-100 max-w-xl">
              Ingeniería en climatización orientada a empresas, industrias y
              edificios corporativos. Diseñamos sistemas confiables, eficientes
              y preparados para operación continua.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="#cotizacion"
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
              >
                Solicitar cotización
              </a>

              <a
                href={`https://wa.me/${WHATS}`}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <HeroSlider />
          </div>

        </div>
      </section>

      {/* ================= CLIENTES ================= */}
      <section className="bg-white dark:bg-slate-900 py-16">
        <TrustBar />  
      </section>

      {/* ================= SERVICIOS ================= */}
      <section className="bg-slate-50 dark:bg-slate-900 py-1">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-4">Servicios</h2>

          <p className="text-slate-700 dark:text-slate-300 max-w-2xl mb-14">
            Soluciones técnicas de climatización diseñadas para entornos corporativos,
            comerciales e industriales, con foco en operación continua y eficiencia.
          </p>

          {/* === 3 SERVICIOS GRANDES === */}
          <div className="grid lg:grid-cols-3 gap-10 mb-10">

            <div className="bg-white dark:bg-slate-950 rounded-2xl p-10 shadow-lg border">
              <h3 className="text-2xl font-bold mb-4">Instalaciones</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Sistemas VRF/VRV, chillers, rooftops, distribución de consumos,
                salas de máquinas y centros de cómputos.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-950 rounded-2xl p-10 shadow-lg border">
              <h3 className="text-2xl font-bold mb-4">Mantenimientos</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Programas correctivos y preventivos con contrato,
                enfocados en continuidad operativa y reducción de fallas.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-950 rounded-2xl p-10 shadow-lg border">
              <h3 className="text-2xl font-bold mb-4">Ingeniería</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Cálculo térmico, documentación técnica,
                especificaciones y soporte para auditorías.
              </p>
            </div>

          </div>

          {/* === PROYECTOS FULL WIDTH === */}
          <div className="bg-blue-900 text-white rounded-2xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Proyectos</h3>
            <p className="text-blue-100 text-lg max-w-4xl">
              Desarrollo y ejecución de proyectos termomecánicos de gran escala.
              Obras en todo el país para industrias, parques logísticos,
              edificios corporativos y complejos productivos.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CONTACTO ================= */}
      <section id="cotizacion" className="bg-slate-100 dark:bg-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

          {/* IZQUIERDA */}
          <div className="space-y-10">

            <div>
              <p className="uppercase tracking-widest text-blue-700 text-sm mb-3">
                Nuestra empresa
              </p>

              <h2 className="text-4xl font-bold mb-4">
                Ingeniería en climatización pensada para operar
              </h2>

              <p className="text-slate-700 dark:text-slate-300 max-w-xl">
                Serviclima Heating & Cooling S.R.L. brinda soluciones profesionales
                de climatización para empresas, condominios y plantas industriales,
                con foco en eficiencia, confiabilidad y continuidad operativa.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden border">
              <Image
                src="/galeria/foto1.webp"
                alt="Proyecto corporativo"
                width={1200}
                height={600}
                className="w-full h-[260px] object-cover"
              />

              <div className="p-8">
                <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                  <li>▸ Ingeniería y cálculo térmico profesional</li>
                  <li>▸ Mantenimientos correctivos y preventivos con contrato</li>
                  <li>▸ Proyectos termomecánicos y obras en todo el país</li>
                  <li>▸ Beneficios por ser agente oficial Surrey</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-900 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Expertos en climatización</h3>
              <p className="text-blue-100 mb-6">
                Acompañamos empresas, industrias y condominios en sistemas críticos.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li>• Empresas y parques industriales</li>
                <li>• Edificios corporativos y comerciales</li>
                <li>• Centros logísticos y plantas productivas</li>
                <li>• Residencial premium</li>
              </ul>
            </div>

          </div>

          {/* DERECHA */}
          <div className="space-y-10 sticky top-24">
            <ContactForm />

            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden border">
              <Image
                src="/iconos/equipos1.png"
                alt="Proyecto destacado"
                width={800}
                height={600}
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= COMPROMISO AMBIENTAL ================= */}
      <section className="bg-green-50 dark:bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-6">Compromiso ambiental</h2>

          <p className="text-slate-700 dark:text-slate-300 max-w-3xl mb-12">
            Diseñamos sistemas de climatización eficientes que reducen el consumo
            energético, optimizan recursos y disminuyen el impacto ambiental,
            acompañando políticas modernas de sustentabilidad corporativa.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <Image src="/iconos/eco21.png" alt="Eficiencia energética" width={800} height={600} className="rounded-2xl shadow-lg object-cover" />
            <Image src="/iconos/eco2.png" alt="Tecnología sustentable" width={800} height={600} className="rounded-2xl shadow-lg object-cover" />
          </div>

        </div>
      </section>

    </main>
  );
}
