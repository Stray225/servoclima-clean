"use client";

type Props = { tel: string; whats: string };

export default function StickyActions({ tel, whats }: Props) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
      <div className="mx-3 mb-3 rounded-2xl shadow-lg overflow-hidden grid grid-cols-2 text-white">
        <a
          href={`https://wa.me/${whats}?text=Hola%20quisiera%20asesoramiento%20en%20climatizaci%C3%B3n`}
          target="_blank"
          className="bg-green-500 py-3 text-center font-semibold"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <a href={`tel:${tel}`} className="bg-slate-900 py-3 text-center font-semibold">
          Llamar
        </a>
      </div>
    </div>
  );
}
