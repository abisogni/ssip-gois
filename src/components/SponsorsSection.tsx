import swissFibertec from "@/assets/sponsor-swiss-fibertec.png";
import hslu from "@/assets/sponsor-hslu.jpg";

const maxon = "https://res.cloudinary.com/dutcsd19r/image/upload/v1775835344/sponsor-maxon.png";

const sponsors = [
  { name: "Swiss Fibertec", logo: swissFibertec, invert: false },
  { name: "HSLU, Hochschule Luzern", logo: hslu, invert: false },
  { name: "Maxon", logo: maxon, invert: false },
];

const SponsorsSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="container max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-3 sm:mb-4">
          Our <span className="text-primary">Sponsors</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 sm:mb-14 text-sm sm:text-base">
          Supported by leading institutions and companies.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          {sponsors.map((s) => (
            <div
              key={s.name}
              className="glass-panel glow-border rounded-2xl flex items-center justify-center w-[200px] sm:w-[240px] h-[100px] sm:h-[120px] transition-transform hover:scale-105 overflow-hidden"
            >
              <img
                src={s.logo}
                alt={s.name}
                className={`w-full h-full object-contain p-3 sm:p-4 opacity-85 hover:opacity-100 transition-opacity ${s.invert ? "brightness-0 invert" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
