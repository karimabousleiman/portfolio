import Navbar from "@/components/Navbar";
import MusicSection from "@/components/MusicSection";
import Footer from "@/components/Footer";

const Music = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <MusicSection />
      </div>
      <Footer />
    </div>
  );
};

export default Music;
