import SiteShell, { ContactSection, PageHeader, Section } from "@/components/SiteShell";
import MusicSection, { StreamingLinks } from "@/components/MusicSection";

const Music = () => (
  <SiteShell>
    <PageHeader
      title="Music"
      lead="Multi-instrumentalist and jazz enthusiast with a passion for improvisation. Here's what I've been working on."
    />
    <Section id="listen" title="Listen">
      <StreamingLinks />
    </Section>
    <Section id="tracks" title="On SoundCloud">
      <MusicSection />
    </Section>
    <ContactSection />
  </SiteShell>
);

export default Music;
