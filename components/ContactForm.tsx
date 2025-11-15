"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      nombre: formData.get("nombre"),
      telefono: formData.get("telefono"),
      email: formData.get("email"),
      mensaje: formData.get("mensaje"),
    };

    // ————————————
    // ACÁ se envía a tu backend o servicio de emails (Resend, Formspree, etc.)
    // Por ahora lo simulo:
    await new Promise((res) => setTimeout(res, 1200));
    // ————————————

    setLoading(false);
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 mt-10 border border-slate-200 dark:border-slate-700">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
        Solicitar cotización
      </h2>

      <p className="text-slate-600 dark:text-slate-300 mb-6">
        Completá el formulario y nos pondremos en contacto a la brevedad.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            Nombre completo
          </label>
          <input
            type="text"
            name="nombre"
            required
            className="w-full mt-1 px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            Teléfono
          </label>
          <input
            type="text"
            name="telefono"
            required
            className="w-full mt-1 px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full mt-1 px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            Mensaje / Detalles del servicio solicitado
          </label>
          <textarea
            name="mensaje"
            rows={4}
            required
            className="w-full mt-1 px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
        >
          {loading ? "Enviando..." : "Enviar solicitud"}
        </button>

        {sent && (
          <p className="text-green-600 font-medium mt-2 text-center">
            ¡Tu solicitud fue enviada correctamente!
          </p>
        )}
      </form>
    </div>
  );
}
