import { ArrowUpRight } from "lucide-react";
import spotifyLogo from "@/assets/spotify-logo.svg";
import appleMusicLogo from "@/assets/apple-music-logo.svg";
import ytMusicLogo from "@/assets/youtube-music-logo.svg";
import deezerLogo from "@/assets/deezer-logo.svg";

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
  { name: "Spotify", url: "https://open.spotify.com/artist/0Imw18A2tidYlTFiVFLgBG", logo: spotifyLogo },
  { name: "Apple Music", url: "https://music.apple.com/us/artist/kimb%C3%BC/1596942904", logo: appleMusicLogo },
  { name: "YouTube Music", url: "https://music.youtube.com/channel/UCOxgVKMtQRnLqTLpcZTbSww", logo: ytMusicLogo },
  { name: "Deezer", url: "https://www.deezer.com/us/artist/152271282", logo: deezerLogo },
];

export const StreamingLinks = () => (
  <ul className="m-0 grid list-none grid-cols-2 gap-x-6 border-t border-[var(--h-line)] p-0 sm:grid-cols-4">
    {streamingServices.map((service) => (
      <li key={service.name} className="border-b border-[var(--h-line)]">
        <a
          href={service.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 py-4 pr-3 no-underline transition-colors hover:bg-[var(--h-hover)]"
        >
          <img src={service.logo} alt="" className="h-6 w-6" />
          <span className="flex-1 font-medium">{service.name}</span>
          <ArrowUpRight size={14} aria-hidden="true" className="text-[var(--h-meta)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </li>
    ))}
  </ul>
);

const MusicSection = () => (
  <ul className="m-0 grid list-none gap-x-8 gap-y-10 p-0 lg:grid-cols-2">
    {tracks.map((track) => (
      <li key={track.url} className="min-w-0">
        <h3 className="mb-3 font-medium">{track.title}</h3>
        <iframe
          width="100%"
          height="120"
          loading="lazy"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.url)}&color=%23e0531c&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
          title={`${track.title} on SoundCloud`}
          className="block rounded-lg border border-[var(--h-line)] bg-white"
        />
      </li>
    ))}
  </ul>
);

export default MusicSection;
