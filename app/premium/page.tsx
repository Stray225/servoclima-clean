// app/premium/page.tsx — versión premium B2B orientada a ejecutivos y técnicos corporativos
import HeroSectionPremium from "@/components/premium/HeroSectionPremium";
import StatsBannerPremium from "@/components/premium/StatsBannerPremium";
import ClientsPremium from "@/components/premium/ClientsPremium";
import BrandsPremium from "@/components/premium/BrandsPremium";
import ServicesPremium from "@/components/premium/ServicesPremium";
import ProcessSectionPremium from "@/components/premium/ProcessSectionPremium";
import WhyUsPremium from "@/components/premium/WhyUsPremium";
import TestimonialsPremium from "@/components/premium/TestimonialsPremium";
import ClientPortalPremium from "@/components/premium/ClientPortalPremium";
import ContactSectionPremium from "@/components/premium/ContactSectionPremium";
import FAQPremium from "@/components/premium/FAQPremium";
import StickyActionsPremium from "@/components/premium/StickyActionsPremium";

export default function PremiumPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">

      {/* Hero full-screen oscuro — impacto inmediato */}
      <HeroSectionPremium />

      {/* Métricas con contexto — credibilidad numérica */}
      <StatsBannerPremium />

      {/* Clientes — logos en B&N, color al hover */}
      <ClientsPremium />

      {/* Primeras marcas — Surrey, Daikin, Carrier... */}
      <BrandsPremium />

      {/* Servicios — solapas: Instalaciones / Proyectos / Mantenimiento / Ingeniería */}
      <ServicesPremium />

      {/* Metodología — 4 pasos del proceso */}
      <ProcessSectionPremium />

      {/* Por qué elegirnos — diferenciadores duros */}
      <WhyUsPremium />

      {/* Testimonios — ejecutivos y gerentes */}
      <TestimonialsPremium />

      {/* Portal de clientes — ver último informe */}
      <ClientPortalPremium />

      {/* Contacto — formulario enterprise + datos directos */}
      <ContactSectionPremium />

      {/* FAQ — preguntas de ejecutivos y gerentes de compras */}
      <FAQPremium />

      {/* Mobile sticky */}
      <StickyActionsPremium />

    </main>
  );
}
