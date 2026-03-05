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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <div id="about"><AboutSection /></div>
      <div id="agenda"><AgendaSection /></div>
      <div id="themes"><ThemesSection /></div>
      <div id="attend"><ReasonsSection /></div>
      <PricingSection />
      <CTASection />
      <div id="partners"><FooterSection /></div>
    </div>
  );
};

export default Index;
