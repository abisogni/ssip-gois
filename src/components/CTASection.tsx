import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 sm:py-28 md:py-36 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-transparent via-primary/60 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container max-w-5xl">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left rail: editorial label */}
          <div className="col-span-12 md:col-span-3 md:pt-2">
            <div className="flex md:flex-col gap-3 md:gap-2">
              <p className="font-display text-[10px] sm:text-xs tracking-[0.25em] text-primary uppercase">
                Invitation
              </p>
              <div className="hidden md:block w-10 h-px bg-primary/40" />
              <p className="font-display text-[10px] sm:text-xs tracking-[0.25em] text-muted-foreground/70 uppercase">
                GOIS 2026
              </p>
            </div>
          </div>

          {/* Right column: institutional editorial block */}
          <div className="col-span-12 md:col-span-9 border-l border-border/40 md:pl-10">
            <h2 className="font-display font-semibold leading-[1.1] tracking-tight text-3xl sm:text-4xl md:text-5xl text-foreground mb-8 sm:mb-10">
              An invitation extended to those{" "}
              <span className="text-primary">shaping the orbital economy.</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 mb-10 sm:mb-12">
              <p className="text-foreground/80 leading-[1.7] text-[0.95rem] sm:text-base font-light">
                GOIS is a curated international summit convening decision makers
                across the global space economy: commercial stations, launch and
                logistics, in-orbit manufacturing, microgravity research, and the
                enabling infrastructure that supports them.
              </p>
              <p className="text-muted-foreground leading-[1.7] text-[0.95rem] sm:text-base font-light">
                We welcome a select group of organizations and speakers from the
                United States, Europe, and Asia, by invitation and direct
                introduction only.
              </p>
            </div>

            {/* Quiet metric row */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 border-y border-border/40 py-6 sm:py-8 mb-10 sm:mb-12">
              {[
                { k: "27", v: "Speakers" },
                { k: "100", v: "Attendees" },
                { k: "3", v: "Continents" },
              ].map((m) => (
                <div key={m.v}>
                  <p className="font-display text-2xl sm:text-3xl md:text-4xl text-primary font-semibold tracking-tight">
                    {m.k}
                  </p>
                  <p className="text-[10px] sm:text-xs tracking-[0.2em] text-muted-foreground uppercase mt-1">
                    {m.v}
                  </p>
                </div>
              ))}
            </div>

            {/* Registration status notice */}
            <div className="border border-primary/30 bg-primary/5 rounded-sm px-5 py-4 sm:px-6 sm:py-5 mb-10 sm:mb-12">
              <p className="text-[10px] sm:text-xs tracking-[0.25em] text-primary uppercase mb-3 font-display">
                Registration Status
              </p>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block w-2 h-2 rounded-full bg-muted-foreground/60 shrink-0" />
                  <div>
                    <p className="font-display text-sm sm:text-base text-foreground/90">Speaker Applications</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Closed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block w-2 h-2 rounded-full bg-muted-foreground/60 shrink-0" />
                  <div>
                    <p className="font-display text-sm sm:text-base text-foreground/90">Attendee Registration</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing action: institutional, not promotional */}
            <div>
              <p className="text-[10px] sm:text-xs tracking-[0.25em] text-muted-foreground/70 uppercase mb-2">
                For Attendee Enquiries
              </p>
              <a
                href="mailto:contact@ssip-pl.ch"
                className="font-display text-lg sm:text-xl md:text-2xl text-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
              >
                contact@ssip-pl.ch
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
