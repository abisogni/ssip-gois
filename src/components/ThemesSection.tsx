import { Satellite, Shield, Globe, Rocket, Cpu, Users } from "lucide-react";

const themes = [
  { icon: Satellite, title: "Mega-Constellations & Connectivity", desc: "Next-gen satellite networks and global broadband infrastructure." },
  { icon: Shield, title: "Space Sustainability & Debris", desc: "Active debris removal, space traffic management, and long-term sustainability." },
  { icon: Globe, title: "In-Orbit Servicing & Manufacturing", desc: "Refueling, assembly, and manufacturing capabilities in orbit." },
  { icon: Rocket, title: "Launch & Access to Space", desc: "Reusable launch systems and emerging spaceports worldwide." },
  { icon: Cpu, title: "AI & Autonomous Systems", desc: "Machine learning and autonomy for orbital operations and decision-making." },
  { icon: Users, title: "Policy & International Cooperation", desc: "Regulatory frameworks, spectrum management, and multilateral governance." },
];

const ThemesSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          Key <span className="text-primary">Themes</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Exploring the most pressing topics shaping orbital infrastructure and space innovation.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <div key={theme.title} className="glass-panel rounded-xl p-6 hover:glow-border transition-all duration-300 group">
              <theme.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{theme.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{theme.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
