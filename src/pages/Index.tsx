import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import AgendaSection from "@/components/AgendaSection";
import ThemesSection from "@/components/ThemesSection";
import ReasonsSection from "@/components/ReasonsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import RegistrationFormDialog from "@/components/RegistrationFormDialog";

const Index = () => {
  const [regOpen, setRegOpen] = useState(false);
  const openReg = () => setRegOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onRegisterClick={openReg} />
      <HeroSection onRegisterClick={openReg} />
      <StatsBar />
      <div id="about"><AboutSection /></div>
      <div id="agenda"><AgendaSection /></div>
      <div id="themes"><ThemesSection /></div>
      <div id="attend"><ReasonsSection /></div>
      <PricingSection onRegisterClick={openReg} />
      <CTASection />
      <div id="partners"><FooterSection /></div>
      <RegistrationFormDialog open={regOpen} onOpenChange={setRegOpen} />
    </div>
  );
};

export default Index;
