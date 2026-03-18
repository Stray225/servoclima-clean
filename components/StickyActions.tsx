"use client";
import { trackConversion } from "@/lib/analytics";

type Props = { tel: string; whats: string };

export default function StickyActions({ tel, whats }: Props) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
      <div className="mx-3 mb-3 rounded-2xl shadow-lg overflow-hidden grid grid-cols-2 text-white">
        
        <a
          href={`https://wa.me/${whats}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            trackConversion();
            setTimeout(() => {
              window.open(`https://wa.me/${whats}`, "_blank", "noopener,noreferrer");
            }, 300);
          }}
          className="bg-green-500 py-3 text-center font-semibold"
        >
          WhatsApp
        </a>

        <a
          href={`tel:${tel}`}
          className="bg-slate-900 py-3 text-center font-semibold"
        >
          Llamar
        </a>

      </div>
    </div>
  );
}
