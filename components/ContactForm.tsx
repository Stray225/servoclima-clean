"use client";

import { useState } from "react";

const TIPOS = [
  "Instalación de sistema nuevo",
  "Contrato de mantenimiento",
  "Proyecto termomecánico",
  "Auditoría energética / Ingeniería",
  "Service correctivo urgente",
  "Cotización para licitación",
  "Otro",
];

export default function ContactForm() {
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
