// app/premium/page.tsx
// Página premium B2B — archivos originales intactos
import HeroSectionPremium from "@/components/premium/HeroSectionPremium";
import StatsBannerPremium from "@/components/premium/StatsBannerPremium";
import BrandsPremium from "@/components/premium/BrandsPremium";
import ClientsPremium from "@/components/premium/ClientsPremium";
import ServicesPremium from "@/components/premium/ServicesPremium";
import WhyUsPremium from "@/components/premium/WhyUsPremium";
import TestimonialsPremium from "@/components/premium/TestimonialsPremium";
import ClientPortalPremium from "@/components/premium/ClientPortalPremium";
import ContactSectionPremium from "@/components/premium/ContactSectionPremium";
import FAQPremium from "@/components/premium/FAQPremium";
import StickyActionsPremium from "@/components/premium/StickyActionsPremium";

export default function PremiumPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">

      {/* 1. Hero — messaging corporativo */}
      <HeroSectionPremium />

      {/* 2. Stats — +15 años, +200 instalaciones, +50 empresas, 24/7 */}
      <StatsBannerPremium />

      {/* 3. Primeras marcas — Surrey, Daikin, Carrier, Trane... */}
      <BrandsPremium />

      {/* 4. Clientes — logos en B&N, color al hover */}
      <ClientsPremium />

      {/* 5. Servicios — solapas: Instalaciones / Proyectos / Mantenimiento / Ingeniería */}
      <ServicesPremium />

      {/* 6. Por qué elegirnos — diferenciadores + sectores (con Laboratorio) */}
      <WhyUsPremium />

      {/* 7. Testimonios */}
      <TestimonialsPremium />

      {/* 8. Portal de clientes — ingresá con usuario para ver tu último informe */}
      <ClientPortalPremium />

      {/* 9. Contacto — formulario enterprise */}
      <ContactSectionPremium />

      {/* 10. FAQ — acordeón enterprise */}
      <FAQPremium />

      {/* 11. Mobile sticky — WhatsApp + Llamar (sin hogares al final) */}
      <StickyActionsPremium />

    </main>
  );
}
