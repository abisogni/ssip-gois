import HeroSection from "@/components/eps/HeroSection";
import ContextSection from "@/components/eps/ContextSection";
import FocusAreasSection from "@/components/eps/FocusAreasSection";
import LearnSection from "@/components/eps/LearnSection";
import AgendaSection from "@/components/eps/AgendaSection";
import SpeakersSection from "@/components/eps/SpeakersSection";
import InvitationSection from "@/components/eps/InvitationSection";
import GOISSection from "@/components/eps/GOISSection";
import FooterSection from "@/components/eps/FooterSection";

const Eps = () => (
  <main className="eps-root bg-background min-h-screen">
    <HeroSection />
    <ContextSection />
    <FocusAreasSection />
    <LearnSection />
    <AgendaSection />
    <SpeakersSection />
    <InvitationSection />
    <GOISSection />
    <FooterSection />
  </main>
);

export default Eps;
