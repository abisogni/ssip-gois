import heroImage from "@/assets/hero-space.jpg";
import ssipLogo from "@/assets/ssip-logo.png";
import orbitalStation from "@/assets/orbital-station.png";
import orbitalStation3 from "@/assets/orbital-station-3.png";
import rocket from "@/assets/rocket.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Earth rotating together with orbital stations */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="relative w-[140%] h-[140%] animate-spin-slow">
          <img src={heroImage} alt="Space orbital infrastructure" className="absolute inset-0 w-full h-full object-cover" />
          <img
            src={orbitalStation}
            alt=""
            className="absolute top-[15%] right-[18%] w-12 md:w-24 opacity-70"
          />
        </div>
      </div>
      <div className="absolute inset-0 hero-overlay" />

      {/* New orbital station - top left */}
      <img
        src={orbitalStation3}
        alt=""
        className="absolute top-[8%] left-[5%] md:top-[12%] md:left-[8%] w-20 md:w-36 opacity-50 animate-orbit-slow pointer-events-none select-none"
      />

      {/* Rocket flying toward the station */}
      <img
        src={rocket}
        alt=""
        className="absolute bottom-[30%] right-[15%] md:bottom-[35%] md:right-[10%] w-10 md:w-20 opacity-70 animate-rocket pointer-events-none select-none"
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <img src={ssipLogo} alt="SSIP Logo" className="w-20 h-20 mx-auto mb-6" />
        <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4 animate-pulse-glow">
          Organized by SSIP — Space Systems Innovation Platform
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 glow-text leading-tight">
          Global Orbital Infrastructure <span className="text-primary">Summit 2026</span>
        </h1>
        <p className="text-lg md:text-2xl font-light text-foreground/80 mb-2 max-w-3xl mx-auto">
          Uniting Innovators, Shaping the Future of Orbital Infrastructure
        </p>
        <p className="text-muted-foreground text-base md:text-lg mb-4">
          Organized by <span className="text-primary font-semibold">SSIP</span> — Space Systems Innovation Platform
        </p>
        <div className="flex flex-col items-center justify-center gap-1 text-muted-foreground mb-10 font-display text-sm tracking-wider">
          <div className="flex items-center gap-2">
            <span>🇨🇭</span>
            <span>June 24–25, 2026</span>
            <span className="text-primary">|</span>
            <span>Technopark Luzern, Switzerland</span>
          </div>
          <span className="text-xs text-muted-foreground/70">In collaboration with HSLU</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="gradient-primary text-primary-foreground font-display tracking-wider text-sm px-10 py-6 rounded-full glow-border hover:scale-105 transition-transform"
            asChild
          >
            <a href="mailto:contact@ssip-pl.ch">Pre-Register Now</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-display tracking-wider text-sm px-10 py-6 rounded-full border-primary/40 text-primary hover:bg-primary/10 transition-all"
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
