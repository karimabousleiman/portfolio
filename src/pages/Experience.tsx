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
        subtitle="8+ years building products that millions of people use every day, from startups to industry leaders."
      />
      <ExperienceSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default Experience;
