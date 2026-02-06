import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { User } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        title="About Me"
        subtitle="Tech geek, music lover, and relentless problem solver."
      />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
