import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Linkedin, Calendar, MapPin, Building2, CalendarPlus } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BookMeetingDialog from "@/components/BookMeetingDialog";
import { getSpeaker } from "@/data/speakers";

const SpeakerProfile = () => {
  const { slug } = useParams();
  const speaker = slug ? getSpeaker(slug) : undefined;
  const [meetingOpen, setMeetingOpen] = useState(false);

  if (!speaker) return <Navigate to="/" replace />;

  const linkedinHref =
    speaker.linkedin && speaker.linkedin !== "https://www.linkedin.com/"
      ? speaker.linkedin
      : `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(speaker.name)}&origin=GLOBAL_SEARCH_HEADER`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar onRegisterClick={() => { window.location.href = "/#register"; }} />

      <main className="pt-24 sm:pt-28 pb-20 px-4">
        <div className="container max-w-6xl">
          <Link
            to="/#speakers"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 font-display tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> ALL SPEAKERS
          </Link>

          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12">
            {/* Photo */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glow-border bg-secondary/40">
              {speaker.image && (
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-top"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Info */}
            <div>
              <p className="text-xs tracking-[0.3em] text-primary font-display mb-3">
                GOIS 2026 · SPEAKER
              </p>
              <h1 className="text-3xl sm:text-5xl font-display font-bold mb-3">
                {speaker.name}
              </h1>
              <p className="text-lg sm:text-xl text-primary font-display">
                {speaker.title}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {speaker.tracks.map((t) => (
                  <Badge
                    key={t}
                    className="bg-primary/10 text-primary border border-primary/40 font-display tracking-wider text-[10px]"
                  >
                    {t.toUpperCase()}
                  </Badge>
                ))}
              </div>

              <div className="glass-panel rounded-2xl p-5 mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
                      Organization
                    </p>
                    <p className="text-sm text-foreground">{speaker.organization}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
                      Country
                    </p>
                    <p className="text-sm text-foreground">{speaker.country}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
                      GOIS Session
                    </p>
                    <p className="text-sm text-foreground">{speaker.session}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-display font-bold mt-8 mb-3">
                  Biography
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {speaker.bio}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <Button
                  onClick={() => setMeetingOpen(true)}
                  className="gradient-primary text-primary-foreground font-display tracking-wider rounded-full px-6"
                >
                  <CalendarPlus className="w-4 h-4 mr-2" />
                  Book a Meeting
                </Button>
                <Button
                  variant="outline"
                  className="font-display tracking-wider rounded-full px-6 border-primary/40"
                  onClick={() => window.open(linkedinHref, "_blank", "noopener,noreferrer")}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
      <BookMeetingDialog
        open={meetingOpen}
        onOpenChange={setMeetingOpen}
        speakerName={speaker.name}
        speakerOrg={speaker.organization}
      />
    </div>
  );
};

export default SpeakerProfile;
