// Sección: portal para clientes existentes — ver su último informe
export default function ClientPortalPremium() {
  return (
    <section id="clientes" className="bg-blue-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-blue-300 text-sm uppercase tracking-widest font-medium mb-3">
              Área exclusiva de clientes
            </p>
            <h2 className="text-3xl font-bold mb-4">
              ¿Ya es cliente de Serviclima?
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed mb-6">
              Ingrese con su usuario para consultar el estado de su instalación,
              acceder a su último informe técnico, historial de visitas
              y próximas fechas de mantenimiento programado.
            </p>
            <ul className="space-y-2 text-blue-300 text-sm mb-8">
              {[
                "Último informe técnico de mantenimiento",
                "Historial de visitas y servicios realizados",
                "Próximas fechas de PM programado",
                "Contacto directo con su técnico asignado",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Acceso para clientes</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-blue-200 mb-1.5 font-medium">
                  Usuario / Email
                </label>
                <input
                  type="email"
                  placeholder="empresa@mail.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs text-blue-200 mb-1.5 font-medium">
                  Contraseña
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                />
              </div>
              <button
                className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold transition mt-2"
              >
                Ingresar al portal
              </button>
              <p className="text-center text-xs text-blue-300 mt-2">
                ¿No tiene acceso?{" "}
                <a href="#cotizacion" className="underline hover:text-white transition">
                  Solicítelo a su técnico
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
