const AboutSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
          Welcome to <span className="text-primary">GOIS 2026</span>
        </h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
          <p>
            The <span className="text-foreground font-medium">Global Orbital Infrastructure Summit</span> is an
            invitation-only gathering organized by <span className="text-primary">SSIP — Space Systems Innovation Platform</span>,
            bringing together space agencies, private operators, investors, and policymakers to shape the next era of orbital infrastructure.
          </p>
          <p>
            Held in <span className="text-foreground font-medium">Switzerland</span>, GOIS 2026 spans two days:
            exclusive Swiss industrial visits on June 24 — featuring high-precision manufacturing, robotics, micro-mechanics,
            life sciences, and advanced materials companies — followed by the full Summit on June 25.
          </p>
          <p>
            We are actively welcoming speakers and participating organizations building the future of orbital infrastructure
            across the <span className="text-foreground font-medium">US, Europe, and Asia</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
