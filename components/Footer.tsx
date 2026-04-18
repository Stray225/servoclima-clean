import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-600/40 to-transparent" />
      {/* mesh bg */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(at 20% 30%, rgba(37,99,235,0.12) 0, transparent 45%), radial-gradient(at 80% 80%, rgba(29,78,216,0.10) 0, transparent 50%)'}} />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">

        {/* CTA banner */}
        <div className="mb-16 pb-14 border-b border-white/5 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-blue-400 text-[11px] font-bold tracking-[0.3em] uppercase mb-3">Listos para tu proyecto</p>
            <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
              Convertí tu consulta en <span className="text-grad">un plan técnico</span>.
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href="#cotizacion" className="bg-white text-slate-900 px-6 py-3.5 rounded-lg font-bold text-sm hover:bg-blue-50 transition flex items-center gap-2 shadow-xl">
              Solicitar cotización
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a href="tel:+541121732871" className="border border-white/20 text-white hover:bg-white/5 px-6 py-3.5 rounded-lg font-semibold text-sm transition flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" /></svg>
              (011) 2173-2871
            </a>
          </div>
        </div>

        {/* Main columns */}
        <div className="grid md:grid-cols-12 gap-10 mb-14">

          {/* Col 1 — Logo + tagline */}
          <div className="md:col-span-5">
            <div className="bg-white inline-block rounded-xl px-4 py-2.5 mb-6 shadow-lg">
              <Image src="/serviclimas-logo-trimmed.png" alt="Serviclimas" width={180} height={54} className="h-11 w-auto" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Ingeniería, instalación, service y mantenimiento de sistemas de
              climatización para industrias, plantas y edificios corporativos en CABA y GBA.
            </p>
            <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.25em] uppercase text-slate-500">
              <span className="flex items-center gap-2">
                <svg className="w-3 h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                +20 años
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <span className="flex items-center gap-2">
                <svg className="w-3 h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Agente Surrey
              </span>
            </div>
          </div>

          {/* Col 2 — Servicios */}
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-bold mb-5">Servicios</p>
            <ul className="space-y-3 text-sm text-slate-400">
              {[
                "Instalación aire acondicionado",
                "Service y mantenimiento",
                "Sistemas VRF/VRV",
                "Ingeniería en climatización",
                "Proyectos termomecánicos",
              ].map(s => (
                <li key={s}>
                  <a href="#servicios" className="hover:text-white transition inline-flex items-center gap-2 group">
                    <span className="w-0 h-px bg-blue-500 group-hover:w-3 transition-all" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contacto */}
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-bold mb-5">Contacto</p>
            <div className="space-y-4 text-sm">
              <a href="tel:+541121732871" aria-label="Llamar a Serviclima" className="group flex items-center gap-3 text-slate-300 hover:text-white transition">
                <span className="w-9 h-9 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <svg className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                (011) 2173-2871
              </a>
              <a href="https://wa.me/5491121732871" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Serviclima" className="group flex items-center gap-3 text-slate-300 hover:text-white transition">
                <span className="w-9 h-9 rounded-lg bg-green-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
                  <svg className="w-4 h-4 text-green-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.115 1.523 5.847L.057 23.571a.75.75 0 00.918.919l5.801-1.484A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.867 0-3.617-.484-5.135-1.336l-.363-.21-3.795.97.999-3.697-.229-.374A9.97 9.97 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                </span>
                WhatsApp directo
              </a>
              <a href="mailto:serviclima@serviclim.com.ar" aria-label="Email Serviclima" className="group flex items-center gap-3 text-slate-300 hover:text-white transition">
                <span className="w-9 h-9 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <svg className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span className="truncate">serviclima@serviclim.com.ar</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400 pt-2 border-t border-white/5">
                <span className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span className="text-xs">Lun–Vie 8–19 hs · Sáb 9–14 hs</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom line */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} Serviclima Heating &amp; Cooling S.R.L. · Todos los derechos reservados</div>
          <div className="flex items-center gap-4">
            <span>CABA · GBA Sur · Oeste · Norte</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span>serviclim.ar</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
