import { Rocket, Factory, Globe, FlaskConical, Target } from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Exclusive access to the global leaders shaping orbital infrastructure",
    desc: "GOIS 2026 is an invitation-only gathering bringing together space agencies, commercial operators, investors, and policymakers working on the next generation of orbital infrastructure.",
    bullets: [
      "Commercial space stations",
      "Launch systems and logistics networks",
      "Orbital manufacturing platforms",
      "Microgravity research infrastructure",
    ],
    bulletIntro: "Participants will engage directly with leaders building:",
  },
  {
    icon: Factory,
    title: "Discover Switzerland's high-precision industrial ecosystem",
    desc: "The first day of GOIS includes private industrial visits to selected Swiss companies. Switzerland is globally recognized for mission-critical engineering and high-reliability components used in space systems.",
    bullets: [
      "Precision manufacturing",
      "Robotics and micro-mechanics",
      "Life sciences",
      "Advanced materials",
    ],
    bulletIntro: "Industries covered:",
  },
  {
    icon: Globe,
    title: "Connect with decision-makers from across the global space economy",
    desc: "GOIS brings together participants from 25+ countries across the US, Europe, and Asia, creating a rare environment for high-signal discussions and partnership building.",
    bullets: [
      "Operators",
      "Technology developers",
      "Investors",
      "Institutions",
    ],
    bulletIntro: "Key participants include:",
  },
  {
    icon: FlaskConical,
    title: "Explore the next frontier: life sciences and manufacturing in microgravity",
    desc: "As orbital platforms expand beyond traditional missions, new industries are emerging in space. These fields represent one of the fastest-growing segments of the space economy.",
    bullets: [
      "Pharmaceutical research in microgravity",
      "In-orbit manufacturing",
      "Advanced materials development",
      "Biotechnology and human health in space",
    ],
    bulletIntro: "GOIS explores opportunities in:",
  },
  {
    icon: Target,
    title: "Shape the future of orbital infrastructure",
    desc: "The summit is designed not just as a conference but as a working forum for strategic collaboration around the technologies, partnerships, and capital required to build the next generation of orbital infrastructure.",
    bullets: [
      "Industry",
      "Research institutions",
      "Governments",
      "Investors",
    ],
    bulletIntro: "GOIS aims to help align:",
  },
];

const ReasonsSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-secondary/30">
      <div className="container max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-10 sm:mb-16">
          Why <span className="text-primary">GOIS</span> Matters
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {reasons.map((r, i) => (
            <div key={i} className="glass-panel rounded-xl p-6 hover:glow-border transition-all">
              <div className="flex items-start gap-5">
                <div className="gradient-primary rounded-full p-3 shrink-0 mt-1">
                  <r.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-display text-lg font-semibold">
                    <span className="text-primary mr-2">{i + 1}.</span>{r.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                  <p className="text-foreground/80 text-sm font-medium">{r.bulletIntro}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm text-muted-foreground">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
