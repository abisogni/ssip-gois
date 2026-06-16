import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { speakers } from "@/data/speakers";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const SpeakersCarousel = () => {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="relative py-16 sm:py-20 px-4 border-y border-border/40 bg-card/20">
      <div className="container max-w-7xl">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] text-primary font-display mb-2">
              SPEAKER ANNOUNCEMENTS
            </p>
            <h2 className="text-2xl sm:text-4xl font-display font-bold">
              Voices of GOIS 2026
            </h2>
          </div>
          <a
            href="#speakers"
            className="text-sm font-display tracking-wider text-primary hover:text-primary/80 flex items-center gap-1"
          >
            View All Speakers <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {speakers.map((s) => (
              <CarouselItem
                key={s.slug}
                className="pl-4 basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Link
                  to={`/speakers/${s.slug}`}
                  className="group block relative aspect-[4/5] rounded-2xl overflow-hidden glow-border"
                >
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[10px] tracking-[0.25em] text-primary font-display mb-1">
                      SPEAKER ANNOUNCEMENT
                    </p>
                    <h3 className="font-display font-bold text-base sm:text-lg text-foreground leading-tight">
                      {s.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {s.organization}
                    </p>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-4 bg-card/80 border-border/60" />
          <CarouselNext className="hidden sm:flex -right-4 bg-card/80 border-border/60" />
        </Carousel>
      </div>
    </section>
  );
};

export default SpeakersCarousel;
