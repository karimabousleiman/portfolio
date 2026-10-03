import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import spotifyLogo from "@/assets/spotify-logo.svg";
import appleMusicLogo from "@/assets/apple-music-logo.svg";
import ytMusicLogo from "@/assets/youtube-music-logo.svg";
import deezerLogo from "@/assets/deezer-logo.svg";

export const tracks = [
  { title: "1989", url: "https://soundcloud.com/karim-abousleiman/1989a" },
  { title: "Prelude to Freedom", url: "https://soundcloud.com/karim-abousleiman/prelude-to-freedom" },
  { title: "Bittersweet Relief", url: "https://soundcloud.com/karim-abousleiman/bittersweet-relief" },
  { title: "Curse of Knowledge", url: "https://soundcloud.com/karim-abousleiman/curse-of-knowledge" },
  { title: "Soul Swap", url: "https://soundcloud.com/karim-abousleiman/soul-swap" },
  { title: "Kayafet Part II", url: "https://soundcloud.com/karim-abousleiman/kayafet-part-ii" },
  { title: "Je t'offre", url: "https://soundcloud.com/karim-abousleiman/je-toffre" },
  { title: "Honey Tea", url: "https://soundcloud.com/karim-abousleiman/honey-tea" },
];

export const streamingServices = [
  { name: "Spotify", url: "https://open.spotify.com/artist/0Imw18A2tidYlTFiVFLgBG", logo: spotifyLogo },
  { name: "Apple Music", url: "https://music.apple.com/us/artist/kimb%C3%BC/1596942904", logo: appleMusicLogo },
  { name: "YouTube Music", url: "https://music.youtube.com/channel/UCOxgVKMtQRnLqTLpcZTbSww", logo: ytMusicLogo },
  { name: "Deezer", url: "https://www.deezer.com/us/artist/152271282", logo: deezerLogo },
];

const playerSrc = (url: string, autoPlay: boolean) =>
  `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff8a5c&auto_play=${autoPlay}&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;

/** Numbered track list; opening a row loads its SoundCloud player in place, one at a time. */
export const TrackList = () => {
  // "/music#track-1" opens that track, so "Listen to 1989" on the home page lands on a player.
  const [open, setOpen] = useState<number | null>(() => {
    const m = /^#track-(\d+)$/.exec(window.location.hash);
    const i = m ? Number(m[1]) - 1 : -1;
    return i >= 0 && i < tracks.length ? i : null;
  });
  // Only a click on the row plays straight away; arriving from a link opens the player paused.
  const [clicked, setClicked] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    // Wait for the route's scroll-to-top, then bring the linked track into view.
    if (open === null || !window.location.hash) return;
    const id = window.setTimeout(() => document.getElementById(`track-${open + 1}`)?.scrollIntoView({ block: "start" }), 80);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only on arrival
  }, []);
  return (
    <ol className="m-0 list-none border-t border-[var(--h-line-strong)] p-0">
      {tracks.map((t, i) => {
        const isOpen = open === i;
        return (
          <li key={t.url} id={`track-${i + 1}`} className="scroll-mt-24 border-b border-[var(--h-line)]">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={isOpen ? `player-${i}` : undefined}
              aria-label={isOpen ? `Close the ${t.title} player` : `Listen to ${t.title}`}
              onClick={() => { setClicked(true); setOpen(isOpen ? null : i); }}
              className="row-link grid min-h-[52px] w-full grid-cols-[40px_minmax(0,1fr)_auto] items-center py-3 text-left md:grid-cols-[64px_minmax(0,1fr)_auto] md:py-5"
            >
              <span className={`mono ${isOpen ? "text-[var(--h-accent)]" : "text-[var(--h-meta)]"}`}>{String(i + 1).padStart(2, "0")}</span>
              <span className="serif text-[1.5rem] leading-none md:text-[2.5rem]">{t.title}</span>
              <span className="mono text-[0.75rem] text-[var(--h-muted)]">{isOpen ? "CLOSE" : "LISTEN"}</span>
            </button>
            <AnimatePresence initial={false}>
            {isOpen && (
              // The player unfolds from its row, so it reads as part of that track rather than a new block.
              <motion.div
                id={`player-${i}`}
                className="overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="pb-5">
                <iframe
                  width="100%"
                  height="120"
                  allow="autoplay"
                  src={playerSrc(t.url, clicked)}
                  title={`${t.title} on SoundCloud`}
                  className="block border-0"
                />
              </div>
              </motion.div>
            )}
            </AnimatePresence>
          </li>
        );
      })}
    </ol>
  );
};
