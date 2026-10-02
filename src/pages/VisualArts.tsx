import SiteShell, { ContactSection, External, IMDB, PageHeader, Section } from "@/components/SiteShell";
import VisualArtsSection, { FilmEmbed } from "@/components/VisualArtsSection";

const VisualArts = () => (
  <SiteShell>
    <PageHeader title="Visual arts" lead="Capturing moments and telling stories through the lens." />
    <Section id="photography" title="Photography">
      <VisualArtsSection />
    </Section>
    <Section id="film" title="Film">
      <FilmEmbed />
      <p className="mt-4 text-[0.9375rem]">
        <External href={IMDB}>View on IMDb</External>
      </p>
    </Section>
    <ContactSection />
  </SiteShell>
);

export default VisualArts;
