import type { Metadata } from "next";
import "../globals.css";
import NavbarPremium from "@/components/premium/NavbarPremium";
import FooterPremium from "@/components/premium/FooterPremium";

export const metadata: Metadata = {
  title: "Serviclima | Climatización corporativa e industrial premium",
  description:
    "Ingeniería, instalación y mantenimiento de sistemas de climatización para empresas, industrias y edificios corporativos. VRF/VRV, chillers, proyectos llave en mano. CABA y GBA.",
};

export default function PremiumLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarPremium />
      {children}
      <FooterPremium />
    </>
  );
}
