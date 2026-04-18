import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Script from "next/script";

const SITE_URL = "https://serviclim.ar";
const BUSINESS_NAME = "Serviclima";
const PHONE_E164 = "+541121732871";
const PHONE_HUMAN = "(011) 2173-2871";
const EMAIL = "serviclima@serviclim.com.ar";
const AREAS = [
  "Ciudad Autónoma de Buenos Aires",
  "Gran Buenos Aires Sur",
  "Gran Buenos Aires Oeste",
  "Gran Buenos Aires Norte",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Serviclima | Instalación y service de aire acondicionado · CABA y GBA",
    template: "%s | Serviclima",
  },
  description:
    "Instalación, service y mantenimiento de aire acondicionado en CABA y GBA. Splits, VRF/VRV, sistemas centrales y climatización para empresas e industrias. Agente oficial Surrey.",
  keywords: [
    "instalación aire acondicionado",
    "service aire acondicionado",
    "mantenimiento aire acondicionado",
    "climatización empresas",
    "climatización industrial",
    "reparación aire acondicionado",
    "instalación split",
    "climatización comercial",
    "VRF VRV",
    "aire acondicionado CABA",
    "aire acondicionado GBA",
  ],
  openGraph: {
    title: "Serviclima | Instalación y service de aire acondicionado · CABA y GBA",
    description:
      "Instalación, service y mantenimiento de aire acondicionado en CABA y GBA. Splits, VRF/VRV y sistemas centrales para empresas e industrias.",
    type: "website",
    url: SITE_URL,
    locale: "es_AR",
    siteName: "Serviclima",
    images: [{ url: "/serviclimas-logo.png", width: 400, height: 120, alt: "Serviclima" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serviclima | Instalación y service de aire acondicionado · CABA y GBA",
    description:
      "Instalación, service y mantenimiento de aire acondicionado en CABA y GBA. Agente oficial Surrey.",
    images: ["/serviclimas-logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HVACBusiness"],
    name: "Serviclima Heating & Cooling S.R.L.",
    url: SITE_URL,
    telephone: PHONE_E164,
    email: EMAIL,
    image: `${SITE_URL}/serviclimas-logo.png`,
    description:
      "Instalación, service y mantenimiento de aire acondicionado en CABA y GBA. Especialistas en splits, VRF/VRV, chillers y proyectos termomecánicos para empresas e industrias.",
    priceRange: "$$",
    areaServed: AREAS.map((area) => ({ "@type": "AdministrativeArea", name: area })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressRegion: "CABA",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.6037,
      longitude: -58.3816,
    },
    hasMap: "https://maps.google.com/?q=Buenos+Aires+Argentina",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    knowsAbout: [
      "Instalación de aire acondicionado",
      "Service de aire acondicionado",
      "Mantenimiento de aire acondicionado",
      "Climatización industrial",
      "Sistemas VRF VRV",
      "Chillers",
      "Splits y multisplits",
    ],
    sameAs: [],
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
          text: "Sí. La mayor parte de nuestra cartera son empresas, industrias, plantas productivas y edificios corporativos. Tenemos experiencia en proyectos de gran escala, gestión de obra llave en mano y documentación completa para auditorías. También atendemos residencial premium y consorcios de edificios.",
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
          text: "Somos agentes oficiales de Surrey, lo que nos da acceso directo a repuestos originales, garantía de fábrica y soporte técnico prioritario. Trabajamos con Daikin, Carrier, Trane y Midea, entre otras.",
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
    <html lang="es">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18023933418"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18023933418');
          `}
        </Script>
      </head>
      <body className="bg-slate-50 text-slate-900">
        <ScrollReveal />
        <Navbar />
        {children}
        <Footer />

        <Script id="ld-localbusiness" type="application/ld+json">
          {JSON.stringify(localBusiness)}
        </Script>
        <Script id="ld-faq" type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </Script>
      </body>
    </html>
  );
}
