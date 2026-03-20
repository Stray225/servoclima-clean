"use client";

const TEL = "+541123579760";
const WHATS = "5491123579760";

export default function StickyActionsPremium() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
      <div className="mx-3 mb-3 rounded-2xl shadow-lg overflow-hidden grid grid-cols-2 text-white">
        <a
          href={`https://wa.me/${WHATS}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 py-3 text-center font-semibold text-sm"
        >
          WhatsApp
        </a>
        <a
          href={`tel:${TEL}`}
          className="bg-slate-900 py-3 text-center font-semibold text-sm"
        >
          Llamar
        </a>
      </div>
    </div>
  );
}
