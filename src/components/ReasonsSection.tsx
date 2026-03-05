import { MapPin, Handshake, ShieldCheck, Globe, Lightbulb } from "lucide-react";

const reasons = [
  { icon: Globe, title: "Global Leaders", desc: "400+ C-level decision makers from leading space organizations across 25+ countries." },
  { icon: Handshake, title: "Strategic Networking", desc: "Connect with agencies, operators, investors, and innovators in an exclusive setting." },
  { icon: Lightbulb, title: "Cutting-Edge Insights", desc: "Hear from 80+ world-class speakers on the future of orbital infrastructure." },
  { icon: MapPin, title: "Prime Location", desc: "Lisbon — a vibrant, accessible European hub for the international space community." },
  { icon: ShieldCheck, title: "Curated Experience", desc: "Pre-registration and invitation-only access for an intimate, high-value environment." },
];

const ReasonsSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
          5 Reasons to <span className="text-primary">Attend</span>
        </h2>
        <div className="space-y-6">
          {reasons.map((r, i) => (
            <div key={r.title} className="flex items-start gap-5 glass-panel rounded-xl p-6 hover:glow-border transition-all">
              <div className="gradient-primary rounded-full p-3 shrink-0">
                <r.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">{r.title}</h3>
                <p className="text-muted-foreground text-sm">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
