import SiteShell, { Closing, PageTitle } from "@/components/SiteShell";
import AboutSection from "@/components/AboutSection";

const About = () => (
  <SiteShell title="About · Karim Abousleiman">
    <PageTitle title="About" lead="A product manager who came from cinema and never stopped making things." />
    <AboutSection />
    <Closing variant="product" />
  </SiteShell>
);

export default About;
