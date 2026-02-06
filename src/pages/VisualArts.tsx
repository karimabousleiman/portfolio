import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import VisualArtsSection from "@/components/VisualArtsSection";
import Footer from "@/components/Footer";
import { Camera } from "lucide-react";

const VisualArts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        icon={<Camera size={28} className="text-primary" />}
        accent="Photography & Cinema"
        title="Visual Arts"
        subtitle="Capturing moments and telling stories through the lens."
      />
      <VisualArtsSection />
      <Footer />
    </div>
  );
};

export default VisualArts;
