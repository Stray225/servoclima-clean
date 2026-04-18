"use client";

import { useState } from "react";
import Image from "next/image";

const TEL = "+541121732871";
const WHATS = "5491121732871";
const EMAIL = "serviclima@serviclim.com.ar";

const TIPOS = [
  "Instalación de sistema nuevo",
  "Contrato de mantenimiento",
  "Proyecto termomecánico de gran escala",
  "Auditoría energética / Ingeniería",
  "Service correctivo urgente",
  "Cotización para licitación pública o privada",
  "Otro",
];

function Form() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSent(true);
    e.currentTarget.reset();
  };

  if (sent) {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Solicitud enviada</h3>
        <p className="text-slate-500 text-sm max-w-sm mx-auto">
          Un especialista de Serviclima analizará su caso y se comunicará dentro de las próximas 24 horas hábiles.
        </p>
        <button onClick={() => setSent(false)} className="mt-5 text-sm text-blue-700 hover:underline">
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cp-nombre" className="block text-xs font-medium text-slate-600 mb-1.5">
            Nombre y apellido <span className="text-red-500">*</span>
          </label>
          <input
            id="cp-nombre"
            type="text"
            name="nombre"
            placeholder="Juan Pérez"
            required
            autoComplete="name"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="cp-cargo" className="block text-xs font-medium text-slate-600 mb-1.5">
            Cargo / Rol
          </label>
          <input
            id="cp-cargo"
            type="text"
            name="cargo"
            placeholder="Gerente de Operaciones"
            autoComplete="organization-title"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cp-empresa" className="block text-xs font-medium text-slate-600 mb-1.5">
          Empresa / Razón social <span className="text-red-500">*</span>
        </label>
        <input
          id="cp-empresa"
          type="text"
          name="empresa"
          placeholder="Acme S.A."
          required
          autoComplete="organization"
          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cp-email" className="block text-xs font-medium text-slate-600 mb-1.5">
            Email corporativo <span className="text-red-500">*</span>
          </label>
          <input
            id="cp-email"
            type="email"
            name="email"
            placeholder="juan@empresa.com"
            required
            autoComplete="email"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="cp-telefono" className="block text-xs font-medium text-slate-600 mb-1.5">
            Teléfono <span className="text-red-500">*</span>
          </label>
          <input
            id="cp-telefono"
            type="tel"
            name="telefono"
            placeholder="+54 11 XXXX XXXX"
            required
            autoComplete="tel"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cp-tipo" className="block text-xs font-medium text-slate-600 mb-1.5">
          Tipo de servicio <span className="text-red-500">*</span>
        </label>
        <select
          id="cp-tipo"
          name="tipo"
          required
          defaultValue=""
          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-600 text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition"
        >
          <option value="" disabled>Seleccionar...</option>
          {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="cp-mensaje" className="block text-xs font-medium text-slate-600 mb-1.5">
          Descripción del proyecto
        </label>
        <textarea
          id="cp-mensaje"
          name="mensaje"
          rows={4}
          placeholder="Superficie aproximada, cantidad de equipos, tipo de instalación o cualquier detalle relevante..."
          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-lg bg-blue-700 hover:bg-blue-800 disabled:opacity-60 transition text-white font-semibold text-base"
      >
        {loading ? "Enviando..." : "Enviar solicitud"}
      </button>

      <p className="text-xs text-center text-slate-400">
        Respuesta en menos de 24 horas hábiles · Sin compromiso
      </p>
    </form>
  );
}

export default function ContactSectionPremium() {
  return (
    <section id="cotizacion" aria-label="Solicitar cotización" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">

        {/* Izquierda */}
        <div className="lg:sticky lg:top-20 space-y-6">

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Hable con un ingeniero, no con un vendedor.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Analizamos su instalación, operación y escala para proponer
              la solución técnicamente correcta. Sin plantillas, sin sobre-ingeniería.
            </p>
          </div>

          {/* Contacto directo */}
          <div className="space-y-3">
            <a href={`tel:${TEL}`} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 group-hover:border-blue-300 flex items-center justify-center transition">
                <svg className="w-5 h-5 text-slate-500 group-hover:text-blue-700 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">(011) 2173-2871</div>
                <div className="text-xs text-slate-500">Lun–Vie 8–19 hs · Sáb 9–14 hs</div>
              </div>
            </a>

            <a
              href={`https://wa.me/${WHATS}?text=Hola%2C%20quiero%20consultar%20sobre%20climatizaci%C3%B3n%20para%20mi%20empresa.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 group-hover:border-green-300 flex items-center justify-center transition">
                <svg className="w-5 h-5 text-slate-500 group-hover:text-green-600 transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.115 1.523 5.847L.057 23.571a.75.75 0 00.918.919l5.801-1.484A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.867 0-3.617-.484-5.135-1.336l-.363-.21-3.795.97.999-3.697-.229-.374A9.97 9.97 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">WhatsApp directo</div>
                <div className="text-xs text-slate-500">Respuesta rápida</div>
              </div>
            </a>

            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 group-hover:border-blue-300 flex items-center justify-center transition">
                <svg className="w-5 h-5 text-slate-500 group-hover:text-blue-700 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">{EMAIL}</div>
                <div className="text-xs text-slate-500">Consultas formales y licitaciones</div>
              </div>
            </a>
          </div>

          {/* Surrey */}
          <div className="border border-slate-200 bg-slate-50 rounded-xl p-5 flex items-center gap-4">
            <Image
              src="/surrey-agente-navbar.png"
              alt="Agente oficial Surrey"
              width={80}
              height={44}
              className="object-contain opacity-70 flex-shrink-0"
            />
            <div>
              <p className="font-semibold text-slate-900 text-sm mb-0.5">Agente oficial Surrey</p>
              <p className="text-slate-500 text-xs">
                Garantía de fábrica, repuestos originales y soporte técnico directo.
              </p>
            </div>
          </div>

          {/* Cobertura */}
          <div className="border border-slate-200 rounded-xl p-5">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-medium mb-2">Zonas de cobertura</p>
            <p className="text-sm text-slate-700">CABA · GBA Sur · GBA Oeste · GBA Norte</p>
          </div>

        </div>

        {/* Derecha — formulario */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-1">Solicitar cotización</h3>
          <p className="text-slate-500 text-sm mb-6">
            Complete el formulario y un especialista analizará su caso.
          </p>
          <Form />
        </div>

      </div>
    </section>
  );
}
