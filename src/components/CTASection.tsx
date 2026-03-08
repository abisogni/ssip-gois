import { Button } from "@/components/ui/button";
import { Mail, Mic } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-4xl">
        <div className="glass-panel rounded-2xl p-10 md:p-16 text-center glow-border">
          <Mic className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Interested in <span className="text-primary">Speaking or Participating?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            GOIS is a curated international summit bringing together decision-makers across the global space economy. If your organization is advancing commercial space stations, launch & logistics, in-orbit manufacturing,
            microgravity research, or enabling infrastructure — we would be delighted to welcome you in Switzerland.
          </p>
          <p className="text-muted-foreground mb-8 text-sm">
            We are welcoming leading organizations and speakers shaping the future of orbital infrastructure across the United States, Europe, and Asia.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="gradient-primary text-primary-foreground font-display tracking-wider text-sm px-10 py-6 rounded-full glow-border hover:scale-105 transition-transform"
              asChild
            >
              <a href="mailto:contact@ssip-pl.ch">
                <Mail className="w-4 h-4 mr-2" />
                contact@ssip-pl.ch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
