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

      {/* TITULO DENTRO DEL FORM */}
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

        <input
          type="text"
          name="nombre"
          placeholder="Nombre y apellido"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950"
        />

        <input
          type="text"
          name="telefono"
          placeholder="Teléfono de contacto"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950"
        />

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950"
        />

        <textarea
          name="mensaje"
          rows={4}
          placeholder="Detalle del servicio, obra o proyecto"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-xl bg-blue-700 hover:bg-blue-800 transition text-white font-semibold text-lg"
        >
          {loading ? "Enviando..." : "Enviar solicitud"}
        </button>

        {sent && (
          <p className="text-green-600 text-center font-medium">
            Solicitud enviada correctamente.
          </p>
        )}
      </form>
    </div>
  );
}
