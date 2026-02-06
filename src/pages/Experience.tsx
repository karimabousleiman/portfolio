import Navbar from "@/components/Navbar";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ExperienceSection />
        <SkillsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
