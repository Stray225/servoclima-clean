// app/premium/page.tsx
// Nueva página premium B2B — no modifica ningún archivo existente
import HeroSectionPremium from "@/components/premium/HeroSectionPremium";
import StatsBannerPremium from "@/components/premium/StatsBannerPremium";
import ClientsPremium from "@/components/premium/ClientsPremium";
import ServicesPremium from "@/components/premium/ServicesPremium";
import WhyUsPremium from "@/components/premium/WhyUsPremium";
import TestimonialsPremium from "@/components/premium/TestimonialsPremium";
import ContactSectionPremium from "@/components/premium/ContactSectionPremium";
import FAQPremium from "@/components/premium/FAQPremium";
import StickyActionsPremium from "@/components/premium/StickyActionsPremium";

export default function PremiumPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <HeroSectionPremium />
      <StatsBannerPremium />
      <ClientsPremium />
      <ServicesPremium />
      <WhyUsPremium />
      <TestimonialsPremium />
      <ContactSectionPremium />
      <FAQPremium />
      <StickyActionsPremium />
    </main>
  );
}
