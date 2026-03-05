import heroImage from "@/assets/hero-space.jpg";
import ssipLogo from "@/assets/ssip-logo.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Space orbital infrastructure" className="w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
      </div>

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
