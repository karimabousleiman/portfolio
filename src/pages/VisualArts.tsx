import SiteShell, { Closing, IMDB, PageTitle } from "@/components/SiteShell";
import VisualArtsSection, { FilmEmbed } from "@/components/VisualArtsSection";

const VisualArts = () => (
  <SiteShell title="Visual Arts · Karim Abousleiman">
    <PageTitle title="Visual Arts" lead="Photographs from Beirut to Venice, and film work credited on IMDb." />
    <section aria-labelledby="photos-title">
      <h2 id="photos-title" className="sr-only">Photographs</h2>
      <VisualArtsSection />
    </section>

    <section aria-labelledby="film-title" className="grid gap-4 pb-4 pt-16 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10  md:pt-24">
      <h2 id="film-title" className="mono m-0 font-normal text-[var(--h-meta)]">FILM</h2>
      <div>
        <FilmEmbed />
        <a href={IMDB} target="_blank" rel="noopener noreferrer" className="row-link mono mt-4 flex h-12 items-center justify-between border-y border-[var(--h-line)] no-underline">
          CREDITS ON IMDB <span className="arrow arrow-out" aria-hidden="true">↗</span>
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </section>

    <Closing variant="something" />
  </SiteShell>
);

export default VisualArts;
