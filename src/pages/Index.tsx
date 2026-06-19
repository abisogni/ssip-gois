import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import AgendaSection from "@/components/AgendaSection";
import ThemesSection from "@/components/ThemesSection";
import ReasonsSection from "@/components/ReasonsSection";
import SpeakersCarousel from "@/components/SpeakersCarousel";
import SpeakersSection from "@/components/SpeakersSection";
import SponsorsSection from "@/components/SponsorsSection";
import MarketAccessSection from "@/components/MarketAccessSection";
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
      <SpeakersCarousel />
      <div id="speakers"><SpeakersSection /></div>
      <SponsorsSection />
      <MarketAccessSection />
      <CTASection />
      <div id="partners"><FooterSection /></div>
    </div>
  );
};

export default Index;
