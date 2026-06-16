import { Calendar, Download, ExternalLink, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Slot = { time: string; title: string; detail?: string };

const day1: Slot[] = [
  { time: "09:00–09:45", title: "Welcome Breakfast", detail: "Innovation Ecosystem Tour, Technopark Luzern" },
  { time: "09:45–10:00", title: "Boarding & Departure", detail: "Briefing, Executive Transfer" },
  { time: "10:00–12:00", title: "Transfer to VSH", detail: "Swiss Landscapes, En-route Networking" },
  { time: "12:00–13:15", title: "Networking Lunch", detail: "VSH Industrial Innovation Setting" },
  { time: "12:45–14:15", title: "Exclusive Guided Tour", detail: "VSH, The Underground Future Lab" },
  { time: "14:15–15:30", title: "Interactive Workshop", detail: "Building the Future Beyond Earth" },
  { time: "15:30–16:00", title: "Coffee & Group Photo", detail: "VSH Debrief & Networking" },
  { time: "16:00–18:00", title: "Transfer to Lucerne", detail: "Swiss Scenery, Executive Networking" },
  { time: "18:00–18:45", title: "Aperitif Reception", detail: "OMNIA Dierikon" },
  { time: "18:45–20:30", title: "GOIS Executive Dinner", detail: "Speakers, Industry, Investors, Government" },
  { time: "20:30", title: "End of Official Programme" },
];

const room1: Slot[] = [
  { time: "08:00–09:00", title: "Executive Breakfast & Registration" },
  { time: "09:00–09:30", title: "Technopark Luzern Innovation Ecosystem Tour" },
  { time: "09:30–09:40", title: "Opening Remarks", detail: "SSIP & Technopark Luzern" },
  { time: "09:40–09:50", title: "Lucerne Business", detail: "Why Lucerne is Becoming a Leading Deep-Tech & Space Innovation Hub" },
  { time: "09:50–10:00", title: "Switzerland Global Enterprise", detail: "International Growth & Market Expansion Opportunities" },
  { time: "10:00–11:00", title: "Panel 1", detail: "Building the Orbital Economy" },
  { time: "11:00–11:20", title: "Coffee Break & Networking" },
  { time: "11:20–12:20", title: "Panel 2", detail: "Building the Orbital Industrial Era" },
  { time: "12:20–13:30", title: "Executive Networking Lunch" },
  { time: "13:30–14:20", title: "Panel 3", detail: "Swiss Industrial Leadership for the Orbital Era" },
  { time: "14:20–15:10", title: "Panel 4", detail: "The Next Frontier for Human Health & Biotechnology" },
  { time: "15:10–15:30", title: "Coffee Break & Networking" },
  { time: "15:30–16:15", title: "Panel 5", detail: "From Regulation to Reality" },
  { time: "16:20–17:00", title: "GOIS Executive B2B Matchmaking" },
  { time: "17:00–17:10", title: "Final meetings & Group Photos" },
  { time: "17:15–19:30", title: "GOIS Executive Apéro Reception" },
];

const room2: Slot[] = [
  { time: "10:00", title: "ESDI" },
  { time: "10:30", title: "Swiss Solar Space Company" },
  { time: "11:00", title: "Tipalo" },
  { time: "11:30", title: "Swiss Mechatronics / maxon" },
  { time: "12:00", title: "Space Philic" },
  { time: "12:30", title: "OffWorld" },
  { time: "13:00", title: "Executive Networking Lunch" },
  { time: "14:00", title: "Beyond Gravity" },
  { time: "14:30", title: "Inbound Aerospace" },
  { time: "15:00", title: "New Space Consulting" },
  { time: "15:30", title: "Australian National University" },
  { time: "16:00", title: "AkashaLabdhi" },
  { time: "16:20", title: "Alpsg" },
  { time: "16:50", title: "HabSpace" },
  { time: "17:20", title: "Final meetings & Group Photos" },
];

const room3Focus = ["Investment", "Company establishment", "Talent attraction", "Innovation ecosystem"];
const room4Focus = ["International expansion", "Export", "Market access", "Strategic partnerships"];

const TimeBadge = ({ time }: { time: string }) => (
  <span className="inline-flex items-center font-mono text-[11px] sm:text-xs font-semibold tracking-wide text-primary border border-primary/40 bg-primary/10 rounded px-2 py-0.5 whitespace-nowrap">
    {time}
  </span>
);

const SlotRow = ({ slot }: { slot: Slot }) => (
  <li className="group relative pl-4 sm:pl-5 py-2 border-l border-border/60 hover:border-primary transition-colors">
    <div className="flex flex-col gap-1">
      <TimeBadge time={slot.time} />
      <p className="font-display font-semibold text-sm sm:text-base text-foreground leading-tight">
        {slot.title}
      </p>
      {slot.detail && (
        <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{slot.detail}</p>
      )}
    </div>
  </li>
);

const RoomColumn = ({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="glass-panel glow-border rounded-2xl p-4 sm:p-5 flex flex-col h-full hover:border-primary/60 transition-colors">
    <div className="mb-4 pb-3 border-b border-border/60">
      <p className="text-[10px] uppercase tracking-[0.18em] text-primary font-display font-semibold">
        {label}
      </p>
      <h4 className="font-display font-bold text-base sm:text-lg mt-1 flex items-center gap-1.5">
        <MapPin className="w-4 h-4 text-primary" />
        {title}
      </h4>
    </div>
    {children}
  </div>
);

const AgendaSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-secondary/30 relative overflow-hidden" id="agenda">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="container max-w-7xl relative">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-primary font-display font-semibold mb-3">
            Programme
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            GOIS 2026 <span className="text-primary">Programme</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Two executive days shaping the Orbital Industrial Era.
          </p>
        </div>

        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-1 sm:grid-cols-2 h-auto mb-8 sm:mb-10 bg-background/40 border border-border/60 p-1">
            <TabsTrigger value="day1" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 flex-col sm:flex-row gap-1 sm:gap-2 font-display">
              <Calendar className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-semibold">24 June · Executive Experience Day</span>
            </TabsTrigger>
            <TabsTrigger value="day2" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 flex-col sm:flex-row gap-1 sm:gap-2 font-display">
              <Calendar className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-semibold">25 June · Orbital Infrastructure Summit</span>
            </TabsTrigger>
          </TabsList>

          {/* Day 1 — Vertical Timeline */}
          <TabsContent value="day1" className="mt-0">
            <div className="glass-panel glow-border rounded-2xl p-5 sm:p-8 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border/60">
                <div className="gradient-primary rounded-full p-2.5">
                  <Calendar className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-primary font-display font-semibold">
                    24 June 2026
                  </p>
                  <h3 className="font-display font-bold text-lg sm:text-xl">
                    Executive Experience Day
                  </h3>
                </div>
              </div>
              <ol className="space-y-1">
                {day1.map((s, i) => (
                  <SlotRow key={i} slot={s} />
                ))}
              </ol>
            </div>
          </TabsContent>

          {/* Day 2 — Four parallel columns / mobile accordion */}
          <TabsContent value="day2" className="mt-0">
            {/* Desktop: 4 columns */}
            <div className="hidden lg:grid grid-cols-4 gap-5">
              <RoomColumn label="Room 1" title="Main Stage">
                <ol className="space-y-1">
                  {room1.map((s, i) => <SlotRow key={i} slot={s} />)}
                </ol>
              </RoomColumn>
              <RoomColumn label="Room 2" title="Technology Showcase">
                <ol className="space-y-1">
                  {room2.map((s, i) => <SlotRow key={i} slot={s} />)}
                </ol>
              </RoomColumn>
              <RoomColumn label="Room 3" title="Lucerne Business">
                <div className="space-y-3">
                  <TimeBadge time="09:30–17:00" />
                  <p className="font-display font-semibold text-sm">Private Executive Meetings</p>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Focus areas</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {room3Focus.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </RoomColumn>
              <RoomColumn label="Room 4" title="Switzerland Global Enterprise">
                <div className="space-y-3">
                  <TimeBadge time="09:30–17:00" />
                  <p className="font-display font-semibold text-sm">Private Executive Meetings</p>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Focus areas</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {room4Focus.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </RoomColumn>
            </div>

            {/* Mobile / Tablet: Accordion */}
            <div className="lg:hidden">
              <Accordion type="single" collapsible defaultValue="r1" className="space-y-3">
                <AccordionItem value="r1" className="glass-panel glow-border rounded-2xl border-0 px-4 sm:px-5">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="text-left">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-primary font-display font-semibold">Room 1</p>
                      <p className="font-display font-bold text-base">Main Stage</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ol className="space-y-1 pb-2">
                      {room1.map((s, i) => <SlotRow key={i} slot={s} />)}
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="r2" className="glass-panel glow-border rounded-2xl border-0 px-4 sm:px-5">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="text-left">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-primary font-display font-semibold">Room 2</p>
                      <p className="font-display font-bold text-base">Technology Showcase</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ol className="space-y-1 pb-2">
                      {room2.map((s, i) => <SlotRow key={i} slot={s} />)}
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="r3" className="glass-panel glow-border rounded-2xl border-0 px-4 sm:px-5">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="text-left">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-primary font-display font-semibold">Room 3</p>
                      <p className="font-display font-bold text-base">Lucerne Business</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pb-2">
                      <TimeBadge time="09:30–17:00" />
                      <p className="font-display font-semibold text-sm">Private Executive Meetings</p>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Focus areas</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {room3Focus.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="r4" className="glass-panel glow-border rounded-2xl border-0 px-4 sm:px-5">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="text-left">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-primary font-display font-semibold">Room 4</p>
                      <p className="font-display font-bold text-base">Switzerland Global Enterprise</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pb-2">
                      <TimeBadge time="09:30–17:00" />
                      <p className="font-display font-semibold text-sm">Private Executive Meetings</p>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Focus areas</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {room4Focus.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTAs */}
        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Button
            asChild
            size="lg"
            className="gradient-primary text-primary-foreground font-display font-semibold px-8 hover:opacity-90"
          >
            <a href="https://gois.ssip-pl.ch" target="_blank" rel="noopener noreferrer">
              Register for GOIS 2026
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary/60 text-foreground hover:bg-primary/10 hover:text-foreground font-display font-semibold px-8"
          >
            <a href="/GOIS_2026_Programme.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Download Programme PDF
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
