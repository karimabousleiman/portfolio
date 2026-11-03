import { useEffect, useState } from "react";
import Shell, { NewTab } from "@/site/Shell";
import { streamingServices, tracks } from "@/data/site";
import portrait from "@/assets/portrait.webp";

const playerSrc = (url: string, autoPlay: boolean) =>
  `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23fc5000&auto_play=${autoPlay}&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;

const Music = () => {
  // "/music#track-1" opens that track, paused; only a click on a row plays straight away.
  const [open, setOpen] = useState<number | null>(() => {
    const m = /^#track-(\d+)$/.exec(window.location.hash);
    const i = m ? Number(m[1]) - 1 : -1;
    return i >= 0 && i < tracks.length ? i : null;
  });
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (open === null || !window.location.hash) return;
    const id = window.setTimeout(() => document.getElementById(`track-${open + 1}`)?.scrollIntoView({ block: "start" }), 80);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only on arrival
  }, []);

  return (
    <Shell title="Music · kimbü · Karim Abousleiman" active="music" band="make">
      <section className="wrap" style={{ paddingTop: 32 }}>
        <div className="ht rise music-hero">
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <span className="tag" style={{ alignSelf: "flex-start" }}>Released as kimbü</span>
            <h1 className="d" style={{ fontSize: "clamp(72px, 17vw, 250px)", lineHeight: 0.84 }}>Music</h1>
            <p style={{ margin: 0, maxWidth: "28rem", fontSize: 20 }}>Jazz-rooted tracks I write and play across more than ten instruments.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {streamingServices.map((s) => (
                <a key={s.name} className="chip" href={s.url} target="_blank" rel="noopener noreferrer"><img src={s.logo} alt="" />{s.name}<NewTab /></a>
              ))}
            </div>
          </div>
          <div className="arch">
            <img src={portrait} alt="Karim playing a Telecaster-style electric guitar in a living room" width={864} height={1184} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "30% center", display: "block" }} />
          </div>
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="tracks-h">
        <h2 id="tracks-h" className="d h2">Eight tracks</h2>
        <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {tracks.map((t, i) => {
            const isOpen = open === i;
            return (
              <li key={t.url} id={`track-${i + 1}`} className="trk" style={{ scrollMarginTop: 96 }}>
                <div className="trk-h">
                  <span className="d" style={{ fontSize: 28, color: "var(--soft)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <p className="d" style={{ fontSize: "clamp(28px, 4.4vw, 64px)" }}>{t.title}</p>
                  <button
                    type="button"
                    className={isOpen ? "play on" : "play"}
                    aria-expanded={isOpen}
                    aria-controls={isOpen ? `player-${i}` : undefined}
                    aria-label={isOpen ? `Close the ${t.title} player` : `Listen to ${t.title}`}
                    onClick={() => { setClicked(true); setOpen(isOpen ? null : i); }}
                  >
                    {isOpen ? "Close" : "Listen"}
                  </button>
                </div>
                {isOpen && (
                  <div id={`player-${i}`} className="player">
                    <iframe title={`${t.title} on SoundCloud`} src={playerSrc(t.url, clicked)} allow="autoplay" loading="lazy" />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </section>
    </Shell>
  );
};

export default Music;
