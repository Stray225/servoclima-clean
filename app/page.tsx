// app/page.tsx
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import TrustBar from "@/components/TrustBar";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import StickyActions from "@/components/StickyActions";

const TEL = "+541123579760";
const WHATS = "5491123579760";

export default function Page() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">

        {/* Textura sutil de fondo */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Línea corporativa · Industrial · Edificios comerciales
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Climatización de{" "}
              <span className="text-blue-400">alto rendimiento</span>{" "}
              para empresas que no se detienen
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
              Diseñamos, instalamos y mantenemos sistemas de climatización
              para entornos corporativos, industriales y edificios comerciales.
              Continuidad operativa garantizada.
            </p>

            {/* Badges de credibilidad */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Agente oficial Surrey",
                "+15 años de experiencia",
                "Cobertura CABA y GBA",
              ].map((b) => (
                <span
                  key={b}
                  className="bg-white/10 border border-white/20 text-white/80 text-xs px-3 py-1.5 rounded-full"
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#cotizacion"
                className="bg-blue-500 hover:bg-blue-400 text-white px-7 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40"
              >
                Solicitar consulta técnica
              </a>
              <a
                href={`https://wa.me/${WHATS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold transition-all backdrop-blur-sm"
              >
                WhatsApp directo
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <HeroSlider />
          </div>

        </div>
      </section>

      {/* ================= STATS / CREDENCIALES ================= */}
      <section className="bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "+15", label: "Años en el mercado", icon: "◈" },
            { value: "+200", label: "Instalaciones realizadas", icon: "◈" },
            { value: "+50", label: "Empresas activas", icon: "◈" },
            { value: "24/7", label: "Respuesta técnica", icon: "◈" },
          ].map((s) => (
            <div key={s.label} className="py-4">
              <div className="text-4xl font-bold text-blue-400">{s.value}</div>
              <div className="text-sm text-slate-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CLIENTES ================= */}
      <section className="bg-white dark:bg-slate-900 py-20">
        <TrustBar />
      </section>

      {/* ================= SERVICIOS ================= */}
      <section id="servicios" className="bg-slate-50 dark:bg-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl mb-16">
            <p className="text-blue-600 dark:text-blue-400 text-sm uppercase tracking-widest font-medium mb-3">
              Nuestros servicios
            </p>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Soluciones técnicas para entornos que exigen más
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Trabajamos con empresas que no pueden permitirse paradas.
              Cada servicio está diseñado para operar con precisión,
              escalabilidad y documentación técnica completa.
            </p>
          </div>

          {/* Servicios grid */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">

            {/* Instalaciones */}
            <div className="group bg-white dark:bg-slate-900 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Instalaciones</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                Sistemas VRF/VRV, chillers, rooftops y distribución zonal para
                oficinas, plantas industriales, centros logísticos y edificios
                corporativos de cualquier escala.
              </p>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span> VRF/VRV multi-split corporativo</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span> Chillers y fan coils</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span> Salas de máquinas y data centers</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span> Rooftops para superficies comerciales</li>
              </ul>
            </div>

            {/* Mantenimiento */}
            <div className="group bg-white dark:bg-slate-900 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Mantenimiento con contrato</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                Programas preventivos y correctivos con SLA definido.
                Reducimos el riesgo de paradas no programadas y extendemos
                la vida útil de los equipos.
              </p>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span> PM mensual / trimestral / semestral</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span> Respuesta de emergencia 24/7</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span> Informes técnicos por visita</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span> Gestión centralizada multi-sede</li>
              </ul>
            </div>

            {/* Ingeniería */}
            <div className="group bg-white dark:bg-slate-900 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Ingeniería y consultoría</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                Cálculo térmico, memorias técnicas y especificaciones
                para licitaciones, habilitaciones y auditorías internas.
                Documentación que respalda cada decisión de diseño.
              </p>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span> Cálculo de cargas térmicas</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span> Memorias descriptivas y técnicas</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span> Soporte para licitaciones y concursos</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span> Auditorías energéticas</li>
              </ul>
            </div>

            {/* Proyectos */}
            <div className="group bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-800/50 text-white">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Proyectos de gran escala</h3>
              <p className="text-blue-200 mb-5 leading-relaxed">
                Gestión integral de obras termomecánicas: desde el anteproyecto
                hasta la puesta en marcha y entrega con documentación técnica completa.
                Parques industriales, shoppings, edificios corporativos.
              </p>
              <ul className="space-y-2 text-sm text-blue-300">
                <li className="flex items-center gap-2"><span className="text-blue-400">→</span> Gestión de obra llave en mano</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">→</span> Parques industriales y logísticos</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">→</span> Centros comerciales y corporativos</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">→</span> Plantas de producción y control de calidad</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= POR QUÉ SERVICLIMA ================= */}
      <section className="bg-white dark:bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-blue-600 dark:text-blue-400 text-sm uppercase tracking-widest font-medium mb-3">
                Por qué elegirnos
              </p>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                El socio técnico que su empresa necesita
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
                No somos un instalador genérico. Somos un equipo técnico especializado
                que entiende las necesidades operativas de empresas, industrias
                y edificios con exigencias reales.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Ingeniería en campo",
                    desc: "Técnicos propios con formación en sistemas complejos. No subcontratamos lo que importa.",
                  },
                  {
                    title: "Documentación para auditorías",
                    desc: "Toda instalación entrega memoria técnica, planos y certificados. Su equipo de compliance lo agradecerá.",
                  },
                  {
                    title: "Agente oficial Surrey",
                    desc: "Acceso directo a repuestos, garantías de fábrica y soporte técnico del fabricante.",
                  },
                  {
                    title: "Contratos de mantenimiento con SLA",
                    desc: "Respuesta programada y tiempos de atención acordados. Sin excusas ante una falla.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">{item.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/galeria/foto1.webp"
                  alt="Proyecto corporativo Serviclima"
                  width={1200}
                  height={700}
                  className="w-full h-[340px] object-cover"
                />
              </div>

              {/* Sectores */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
                  Sectores que atendemos
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Plantas industriales",
                    "Edificios corporativos",
                    "Parques logísticos",
                    "Centros comerciales",
                    "Plantas productivas",
                    "Consorcios premium",
                  ].map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TESTIMONIOS ================= */}
      <section className="bg-slate-50 dark:bg-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-600 dark:text-blue-400 text-sm uppercase tracking-widest font-medium mb-3">
              Testimonios
            </p>
            <h2 className="text-4xl font-bold">Lo que dicen nuestros clientes</h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* ================= CONTACTO ================= */}
      <section id="cotizacion" className="bg-white dark:bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

          {/* IZQUIERDA */}
          <div className="space-y-8 lg:sticky lg:top-24">

            <div>
              <p className="text-blue-600 dark:text-blue-400 text-sm uppercase tracking-widest font-medium mb-3">
                Contacto profesional
              </p>
              <h2 className="text-4xl font-bold mb-4 leading-tight">
                Hable con un técnico,<br />no con un vendedor
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Analizamos su instalación, entorno y operación para proponer
                la solución más eficiente. Sin plantillas genéricas.
              </p>
            </div>

            {/* Contacto directo */}
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 space-y-4">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                Contacto directo
              </p>
              <a
                href={`tel:${TEL}`}
                className="flex items-center gap-3 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">(011) 2357-9760</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Lun–Vie 8:00–19:00 · Sáb 9:00–14:00</div>
                </div>
              </a>
              <a
                href={`https://wa.me/${WHATS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-800 dark:text-slate-200 hover:text-green-600 dark:hover:text-green-400 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.115 1.523 5.847L.057 23.571a.75.75 0 00.918.919l5.801-1.484A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.867 0-3.617-.484-5.135-1.336l-.363-.21-3.795.97.999-3.697-.229-.374A9.97 9.97 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">WhatsApp directo</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Respuesta rápida</div>
                </div>
              </a>
            </div>

            {/* Surrey badge */}
            <div className="bg-blue-900 text-white rounded-2xl p-6 flex items-center gap-5">
              <Image
                src="/surrey-agente-navbar.png"
                alt="Agente oficial Surrey"
                width={90}
                height={50}
                className="object-contain flex-shrink-0"
              />
              <div>
                <p className="font-semibold mb-1">Agente oficial Surrey</p>
                <p className="text-blue-200 text-sm">
                  Garantía de fábrica, repuestos originales y soporte técnico directo del fabricante.
                </p>
              </div>
            </div>

          </div>

          {/* DERECHA - Formulario */}
          <div>
            <ContactForm />
          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" className="bg-slate-50 dark:bg-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-600 dark:text-blue-400 text-sm uppercase tracking-widest font-medium mb-3">
              Preguntas frecuentes
            </p>
            <h2 className="text-4xl font-bold">Lo que suelen preguntarnos</h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ================= STICKY MOBILE ================= */}
      <StickyActions tel={TEL} whats={WHATS} />

    </main>
  );
}
