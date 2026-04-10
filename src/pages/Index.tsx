import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import AgendaSection from "@/components/AgendaSection";
import ThemesSection from "@/components/ThemesSection";
import ReasonsSection from "@/components/ReasonsSection";
import PricingSection from "@/components/PricingSection";
import RegistrationSection from "@/components/RegistrationSection";
import SponsorsSection from "@/components/SponsorsSection";
import MarketAccessSection from "@/components/MarketAccessSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [selectedTier, setSelectedTier] = useState("");
  const formRef = useRef<HTMLElement>(null);

  const scrollToForm = (tier?: string) => {
    if (tier) setSelectedTier(tier);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onRegisterClick={() => scrollToForm()} />
      <HeroSection onRegisterClick={() => scrollToForm()} />
      <StatsBar />
      <div id="about"><AboutSection /></div>
      <div id="agenda"><AgendaSection /></div>
      <div id="themes"><ThemesSection /></div>
      <div id="attend"><ReasonsSection /></div>
      <PricingSection onRegisterClick={(tier) => scrollToForm(tier)} />
      <RegistrationSection selectedTier={selectedTier} sectionRef={formRef} />
      <SponsorsSection />
      <MarketAccessSection />
      <CTASection />
      <div id="partners"><FooterSection /></div>
    </div>
  );
};

export default Index;
