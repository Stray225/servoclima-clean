"use client";

import { useState } from "react";
import Image from "next/image";

const TEL = "+541123579760";
const WHATS = "5491123579760";

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
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Solicitud enviada</h3>
        <p className="text-slate-400 max-w-sm mx-auto">
          Un especialista de Serviclima analizará su caso y se comunicará dentro de las próximas 24 horas hábiles.
        </p>
        <button onClick={() => setSent(false)} className="mt-6 text-sm text-amber-400 hover:underline">
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            Nombre y apellido <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            name="nombre"
            placeholder="Juan Pérez"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-900 text-white placeholder:text-slate-600 text-sm focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 outline-none transition"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">Cargo / Rol</label>
          <input
            type="text"
            name="cargo"
            placeholder="Gerente de Operaciones"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-900 text-white placeholder:text-slate-600 text-sm focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 outline-none transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-400 mb-1.5">
          Empresa / Razón social <span className="text-amber-400">*</span>
        </label>
        <input
          type="text"
          name="empresa"
          placeholder="Acme S.A."
          required
          className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-900 text-white placeholder:text-slate-600 text-sm focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 outline-none transition"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            Email corporativo <span className="text-amber-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="juan@empresa.com"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-900 text-white placeholder:text-slate-600 text-sm focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 outline-none transition"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            Teléfono <span className="text-amber-400">*</span>
          </label>
          <input
            type="tel"
            name="telefono"
            placeholder="+54 11 XXXX XXXX"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-900 text-white placeholder:text-slate-600 text-sm focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 outline-none transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-400 mb-1.5">
          Tipo de servicio <span className="text-amber-400">*</span>
        </label>
        <select
          name="tipo"
          required
          defaultValue=""
          className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-900 text-slate-300 text-sm focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 outline-none transition"
        >
          <option value="" disabled>Seleccionar...</option>
          {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-400 mb-1.5">
          Descripción del proyecto
        </label>
        <textarea
          name="mensaje"
          rows={4}
          placeholder="Superficie aproximada, cantidad de equipos, tipo de instalación o cualquier detalle relevante..."
          className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-900 text-white placeholder:text-slate-600 text-sm focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 outline-none transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-60 transition text-slate-950 font-bold text-base shadow-xl shadow-amber-400/10"
      >
        {loading ? "Enviando..." : "Solicitar evaluación técnica"}
      </button>

      <p className="text-xs text-center text-slate-600">
        Respuesta en menos de 24 horas hábiles · Sin compromiso
      </p>
    </form>
  );
}

export default function ContactSectionPremium() {
  return (
    <section id="cotizacion" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* Izquierda */}
        <div className="lg:sticky lg:top-20 space-y-8">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-amber-400" />
              <span className="text-amber-400 text-xs uppercase tracking-[0.2em] font-semibold">
                Contacto
              </span>
            </div>
            <h2 className="text-5xl font-bold text-white leading-tight mb-4">
              Hable con un ingeniero,<br />
              <span className="text-slate-500">no con un vendedor.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Analizamos su instalación, operación y escala para proponer
              la solución técnicamente correcta. Sin plantillas, sin sobre-ingeniería.
            </p>
          </div>

          {/* Contacto directo */}
          <div className="space-y-3">
            <a
              href={`tel:${TEL}`}
              className="flex items-center gap-4 group"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-amber-400/40 flex items-center justify-center transition">
                <svg className="w-5 h-5 text-slate-400 group-hover:text-amber-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white">(011) 2357-9760</div>
                <div className="text-xs text-slate-500">Lun–Vie 8–19 hs · Sáb 9–14 hs</div>
              </div>
            </a>

            <a
              href={`https://wa.me/${WHATS}?text=Hola%2C%20quiero%20consultar%20sobre%20climatizaci%C3%B3n%20para%20mi%20empresa.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-green-400/40 flex items-center justify-center transition">
                <svg className="w-5 h-5 text-slate-400 group-hover:text-green-400 transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.115 1.523 5.847L.057 23.571a.75.75 0 00.918.919l5.801-1.484A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.867 0-3.617-.484-5.135-1.336l-.363-.21-3.795.97.999-3.697-.229-.374A9.97 9.97 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white">WhatsApp directo</div>
                <div className="text-xs text-slate-500">Respuesta rápida</div>
              </div>
            </a>
          </div>

          {/* Surrey */}
          <div className="border border-amber-400/20 bg-amber-400/5 rounded-2xl p-6 flex items-center gap-5">
            <Image
              src="/surrey-agente-navbar.png"
              alt="Agente oficial Surrey"
              width={80}
              height={44}
              className="object-contain brightness-200 opacity-70 flex-shrink-0"
            />
            <div>
              <p className="font-semibold text-amber-300 mb-1">Agente oficial Surrey</p>
              <p className="text-slate-400 text-sm">
                Garantía de fábrica, repuestos originales y soporte técnico directo.
              </p>
            </div>
          </div>

        </div>

        {/* Derecha — formulario */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-1">Solicitar evaluación técnica</h3>
          <p className="text-slate-500 text-sm mb-8">
            Complete el formulario y un especialista analizará su caso.
          </p>
          <Form />
        </div>

      </div>
    </section>
  );
}
