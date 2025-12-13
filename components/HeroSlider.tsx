"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const SLIDES = [
  "/fotoslide1.webp",
  "/fotoslide2.webp",
  "/equipos2.png",
  "/equipos3.png",
  "/equipos4.png",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[520px] rounded-2xl overflow-hidden shadow-lg">

      {/* Imagen */}
      <Image
        key={SLIDES[index]}
        src={SLIDES[index]}
        alt="Soluciones de climatización industrial"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      {/* Texto */}
      <div className="absolute bottom-8 left-8 right-8 text-white">
        <p className="text-sm uppercase tracking-wide text-blue-200 mb-1">
          Proyectos · Ingeniería · Mantenimiento
        </p>
        <h3 className="text-2xl font-semibold max-w-md">
          Soluciones de climatización diseñadas para operación continua y entornos críticos
        </h3>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-6 right-6 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
