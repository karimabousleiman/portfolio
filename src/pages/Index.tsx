import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import VisualArtsSection from "@/components/VisualArtsSection";
import MusicSection from "@/components/MusicSection";
import AboutSection from "@/components/AboutSection";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { Briefcase, Camera, Music as MusicIcon } from "lucide-react";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      {isMobile && (
        <>
          <div id="experience">
            <PageHero
              icon={<Briefcase size={28} className="text-primary" />}
              accent="Career Journey"
              title="Experience"
              subtitle="From scaling a password manager to 1M users, to driving engagement on France's biggest streaming platform."
            />
            <ExperienceSection />
            <SkillsSection />
          </div>
          <div id="visual-arts">
            <PageHero
              icon={<Camera size={28} className="text-primary" />}
              accent="Photography & Cinema"
              title="Visual Arts"
              subtitle="Capturing moments and telling stories through the lens."
            />
            <VisualArtsSection />
          </div>
          <div id="music">
            <PageHero
              icon={<MusicIcon size={28} className="text-primary" />}
              accent="Multi-instrumentalist"
              title="Music"
              subtitle="Jazz enthusiast with a passion for improvisation. Here's what I've been working on."
            />
            <MusicSection />
          </div>
          <div id="about">
            <PageHero
              title="About Me"
              subtitle="Tech geek, music lover, and relentless problem solver."
              compact
            />
            <AboutSection />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Index;
