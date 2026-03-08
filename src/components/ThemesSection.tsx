import { Factory, Rocket, FlaskConical, Landmark, Microscope } from "lucide-react";

const themes = [
  { icon: Landmark, title: "Commercial Space Stations & Orbital Platforms", desc: "The next generation of habitable and operational platforms in low Earth orbit and beyond." },
  { icon: Rocket, title: "Launch Systems & Orbital Logistics", desc: "Reusable launch vehicles, in-space transportation, and supply chain solutions for orbit." },
  { icon: Factory, title: "In-Orbit Manufacturing & Microgravity R&D", desc: "Leveraging the unique conditions of space for advanced manufacturing and research." },
  { icon: Microscope, title: "Life Sciences in Microgravity", desc: "Biomedical research, pharmaceutical development, and human health in space environments." },
  { icon: FlaskConical, title: "Infrastructure Investment for Space", desc: "Financing models, public-private partnerships, and capital flows enabling orbital infrastructure." },
];

const ThemesSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4">
      <div className="container max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-3 sm:mb-4">
          Summit <span className="text-primary">Focus Areas</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 sm:mb-16 text-sm sm:text-base">
          A focused, high-signal gathering on the critical pillars of orbital infrastructure.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {themes.map((theme) => (
            <div key={theme.title} className="glass-panel rounded-xl p-5 sm:p-6 hover:glow-border transition-all duration-300 group">
              <theme.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-base font-semibold mb-2 text-foreground">{theme.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{theme.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
