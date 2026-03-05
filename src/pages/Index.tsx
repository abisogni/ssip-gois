import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import ThemesSection from "@/components/ThemesSection";
import ReasonsSection from "@/components/ReasonsSection";
import PricingSection from "@/components/PricingSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <div id="about"><AboutSection /></div>
      <div id="themes"><ThemesSection /></div>
      <div id="attend"><ReasonsSection /></div>
      <PricingSection />
      <div id="partners"><FooterSection /></div>
    </div>
  );
};

export default Index;
