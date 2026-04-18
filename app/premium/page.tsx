// app/premium/page.tsx — página corporativa B2B de Serviclima
import HeroSectionPremium from "@/components/premium/HeroSectionPremium";
import StatsBannerPremium from "@/components/premium/StatsBannerPremium";
import ClientsPremium from "@/components/premium/ClientsPremium";
import BrandsPremium from "@/components/premium/BrandsPremium";
import ServicesPremium from "@/components/premium/ServicesPremium";
import ProcessSectionPremium from "@/components/premium/ProcessSectionPremium";
import WhyUsPremium from "@/components/premium/WhyUsPremium";
import TestimonialsPremium from "@/components/premium/TestimonialsPremium";
import ContactSectionPremium from "@/components/premium/ContactSectionPremium";
import FAQPremium from "@/components/premium/FAQPremium";
import StickyActionsPremium from "@/components/premium/StickyActionsPremium";

export default function PremiumPage() {
  return (
    <main className="bg-white text-slate-900">

      <HeroSectionPremium />
      <StatsBannerPremium />
      <ClientsPremium />
      <BrandsPremium />
      <ServicesPremium />
      <ProcessSectionPremium />
      <WhyUsPremium />
      <TestimonialsPremium />
      <ContactSectionPremium />
      <FAQPremium />
      <StickyActionsPremium />

    </main>
  );
}
// Sat Apr 18 12:02:01 UTC 2026
