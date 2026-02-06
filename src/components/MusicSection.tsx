import { motion } from "framer-motion";
import { Music, ExternalLink } from "lucide-react";
import spotifyLogo from "@/assets/spotify-logo.svg";
import appleMusicLogo from "@/assets/apple-music-logo.svg";
import ytMusicLogo from "@/assets/youtube-music-logo.svg";
import deezerLogo from "@/assets/deezer-logo.svg";

const tracks = [
  { title: "1989a", url: "https://soundcloud.com/karim-abousleiman/1989a" },
  { title: "Prelude to Freedom", url: "https://soundcloud.com/karim-abousleiman/prelude-to-freedom" },
  { title: "Bittersweet Relief", url: "https://soundcloud.com/karim-abousleiman/bittersweet-relief" },
  { title: "Curse of Knowledge", url: "https://soundcloud.com/karim-abousleiman/curse-of-knowledge" },
  { title: "Soul Swap", url: "https://soundcloud.com/karim-abousleiman/soul-swap" },
  { title: "Kayafet Part II", url: "https://soundcloud.com/karim-abousleiman/kayafet-part-ii" },
  { title: "Je t'offre", url: "https://soundcloud.com/karim-abousleiman/je-toffre" },
  { title: "Honey Tea", url: "https://soundcloud.com/karim-abousleiman/honey-tea" },
];

const streamingServices = [
  { name: "Spotify", url: "https://open.spotify.com/artist/0Imw18A2tidYlTFiVFLgBG", logo: spotifyLogo, bg: "bg-[#1DB954]/10 hover:bg-[#1DB954]/20" },
  { name: "Apple Music", url: "https://music.apple.com/us/artist/kimb%C3%BC/1596942904", logo: appleMusicLogo, bg: "bg-[#FA243C]/10 hover:bg-[#FA243C]/20" },
  { name: "YouTube Music", url: "https://music.youtube.com/channel/UCOxgVKMtQRnLqTLpcZTbSww", logo: ytMusicLogo, bg: "bg-[#FF0000]/10 hover:bg-[#FF0000]/20" },
  { name: "Deezer", url: "https://www.deezer.com/us/artist/152271282", logo: deezerLogo, bg: "bg-[#A238FF]/10 hover:bg-[#A238FF]/20" },
];

const MusicSection = () => {
  return (
    <section id="music" className="pt-8 md:pt-12 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">

      {/* Streaming Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-6 rounded-xl mb-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {streamingServices.map((service) => (
            <a
              key={service.name}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center gap-3 aspect-square rounded-xl ${service.bg} border border-border/50 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            >
              <img src={service.logo} alt={service.name} className="w-12 h-12" />
              <span className="text-sm font-medium text-foreground">{service.name}</span>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Sneak Peek */}
      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-2xl font-semibold mb-6 flex items-center gap-2"
      >
        🎧 Sneak Peek
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tracks.map((track, index) => (
          <motion.div
            key={track.url}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass-card rounded-xl overflow-hidden p-4"
          >
            <p className="text-sm font-medium text-foreground mb-3">{track.title}</p>
            <iframe
              width="100%"
              height="120"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.url)}&color=%23d4952b&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
              title={track.title}
              className="rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MusicSection;
