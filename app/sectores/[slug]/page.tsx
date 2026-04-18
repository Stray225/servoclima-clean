import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import StickyActions from "@/components/StickyActions";

const WHATS = "5491121732871";
const TEL = "+541121732871";

type Sector = {
  slug: string;
  nro: string;
  titulo: string;
  headline: string;
  intro: string;
  img: string;
  puntos: { t: string; d: string }[];
  sistemas: string[];
  ejemplo: { m: string; e: string; k: string };
};

const SECTORES: Sector[] = [
  {
    slug: "industria",
    nro: "01",
    titulo: "Industria",
    headline: "Plantas productivas y fábricas",
    intro: "Climatización de proceso, precisión térmica y entornos donde la continuidad operativa es condición no negociable. Diseñamos sistemas que acompañan la producción 24/7.",
    img: "/fotoslide1.webp",
    puntos: [
      { t: "Climatización de proceso", d: "Control térmico en líneas de producción, salas limpias y sectores críticos." },
      { t: "Precisión térmica", d: "Estabilidad de temperatura y humedad en salas técnicas y servers." },
      { t: "Redundancia 24/7", d: "Equipos con backup y mantenimiento preventivo sin interrupciones." },
      { t: "Documentación industrial", d: "Memorias, planos as-built y certificados para auditorías internas y externas." },
    ],
    sistemas: ["Chillers industriales", "Sistemas VRF/VRV de gran porte", "Unidades rooftop", "Precisión térmica"],
    ejemplo: { m: "3.200m²", e: "VRF 120HP", k: "Alimentos · GBA Oeste" },
  },
  {
    slug: "corporativo",
    nro: "02",
    titulo: "Corporativo",
    headline: "Edificios y oficinas corporativas",
    intro: "Sistemas centrales para edificios de oficinas, torres corporativas y espacios multi-planta. Eficiencia energética, confort y gestión administrable.",
    img: "/fotoslide2.webp",
    puntos: [
      { t: "Sistemas centrales", d: "Climatización integrada para edificios multi-planta con control centralizado." },
      { t: "Eficiencia energética", d: "Equipos de alta eficiencia que impactan directo en el OPEX." },
      { t: "Confort homogéneo", d: "Distribución térmica uniforme en áreas de oficinas y salas de reuniones." },
      { t: "Gestión y monitoreo", d: "Integración con BMS para control remoto y reportes de consumo." },
    ],
    sistemas: ["Sistemas VRF multi-planta", "Chillers air/water cooled", "Fan coils y UTAs", "Control BMS"],
    ejemplo: { m: "12 pisos", e: "Sistema central VRF", k: "Zona Norte · CABA" },
  },
  {
    slug: "logistica",
    nro: "03",
    titulo: "Logística y depósitos",
    headline: "Centros logísticos, depósitos y naves",
    intro: "Climatización para oficinas administrativas dentro de depósitos, sectores de picking y packing con requerimientos térmicos específicos, y naves con cadena de frío.",
    img: "/equipos2.png",
    puntos: [
      { t: "Oficinas en depósito", d: "Confort en áreas administrativas sin afectar el sector operativo." },
      { t: "Áreas especiales", d: "Control térmico para sectores de producto sensible o cadena de frío." },
      { t: "Naves grandes", d: "Soluciones rooftop y sistemas de gran caudal para volúmenes industriales." },
      { t: "Instalación progresiva", d: "Ejecución por etapas sin detener la operación logística." },
    ],
    sistemas: ["Rooftops de gran porte", "Splits industriales", "Sistemas VRF para oficinas", "Cámaras frigoríficas"],
    ejemplo: { m: "5.000m²", e: "Rooftops + splits", k: "Retail · GBA Sur" },
  },
  {
    slug: "retail",
    nro: "04",
    titulo: "Retail y comercial",
    headline: "Locales, shoppings y cadenas",
    intro: "Climatización para locales comerciales individuales, sucursales de cadenas y espacios en shoppings. Foco en confort del cliente y eficiencia energética.",
    img: "/equipos3.png",
    puntos: [
      { t: "Confort del cliente", d: "Temperatura estable para maximizar la permanencia y experiencia en el local." },
      { t: "Instalación rápida", d: "Obra planificada para minimizar el tiempo de cierre del local." },
      { t: "Standard por cadena", d: "Especificación técnica unificada para roll-outs de múltiples sucursales." },
      { t: "Mantenimiento preventivo", d: "Contratos que incluyen limpieza de filtros y chequeo estacional." },
    ],
    sistemas: ["Splits y multisplits comerciales", "Rooftops para shoppings", "Cortinas de aire", "Cassettes techo"],
    ejemplo: { m: "1.200m²", e: "Multisplit + cortinas", k: "Cadena retail · 8 sucursales" },
  },
  {
    slug: "hospitality",
    nro: "05",
    titulo: "Hospitality",
    headline: "Hoteles, restaurantes y gastronomía",
    intro: "Climatización para espacios con alta afluencia de público: hoteles, restaurantes, bares y espacios gastronómicos. Foco en confort, silencio y eficiencia.",
    img: "/equipos4.png",
    puntos: [
      { t: "Confort del huésped", d: "Climatización individual por habitación con control independiente." },
      { t: "Operación silenciosa", d: "Equipos de bajo nivel sonoro para áreas de descanso y comida." },
      { t: "Áreas comunes", d: "Lobbies, salones de eventos, spa y piscinas con soluciones específicas." },
      { t: "Cocinas profesionales", d: "Extracción, ventilación y climatización para áreas de producción gastronómica." },
    ],
    sistemas: ["Multisplit por habitación", "Sistemas VRF para áreas comunes", "Extracción de cocinas", "Climatización de piscinas"],
    ejemplo: { m: "80 habitaciones", e: "VRF multizona", k: "Hotel boutique · CABA" },
  },
  {
    slug: "proyectos-especiales",
    nro: "06",
    titulo: "Proyectos especiales",
    headline: "Obras llave en mano · Gran escala",
    intro: "Desarrollo y ejecución integral de proyectos termomecánicos de gran envergadura. Coordinación con otros rubros, cronogramas críticos y documentación completa.",
    img: "/fotoslide3.webp",
    puntos: [
      { t: "Llave en mano", d: "Desde el cálculo térmico hasta la puesta en marcha. Un único responsable técnico." },
      { t: "Coordinación multi-rubro", d: "Trabajo articulado con eléctrica, sanitaria y obra civil." },
      { t: "Cronogramas críticos", d: "Cumplimiento de hitos con seguimiento semanal y reporting ejecutivo." },
      { t: "Cobertura nacional", d: "Proyectos ejecutados en todo el territorio argentino." },
    ],
    sistemas: ["Ingeniería térmica completa", "Dirección de obra", "Puesta en marcha", "Entrega con as-built"],
    ejemplo: { m: "Obra nacional", e: "Ingeniería + obra", k: "Industria · Interior del país" },
  },
  {
    slug: "ambiental",
    nro: "07",
    titulo: "Ambiental",
    headline: "Climatización con compromiso ambiental",
    intro: "Diseñamos sistemas de climatización eficientes que reducen el consumo energético, utilizan refrigerantes con menor potencial de calentamiento global y acompañan las políticas de sustentabilidad corporativa de nuestros clientes.",
    img: "/iconos/eco21.png",
    puntos: [
      { t: "Menor consumo energético", d: "Equipos de alta eficiencia con certificación A++ que reducen el OPEX operativo." },
      { t: "Refrigerantes sustentables", d: "Gases con bajo potencial de calentamiento global (GWP) alineados a normativa vigente." },
      { t: "Documentación de eficiencia", d: "Informes de consumo energético y auditorías para reportes ESG corporativos." },
      { t: "Diseño bioclimático", d: "Cálculo térmico que minimiza la carga operativa de los equipos." },
    ],
    sistemas: ["Equipos inverter A++", "Refrigerantes R32 / R410A low-GWP", "Monitoreo de consumo", "Auditorías energéticas"],
    ejemplo: { m: "A++", e: "Eficiencia certificada", k: "Alineado a reportes ESG" },
  },
];

export function generateStaticParams() {
  return SECTORES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = SECTORES.find((x) => x.slug === params.slug);
  if (!s) return {};
  return {
    title: `${s.titulo} · Climatización industrial`,
    description: s.intro.slice(0, 160),
    alternates: { canonical: `https://serviclim.ar/sectores/${s.slug}` },
  };
}

export default function SectorPage({ params }: { params: { slug: string } }) {
  const s = SECTORES.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const otrosSlug = SECTORES.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <main className="bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="relative mesh-dark overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 dots-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative">

          <nav className="flex items-center gap-2 text-xs text-blue-300/60 mb-8 tracking-widest uppercase">
            <Link href="/" className="hover:text-white transition">Inicio</Link>
            <span>›</span>
            <Link href="/#sectores" className="hover:text-white transition">Sectores</Link>
            <span>›</span>
            <span className="text-white">{s.titulo}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-blue-300 text-[11px] font-bold tracking-[0.3em] uppercase mb-5 border border-blue-800/60 rounded-full px-4 py-1.5 bg-blue-950/40">
                Sector {s.nro}
              </div>
              <h1 className="text-white font-bold leading-[1.05] tracking-tight mb-6" style={{fontSize: "clamp(2.5rem, 6vw, 5rem)"}}>
                <span className="text-grad">{s.titulo}</span>
              </h1>
              <p className="text-blue-100/70 text-xl leading-relaxed max-w-2xl mb-8">
                {s.headline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#cotizacion" className="bg-white text-slate-900 px-7 py-3.5 rounded-lg font-bold text-sm hover:bg-blue-50 transition flex items-center gap-2 shadow-xl">
                  Solicitar cotización
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <a href={`tel:${TEL}`} className="border border-blue-800/70 text-blue-100 hover:text-white hover:border-blue-400 px-7 py-3.5 rounded-lg font-semibold text-sm transition">
                  (011) 2173-2871
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                <Image src={s.img} alt={s.headline} fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="eyebrow mb-4">Visión general</p>
          <p className="text-2xl font-medium text-slate-800 leading-[1.4] mb-10">{s.intro}</p>
        </div>
      </section>

      {/* PUNTOS CLAVE */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="eyebrow mb-4">Qué resolvemos</p>
            <h2 className="text-4xl font-bold leading-tight max-w-3xl">Soluciones específicas para este sector.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {s.puntos.map((p, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-7 lift">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-600/20">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{p.t}</h3>
                    <p className="text-slate-600 leading-relaxed">{p.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SISTEMAS + EJEMPLO */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">Sistemas que instalamos</p>
              <h2 className="text-4xl font-bold leading-tight mb-8">Tecnología específica para este tipo de proyecto.</h2>
              <ul className="space-y-4">
                {s.sistemas.map((si, i) => (
                  <li key={i} className="flex items-center gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-blue-600 text-xl font-bold tabular-nums">0{i + 1}</span>
                    <span className="font-semibold text-slate-900 text-lg">{si}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5">
              <div className="sticky top-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white rounded-3xl p-8 shadow-2xl">
                <p className="text-blue-300 text-[10px] font-bold tracking-[0.3em] uppercase mb-5">Caso tipo</p>
                <div className="space-y-5">
                  <div>
                    <div className="text-xs text-blue-300/60 uppercase tracking-widest mb-1">Magnitud</div>
                    <div className="text-2xl font-bold">{s.ejemplo.m}</div>
                  </div>
                  <div className="pt-5 border-t border-blue-900/40">
                    <div className="text-xs text-blue-300/60 uppercase tracking-widest mb-1">Equipos</div>
                    <div className="text-2xl font-bold">{s.ejemplo.e}</div>
                  </div>
                  <div className="pt-5 border-t border-blue-900/40">
                    <div className="text-xs text-blue-300/60 uppercase tracking-widest mb-1">Contexto</div>
                    <div className="text-lg font-semibold">{s.ejemplo.k}</div>
                  </div>
                </div>
                <Link href="/#cotizacion" className="mt-8 w-full bg-white text-slate-900 rounded-lg py-3 font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-50 transition">
                  Consultar proyecto similar
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTROS SECTORES */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow mb-4">Seguí explorando</p>
              <h2 className="text-4xl font-bold">Otros sectores</h2>
            </div>
            <Link href="/#sectores" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition">
              Ver todos
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {otrosSlug.map((o) => (
              <Link key={o.slug} href={`/sectores/${o.slug}`} className="group relative h-[240px] rounded-3xl overflow-hidden zoom-wrap">
                <Image src={o.img} alt={o.headline} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-blue-300 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">{o.nro}</p>
                  <h3 className="text-xl font-bold">{o.titulo}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA CONTACTO */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 rounded-3xl p-10 lg:p-14 text-white relative overflow-hidden">
            <div className="absolute inset-0 dots-pattern opacity-20" />
            <div className="relative">
              <p className="eyebrow-white mb-4">Listos para tu proyecto</p>
              <h2 className="text-4xl font-bold leading-tight mb-5 max-w-xl">Hablemos de tu proyecto en {s.titulo.toLowerCase()}.</h2>
              <p className="text-blue-100/70 text-lg mb-8 max-w-lg">Visita técnica sin cargo. Cotización en 48hs. Documentación completa.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/#cotizacion" className="bg-white text-slate-900 px-7 py-3.5 rounded-lg font-bold text-sm hover:bg-blue-50 transition flex items-center gap-2 shadow-xl">
                  Solicitar cotización
                </Link>
                <a href={`tel:${TEL}`} className="border border-blue-800/70 text-blue-100 hover:text-white hover:border-blue-400 px-7 py-3.5 rounded-lg font-semibold text-sm transition">
                  Llamar ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StickyActions tel={TEL} whats={WHATS} />
    </main>
  );
}
