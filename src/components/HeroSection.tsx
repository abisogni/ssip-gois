import { lazy, Suspense } from "react";
import ssipLogo from "@/assets/ssip-logo.png";
import realStation1 from "@/assets/real-station-1.png";
import realStation2 from "@/assets/real-station-2.png";
import rocket from "@/assets/rocket.png";
import { Button } from "@/components/ui/button";

const SpaceBackground = lazy(() => import("@/components/SpaceBackground"));

interface HeroSectionProps {
  onRegisterClick?: () => void;
}

const HeroSection = ({ onRegisterClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-16">
      <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
        <SpaceBackground />
      </Suspense>
      <div className="absolute inset-0" style={{ zIndex: 1, background: 'linear-gradient(180deg, transparent 0%, transparent 35%, hsl(220 20% 4% / 0.4) 60%, hsl(220 20% 4% / 0.85) 100%)' }} />
      <img src={realStation1} alt="" className="absolute top-[14%] right-[3%] md:top-[15%] md:right-[7%] w-14 sm:w-20 md:w-36 opacity-60 sm:opacity-75 animate-orbit-slow pointer-events-none select-none" style={{ zIndex: 2, filter: 'brightness(1.1) contrast(1.15)' }} />
      <img src={realStation2} alt="" className="absolute bottom-[24%] left-[2%] md:bottom-[26%] md:left-[5%] w-10 sm:w-14 md:w-26 opacity-40 sm:opacity-55 animate-orbit-reverse pointer-events-none select-none" style={{ zIndex: 2, filter: 'brightness(1.0) contrast(1.15)' }} />
      <img src={rocket} alt="" className="absolute bottom-[10%] right-[8%] md:bottom-[10%] md:right-[18%] w-5 sm:w-8 md:w-14 opacity-50 sm:opacity-70 animate-rocket pointer-events-none select-none" style={{ zIndex: 2, filter: 'brightness(1.1)' }} />

      <div className="relative z-10 text-center px-6 sm:px-8 max-w-5xl mx-auto" style={{ textShadow: '0 2px 20px hsl(220 20% 4% / 0.9), 0 4px 40px hsl(220 20% 4% / 0.7), 0 0 80px hsl(220 20% 4% / 0.5)' }}>
        <img src={ssipLogo} alt="SSIP Logo" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-5 sm:mb-6" />
        <h1 className="text-[1.55rem] sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-5 md:mb-6 glow-text leading-[1.2] sm:leading-tight">
          Global Orbital Infrastructure{" "}
          <span className="text-primary">Summit&nbsp;2026</span>
        </h1>
        <p className="text-[0.9rem] sm:text-lg md:text-2xl font-light text-foreground/80 mb-2 max-w-3xl mx-auto leading-relaxed">
          Uniting Global Leaders to Shape the Future of Orbital Infrastructure
        </p>
        <p className="text-muted-foreground text-xs sm:text-sm md:text-lg mb-3 sm:mb-4">
          Organized by <span className="text-primary font-semibold">SSIP</span>, Space Systems Innovation Platform
        </p>
        <div className="flex flex-col items-center justify-center gap-1 text-muted-foreground mb-7 sm:mb-10 font-display text-[0.65rem] sm:text-xs md:text-sm tracking-wider">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
            <span>🇨🇭</span>
            <span>June 24‒25, 2026</span>
            <span className="text-primary">|</span>
            <span>Technopark Luzern, Switzerland</span>
          </div>
          <span className="text-[0.6rem] sm:text-xs text-muted-foreground/70 mt-0.5">In collaboration with HSLU</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <Button
            size="lg"
            className="gradient-primary text-primary-foreground font-display tracking-wider text-xs sm:text-sm px-8 sm:px-10 py-5 sm:py-6 rounded-full glow-border hover:scale-105 transition-transform w-full sm:w-auto"
            onClick={onRegisterClick}
          >
            Pre-Register Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-display tracking-wider text-xs sm:text-sm px-8 sm:px-10 py-5 sm:py-6 rounded-full border-primary/40 text-primary hover:bg-primary/10 transition-all w-full sm:w-auto"
            asChild
          >
            <a href="mailto:contact@ssip-pl.ch">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
