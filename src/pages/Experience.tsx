import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        icon={<Briefcase size={28} className="text-primary" />}
        accent="Career Journey"
        title="Experience"
        subtitle="From scaling a password manager to 1M users, to driving engagement on France's biggest streaming platform."
      />
      <ExperienceSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default Experience;
