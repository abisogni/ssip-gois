import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "2-Day Full Access",
    tier: "Platinum",
    duration: "June 24–25",
    price: "1,750 CHF",
    features: [
      "Access to the full Summit",
      "Access to Social Events (Exclusive Dinner, Visits 24th)",
      "Closed Strategy Sessions",
      "Parallel Executive Dialogues & Bilateral Meetings",
      "Facilitated closed-door discussions, bilateral meetings and ecosystem alignment among invited participants (under NDA)",
    ],
    highlight: true,
    tierColor: "from-slate-300 to-slate-100 text-slate-800",
    badgeBg: "bg-gradient-to-r from-slate-300 to-slate-100 text-slate-900",
  },
  {
    name: "1-Day Full Access",
    tier: "Gold",
    duration: "June 25",
    price: "1,200 CHF",
    features: [
      "Access to 1-day Summit (25th)",
      "Closed Strategy Sessions",
      "Parallel Executive Dialogues & Bilateral Meetings",
      "Facilitated closed-door discussions, bilateral meetings and ecosystem alignment among invited participants",
    ],
    highlight: false,
    tierColor: "from-yellow-400 to-amber-300 text-amber-900",
    badgeBg: "bg-gradient-to-r from-yellow-400 to-amber-300 text-amber-900",
  },
  {
    name: "1-Day Summit",
    tier: "Silver",
    duration: "June 25",
    price: "750 CHF",
    features: [
      "Access to 1-day Summit (25th)",
    ],
    highlight: false,
    tierColor: "from-gray-400 to-gray-300 text-gray-800",
    badgeBg: "bg-gradient-to-r from-gray-400 to-gray-300 text-gray-800",
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
              <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${tier.badgeBg}`}>
                {tier.tier}
              </span>
              <h3 className="font-display text-lg font-bold mb-1">{tier.name}</h3>
              <p className={`text-sm mb-6 ${tier.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {tier.duration}
              </p>
              <p className="text-3xl font-display font-bold mb-8">{tier.price}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" />
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
