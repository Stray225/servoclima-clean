import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const SITE_URL = "https://serviclim.ar"; // ajusta si usas otro dominio
const BUSINESS_NAME = "Serviclima";
const PHONE_E164 = "+541123579760"; // click-to-call
const PHONE_HUMAN = "(011) 2357-9760";
const AREAS = [
  "Ciudad Autónoma de Buenos Aires",
  "Gran Buenos Aires Sur",
  "Gran Buenos Aires Oeste",
  "Gran Buenos Aires Norte",
];

export const metadata: Metadata = {
  title: "Serviclima | Climatización empresarial e instalación de splits",
  description:
    "Climatización para empresas, condominios y plantas: VRF/VRV, conductos y proyectos llave en mano. También instalación y service de splits. CABA y Zona Sur.",
  openGraph: {
    title: "Serviclima | Climatización empresarial y residencial",
    description:
      "Ingeniería e instalación de sistemas centrales y VRF/VRV. Mantenimiento y service. También splits y multisplits.",
    type: "website",
    url: SITE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: BUSINESS_NAME }],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD LocalBusiness
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    url: SITE_URL,
    telephone: PHONE_E164,
    image: `${SITE_URL}/og-image.png`,
    areaServed: AREAS,
    address: {
      "@type": "PostalAddress",
      addressLocality: "CABA y GBA",
      addressCountry: "AR",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
    ],
    sameAs: [], // agrega Instagram si querés
  };

  // JSON-LD FAQPage
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Trabajan con facturación y garantía?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, emitimos factura y todas nuestras instalaciones quedan cubiertas por garantía escrita.",
        },
      },
      {
        "@type": "Question",
        name: "¿Atienden empresas y condominios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, realizamos ingeniería, instalación y mantenimiento programado para empresas, plantas y consorcios.",
        },
      },
      {
        "@type": "Question",
        name: "¿Llegan a mi zona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cubrimos CABA y GBA (Zona Sur, Oeste y Norte). Consultanos por WhatsApp y te confirmamos hoy.",
        },
      },
    ],
  };

  return (
    <html lang="es">
      <body className="bg-slate-50 text-slate-900">
        <Navbar />
        {children}
        <Footer />

        {/* JSON-LD inline */}
        <Script id="ld-localbusiness" type="application/ld+json">
          {JSON.stringify(localBusiness)}
        </Script>
        <Script id="ld-faq" type="application/ld+json">
          {JSON.stringify(faq)}
        </Script>
      </body>
    </html>
  );
}
