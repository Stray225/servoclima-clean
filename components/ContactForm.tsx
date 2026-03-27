"use client";

import { useState } from "react";

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

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-10 border border-slate-200 dark:border-slate-700 w-full">

      <p className="text-sm uppercase tracking-wide text-blue-700 mb-2">
        Contacto profesional
      </p>

      <h2 className="text-3xl font-bold mb-4">
        Solicitar cotización
      </h2>

      <p className="text-slate-600 dark:text-slate-300 mb-8">
        Analizamos su necesidad técnica y proponemos una solución adecuada
        según el tipo de instalación, operación y escala del proyecto.
      </p>

      <form onSubmit={handleSubmit} className="grid gap-5">

        <div>
          <label htmlFor="cf-nombre" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Nombre y apellido <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="cf-nombre"
            type="text"
            name="nombre"
            placeholder="Juan Pérez"
            required
            autoComplete="name"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950"
          />
        </div>

        <div>
          <label htmlFor="cf-telefono" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Teléfono de contacto <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="cf-telefono"
            type="tel"
            name="telefono"
            placeholder="+54 11 XXXX-XXXX"
            required
            autoComplete="tel"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950"
          />
        </div>

        <div>
          <label htmlFor="cf-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Correo electrónico <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            name="email"
            placeholder="juan@empresa.com"
            required
            autoComplete="email"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950"
          />
        </div>

        <div>
          <label htmlFor="cf-mensaje" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Detalle del proyecto <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <textarea
            id="cf-mensaje"
            name="mensaje"
            rows={4}
            placeholder="Tipo de instalación (split, VRF, central), superficie aproximada, uso del espacio (oficina, planta, hogar)..."
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-xl bg-blue-700 hover:bg-blue-800 transition text-white font-semibold text-lg disabled:opacity-60"
        >
          {loading ? "Enviando..." : "Enviar solicitud"}
        </button>

        {sent && (
          <p role="status" className="text-green-600 text-center font-medium">
            Solicitud enviada correctamente. Nos comunicaremos a la brevedad.
          </p>
        )}
      </form>
    </div>
  );
}
