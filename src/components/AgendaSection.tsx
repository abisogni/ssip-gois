import { Factory, Presentation, Users } from "lucide-react";

const AgendaSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-secondary/30" id="agenda">
      <div className="container max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-10 sm:mb-16">
          Summit <span className="text-primary">Agenda</span>
        </h2>

        {/* Pre-Summit — full width */}
        <div className="mb-6 sm:mb-8">
          <a
            href="/executive_pre-summit"
            target="_blank"
            rel="noopener noreferrer"
            className="block glass-panel rounded-2xl p-5 sm:p-8 glow-border transition-all duration-300 hover:-translate-y-0.5 hover:glow-border-strong"
          >
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="gradient-primary rounded-full p-3">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-bold text-lg">May 26</p>
                  <p className="text-primary text-sm font-display">GOIS '26 Executive Pre-Summit</p>
                </div>
              </div>
              <span className="text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full border border-primary/30 text-primary/70">
                By Invitation Only
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm mt-5">
              A closed-door executive session in Basel bringing together selected leaders in life sciences, biotechnology, advanced manufacturing, and orbital infrastructure for an early, in-depth look at microgravity's industrial potential.
            </p>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Day 1 */}
            <div className="glass-panel rounded-2xl p-5 sm:p-8 glow-border">
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
              Private visits to selected Swiss high-precision and space-enabled companies, showcasing Switzerland's world-class precision engineering across manufacturing,
              robotics, micro-mechanics, life sciences, and advanced materials.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Precision manufacturing facilities</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Robotics & micro-mechanics labs</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Life sciences & advanced materials</li>
            </ul>
          </div>

          {/* Day 2 */}
          <div className="glass-panel rounded-2xl p-5 sm:p-8 glow-border">
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
