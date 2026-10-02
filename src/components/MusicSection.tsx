import { useState } from "react";

export const tracks = [
  { title: "1989a", url: "https://soundcloud.com/karim-abousleiman/1989a" },
  { title: "Prelude to Freedom", url: "https://soundcloud.com/karim-abousleiman/prelude-to-freedom" },
  { title: "Bittersweet Relief", url: "https://soundcloud.com/karim-abousleiman/bittersweet-relief" },
  { title: "Curse of Knowledge", url: "https://soundcloud.com/karim-abousleiman/curse-of-knowledge" },
  { title: "Soul Swap", url: "https://soundcloud.com/karim-abousleiman/soul-swap" },
  { title: "Kayafet Part II", url: "https://soundcloud.com/karim-abousleiman/kayafet-part-ii" },
  { title: "Je t'offre", url: "https://soundcloud.com/karim-abousleiman/je-toffre" },
  { title: "Honey Tea", url: "https://soundcloud.com/karim-abousleiman/honey-tea" },
];

export const streamingServices = [
  { name: "Spotify", url: "https://open.spotify.com/artist/0Imw18A2tidYlTFiVFLgBG" },
  { name: "Apple Music", url: "https://music.apple.com/us/artist/kimb%C3%BC/1596942904" },
  { name: "YouTube Music", url: "https://music.youtube.com/channel/UCOxgVKMtQRnLqTLpcZTbSww" },
  { name: "Deezer", url: "https://www.deezer.com/us/artist/152271282" },
];

const playerSrc = (url: string) =>
  `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff8a5c&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;

/** Numbered track list; opening a row loads its SoundCloud player in place, one at a time. */
export const TrackList = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <ol className="m-0 list-none border-t border-[var(--h-line-strong)] p-0">
      {tracks.map((t, i) => {
        const isOpen = open === i;
        return (
          <li key={t.url} className="border-b border-[var(--h-line)]">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={isOpen ? `player-${i}` : undefined}
              aria-label={isOpen ? `Close the ${t.title} player` : `Listen to ${t.title}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="row-link grid min-h-[52px] w-full grid-cols-[40px_minmax(0,1fr)_auto] items-center py-3 text-left md:grid-cols-[64px_minmax(0,1fr)_auto] md:py-5"
            >
              <span className={`mono ${isOpen ? "text-[var(--h-accent)]" : "text-[var(--h-meta)]"}`}>{String(i + 1).padStart(2, "0")}</span>
              <span className="serif text-[1.5rem] leading-none md:text-[2.5rem]">{t.title}</span>
              <span className="mono text-[0.75rem] text-[var(--h-muted)]">{isOpen ? "CLOSE" : "LISTEN"}</span>
            </button>
            {isOpen && (
              <div id={`player-${i}`} className="pb-5">
                <iframe
                  width="100%"
                  height="120"
                  allow="autoplay"
                  src={playerSrc(t.url)}
                  title={`${t.title} on SoundCloud`}
                  className="block border-0"
                />
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
};
