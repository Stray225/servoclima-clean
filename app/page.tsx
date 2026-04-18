import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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

      {/* ╔══════════ 1 · HERO ══════════ ╗ */}
      <section className="relative mesh-dark overflow-hidden min-h-[88vh] flex items-center">
        <div className="absolute inset-0 dots-pattern opacity-30" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative w-full">
          <div className="grid lg:grid-cols-12 gap-10 items-end">

            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-blue-300/90 text-[11px] font-bold tracking-[0.3em] uppercase mb-8 border border-blue-800/60 rounded-full px-4 py-1.5 bg-blue-950/40">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Industria · Corporativo · Gran escala
              </div>

              <h1 className="text-white font-bold leading-[0.88] tracking-tight mb-8" style={{fontSize: "clamp(3.5rem, 12vw, 11rem)"}}>
                <span className="text-grad">Serviclima</span>
              </h1>

              <p className="text-blue-100/70 max-w-2xl text-xl leading-relaxed mb-10">
                Ingeniería, instalación y mantenimiento de sistemas de climatización
                para fábricas, plantas industriales, edificios corporativos y
                grandes proyectos. Agente oficial Surrey.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#cotizacion" className="group bg-white text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition flex items-center gap-2 shadow-xl text-sm tracking-wide">
                  Solicitar cotización
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <a href={`tel:${TEL}`} className="border border-blue-800/70 text-blue-100 hover:text-white hover:border-blue-400 hover:bg-blue-900/30 px-8 py-4 rounded-lg font-semibold transition text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  (011) 2173-2871
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6 lg:border-l border-blue-900/40 lg:pl-8">
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
        </div>
      </section>

      {/* ╔══════════ 2 · LOGO MARQUEE ══════════ ╗ */}
      <section className="bg-white py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="flex items-center justify-center gap-4 text-slate-400 text-xs tracking-[0.3em] uppercase">
            <span className="w-8 h-px bg-slate-200" />
            Confían en nosotros
            <span className="w-8 h-px bg-slate-200" />
          </div>
        </div>
        <LogoMarquee />
      </section>

      {/* ╔══════════ 3 · SECTORES ══════════ ╗ */}
      <section id="sectores" className="bg-slate-50 py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 reveal">
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
            <Link href="/sectores/industria" className="md:col-span-4 md:row-span-2 relative group h-[500px] rounded-3xl overflow-hidden zoom-wrap reveal block">
              <Image src="/fotoslide1.webp" fill alt="Planta industrial" className="object-cover" sizes="(max-width:768px) 100vw, 66vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <p className="text-blue-300 text-[11px] font-bold tracking-[0.3em] uppercase mb-3">01 · Industria</p>
                <h3 className="text-3xl font-bold mb-2">Plantas productivas y fábricas</h3>
                <p className="text-white/70 text-sm max-w-md mb-3">Climatización de proceso, precisión térmica, salas técnicas y naves industriales.</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 group-hover:gap-2.5 transition-all">
                  Ver sector
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </div>
            </Link>

            <Link href="/sectores/corporativo" className="md:col-span-2 relative group h-[240px] rounded-3xl overflow-hidden zoom-wrap reveal reveal-d1 block">
              <Image src="/fotoslide2.webp" fill alt="Edificio corporativo" className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-blue-300 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">02</p>
                <h3 className="text-xl font-bold">Corporativo</h3>
              </div>
            </Link>

            <Link href="/sectores/logistica" className="md:col-span-2 relative group h-[240px] rounded-3xl overflow-hidden zoom-wrap reveal reveal-d2 block">
              <Image src="/equipos2.png" fill alt="Centro logístico" className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-blue-300 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">03</p>
                <h3 className="text-xl font-bold">Logística y depósitos</h3>
              </div>
            </Link>

            <Link href="/sectores/retail" className="md:col-span-2 relative group h-[240px] rounded-3xl overflow-hidden zoom-wrap reveal block">
              <Image src="/equipos3.png" fill alt="Retail" className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-blue-300 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">04</p>
                <h3 className="text-xl font-bold">Retail y comercial</h3>
              </div>
            </Link>

            <Link href="/sectores/hospitality" className="md:col-span-2 relative group h-[240px] rounded-3xl overflow-hidden zoom-wrap reveal reveal-d1 block">
              <Image src="/equipos4.png" fill alt="Hospitality" className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-blue-300 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">05</p>
                <h3 className="text-xl font-bold">Hospitality</h3>
              </div>
            </Link>

            <Link href="/sectores/proyectos-especiales" className="md:col-span-2 relative group h-[240px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900 to-slate-900 reveal reveal-d2 block">
              <div className="relative p-6 h-full flex flex-col justify-between text-white">
                <p className="text-blue-300 text-[10px] font-bold tracking-[0.3em] uppercase">06</p>
                <div>
                  <h3 className="text-xl font-bold mb-2">Proyectos especiales</h3>
                  <p className="text-white/60 text-xs">Obras llave en mano en todo el país</p>
                </div>
              </div>
            </Link>

            <Link href="/sectores/ambiental" className="md:col-span-6 relative group h-[200px] rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-800 to-slate-900 reveal reveal-d3 block">
              <div className="absolute inset-0 dots-pattern opacity-15" />
              <div className="relative p-8 h-full flex items-center justify-between gap-8">
                <div className="flex-1">
                  <p className="text-emerald-300 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">07 · Área ambiental</p>
                  <h3 className="text-white text-2xl lg:text-3xl font-bold mb-2">Climatización con compromiso ambiental</h3>
                  <p className="text-emerald-100/70 text-sm max-w-2xl">Eficiencia energética, refrigerantes sustentables y documentación para reportes ESG.</p>
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white bg-white/10 border border-white/20 rounded-full px-4 py-2 group-hover:bg-white/20 transition flex-shrink-0">
                  Ver sector
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ╔══════════ 4 · CASOS ══════════ ╗ */}
      <section id="casos" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-6 reveal">
              <p className="eyebrow mb-4">Casos de éxito</p>
              <h2 className="text-5xl font-bold leading-[1.05] tracking-tight">Proyectos que <span className="text-grad">resolvemos</span>.</h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 reveal reveal-d1 flex items-end">
              <p className="text-slate-600 text-lg leading-relaxed">
                Cada instalación responde a un cálculo térmico propio y a los
                requerimientos operativos específicos del cliente.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tipo: "Planta industrial", meta: "Alimentos · GBA", m: "3.200m²", e: "VRF 120HP", k: "24/7 operación crítica", img: "/fotoslide1.webp" },
              { tipo: "Edificio corporativo", meta: "Zona Norte · CABA", m: "12 pisos", e: "Sistema central", k: "Eficiencia energética A", img: "/fotoslide2.webp" },
              { tipo: "Centro logístico", meta: "Retail · GBA Sur", m: "5.000m²", e: "Rooftops + splits", k: "Climatización de oficinas y depósito", img: "/equipos3.png" },
            ].map((c, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-3xl zoom-wrap shadow-lg ring-1 ring-slate-200 reveal reveal-d${i + 1}`}>
                <div className="relative aspect-[4/5]">
                  <Image src={c.img} alt={c.tipo} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                </div>
                <div className="absolute inset-0 p-7 flex flex-col justify-between text-white">
                  <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-blue-300 self-start bg-blue-950/50 px-3 py-1.5 rounded-full">
                    {c.meta}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{c.tipo}</h3>
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/20">
                      <div>
                        <div className="text-xs text-blue-300/70 uppercase tracking-widest mb-1">Área</div>
                        <div className="font-bold text-lg">{c.m}</div>
                      </div>
                      <div>
                        <div className="text-xs text-blue-300/70 uppercase tracking-widest mb-1">Equipos</div>
                        <div className="font-bold text-lg">{c.e}</div>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-white/80 flex items-center gap-2">
                      <span className="w-4 h-px bg-blue-400" />
                      {c.k}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════ 5 · PROCESO ══════════ ╗ */}
      <section id="proceso" className="bg-slate-950 py-24 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 dots-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16 reveal">
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

      {/* ╔══════════ 6 · DIFERENCIALES ══════════ ╗ */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5 reveal">
              <p className="eyebrow mb-4">Por qué Serviclima</p>
              <h2 className="text-5xl font-bold leading-[1.05] tracking-tight">Razones por las que empresas líderes nos eligen.</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 reveal reveal-d1 flex items-end">
              <p className="text-slate-600 text-lg leading-relaxed">
                Nuestro diferencial está en la ingeniería, la documentación y el soporte que acompaña cada proyecto.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Documentación técnica", d: "Memoria descriptiva, cálculo térmico y planos as-built en cada obra.", ico: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
              { t: "Agente oficial Surrey", d: "Acceso directo a fábrica, repuestos originales y soporte prioritario.", ico: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
              { t: "Equipos multi-marca", d: "Daikin, Carrier, Trane, Midea. Especificamos lo técnicamente correcto.", ico: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
              { t: "Factura A garantizada", d: "Gestión administrativa transparente, desde el primer presupuesto.", ico: "M9 12h6m-6 4h6M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2h-5l-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" },
              { t: "Cobertura Argentina", d: "CABA, GBA Sur · Oeste · Norte y proyectos de gran escala en todo el país.", ico: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" },
              { t: "Ingeniería propia", d: "Equipo técnico que diseña cada sistema bajo cálculo térmico específico.", ico: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" },
            ].map((d, i) => (
              <div key={d.t} className={`group bg-slate-50 hover:bg-white border border-slate-200 rounded-2xl p-7 lift reveal reveal-d${(i % 3) + 1}`}>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-5 shadow-md shadow-blue-600/20">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d={d.ico} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 className="font-bold mb-2 text-lg">{d.t}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════ 7 · TESTIMONIOS ══════════ ╗ */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="mb-14 reveal">
            <p className="eyebrow mb-4">Opiniones</p>
            <h2 className="text-5xl font-bold leading-[1.05] tracking-tight max-w-3xl">Lo que dicen <span className="text-grad">nuestros clientes</span>.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: "Entregaron memoria técnica y planos as-built completos. Pasamos la auditoría sin observaciones.", r: "Jefe de Mantenimiento", c: "Planta industrial · GBA Oeste" },
              { q: "Respondieron un correctivo crítico en menos de 4 horas. El contrato se cumple tal cual.", r: "Gerente de Operaciones", c: "Centro logístico · GBA Sur" },
              { q: "Coordinación impecable con otros rubros durante la obra. Entrega en tiempo y documentación en orden.", r: "Project Manager", c: "Edificio corporativo · CABA" },
            ].map((t, i) => (
              <div key={i} className={`bg-white rounded-3xl p-8 shadow-sm border border-slate-200 lift reveal reveal-d${i + 1}`}>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.161c.969 0 1.371 1.24.588 1.81l-3.367 2.447a1 1 0 00-.364 1.118l1.286 3.956c.3.922-.755 1.688-1.54 1.118l-3.366-2.447a1 1 0 00-1.176 0l-3.366 2.447c-.784.57-1.838-.197-1.539-1.118l1.286-3.956a1 1 0 00-.364-1.118L2.098 9.383c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.285-3.956z" /></svg>
                  ))}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">{t.q}</p>
                <div className="pt-5 border-t border-slate-100">
                  <div className="font-bold text-slate-900 text-sm">{t.r}</div>
                  <div className="text-slate-500 text-xs mt-1">{t.c}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════ 8 · MARCAS ══════════ ╗ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="eyebrow mb-4">Equipamiento</p>
            <h2 className="text-4xl font-bold mb-4">Marcas con las que trabajamos</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Especificamos el equipamiento que mejor resuelve el proyecto. Sin compromisos comerciales que comprometan la ingeniería.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { n: "Surrey", sub: "Agente oficial", highlight: true },
              { n: "Daikin", sub: "VRF / VRV" },
              { n: "Carrier", sub: "Sistemas centrales" },
              { n: "Trane", sub: "Chillers industriales" },
              { n: "Midea", sub: "Línea comercial" },
            ].map((b, i) => (
              <div key={b.n} className={`text-center p-6 rounded-2xl transition-all reveal reveal-d${(i % 4) + 1} ${b.highlight ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-xl ring-1 ring-blue-500" : "bg-white border border-slate-200 text-slate-900 lift"}`}>
                <div className={`text-2xl font-bold tracking-tight ${b.highlight ? "text-white" : "text-slate-900"}`}>{b.n}</div>
                <div className={`text-[10px] uppercase tracking-[0.2em] font-semibold mt-2 ${b.highlight ? "text-blue-200" : "text-slate-500"}`}>{b.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════ 9 · STATS BAND ══════════ ╗ */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 py-16 relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-25" />
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

      {/* ╔══════════ 10 · NORMAS ══════════ ╗ */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="eyebrow mb-4">Compliance y normativa</p>
            <h2 className="text-3xl font-bold">Trabajamos bajo estándares técnicos y normativos</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { t: "ASHRAE", d: "Estándares de climatización" },
              { t: "IRAM", d: "Norma argentina vigente" },
              { t: "Factura A", d: "Habilitación AFIP" },
              { t: "Ley SRT", d: "Seguridad laboral vigente" },
            ].map((n, i) => (
              <div key={n.t} className={`text-center p-6 rounded-2xl bg-slate-50 border border-slate-200 reveal reveal-d${i + 1}`}>
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-4 shadow-md shadow-blue-600/20">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div className="font-bold text-slate-900">{n.t}</div>
                <div className="text-xs text-slate-500 mt-1">{n.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════ 11 · FAQ ══════════ ╗ */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="eyebrow mb-4">Preguntas frecuentes</p>
            <h2 className="text-5xl font-bold leading-tight">Resolvemos dudas comunes.</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "¿Trabajan con empresas e industrias de gran escala?", a: "Sí. La mayor parte de nuestra cartera son empresas, industrias, plantas productivas y edificios corporativos. Tenemos experiencia en proyectos de gran escala, gestión de obra llave en mano y documentación completa para auditorías." },
              { q: "¿Emiten documentación técnica para licitaciones y auditorías?", a: "Absolutamente. Entregamos memoria descriptiva, cálculo térmico, planos as-built, certificados de instalación y toda la documentación que necesite su área técnica, legal o de compliance." },
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

      {/* ╔══════════ 12 · CONTACTO ══════════ ╗ */}
      <section id="cotizacion" className="bg-white py-24 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5 space-y-8">
              <div className="reveal">
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
            </div>

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
