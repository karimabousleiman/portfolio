import SiteShell, { Closing, PageTitle } from "@/components/SiteShell";
import AboutSection from "@/components/AboutSection";

const About = () => (
  <SiteShell title="About · Karim Abousleiman">
    <PageTitle title="About" lead="Tech geek, music lover, and relentless problem solver." />
    <AboutSection />
    <Closing variant="product" />
  </SiteShell>
);

export default About;
