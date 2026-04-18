import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import StickyActions from "@/components/StickyActions";
import LogoMarquee from "@/components/LogoMarquee";
import Counter from "@/components/Counter";

const WHATS = "5491121732871";
const TEL = "+541121732871";

export const metadata: Metadata = {
  title: "Instalación y service de aire acondicionado · CABA y GBA",
  description: "Instalación de sistemas de climatización para industrias, fábricas y edificios corporativos en CABA y GBA. VRF/VRV, chillers, splits y proyectos termomecánicos. Agente oficial Surrey.",
  alternates: { canonical: "https://serviclim.ar" },
  openGraph: {
    title: "Serviclima | Climatización industrial y corporativa · CABA y GBA",
    description: "Ingeniería térmica para operaciones críticas. +20 años, +500 instalaciones.",
    url: "https://serviclim.ar",
  },
};

export default function Page() {
  return (
    <main className="bg-slate-50 text-slate-900">

      {/* ╔══════════ 1 · HERO EDITORIAL ══════════ ╗ */}
      <section className="relative mesh-dark grain overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute inset-0 dots-pattern opacity-40" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 relative w-full">

          {/* Top bar */}
          <div className="flex items-center gap-5 mb-16 pb-6 border-b border-white/5">
            <div className="bg-white rounded-xl px-4 py-2 shadow-2xl flex-shrink-0">
              <Image src="/serviclimas-logo-trimmed.png" width={160} height={48} className="h-9 w-auto" alt="Serviclimas" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-800/60 to-transparent" />
            <div className="hidden lg:flex items-center gap-3 text-blue-400/60 text-[11px] font-semibold tracking-[0.25em] uppercase">
              <span>Climatización Industrial</span>
              <span className="w-1 h-1 rounded-full bg-blue-700" />
              <span>CABA · GBA</span>
              <span className="w-1 h-1 rounded-full bg-blue-700" />
              <span>Agente Surrey</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">

            {/* Left: huge type */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-blue-300/90 text-[11px] font-bold tracking-[0.3em] uppercase mb-8 border border-blue-800/60 rounded-full px-4 py-1.5 bg-blue-950/40 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Industria · Corporativo · Gran escala
              </div>

              <h1 className="text-white font-bold leading-[0.95] tracking-tight mb-8" style={{fontSize: "clamp(2.8rem, 7vw, 6rem)"}}>
                Ingeniería térmica<br />
                <span className="text-grad">para operaciones</span><br />
                que no pueden detenerse.
              </h1>

              <p className="text-blue-100/60 max-w-xl text-lg leading-relaxed mb-10">
                Instalación, service y mantenimiento de sistemas de climatización
                para fábricas, plantas industriales, edificios corporativos y
                grandes proyectos en CABA y GBA.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#cotizacion" className="group bg-white text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition flex items-center gap-2 shadow-2xl text-sm tracking-wide">
                  Solicitar cotización
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <a href={`tel:${TEL}`} className="border border-blue-800/70 text-blue-100 hover:text-white hover:border-blue-400 hover:bg-blue-900/30 px-8 py-4 rounded-lg font-semibold transition text-sm flex items-center gap-2 backdrop-blur-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  (011) 2173-2871
                </a>
              </div>
            </div>

            {/* Right: inline stats vertical */}
            <div className="lg:col-span-4 space-y-6 border-l border-blue-900/40 pl-8">
              {[
                { k: "20+", v: "años de experiencia industrial" },
                { k: "500+", v: "instalaciones ejecutadas" },
                { k: "Surrey", v: "agente oficial · repuestos originales" },
              ].map(s => (
                <div key={s.k}>
                  <div className="text-white text-3xl font-bold mb-1">{s.k}</div>
                  <div className="text-blue-300/50 text-xs uppercase tracking-widest">{s.v}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 text-blue-400/40 text-[10px] tracking-[0.3em] uppercase">
            <span>Scroll</span>
            <span className="w-6 h-px bg-blue-600/40 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ╔══════════ 2 · LOGO MARQUEE ══════════ ╗ */}
      <section className="bg-slate-950 py-14 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 mb-8 reveal">
          <div className="flex items-center gap-4 text-slate-500 text-xs tracking-[0.3em] uppercase">
            <span className="w-8 h-px bg-slate-700" />
            Confían en nosotros
            <span className="w-8 h-px bg-slate-700" />
          </div>
        </div>
        <LogoMarquee />
      </section>

      {/* ╔══════════ 3 · INTRO EDITORIAL ══════════ ╗ */}
      <section className="bg-white py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60 -translate-x-40 -translate-y-20" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 reveal">
              <p className="eyebrow mb-5">Quiénes somos</p>
              <h2 className="text-5xl font-bold leading-[1.05] tracking-tight">
                Una empresa <span className="text-grad">técnica</span> para decisiones de infraestructura.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 reveal reveal-d1 space-y-5 text-slate-600 text-lg leading-relaxed">
              <p>
                Serviclima Heating &amp; Cooling S.R.L. diseña, instala y mantiene
                sistemas de climatización para entornos donde la continuidad
                operativa, la eficiencia energética y la documentación técnica
                no son opcionales.
              </p>
              <p>
                Operamos con ingeniería propia, contratos con SLA escrito,
                factura A y cobertura en todo CABA y GBA.
              </p>
              <div className="flex gap-8 pt-6 border-t border-slate-100 mt-8">
                <div>
                  <div className="text-3xl font-bold text-slate-900"><Counter end={20} suffix="+" /></div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">años</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900"><Counter end={500} suffix="+" /></div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">instalaciones</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900"><Counter end={4} /></div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">regiones</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ╔══════════ 4 · SECTORES (BENTO) ══════════ ╗ */}
      <section id="sectores" className="bg-slate-50 py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14 reveal">
            <div>
              <p className="eyebrow mb-4">Sectores</p>
              <h2 className="text-5xl font-bold leading-tight max-w-2xl">Climatización diseñada para <span className="text-grad">cada industria</span>.</h2>
            </div>
            <a href="#cotizacion" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition">
              Consultar tu sector
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
            {/* Big: Industria */}
            <div className="md:col-span-4 md:row-span-2 relative group h-[500px] rounded-3xl overflow-hidden zoom-wrap reveal">
              <Image src="/fotoslide1.webp" fill alt="Planta industrial" className="object-cover" sizes="(max-width:768px) 100vw, 66vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <p className="text-blue-300 text-[11px] font-bold tracking-[0.3em] uppercase mb-3">01 · Industria</p>
                <h3 className="text-3xl font-bold mb-2">Plantas productivas y fábricas</h3>
                <p className="text-white/70 text-sm max-w-md">Climatización de proceso, precisión térmica, salas técnicas y naves industriales.</p>
              </div>
            </div>

            {/* Corporativo */}
            <div className="md:col-span-2 relative group h-[240px] rounded-3xl overflow-hidden zoom-wrap reveal reveal-d1">
              <Image src="/fotoslide2.webp" fill alt="Edificio corporativo" className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-blue-300 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">02</p>
                <h3 className="text-xl font-bold">Corporativo</h3>
              </div>
            </div>

            {/* Logística */}
            <div className="md:col-span-2 relative group h-[240px] rounded-3xl overflow-hidden zoom-wrap reveal reveal-d2">
              <Image src="/equipos2.png" fill alt="Centro logístico" className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-blue-300 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">03</p>
                <h3 className="text-xl font-bold">Logística y depósitos</h3>
              </div>
            </div>

            {/* Retail */}
            <div className="md:col-span-2 relative group h-[240px] rounded-3xl overflow-hidden zoom-wrap reveal">
              <Image src="/equipos3.png" fill alt="Retail" className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-blue-300 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">04</p>
                <h3 className="text-xl font-bold">Retail y comercial</h3>
              </div>
            </div>

            {/* Hospitality */}
            <div className="md:col-span-2 relative group h-[240px] rounded-3xl overflow-hidden zoom-wrap reveal reveal-d1">
              <Image src="/equipos4.png" fill alt="Hospitality" className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-blue-300 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">05</p>
                <h3 className="text-xl font-bold">Hospitality</h3>
              </div>
            </div>

            {/* Proyectos especiales */}
            <div className="md:col-span-2 relative group h-[240px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900 to-slate-900 reveal reveal-d2">
              <div className="absolute inset-0 dots-pattern opacity-40" />
              <div className="relative p-6 h-full flex flex-col justify-between text-white">
                <p className="text-blue-300 text-[10px] font-bold tracking-[0.3em] uppercase">06</p>
                <div>
                  <h3 className="text-xl font-bold mb-2">Proyectos especiales</h3>
                  <p className="text-white/60 text-xs">Obras llave en mano en todo el país</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ╔══════════ 5 · SERVICIOS EDITORIAL ALT ══════════ ╗ */}
      <section id="servicios" className="bg-white py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20 reveal">
          <p className="eyebrow mb-4">Servicios</p>
          <h2 className="text-5xl font-bold leading-tight max-w-3xl">Cuatro áreas de trabajo. Un estándar de calidad.</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {[
            { n: "01", t: "Instalación de aire acondicionado", d: "Splits, multisplits, VRF/VRV, chillers y rooftops. Ingeniería de montaje, documentación técnica y garantía escrita en cada obra.", img: "/fotoslide1.webp", feats: ["Cálculo térmico profesional", "Planos as-built", "Certificados de instalación", "Garantía formal por escrito"] },
            { n: "02", t: "Service y mantenimiento", d: "Programas de mantenimiento preventivo y correctivo con frecuencias acordadas, SLA definido y reporte técnico por intervención.", img: "/fotoslide2.webp", feats: ["Contrato mensual / trimestral / semestral", "Tiempos de respuesta definidos", "Reporte técnico post-servicio", "Stock de repuestos originales"] },
            { n: "03", t: "Ingeniería en climatización", d: "Cálculo térmico, memorias descriptivas, especificaciones técnicas y soporte completo para licitaciones y auditorías.", img: "/equipos2.png", feats: ["Memoria técnica completa", "Planos y especificaciones", "Soporte a licitaciones", "Documentación para auditorías"] },
            { n: "04", t: "Proyectos termomecánicos", d: "Desarrollo y ejecución de obras llave en mano para plantas industriales, parques logísticos y complejos corporativos en todo el país.", img: "/equipos3.png", feats: ["Obra llave en mano", "Coordinación multi-rubro", "Cumplimiento de cronograma", "Soporte post-entrega"] },
          ].map((s, i) => (
            <div key={s.n} className={`grid lg:grid-cols-12 gap-12 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="lg:col-span-7 reveal-left">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden zoom-wrap shadow-2xl">
                  <Image src={s.img} alt={s.t} fill className="object-cover" sizes="(max-width:1024px) 100vw, 58vw" />
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 text-[11px] font-bold tracking-[0.2em] text-blue-700 uppercase">
                    {s.n} · Servicio
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 reveal-right">
                <div className="text-[120px] font-black leading-none text-blue-50 mb-4 select-none">{s.n}</div>
                <h3 className="text-4xl font-bold mb-5 leading-tight">{s.t}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-7">{s.d}</p>
                <ul className="space-y-3 mb-8">
                  {s.feats.map(f => (
                    <li key={f} className="flex items-start gap-3 text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-blue-600/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#cotizacion" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                  Consultar servicio
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ╔══════════ 6 · PROCESO TIMELINE ══════════ ╗ */}
      <section className="bg-slate-950 py-28 relative overflow-hidden grain">
        <div className="absolute inset-0 dots-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20 reveal">
            <p className="eyebrow-white mb-4">Cómo trabajamos</p>
            <h2 className="text-5xl font-bold text-white leading-tight">El proceso, paso a paso.</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-blue-800 to-transparent" />
            {[
              { n: "01", t: "Visita técnica", d: "Relevamiento en sitio sin cargo." },
              { n: "02", t: "Ingeniería", d: "Cálculo térmico y memoria." },
              { n: "03", t: "Propuesta", d: "Cotización técnica detallada." },
              { n: "04", t: "Ejecución", d: "Instalación con documentación." },
              { n: "05", t: "Postventa", d: "Garantía y contrato de mantenimiento." },
            ].map((p, i) => (
              <div key={p.n} className={`relative text-center reveal reveal-d${i + 1}`}>
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-lg mb-5 shadow-xl ring-4 ring-slate-950 relative z-10">
                  {p.n}
                </div>
                <h3 className="text-white font-semibold mb-2">{p.t}</h3>
                <p className="text-slate-400 text-sm">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════ 7 · DIFERENCIALES ══════════ ╗ */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5 reveal">
              <p className="eyebrow mb-4">Por qué Serviclima</p>
              <h2 className="text-5xl font-bold leading-[1.05] tracking-tight">Seis razones por las que empresas líderes nos eligen.</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 reveal reveal-d1 flex items-end">
              <p className="text-slate-600 text-lg leading-relaxed">
                Nuestro diferencial no está solo en el equipamiento.
                Está en la ingeniería, la documentación y el soporte que acompaña cada proyecto.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Documentación técnica", d: "Memoria descriptiva, cálculo térmico y planos as-built en cada obra.", ico: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
              { t: "Contratos con SLA", d: "Tiempos de respuesta escritos. Sin sorpresas.", ico: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
              { t: "Agente oficial Surrey", d: "Acceso directo a fábrica, repuestos originales y soporte prioritario.", ico: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
              { t: "Equipos multi-marca", d: "Daikin, Carrier, Trane, Midea. Especificamos lo técnicamente correcto.", ico: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
              { t: "Factura A garantizada", d: "Gestión administrativa transparente, desde el primer presupuesto.", ico: "M9 12h6m-6 4h6M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2h-5l-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" },
              { t: "Cobertura CABA + GBA", d: "Respuesta técnica real en CABA, GBA Sur, Oeste y Norte.", ico: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" },
            ].map((d, i) => (
              <div key={d.t} className={`group bg-slate-50 hover:bg-white border border-slate-200 rounded-2xl p-7 lift reveal reveal-d${(i % 3) + 1}`}>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-5 shadow-lg shadow-blue-600/20">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d={d.ico} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 className="font-bold mb-2 text-lg">{d.t}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════ 8 · STATS BAND ══════════ ╗ */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 py-20 relative overflow-hidden grain">
        <div className="absolute inset-0 dots-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-4 gap-8 md:divide-x divide-blue-800/40">
            {[
              { n: 20, suf: "+", l: "Años de trayectoria" },
              { n: 500, suf: "+", l: "Instalaciones ejecutadas" },
              { n: 98, suf: "%", l: "Contratos renovados" },
              { n: 24, suf: "h", l: "Respuesta técnica promedio" },
            ].map((s, i) => (
              <div key={s.l} className={`text-center md:px-6 reveal reveal-d${i + 1}`}>
                <div className="text-white text-5xl lg:text-6xl font-bold mb-3"><Counter end={s.n} suffix={s.suf} /></div>
                <div className="text-blue-300/70 text-xs uppercase tracking-[0.25em]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════ 9 · FAQ ACCORDION ══════════ ╗ */}
      <section className="bg-slate-50 py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <p className="eyebrow mb-4">Preguntas frecuentes</p>
            <h2 className="text-5xl font-bold leading-tight">Resolvemos dudas comunes.</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "¿Trabajan con empresas e industrias de gran escala?", a: "Sí. La mayor parte de nuestra cartera son empresas, industrias, plantas productivas y edificios corporativos. Tenemos experiencia en proyectos de gran escala, gestión de obra llave en mano y documentación completa para auditorías." },
              { q: "¿Emiten documentación técnica para licitaciones y auditorías?", a: "Absolutamente. Entregamos memoria descriptiva, cálculo térmico, planos as-built, certificados de instalación y toda la documentación que necesite su área técnica, legal o de compliance." },
              { q: "¿Ofrecen contratos de mantenimiento con SLA definido?", a: "Sí. Diseñamos programas de mantenimiento preventivo con frecuencias acordadas (mensual, trimestral, semestral) e incluimos respuesta correctiva con tiempos de atención definidos y escritos en contrato." },
              { q: "¿Son agentes oficiales de alguna marca?", a: "Somos agentes oficiales de Surrey, lo que nos da acceso directo a repuestos originales, garantía de fábrica y soporte técnico prioritario. Trabajamos con Daikin, Carrier, Trane y Midea, entre otras." },
              { q: "¿Qué zonas de cobertura tienen?", a: "Operamos en CABA, GBA Sur, GBA Oeste y GBA Norte. Para proyectos de gran escala en el interior del país, consultenos directamente." },
              { q: "¿Trabajan con factura A y garantía formal por escrito?", a: "Siempre. Factura A o B según corresponda, y garantía escrita en cada instalación." },
            ].map((f, i) => (
              <details key={i} className="acc bg-white rounded-2xl shadow-sm border border-slate-200 reveal">
                <summary className="flex items-center justify-between p-6 gap-4">
                  <span className="font-semibold text-slate-900 text-lg">{f.q}</span>
                  <span className="acc-icon w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </summary>
                <div className="acc-content px-6 pb-6 text-slate-600 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════ 10 · CONTACTO PREMIUM SPLIT ══════════ ╗ */}
      <section id="cotizacion" className="bg-white py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 translate-x-40" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-12 gap-14 items-start">
            {/* Izquierda */}
            <div className="lg:col-span-5 space-y-8">
              <div className="reveal">
                <Image src="/serviclimas-logo-trimmed.png" width={200} height={58} className="h-12 w-auto mb-6 mix-blend-multiply" alt="Serviclimas" />
                <p className="eyebrow mb-4">Contacto</p>
                <h2 className="text-5xl font-bold leading-[1.05] tracking-tight mb-5">
                  Hablemos de tu <span className="text-grad">proyecto</span>.
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Visita técnica sin cargo. Cotización en 48hs. Documentación completa.
                </p>
              </div>

              <div className="space-y-3 reveal reveal-d1">
                {[
                  { lbl: "Teléfono", val: "(011) 2173-2871", href: `tel:${TEL}`, ico: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
                  { lbl: "WhatsApp", val: "Mensaje directo", href: `https://wa.me/${WHATS}`, ico: "M8 10h.01M12 10h.01M16 10h.01M9 16H5l4 4v-4h7a4 4 0 004-4V6a4 4 0 00-4-4H5a4 4 0 00-4 4v6a4 4 0 003 3.87" },
                  { lbl: "Email", val: "serviclima@serviclim.com.ar", href: "mailto:serviclima@serviclim.com.ar", ico: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                  { lbl: "Horario", val: "Lun–Vie 8–19 hs · Sáb 9–14 hs", href: null, ico: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                ].map(c => {
                  const Inner = (
                    <>
                      <div className="w-11 h-11 rounded-xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center flex-shrink-0 transition-colors">
                        <svg className="w-5 h-5 text-blue-700 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d={c.ico} strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs uppercase tracking-widest text-slate-500 mb-1">{c.lbl}</div>
                        <div className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">{c.val}</div>
                      </div>
                    </>
                  );
                  return c.href ? (
                    <a key={c.lbl} href={c.href} className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">{Inner}</a>
                  ) : (
                    <div key={c.lbl} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">{Inner}</div>
                  );
                })}
              </div>

              <div className="reveal reveal-d2 bg-gradient-to-br from-blue-900 to-slate-950 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3 text-[10px] font-bold tracking-[0.3em] uppercase text-blue-300">
                    <span className="w-6 h-px bg-blue-500" />
                    Respuesta rápida
                  </div>
                  <p className="text-white font-semibold text-lg leading-relaxed">
                    Equipo técnico disponible. Cotizaciones respondidas en 48hs hábiles.
                  </p>
                </div>
              </div>
            </div>

            {/* Derecha: Form */}
            <div className="lg:col-span-7 reveal reveal-d1">
              <div className="bg-white rounded-3xl shadow-2xl ring-1 ring-slate-200 p-8 lg:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <StickyActions tel={TEL} whats={WHATS} />
    </main>
  );
}
