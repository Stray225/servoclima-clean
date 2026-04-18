// app/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import TrustBar from "@/components/TrustBar";
import ContactForm from "@/components/ContactForm";
import StickyActions from "@/components/StickyActions";

const WHATS = "5491121732871";
const TEL = "+541121732871";

export const metadata: Metadata = {
  title: "Instalación y service de aire acondicionado · CABA y GBA",
  description:
    "Instalación de splits, VRF/VRV y sistemas centrales de aire acondicionado en CABA y GBA. Service, mantenimiento y reparación para empresas y hogares. Presupuesto sin cargo.",
  alternates: {
    canonical: "https://serviclim.ar",
  },
  openGraph: {
    title: "Serviclima | Instalación y service de aire acondicionado · CABA y GBA",
    description:
      "Instalación de splits, VRF/VRV y sistemas centrales de aire acondicionado en CABA y GBA. Service y mantenimiento para empresas y hogares.",
    url: "https://serviclim.ar",
  },
};

export default function Page() {
  return (
    <main className="bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-50">

      {/* ================= HERO ================= */}
      <section aria-label="Presentación" className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15),_transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            {/* Logo en hero */}
            <div className="inline-block bg-white rounded-xl px-4 py-2 mb-7 shadow-md">
              <Image src="/serviclimas-logo-trimmed.png" width={180} height={52} className="h-10 w-auto" alt="Serviclimas" />
            </div>

            <p className="inline-flex items-center gap-2 text-blue-300 text-sm font-medium mb-6 border border-blue-700/50 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Empresarial · Comercial · Residencial selectivo
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Climatización <span className="text-blue-400">profesional</span><br />
              pensada para operar
            </h1>

            <p className="mt-6 text-lg text-blue-100/80 max-w-xl leading-relaxed">
              Ingeniería en climatización orientada a empresas, industrias y
              edificios corporativos. Diseñamos sistemas confiables, eficientes
              y preparados para operación continua.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#cotizacion"
                className="group bg-white text-blue-900 px-7 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2 shadow-lg"
              >
                Solicitar cotización
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a
                href={`https://wa.me/${WHATS}?text=Hola%2C%20quiero%20consultar%20sobre%20climatizaci%C3%B3n.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-lg font-semibold transition flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.115 1.523 5.847L.057 23.571a.75.75 0 00.918.919l5.801-1.484A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.867 0-3.617-.484-5.135-1.336l-.363-.21-3.795.97.999-3.697-.229-.374A9.97 9.97 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/5">
            <HeroSlider />
          </div>

        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      </section>

      {/* ================= STATS ================= */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-700/50">
          {[
            { num: "+20", label: "años de experiencia" },
            { num: "+500", label: "instalaciones realizadas" },
            { num: "CABA", label: "y todo el GBA" },
            { num: "Surrey", label: "agente oficial" },
          ].map((s) => (
            <div key={s.num} className="text-center px-4 py-2 reveal">
              <div className="text-2xl font-bold text-blue-400">{s.num}</div>
              <div className="text-slate-400 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CLIENTES ================= */}
      <section aria-label="Clientes" className="bg-white dark:bg-slate-900 py-16">
        <TrustBar />
      </section>

      {/* ================= SERVICIOS ================= */}
      <section id="servicios" aria-label="Servicios de climatización" className="bg-slate-50 dark:bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="reveal mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Qué hacemos</p>
            <h2 className="text-4xl font-bold mb-4">Servicios de climatización</h2>
            <div className="w-12 h-1 bg-blue-600 rounded mb-5" />
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl">
              Instalación, service y mantenimiento de aire acondicionado para
              entornos corporativos, comerciales e industriales. También instalamos
              splits y multisplits para hogares y oficinas en CABA y GBA.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">

            <div className="reveal reveal-d1 group bg-white dark:bg-slate-950 rounded-2xl p-9 shadow-md ring-1 ring-slate-200 border-t-4 border-blue-600 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-default">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Instalación de aire acondicionado</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Splits, multisplits, VRF/VRV, chillers y rooftops. Instalación con documentación técnica y garantía escrita en CABA y GBA.
              </p>
            </div>

            <div className="reveal reveal-d2 group bg-white dark:bg-slate-950 rounded-2xl p-9 shadow-md ring-1 ring-slate-200 border-t-4 border-blue-600 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-default">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Service y mantenimiento</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Service correctivo y preventivo con contrato. Mantenimiento programado para empresas, condominios y plantas industriales.
              </p>
            </div>

            <div className="reveal reveal-d3 group bg-white dark:bg-slate-950 rounded-2xl p-9 shadow-md ring-1 ring-slate-200 border-t-4 border-blue-600 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-default">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Ingeniería en climatización</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Cálculo térmico, documentación técnica, especificaciones y soporte para auditorías y licitaciones.
              </p>
            </div>

          </div>

          <div className="reveal bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-12 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-3">Proyectos termomecánicos</h3>
                <p className="text-blue-100/90 max-w-2xl leading-relaxed">
                  Desarrollo y ejecución de proyectos de climatización de gran escala. Obras en todo el país para industrias, parques logísticos, edificios corporativos y complejos productivos.
                </p>
              </div>
              <a href="#cotizacion" className="flex-shrink-0 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-lg transition text-sm whitespace-nowrap">
                Consultar proyecto →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CONTACTO ================= */}
      <section id="cotizacion" aria-label="Solicitar cotización" className="bg-slate-100 dark:bg-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

          {/* IZQUIERDA */}
          <div className="space-y-8">

            <div className="reveal">
              <Image src="/serviclimas-logo-trimmed.png" width={200} height={58} className="h-12 w-auto mix-blend-multiply mb-5" alt="Serviclimas" />
              <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">Nuestra empresa</p>
              <h2 className="text-4xl font-bold mb-3 leading-tight">
                Ingeniería en climatización pensada para operar
              </h2>
              <div className="w-12 h-1 bg-blue-600 rounded mb-5" />
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Serviclima Heating &amp; Cooling S.R.L. brinda soluciones profesionales
                de climatización para empresas, condominios y plantas industriales,
                con foco en eficiencia, confiabilidad y continuidad operativa.
              </p>
            </div>

            <div className="reveal bg-white dark:bg-slate-900 rounded-2xl shadow-md overflow-hidden ring-1 ring-slate-200">
              <Image
                src="/galeria/foto1.webp"
                alt="Proyecto de climatización corporativa ejecutado por Serviclima"
                width={1200}
                height={600}
                className="w-full h-[240px] object-cover"
              />
              <div className="p-7">
                <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-sm">
                  {[
                    "Ingeniería y cálculo térmico profesional",
                    "Mantenimientos correctivos y preventivos con contrato",
                    "Proyectos termomecánicos y obras en todo el país",
                    "Beneficios por ser agente oficial Surrey",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="reveal bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-3">Especialistas en aire acondicionado</h3>
              <p className="text-blue-100/80 text-sm mb-5 leading-relaxed">
                Acompañamos empresas, industrias y condominios en sistemas de climatización críticos.
              </p>
              <ul className="grid grid-cols-2 gap-2 text-sm text-blue-100">
                {["Empresas y parques industriales", "Edificios corporativos", "Centros logísticos", "Residencial premium"].map(i => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* DERECHA */}
          <div className="space-y-10 sticky top-24">
            <ContactForm />

            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden border">
              <Image
                src="/iconos/equipos1.png"
                alt="Equipo de aire acondicionado instalado por Serviclima"
                width={800}
                height={600}
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= COMPROMISO AMBIENTAL ================= */}
      <section aria-label="Compromiso ambiental" className="bg-white dark:bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div className="reveal">
            <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">Sustentabilidad</p>
            <h2 className="text-4xl font-bold mb-3">Compromiso ambiental</h2>
            <div className="w-12 h-1 bg-green-500 rounded mb-6" />
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Diseñamos sistemas de climatización eficientes que reducen el consumo
              energético, optimizan recursos y disminuyen el impacto ambiental,
              acompañando políticas modernas de sustentabilidad corporativa.
            </p>
            <div className="space-y-4">
              {[
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Menor consumo energético", desc: "Equipos de alta eficiencia con certificación energética" },
                { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064", label: "Refrigerantes sustentables", desc: "Gases con bajo potencial de calentamiento global" },
                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Documentación técnica completa", desc: "Informes de eficiencia y auditorías energéticas" },
              ].map((b) => (
                <div key={b.label} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={b.icon} /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900 dark:text-white">{b.label}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Imágenes */}
          <div className="reveal reveal-d1 grid grid-cols-2 gap-4">
            <Image
              src="/iconos/eco21.png"
              alt="Sistemas de climatización eficientes y de bajo consumo energético"
              width={600}
              height={700}
              className="rounded-2xl shadow-md object-cover w-full h-full col-span-1 row-span-2"
            />
            <Image
              src="/iconos/eco2.png"
              alt="Tecnología de climatización sustentable"
              width={600}
              height={400}
              className="rounded-2xl shadow-md object-cover w-full"
            />
            <div className="rounded-2xl bg-green-600 p-5 flex flex-col justify-center">
              <p className="text-white font-bold text-2xl">A++</p>
              <p className="text-green-100 text-xs mt-1">Eficiencia energética en todos los proyectos</p>
            </div>
          </div>

        </div>
      </section>

      <StickyActions tel={TEL} whats={WHATS} />

    </main>
  );
}
