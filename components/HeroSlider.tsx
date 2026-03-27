"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/fotoslide1.webp", alt: "Instalación de sistema VRF en planta industrial" },
  { src: "/fotoslide2.webp", alt: "Equipo de climatización en edificio corporativo" },
  { src: "/equipos2.png",    alt: "Sistema de aire acondicionado central instalado por Serviclima" },
  { src: "/equipos3.png",    alt: "Climatización de precisión para entornos industriales" },
  { src: "/equipos4.png",    alt: "Mantenimiento de equipos de climatización comercial" },
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

      <Image
        key={SLIDES[index].src}
        src={SLIDES[index].src}
        alt={SLIDES[index].alt}
        fill
        priority={index === 0}
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
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
            aria-label={`Ver imagen ${i + 1} de ${SLIDES.length}`}
            aria-current={i === index ? "true" : undefined}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
