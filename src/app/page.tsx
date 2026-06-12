import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <TargetAudienceSection />
        <PricingSection />
        <PortfolioSection />
        <ProcessSection />
        <WhyUsSection />
        <FinalCtaSection />
      </main>
    </>
  );
}
