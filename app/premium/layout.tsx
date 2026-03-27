import type { Metadata } from "next";
import "../globals.css";
import NavbarPremium from "@/components/premium/NavbarPremium";
import FooterPremium from "@/components/premium/FooterPremium";
import Script from "next/script";

const SITE_URL = "https://serviclim.ar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Serviclima Premium | Climatización industrial y corporativa · CABA y GBA",
  description:
    "Ingeniería, instalación y mantenimiento de sistemas de climatización para empresas, industrias y edificios corporativos. VRF/VRV, chillers, proyectos llave en mano. CABA y GBA. Agente oficial Surrey.",
  keywords: [
    "climatización empresas",
    "climatización industrial",
    "climatización corporativa",
    "instalación VRF VRV",
    "chillers industriales",
    "mantenimiento aire acondicionado empresas",
    "proyectos termomecánicos",
    "ingeniería climatización",
    "aire acondicionado industrial",
    "HVAC Argentina",
  ],
  openGraph: {
    title: "Serviclima | Climatización industrial y corporativa · CABA y GBA",
    description:
      "Ingeniería, instalación y mantenimiento de climatización para empresas que no pueden permitirse interrupciones. VRF/VRV, chillers, contratos con SLA. CABA y GBA.",
    type: "website",
    url: `${SITE_URL}/premium`,
    locale: "es_AR",
    siteName: "Serviclima",
    images: [{ url: "/serviclima-logo.png", width: 400, height: 120, alt: "Serviclima" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serviclima | Climatización industrial y corporativa · CABA y GBA",
    description:
      "Ingeniería, instalación y mantenimiento de climatización para empresas. VRF/VRV, chillers, contratos con SLA. CABA y GBA.",
    images: ["/serviclima-logo.png"],
  },
  alternates: {
    canonical: `${SITE_URL}/premium`,
  },
};

export default function PremiumLayout({ children }: { children: React.ReactNode }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "HVAC Engineering and Installation",
    provider: {
      "@type": "HVACBusiness",
      name: "Serviclima Heating & Cooling S.R.L.",
      url: SITE_URL,
      telephone: "+541123579760",
      areaServed: [
        "Ciudad Autónoma de Buenos Aires",
        "Gran Buenos Aires Sur",
        "Gran Buenos Aires Oeste",
        "Gran Buenos Aires Norte",
      ],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de climatización industrial y corporativa",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Instalación de sistemas VRF/VRV",
            description:
              "Instalación de sistemas de volumen de refrigerante variable para edificios corporativos, plantas industriales y centros logísticos.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Proyectos termomecánicos llave en mano",
            description:
              "Gestión integral de obras termomecánicas de gran escala: desde el anteproyecto hasta la puesta en marcha con documentación técnica completa.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Contratos de mantenimiento con SLA",
            description:
              "Mantenimiento preventivo y correctivo con tiempos de respuesta definidos en contrato para empresas con operación continua.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ingeniería y consultoría en climatización",
            description:
              "Cálculo térmico, memorias técnicas, planos as-built y especificaciones para licitaciones, auditorías y habilitaciones municipales.",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Trabajan con empresas e industrias de gran escala?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La mayor parte de nuestra cartera son empresas, industrias, plantas productivas y edificios corporativos. Tenemos experiencia en proyectos de gran escala, gestión de obra llave en mano y documentación completa para auditorías.",
        },
      },
      {
        "@type": "Question",
        name: "¿Emiten documentación técnica para licitaciones y auditorías?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutamente. Entregamos memoria descriptiva, cálculo térmico, planos as-built, certificados de instalación y toda la documentación que necesite su área técnica, legal o de compliance.",
        },
      },
      {
        "@type": "Question",
        name: "¿Ofrecen contratos de mantenimiento con SLA definido?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Diseñamos programas de mantenimiento preventivo con frecuencias acordadas (mensual, trimestral, semestral) e incluimos respuesta correctiva con tiempos de atención definidos y escritos en contrato.",
        },
      },
      {
        "@type": "Question",
        name: "¿Son agentes oficiales de alguna marca?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Somos agentes oficiales de Surrey, lo que nos da acceso directo a repuestos originales, garantía de fábrica y soporte técnico prioritario. Trabajamos también con Daikin, Carrier, Trane y Midea.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué zonas de cobertura tienen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Operamos en CABA, GBA Sur, GBA Oeste y GBA Norte. Para proyectos de gran escala en el interior del país, consultenos directamente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Trabajan con factura A y garantía formal por escrito?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Siempre. Factura A o B según corresponda, y garantía escrita en cada instalación.",
        },
      },
    ],
  };

  return (
    <>
      <NavbarPremium />
      {children}
      <FooterPremium />

      <Script id="ld-service-premium" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id="ld-faq-premium" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
    </>
  );
}
