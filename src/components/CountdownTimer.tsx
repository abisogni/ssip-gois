import { useEffect, useState } from "react";

const TARGET = new Date("2026-06-24T09:00:00+02:00").getTime();

function getRemaining() {
  const diff = Math.max(0, TARGET - Date.now());
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

const pad = (n: number) => n.toString().padStart(2, "0");

const CountdownTimer = () => {
  const [t, setT] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const units: Array<{ k: string; v: string }> = [
    { k: "Days", v: pad(t.days) },
    { k: "Hours", v: pad(t.hours) },
    { k: "Minutes", v: pad(t.minutes) },
    { k: "Seconds", v: pad(t.seconds) },
  ];

  return (
    <div className="mt-8 sm:mt-10 flex flex-col items-center">
      <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground/80 font-display mb-3 sm:mb-4">
        Summit Opens June 24, 2026, 09:00 CET
      </p>
      <div className="flex items-stretch gap-2 sm:gap-3 md:gap-4">
        {units.map((u, i) => (
          <div key={u.k} className="flex items-stretch">
            <div className="glass-panel glow-border rounded-lg px-3 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 min-w-[64px] sm:min-w-[84px] md:min-w-[96px] text-center">
              <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary glow-text tabular-nums leading-none">
                {u.v}
              </p>
              <p className="text-[9px] sm:text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1.5 sm:mt-2">
                {u.k}
              </p>
            </div>
            {i < units.length - 1 && (
              <span className="self-center px-0.5 sm:px-1 text-primary/50 font-display text-xl sm:text-2xl">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
