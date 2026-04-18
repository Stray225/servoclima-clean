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
    "Instalación de sistemas de climatización para industrias, fábricas y edificios corporativos en CABA y GBA. VRF/VRV, chillers, splits y proyectos termomecánicos. Agente oficial Surrey.",
  alternates: {
    canonical: "https://serviclim.ar",
  },
  openGraph: {
    title: "Serviclima | Instalación y service de aire acondicionado · CABA y GBA",
    description:
      "Instalación, service y mantenimiento de climatización industrial y corporativa en CABA y GBA. VRF/VRV, chillers y proyectos termomecánicos.",
    url: "https://serviclim.ar",
  },
};

export default function Page() {
  return (
    <main className="bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-50">

      {/* ================= HERO ================= */}
      <section aria-label="Presentación" className="relative bg-blue-950 overflow-hidden">

        {/* Dot texture */}
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, rgba(99,149,255,0.10) 1px, transparent 1px)', backgroundSize: '30px 30px'}} />
        {/* Top accent line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 pt-10 pb-16">

          {/* ── Brand identity bar ── */}
          <div className="flex items-center gap-5 mb-12 pb-8 border-b border-blue-900/70">
            <div className="bg-white rounded-xl px-4 py-2 shadow-lg flex-shrink-0">
              <Image src="/serviclimas-logo-trimmed.png" width={160} height={48} className="h-10 w-auto" alt="Serviclimas" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-800/80 to-transparent" />
            <div className="hidden md:flex items-center gap-3 text-blue-500/70 text-xs font-semibold tracking-widest uppercase flex-shrink-0">
              <span>Climatización Industrial</span>
              <span className="w-1 h-1 rounded-full bg-blue-700" />
              <span>CABA · GBA</span>
              <span className="w-1 h-1 rounded-full bg-blue-700" />
              <span>Agente Surrey</span>
            </div>
          </div>

          {/* ── Main grid ── */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">

            {/* Texto: 3/5 */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 text-blue-300 text-xs font-semibold mb-6 border border-blue-800 rounded-full px-4 py-1.5 bg-blue-900/40">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Industria · Corporativo · Gran Escala
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                Instalamos donde<br />
                <span className="text-blue-400">la operación</span><br />
                no puede detenerse
              </h1>

              <p className="text-blue-100/70 max-w-lg leading-relaxed mb-8">
                Ingeniería, instalación y mantenimiento de sistemas de climatización
                para fábricas, plantas industriales, edificios corporativos y grandes proyectos
                en CABA y GBA. Más de 20 años, más de 500 instalaciones.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#cotizacion" className="group bg-white text-blue-900 px-7 py-3.5 rounded-lg font-bold hover:bg-blue-50 transition flex items-center gap-2 shadow-xl text-sm">
                  Solicitar cotización
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
                <a href="tel:+541121732871" className="border border-blue-700/80 text-blue-200 hover:text-white hover:border-blue-400 px-7 py-3.5 rounded-lg font-semibold transition text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  (011) 2173-2871
                </a>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-5 text-xs text-blue-400/80">
                {["Documentación técnica completa", "Contratos con SLA definido", "Factura A garantizada"].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Slider: 2/5 */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 ring-offset-1 ring-offset-blue-950">
                <HeroSlider />
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none" />
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
              Instalación, service y mantenimiento de sistemas de climatización para
              fábricas, plantas industriales, edificios corporativos, parques logísticos
              y centros comerciales en CABA y GBA.
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
