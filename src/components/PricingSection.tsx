import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "GOIS Standard",
    date: "June 24–25, 2026",
    location: "Lisbon, Portugal",
    price: "1,480€",
    features: ["Access to the full conference", "Access to social events", "Access to the exhibition area"],
    highlight: false,
  },
  {
    name: "GOIS Government / Military",
    date: "June 24–25, 2026",
    location: "Lisbon, Portugal",
    price: "680€",
    features: ["Access to the full conference", "Access to social events", "Access to the exhibition area"],
    highlight: true,
  },
  {
    name: "GOIS VIP & Partners",
    date: "June 24–25, 2026",
    location: "Lisbon, Portugal",
    price: "Upon Request",
    features: ["Priority seating & VIP lounge", "Exclusive networking dinner", "Access to all conference areas"],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          Want to <span className="text-primary">Attend?</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16">Choose the pass that best fits your profile.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 flex flex-col ${
                tier.highlight
                  ? "gradient-primary text-primary-foreground glow-border"
                  : "glass-panel"
              }`}
            >
              <h3 className="font-display text-lg font-bold mb-1">{tier.name}</h3>
              <p className={`text-sm mb-1 ${tier.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {tier.date}
              </p>
              <p className={`text-sm mb-6 ${tier.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {tier.location}
              </p>
              <p className="text-3xl font-display font-bold mb-8">{tier.price}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.highlight ? "secondary" : "default"}
                className={`w-full font-display tracking-wider ${
                  !tier.highlight ? "gradient-primary text-primary-foreground" : ""
                }`}
              >
                Register
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
