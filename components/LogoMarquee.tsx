import Image from "next/image";

const LOGOS = [
  { src: "/iconos/coca.png", name: "Coca-Cola" },
  { src: "/iconos/iconoempresa4.png", name: "Nestlé" },
  { src: "/iconos/parque.png", name: "Parque Avellaneda" },
  { src: "/iconos/gancia.png", name: "Gancia" },
  { src: "/iconos/barbieri.png", name: "Dapsa" },
  { src: "/iconos/bam.png", name: "Barbieri" },
  { src: "/iconos/puppis.png", name: "Puppis" },
  { src: "/iconos/sherwin.png", name: "Sherwin Williams" },
];

export default function LogoMarquee() {
  const double = [...LOGOS, ...LOGOS];
  return (
    <div className="relative overflow-hidden marquee-pause">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex marquee-track w-max">
        {double.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[200px] h-[110px] flex items-center justify-center px-8"
          >
            <div className="relative w-full h-full">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="200px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
