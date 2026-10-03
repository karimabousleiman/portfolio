import { Link } from "react-router-dom";
import SiteShell, { Closing, IMDB, PCMAG, TECHCRUNCH } from "@/components/SiteShell";
import { photos } from "@/components/VisualArtsSection";
import { tracks } from "@/components/MusicSection";
import portrait from "@/assets/portrait-face.webp";
import { companies, results } from "@/components/ExperienceSection";

const beirut = photos.find((p) => p.slug.startsWith("Under-Beirut"))!;

const CraftLink = ({ label, meta, to, href }: { label: string; meta: string; to?: string; href?: string }) => {
  const inner = (
    <>
      <span className="serif text-[1.375rem] md:text-[1.5rem]">{label}</span>
      <span className="mono text-[0.75rem] text-[var(--h-muted)] md:text-[0.8125rem]">
        {meta} <span className={href ? "arrow arrow-out" : "arrow"} aria-hidden="true">{href ? "↗" : "→"}</span>
      </span>
    </>
  );
  const cls = "row-link flex min-h-[52px] items-center justify-between border-b border-[var(--h-line)] no-underline";
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}<span className="sr-only"> (opens in a new tab)</span></a>
  ) : (
    <Link to={to!} className={cls}>{inner}</Link>
  );
};

const Index = () => (
  <SiteShell title="Karim Abousleiman · Senior Product Manager, Paris">
    <section aria-labelledby="hero-title" className="flex flex-col items-center pt-8 text-center md:pt-8">
      <img
        src={portrait}
        alt="Karim Abousleiman, head and shoulders, black and white"
        width={450}
        height={562}
        className="intro-portrait mono-photo mb-4 h-[100px] w-[80px] object-cover md:h-[120px] md:w-[96px]"
      />
      <h1 id="hero-title" aria-label="Karim Abousleiman" className="m-0 flex flex-col items-center font-normal">
        <span className="intro-first text-[4.25rem] font-extrabold leading-[0.9] tracking-[-0.04em] md:text-[7rem]">KARIM</span>{" "}
        <span className="intro-last serif text-[3.375rem] leading-[0.95] tracking-[-0.02em] md:text-[7.5rem] md:leading-[0.9]">Abousleiman</span>
      </h1>
      <p className="intro-role mono m-0 mt-4 flex flex-wrap justify-center gap-x-2 text-[0.8125rem] tracking-[0.03em] md:mt-6 md:text-[0.9375rem]">
        {/* Each separator travels with the segment before it, so a wrapped line never starts with "·". */}
        <span className="whitespace-nowrap">SENIOR PM AT TF1+ <span aria-hidden="true">·</span></span>
        <span className="whitespace-nowrap">EX-GROUP PM AT GARANTME <span aria-hidden="true">·</span></span>
        <span className="whitespace-nowrap">PARIS</span>
      </p>
      <p className="intro-tag serif m-0 mt-2 max-w-[40rem] text-[1.125rem] italic leading-[1.3] text-[var(--h-muted)] md:mt-3 md:text-[1.5rem]">
        Builds products by day, writes music and shoots film by night.
      </p>
    </section>

    <section aria-labelledby="product-title" className="pt-10 md:pt-10">
      <div className="flex flex-col items-center text-center">
        <h2 id="product-title" className="m-0 text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[2.75rem] md:leading-[1.05] md:tracking-[-0.03em]">
          Products people come back to.
        </h2>
      </div>

      <ul className="m-0 mt-6 list-none border-t border-[var(--h-line-strong)] p-0 md:mt-7">
        {results.map((r) => (
          <li
            key={r.company}
            className="grid gap-1.5 border-b border-[var(--h-line)] py-5 md:grid-cols-[220px_minmax(0,1fr)_400px] md:items-center md:gap-10 md:py-6"
          >
            <span className="flex items-baseline justify-between">
              <img src={companies[r.company].logo} alt={r.company} width={companies[r.company].size[0]} height={companies[r.company].size[1]} className={`logo-mono w-auto ${companies[r.company].logoHeight}`} />
              <span className="mono text-[0.75rem] text-[var(--h-muted)] md:hidden">{r.years}</span>
            </span>
            <span className="flex flex-col gap-1">
              <span className="text-[0.875rem] text-[var(--h-muted)] md:text-base">
                {r.role}
                <span className="mono ml-2.5 hidden text-[var(--h-meta)] md:inline">{r.years}</span>
              </span>
              <span className="text-[0.875rem] leading-[1.5] text-[var(--h-body)] md:text-[0.9375rem]">{r.scope}</span>
            </span>
            <span className="mt-1.5 md:mt-0 md:text-right">
              <span className="figure text-[2.25rem] font-semibold leading-none md:text-[3.5rem]">{r.figure}</span>
              <span className="ml-1.5 text-[0.9375rem] text-[var(--h-muted)] md:ml-2 md:text-base">{r.label}</span>
            </span>
          </li>
        ))}
      </ul>

      <p className="m-0 mt-5 text-[0.9375rem] leading-[1.6] text-[var(--h-muted)] md:mt-7 md:text-center md:text-base">
        Myki, which launched at{" "}
        <a href={TECHCRUNCH} target="_blank" rel="noopener noreferrer" className="text-link text-[var(--h-ink)]">TechCrunch Disrupt SF in 2016<span aria-hidden="true"> ↗</span><span className="sr-only"> (opens in a new tab)</span></a>, was named{" "}
        <a href={PCMAG} target="_blank" rel="noopener noreferrer" className="text-link text-[var(--h-ink)]">PCMag Editors' Choice in 2018<span aria-hidden="true"> ↗</span><span className="sr-only"> (opens in a new tab)</span></a>{" "}
        while I was its product manager.
      </p>
      <Link
        to="/experience"
        className="row-link mono mt-4 flex h-12 items-center justify-between border-y border-[var(--h-line)] no-underline md:mx-auto md:mt-6 md:w-fit md:justify-center md:gap-3 md:border-0"
      >
        ALL PRODUCT WORK <span className="arrow" aria-hidden="true">→</span>
      </Link>
    </section>

    <section aria-labelledby="craft-title" className="grid gap-6 pb-20 pt-[72px] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-end md:gap-16 md:pb-28 md:pt-[136px]">
      <div>
        <h2 id="craft-title" className="serif m-0 text-[2.5rem] leading-[1.02] md:text-[3.25rem]">Same craft, different medium.</h2>
        <p className="m-0 mt-3.5 max-w-[26rem] text-[0.9375rem] leading-[1.6] text-[var(--h-muted)] md:mt-5 md:text-base">
          I release music as kimbü, take photographs and have credited film work. It's where I practise the craft,
          taste and storytelling I bring to product work.
        </p>
        <div className="mt-6 border-t border-[var(--h-line)] md:mt-7">
          <CraftLink label={`Listen to ${tracks[0].title}`} meta="MUSIC" to="/music#track-1" />
          <CraftLink label="Photographs" meta="PHOTOS" to="/visual-arts" />
          <CraftLink label="Film credits" meta="IMDB" href={IMDB} />
        </div>
      </div>
      <figure className="m-0">
        <div className="overflow-hidden">
          <img src={beirut.url} alt="Under Beirut's Sky: golden sunset clouds over the sea and the dark Beirut coastline" width={829} height={554} loading="lazy" className="block aspect-[4/3] w-full object-cover" />
        </div>
        <figcaption className="mono mt-2.5 text-[0.75rem] text-[var(--h-muted)]">Under Beirut's Sky</figcaption>
      </figure>
    </section>

    <Closing variant="product" />
  </SiteShell>
);

export default Index;
