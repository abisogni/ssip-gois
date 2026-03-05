const AboutSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
          Welcome to <span className="text-primary">GOIS 2026</span>
        </h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
          <p>
            The <span className="text-foreground font-medium">Global Orbital Infrastructure Summit</span> is the
            premier international event dedicated to the design, deployment, and governance of orbital systems.
            Organized by <span className="text-primary">SSIP — Space Systems Innovation Platform</span>, GOIS brings
            together space agencies, private operators, investors, and policymakers to shape the next era of
            space infrastructure.
          </p>
          <p>
            From mega-constellations and in-orbit servicing to space stations and debris management, GOIS
            tackles the critical challenges and opportunities of building sustainable orbital ecosystems. Join
            400+ leaders from 25+ countries for two days of high-level panels, keynotes, and networking in
            Lisbon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
