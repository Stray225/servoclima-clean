"use client";

import { useState } from "react";
import Image from "next/image";

const TEL = "+541123579760";
const WHATS = "5491123579760";

const TIPOS = [
  "Instalación de sistema nuevo",
  "Contrato de mantenimiento",
  "Proyecto termomecánico",
  "Auditoría energética / Ingeniería",
  "Service correctivo urgente",
  "Cotización para licitación",
  "Otro",
];

function ContactFormPremium() {
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
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-10 border border-slate-200 dark:border-slate-700 text-center">
        <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-3">Solicitud enviada</h3>
        <p className="text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
          Recibimos su consulta. Un técnico de Serviclima la revisará y
          se comunicará dentro de las próximas 24 horas hábiles.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-10 border border-slate-200 dark:border-slate-700 w-full">
      <h2 className="text-2xl font-bold mb-1">Solicitar consulta técnica</h2>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
        Complete el formulario y un especialista analizará su caso.
      </p>

      <form onSubmit={handleSubmit} className="grid gap-4">

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
              Nombre y apellido <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nombre"
              placeholder="Juan Pérez"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
              Cargo / Rol
            </label>
            <input
              type="text"
              name="cargo"
              placeholder="Gerente de Operaciones"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
            Empresa / Razón social <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="empresa"
            placeholder="Acme S.A."
            required
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
              Email corporativo <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="juan@empresa.com"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
              Teléfono <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="telefono"
              placeholder="+54 11 XXXX XXXX"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
            Tipo de servicio requerido <span className="text-red-500">*</span>
          </label>
          <select
            name="tipo"
            required
            defaultValue=""
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-slate-700 dark:text-slate-300"
          >
            <option value="" disabled>Seleccionar...</option>
            {TIPOS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
            Descripción del proyecto o necesidad
          </label>
          <textarea
            name="mensaje"
            rows={4}
            placeholder="Describe brevemente las instalaciones, cantidad de equipos, superficie aproximada o cualquier detalle relevante..."
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 transition text-white font-semibold text-base shadow-lg shadow-blue-500/20"
        >
          {loading ? "Enviando..." : "Enviar solicitud"}
        </button>

        <p className="text-xs text-center text-slate-400 dark:text-slate-500">
          Respuesta garantizada dentro de las 24 horas hábiles
        </p>
      </form>
    </div>
  );
}

export default function ContactSectionPremium() {
  return (
    <section id="cotizacion" className="bg-white dark:bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* Izquierda */}
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

        {/* Derecha: formulario */}
        <div>
          <ContactFormPremium />
        </div>

      </div>
    </section>
  );
}
