"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const SLIDES = [
  "/fotoslide1.webp",
  "/fotoslide2.webp",
  "/fotoslide3.webp",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // Auto–slide cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-xl border bg-white shadow-md">
      
      {/* SLIDE */}
      <div className="relative w-full h-[420px] md:h-[480px] lg:h-[520px]">
        <Image
          key={SLIDES[index]} 
          src={SLIDES[index]}
          alt="Foto de climatización"
          fill
          priority
          className="object-cover object-center transition-all duration-700"
        />
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
