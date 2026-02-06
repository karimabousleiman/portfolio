import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import MusicSection from "@/components/MusicSection";
import Footer from "@/components/Footer";
import { Music as MusicIcon } from "lucide-react";

const Music = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        icon={<MusicIcon size={28} className="text-primary" />}
        accent="Multi-instrumentalist"
        title="Music"
        subtitle="Jazz enthusiast with a passion for improvisation. Here's what I've been working on."
      />
      <MusicSection />
      <Footer />
    </div>
  );
};

export default Music;
