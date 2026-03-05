const stats = [
  { value: "2", label: "Days" },
  { value: "12+", label: "Speakers" },
  { value: "200", label: "Attendees" },
  { value: "TBA", label: "Sponsors & Partners" },
  { value: "25+", label: "Countries" },
];

const StatsBar = () => {
  return (
    <section className="relative z-10 -mt-16">
      <div className="container max-w-5xl">
        <div className="glass-panel glow-border rounded-2xl py-8 px-6 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-display font-bold text-primary glow-text">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
