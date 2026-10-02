import { Link } from "react-router-dom";
import SiteShell, { Closing, IMDB, PCMAG, TECHCRUNCH } from "@/components/SiteShell";
import portrait from "@/assets/portrait.webp";
import { photos } from "@/components/VisualArtsSection";
import { tracks } from "@/components/MusicSection";
import { results } from "@/components/ExperienceSection";

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
    <section aria-labelledby="hero-title" className="flex flex-col items-center pt-8 text-center md:pt-14">
      <h1 id="hero-title" className="m-0 flex flex-col items-center font-normal">
        <span className="intro-first text-[5rem] font-extrabold leading-[0.9] tracking-[-0.04em] md:text-[10.5rem]">KARIM</span>
        <span className="intro-last serif text-[3.875rem] leading-[0.95] tracking-[-0.02em] md:text-[11rem] md:leading-[0.9]">Abousleiman</span>
      </h1>
      <p className="intro-role mono m-0 mt-5 text-[0.8125rem] tracking-[0.03em] md:mt-8 md:text-[0.9375rem]">
        SENIOR PRODUCT MANAGER · TF1+ · PARIS
      </p>
      <p className="intro-tag serif m-0 mt-2.5 max-w-[40rem] text-[1.25rem] italic leading-[1.3] text-[var(--h-muted)] md:mt-3.5 md:text-[1.625rem]">
        Builds products by day, writes music and shoots film by night.
      </p>
      <img
        src={portrait}
        alt="Karim playing a Telecaster-style electric guitar in a living room, black and white"
        width={864}
        height={1184}
        className="intro-portrait mono-photo mt-6 h-[200px] w-full object-cover object-[30%_30%] md:mt-10 md:h-[250px] md:w-[200px] md:object-[30%_center]"
      />
    </section>

    <section aria-labelledby="product-title" className="pt-12 md:pt-28">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-12">
        <h2 id="product-title" className="m-0 max-w-[49rem] text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[3rem] md:leading-[1.05] md:tracking-[-0.03em]">
          Eight years growing products people come back to.
        </h2>
        <Link to="/experience" className="row-link mono hidden shrink-0 py-3 no-underline md:block">
          FULL EXPERIENCE <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </div>

      <ul className="m-0 mt-5 list-none border-t border-[var(--h-line-strong)] p-0 md:mt-10">
        {results.map((r) => (
          <li
            key={r.company}
            className="grid gap-1.5 border-b border-[var(--h-line)] py-5 md:grid-cols-[220px_minmax(0,1fr)_400px] md:items-start md:gap-10 md:py-[30px]"
          >
            <span className="flex items-baseline justify-between">
              <span className="text-[1.25rem] font-semibold tracking-[-0.02em] md:text-[1.875rem]">{r.company}</span>
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

      <p className="m-0 mt-5 text-[0.9375rem] leading-[1.6] text-[var(--h-muted)] md:mt-7 md:text-base">
        Myki was a{" "}
        <a href={PCMAG} target="_blank" rel="noopener noreferrer" className="text-link text-[var(--h-ink)]">PCMag Editors' Choice in 2018<span aria-hidden="true"> ↗</span><span className="sr-only"> (opens in a new tab)</span></a>{" "}
        and launched on the{" "}
        <a href={TECHCRUNCH} target="_blank" rel="noopener noreferrer" className="text-link text-[var(--h-ink)]">TechCrunch Disrupt SF stage<span aria-hidden="true"> ↗</span><span className="sr-only"> (opens in a new tab)</span></a>.
      </p>
      <Link
        to="/experience"
        className="row-link mono mt-4 flex h-12 items-center justify-between border-y border-[var(--h-line)] no-underline md:hidden"
      >
        FULL EXPERIENCE <span className="arrow" aria-hidden="true">→</span>
      </Link>
    </section>

    <section aria-labelledby="craft-title" className="dusk mt-[72px] grid gap-6 py-14 md:mt-[136px] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-end md:gap-16 md:py-24">
      <div>
        <h2 id="craft-title" className="serif m-0 text-[2.5rem] leading-[1.02] md:text-[3.25rem]">Same craft, different medium.</h2>
        <p className="m-0 mt-3.5 max-w-[26rem] text-[0.9375rem] leading-[1.6] text-[var(--h-muted)] md:mt-5 md:text-base">
          I release music as kimbü, take photographs and have credited film work. It's where I practise the craft,
          taste and storytelling I bring to product work.
        </p>
        <div className="mt-6 border-t border-[var(--h-line)] md:mt-7">
          <CraftLink label={`Listen to ${tracks[0].title}`} meta="MUSIC" to="/music" />
          <CraftLink label="Photographs" meta="IMAGE" to="/visual-arts" />
          <CraftLink label="Film credits" meta="IMDB" href={IMDB} />
        </div>
      </div>
      <figure className="m-0">
        <div className="overflow-hidden">
          <img src={beirut.url} alt="Under Beirut's Sky: golden sunset clouds over the sea and the dark Beirut coastline" loading="lazy" className="block aspect-[4/3] w-full object-cover" />
        </div>
        <figcaption className="mono mt-2.5 text-[0.75rem] text-[var(--h-muted)]">Under Beirut's Sky</figcaption>
      </figure>
    </section>

    <Closing variant="product" />
  </SiteShell>
);

export default Index;
