const stats = [
  { value: "2", label: "Days" },
  { value: "Announcing", label: "Speakers", subLabel: "Soon" },
  { value: "200", label: "Attendees" },
  { value: "TBA", label: "Sponsors & Partners" },
  { value: "Global", label: "Countries", subLabel: "Participation" },
];

const StatsBar = () => {
  return (
    <section className="relative z-10 -mt-12 sm:-mt-16 px-4">
      <div className="container max-w-5xl">
        <div className="glass-panel glow-border rounded-2xl py-6 sm:py-8 px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="last:col-span-2 sm:last:col-span-1 md:last:col-span-1">
              <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary glow-text">{stat.value}</p>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
