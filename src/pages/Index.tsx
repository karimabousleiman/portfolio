import { Link } from "react-router-dom";
import SiteShell, { Closing, IMDB, PCMAG, TECHCRUNCH } from "@/components/SiteShell";
import { photos } from "@/components/VisualArtsSection";
import { tracks } from "@/components/MusicSection";
import { companies, results } from "@/components/ExperienceSection";
import { products } from "@/components/ProductsSection";
import SoundField from "@/components/SoundField";

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
    {/* First screen: name, role and the line that introduces the results, over the sound field. */}
    <div className="bleed relative flex min-h-[calc(100svh-3.5rem)] flex-col md:min-h-[calc(100svh-4rem)]">
      <SoundField />
      <section aria-labelledby="hero-title" className="relative flex flex-1 flex-col items-center justify-center px-4 text-center">
        <h1 id="hero-title" aria-label="Karim Abousleiman" className="m-0 flex flex-col items-center font-normal">
          <span className="intro-first text-[clamp(4.25rem,min(19vw,22svh),12.5rem)] font-extrabold leading-[0.88] tracking-[-0.04em]">KARIM</span>{" "}
          <span className="intro-last serif text-[clamp(3.4rem,min(20vw,24svh),13.5rem)] leading-[0.9] tracking-[-0.02em]">Abousleiman</span>
        </h1>
        <p className="intro-role mono m-0 mt-6 flex flex-wrap justify-center gap-x-2.5 text-[0.875rem] tracking-[0.06em] md:mt-8 md:text-[1.0625rem]">
          {/* Each separator travels with the segment before it, so a wrapped line never starts with "·". */}
          <span className="whitespace-nowrap">SENIOR PRODUCT MANAGER <span aria-hidden="true">·</span></span>
          <span className="whitespace-nowrap">MUSIC COMPOSER <span aria-hidden="true">·</span></span>
          <span className="whitespace-nowrap">PARIS</span>
        </p>
      </section>
      <h2 id="product-title" className="intro-tag relative m-0 px-4 pb-10 text-center text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] md:pb-14 md:text-[3.25rem] md:leading-[1.05] md:tracking-[-0.03em]">
        Building products people <span className="text-[var(--h-accent)]">come back to</span>.
      </h2>
    </div>

    <section aria-labelledby="product-title">
      <ul className="m-0 list-none border-t border-[var(--h-line-strong)] p-0">
        {results.map((r) => (
          <li
            key={r.company}
            className="grid gap-1.5 border-b border-[var(--h-line)] py-5 md:py-6 lg:grid-cols-[220px_minmax(0,1fr)_320px] lg:items-center lg:gap-10"
          >
            <span className="flex items-baseline justify-between">
              <img src={companies[r.company].logo} alt={r.company} width={companies[r.company].size[0]} height={companies[r.company].size[1]} className={`logo-mono w-auto ${companies[r.company].logoHeight}`} />
              <span className="mono text-[0.75rem] text-[var(--h-accent)] lg:hidden">{r.years}</span>
            </span>
            <span className="flex flex-col gap-1">
              <span className="text-[0.875rem] text-[var(--h-muted)] md:text-base">
                {r.role}
                <span className="mono ml-2.5 hidden whitespace-nowrap text-[var(--h-accent)] lg:inline">{r.years}</span>
              </span>
              <span className="text-[0.875rem] leading-[1.5] text-[var(--h-body)] md:text-[0.9375rem]">{r.scope}</span>
            </span>
            <span className="mt-1.5 lg:mt-0 lg:text-right">
              <span className="figure text-[2.25rem] font-semibold leading-none text-[var(--h-accent)] md:text-[3.5rem]">{r.figure}</span>
              <span className="ml-1.5 text-[0.9375rem] text-[var(--h-muted)] md:ml-2 md:text-base">{r.label}</span>
            </span>
          </li>
        ))}
      </ul>

      <p className="m-0 mt-6 text-[0.9375rem] leading-[1.6] text-[var(--h-muted)] md:text-center md:text-base">
        Myki, which launched at{" "}
        <a href={TECHCRUNCH} target="_blank" rel="noopener noreferrer" className="text-link text-[var(--h-ink)]">TechCrunch Disrupt SF in 2016<span aria-hidden="true"> ↗</span><span className="sr-only"> (opens in a new tab)</span></a>, was named{" "}
        <a href={PCMAG} target="_blank" rel="noopener noreferrer" className="text-link text-[var(--h-ink)]">PCMag Editors' Choice in 2018<span aria-hidden="true"> ↗</span><span className="sr-only"> (opens in a new tab)</span></a>{" "}
        while I was its product manager.
      </p>
      <Link
        to="/experience"
        className="row-link mono mt-4 flex h-12 items-center justify-between border-y border-[var(--h-line)] no-underline md:mx-auto md:mt-6 md:w-fit md:justify-center md:gap-3 md:border-0"
      >
        FULL EXPERIENCE <span className="arrow" aria-hidden="true">→</span>
      </Link>
    </section>

    {/* Own products: the screenshot leads on the left, mirroring the craft section below. */}
    <section aria-labelledby="products-title" className="grid gap-6 pt-16 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:items-end md:gap-16 md:pt-28">
      <div className="md:order-2">
        <h2 id="products-title" className="serif m-0 text-[2.5rem] leading-[1.02] md:text-[3.25rem]">I build my own products too.</h2>
        <p className="m-0 mt-4 max-w-[26rem] text-[0.9375rem] leading-[1.6] text-[var(--h-muted)] md:text-base">
          The latest is a reading companion to Simon Sebag Montefiore's <cite className="text-[var(--h-ink)]">The Cauldron</cite>: look up anyone in the book and see who ruled where, year by year.
        </p>
        <div className="mt-6 border-t border-[var(--h-line)]">
          <CraftLink label={products[0].name} meta="PRODUCTS" to="/products" />
        </div>
      </div>
      <div className="overflow-hidden border border-[var(--h-line)] md:order-1">
        <img src={products[0].image.src} alt={products[0].image.alt} width={products[0].image.width} height={products[0].image.height} loading="lazy" className="block aspect-[4/3] w-full object-cover object-left-top" />
      </div>
    </section>

    <section aria-labelledby="craft-title" className="grid gap-6 pb-4 pt-16 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-end md:gap-16  md:pt-28">
      <div>
        <h2 id="craft-title" className="serif m-0 text-[2.5rem] leading-[1.02] md:text-[3.25rem]">Same craft, different medium.</h2>
        <p className="m-0 mt-4 max-w-[26rem] text-[0.9375rem] leading-[1.6] text-[var(--h-muted)] md:text-base">
          I release music as kimbü, take photographs and have credited film work. It's where I practise the craft,
          taste and storytelling I bring to product work.
        </p>
        <div className="mt-6 border-t border-[var(--h-line)]">
          <CraftLink label={`Listen to ${tracks[0].title}`} meta="MUSIC" to="/music#track-1" />
          <CraftLink label="Photographs" meta="VISUAL ARTS" to="/visual-arts" />
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
