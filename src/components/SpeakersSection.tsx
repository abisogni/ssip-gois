import { useMemo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, Users, Building2, Globe2, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { speakers, TRACKS, type SpeakerTrack } from "@/data/speakers";

const STATS = [
  { value: 30, suffix: "+", label: "Speakers", Icon: Users },
  { value: 29, suffix: "+", label: "Organizations", Icon: Building2 },
  { value: 8, suffix: "+", label: "Countries", Icon: Globe2 },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const dur = 1200;
      const step = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      io.disconnect();
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
};

const MC_SLUG = "yvonne-bemelmans";

const SpeakersSection = () => {
  const [query, setQuery] = useState("");
  const [track, setTrack] = useState<SpeakerTrack | "All">("All");

  const mc = useMemo(() => speakers.find((s) => s.slug === MC_SLUG), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return speakers.filter((s) => {
      if (s.slug === MC_SLUG) return false;
      const matchTrack = track === "All" || s.tracks.includes(track);
      const matchQ =
        !q ||
        s.organization.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q);
      return matchTrack && matchQ;
    });
  }, [query, track]);

  return (
    <section id="speakers" className="relative py-20 sm:py-28 px-4">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs sm:text-sm tracking-[0.3em] text-primary font-display mb-3">
            GOIS 2026 · LEADERSHIP
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-4">
            Meet the Speakers
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            A curated convergence of executives, scientists and policymakers
            shaping the Orbital Industrial Era.
          </p>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto mb-12">
          {STATS.map(({ value, suffix, label, Icon }) => (
            <div
              key={label}
              className="glass-panel glow-border rounded-2xl p-4 sm:p-6 text-center"
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl sm:text-4xl font-display font-bold text-primary glow-text">
                <Counter to={value} suffix={suffix} />
              </p>
              <p className="text-[10px] sm:text-xs tracking-widest text-muted-foreground mt-1 uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Master of Ceremonies, McKinsey-style feature */}
        {mc && (
          <div className="max-w-5xl mx-auto mb-12">
            <Link
              to={`/speakers/${mc.slug}`}
              className="group block relative border-l-2 border-primary bg-card/30 backdrop-blur-sm rounded-r-lg overflow-hidden hover:bg-card/50 transition-colors"
            >
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-0">
                <div className="relative aspect-[4/5] md:aspect-auto md:h-full bg-secondary/40 overflow-hidden">
                  <img
                    src={mc.image}
                    alt={mc.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/30" />
                </div>
                <div className="pl-6 sm:pl-8 pr-6 sm:pr-8 py-6 sm:py-8 flex flex-col justify-center">
                  <p className="text-[11px] sm:text-xs tracking-[0.3em] text-primary font-display mb-2 uppercase">
                    GOIS 2026 · Master of Ceremonies
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-display font-semibold text-foreground leading-tight mb-2">
                    {mc.name}
                  </h3>
                  <p className="text-sm sm:text-base text-primary mb-3">
                    Hosting the executive program across June 24 and 25, 2026
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {mc.bio}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 self-start whitespace-nowrap px-6 h-11 rounded-none bg-primary text-primary-foreground font-display tracking-[0.15em] text-xs uppercase border border-primary group-hover:bg-transparent group-hover:text-primary transition-colors">
                    View profile
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* B2B Matchmaking CTA, McKinsey-style */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative border-l-2 border-primary pl-6 sm:pl-8 py-6 sm:py-7 bg-card/30 backdrop-blur-sm rounded-r-lg">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
              <div className="max-w-2xl">
                <p className="text-[11px] sm:text-xs tracking-[0.3em] text-primary font-display mb-2 uppercase">
                  GOIS Executive B2B Matchmaking
                </p>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground leading-tight mb-2">
                  Book a B2B meeting with a GOIS 2026 speaker
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Curated 1:1 conversations on June 24, 2026, from 16:20 to 17:00.
                  Select a speaker below and reserve a seat at one of five executive roundtables.
                </p>
              </div>
              <a
                href="#speakers-grid"
                className="group inline-flex items-center justify-center gap-2 self-start lg:self-auto whitespace-nowrap px-7 h-12 rounded-none bg-primary text-primary-foreground font-display tracking-[0.15em] text-xs uppercase border border-primary hover:bg-transparent hover:text-primary transition-colors"
              >
                Book a B2B
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by organization or name…"
              className="pl-11 h-12 bg-card/60 border-border/60"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {(["All", ...TRACKS] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTrack(t as SpeakerTrack | "All")}
                className={`px-4 h-12 rounded-full text-xs font-display tracking-wider border transition-all ${
                  track === t
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                    : "bg-card/40 border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div id="speakers-grid" className="scroll-mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filtered.map((s) => (
            <Link
              key={s.slug}
              to={`/speakers/${s.slug}`}
              className="group relative glass-panel glow-border rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.5)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary/40">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-3 left-3 right-14 flex">
                  {s.tracks.slice(0, 1).map((t) => (
                    <Badge
                      key={t}
                      className="bg-background/70 backdrop-blur-md text-[9px] tracking-wider border border-primary/40 text-primary font-display whitespace-nowrap"
                    >
                      {t.toUpperCase()}
                    </Badge>
                  ))}
                </div>
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="p-5 -mt-16 relative">
                <h3 className="font-display font-bold text-lg leading-tight text-foreground">
                  {s.name}
                </h3>
                <p className="text-sm text-primary mt-1">{s.title}</p>
                <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                  {s.organization}
                </p>
                <p className="text-[11px] text-muted-foreground/70 mt-1">
                  {s.country}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No speakers match your search.
          </p>
        )}
      </div>
    </section>
  );
};

export default SpeakersSection;
