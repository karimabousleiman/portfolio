import SiteShell, { ContactSection, PageHeader, Section } from "@/components/SiteShell";
import AboutSection from "@/components/AboutSection";

const About = () => (
  <SiteShell>
    <PageHeader title="About" lead="Tech geek, music lover, and relentless problem solver." />
    <Section id="story" title="Story">
      <AboutSection />
    </Section>
    <ContactSection />
  </SiteShell>
);

export default About;
