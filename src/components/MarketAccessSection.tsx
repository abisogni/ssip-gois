import { useEffect, useRef } from "react";

const sgeLogo = "https://res.cloudinary.com/dutcsd19r/image/upload/v1775834887/partner-sge.png";
const lucerneLogo = "https://res.cloudinary.com/dutcsd19r/image/upload/v1775834890/partner-lucerne.png";

const MarketAccessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 md:py-36 px-4 overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <div className="container max-w-4xl relative z-10">
        {/* Title */}
        <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center leading-tight tracking-tight">
            Enter Switzerland
          </h2>
          <p className="text-primary/80 text-center mt-2 text-lg sm:text-xl md:text-2xl font-display tracking-wide">
            Market Access & Strategic Landing
          </p>
        </div>

        {/* Subtitle */}
        <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 delay-100 ease-out">
          <p className="text-muted-foreground text-center mt-6 sm:mt-8 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Dedicated support for companies actively exploring establishment and expansion in Switzerland.
          </p>
        </div>

        {/* Divider */}
        <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 delay-150 ease-out flex justify-center my-10 sm:my-14">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        {/* Core Text */}
        <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 delay-200 ease-out max-w-2xl mx-auto">
          <p className="text-foreground/90 text-center text-sm sm:text-base leading-relaxed mb-6">
            At GOIS, we move beyond discussions.
          </p>
          <p className="text-muted-foreground text-center text-sm sm:text-base leading-relaxed mb-6">
            A limited number of companies will be invited to participate in <span className="text-foreground font-medium">Private Market Entry Clinics</span>, delivered in collaboration with Switzerland Global Enterprise and Lucerne Business.
          </p>
          <p className="text-muted-foreground text-center text-sm sm:text-base leading-relaxed mb-6">
            These sessions are exclusively designed for organizations with concrete interest in establishing or expanding operations in Switzerland.
          </p>
          <p className="text-muted-foreground text-center text-sm sm:text-base leading-relaxed mb-8">
            Each session is confidential, tailored, and focused on execution.
          </p>
          <p className="text-foreground/90 text-center text-sm sm:text-base font-medium mb-4">
            Topics include:
          </p>
          <ul className="space-y-3 max-w-md mx-auto mb-10">
            {[
              "Company establishment in Switzerland",
              "European market entry strategy",
              "Access to Swiss industrial and R&D ecosystem",
              "Regional landing support in Lucerne",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* Eligibility */}
          <p className="text-foreground/90 text-center text-sm sm:text-base font-medium mb-4">
            Eligibility
          </p>
          <p className="text-muted-foreground text-center text-sm sm:text-base leading-relaxed mb-4">
            These sessions are reserved for companies that:
          </p>
          <ul className="space-y-3 max-w-md mx-auto mb-8">
            {[
              "are actively evaluating Switzerland as a business location",
              "have clear expansion, investment, or partnership intent",
              "are seeking structured support for market entry",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 delay-250 ease-out flex justify-center my-10 sm:my-14">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        {/* Logos */}
        <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 delay-300 ease-out">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20">
            {/* SGE */}
            <div className="group flex flex-col items-center gap-4">
              <div className="glass-panel glow-border rounded-2xl flex items-center justify-center w-[200px] sm:w-[240px] h-[100px] sm:h-[120px] transition-transform hover:scale-105 overflow-hidden">
                <img
                  src={sgeLogo}
                  alt="Switzerland Global Enterprise"
                  className="w-full h-full object-contain p-3 sm:p-4 opacity-85 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="text-center">
                <p className="text-foreground/80 text-xs sm:text-sm font-medium tracking-wide">Switzerland Global Enterprise</p>
                <p className="text-muted-foreground text-[10px] sm:text-xs mt-1">Official Swiss Investment Promotion Authority</p>
              </div>
            </div>

            {/* Lucerne Business */}
            <div className="group flex flex-col items-center gap-4">
              <div className="glass-panel glow-border rounded-2xl flex items-center justify-center w-[200px] sm:w-[240px] h-[100px] sm:h-[120px] transition-transform hover:scale-105 overflow-hidden">
                <img
                  src={lucerneLogo}
                  alt="Lucerne Business"
                  className="w-full h-full object-contain p-3 sm:p-4 opacity-85 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="text-center">
                <p className="text-foreground/80 text-xs sm:text-sm font-medium tracking-wide">Lucerne Business</p>
                <p className="text-muted-foreground text-[10px] sm:text-xs mt-1">Regional Market Entry & Landing Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 delay-350 ease-out flex justify-center my-10 sm:my-14">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        {/* Bottom Statement */}
        <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 delay-[400ms] ease-out text-center">
          <p className="text-foreground/90 text-base sm:text-lg md:text-xl font-display leading-relaxed">
            From global ambition to Swiss execution —
          </p>
          <p className="text-primary/70 text-base sm:text-lg md:text-xl font-display mt-1">
            this is where market entry becomes reality.
          </p>
        </div>
      </div>

      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default MarketAccessSection;
