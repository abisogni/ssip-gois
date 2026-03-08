import { Factory, Presentation } from "lucide-react";

const AgendaSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30" id="agenda">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
          Summit <span className="text-primary">Agenda</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Day 1 */}
          <div className="glass-panel rounded-2xl p-8 glow-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="gradient-primary rounded-full p-3">
                <Factory className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display font-bold text-lg">June 24</p>
                <p className="text-primary text-sm font-display">Swiss Industrial Visits</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Private visits to selected Swiss high-precision and space-enabled companies spanning manufacturing,
              robotics, micro-mechanics, life sciences, and advanced materials.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Precision manufacturing facilities</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Robotics & micro-mechanics labs</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Life sciences & advanced materials</li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="glass-panel rounded-2xl p-8 glow-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="gradient-primary rounded-full p-3">
                <Presentation className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display font-bold text-lg">June 25</p>
                <p className="text-primary text-sm font-display">Global Orbital Infrastructure Summit</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              A focused day of keynotes, strategic panels, and executive dialogue dedicated to the future of orbital infrastructure.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Commercial space stations & platforms</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Launch systems & orbital logistics</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>In-orbit manufacturing & microgravity R&D</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Life sciences in microgravity</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Infrastructure investment for space</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
