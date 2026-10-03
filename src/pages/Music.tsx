import SiteShell, { Closing } from "@/components/SiteShell";
import { streamingServices, TrackList } from "@/components/MusicSection";
import portrait from "@/assets/portrait.webp";

const Music = () => (
  <SiteShell title="Music · Karim Abousleiman">
    <section aria-labelledby="music-title" className="relative -mx-4 md:-mx-12 md:min-h-[720px]">
      <img
        src={portrait}
        alt="Karim playing a Telecaster-style electric guitar, black and white"
        width={864}
        height={1184}
        className="mono-photo block h-[420px] w-full object-cover object-[30%_center] md:absolute md:right-0 md:top-0 md:h-full md:w-[56%]"
      />
      <div aria-hidden="true" className="photo-fade absolute right-0 top-0 hidden h-full w-[56%] md:block" />
      <div className="relative px-4 pt-8 md:absolute md:bottom-16 md:left-12 md:w-[640px] md:px-0 md:pt-0">
        <p className="mono m-0 text-[var(--h-meta)]">RELEASED AS KIMBÜ</p>
        <h1 id="music-title" className="serif m-0 mt-2 text-[4.5rem] leading-[0.9] tracking-[-0.02em] md:mt-3 md:text-[10.5rem]">Music</h1>
        <p className="m-0 mt-4 max-w-[30rem] text-[0.9375rem] leading-[1.6] text-[var(--h-muted)] md:mt-6 md:text-[1.125rem]">
          Jazz-rooted tracks I write and play across more than ten instruments.
        </p>
        <ul className="m-0 mt-6 grid list-none grid-cols-2 gap-2 p-0 md:mt-8 md:flex md:flex-wrap md:gap-2.5">
          {streamingServices.map((s) => (
            <li key={s.name}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary !h-11 w-full md:w-auto"
              >
                {s.name.toUpperCase()} <span aria-hidden="true">↗</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section aria-labelledby="tracks-title" className="grid gap-4 pb-20 pt-12 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10 md:pb-28 md:pt-24">
      <h2 id="tracks-title" className="mono m-0 font-normal text-[var(--h-meta)]">TRACKS</h2>
      <TrackList />
    </section>

    <Closing variant="something" />
  </SiteShell>
);

export default Music;
