import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "2-Day Full Access",
    duration: "June 24–25",
    price: "1,750 CHF",
    features: [
      "Access to the full Summit",
      "Access to Social Events (Exclusive Dinner, Visits 24th)",
      "Closed Strategy Sessions",
      "Parallel Executive Dialogues & Bilateral Meetings",
      "Facilitated closed-door discussions, bilateral meetings and ecosystem alignment among invited participants (under NDA)",
    ],
    cardBg: "bg-gradient-to-br from-[hsl(220,10%,70%)] via-[hsl(215,15%,80%)] to-[hsl(210,12%,88%)] text-slate-900 border border-[hsl(220,15%,75%)]/60 shadow-xl",
    btnClass: "bg-slate-800 text-white hover:bg-slate-700",
  },
  {
    name: "1-Day Full Access",
    duration: "June 25",
    price: "1,200 CHF",
    features: [
      "Access to 1-day Summit (25th)",
      "Closed Strategy Sessions",
      "Parallel Executive Dialogues & Bilateral Meetings",
      "Facilitated closed-door discussions, bilateral meetings and ecosystem alignment among invited participants",
    ],
    cardBg: "bg-gradient-to-br from-[hsl(43,80%,60%)] to-[hsl(38,70%,75%)] text-amber-950 border border-amber-400/50",
    btnClass: "bg-amber-900 text-white hover:bg-amber-800",
  },
  {
    name: "1-Day Summit",
    duration: "June 25",
    price: "750 CHF",
    features: [
      "Access to 1-day Summit (25th)",
    ],
    cardBg: "bg-gradient-to-br from-[hsl(0,0%,72%)] to-[hsl(0,0%,82%)] text-gray-900 border border-gray-400/50",
    btnClass: "bg-gray-700 text-white hover:bg-gray-600",
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
              className={`rounded-2xl p-8 flex flex-col shadow-lg ${tier.cardBg}`}
            >
              <h3 className="font-display text-lg font-bold mb-1">{tier.name}</h3>
              <p className="text-sm mb-6 opacity-70">{tier.duration}</p>
              <p className="text-3xl font-display font-bold mb-8">{tier.price}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button className={`w-full font-display tracking-wider ${tier.btnClass}`}>
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
