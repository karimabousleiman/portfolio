import { motion } from "framer-motion";
import { Music, ExternalLink } from "lucide-react";

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
  { name: "Spotify", url: "https://open.spotify.com/artist/YOUR_ID", icon: "🟢" },
  { name: "Apple Music", url: "https://music.apple.com/artist/YOUR_ID", icon: "🍎" },
  { name: "YouTube Music", url: "https://music.youtube.com/channel/YOUR_ID", icon: "▶️" },
  { name: "Tidal", url: "https://tidal.com/artist/YOUR_ID", icon: "🌊" },
  { name: "Deezer", url: "https://www.deezer.com/artist/YOUR_ID", icon: "🎵" },
];

const MusicSection = () => {
  return (
    <section id="music" className="section-padding max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3"
      >
        <Music size={28} className="text-primary" />
        Music
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-muted-foreground mb-8 max-w-xl"
      >
        Multi-instrumentalist with a particular interest in Jazz. Check out my tracks below.
      </motion.p>

      {/* Individual Track Embeds */}
      <div className="space-y-4 mb-12">
        {tracks.map((track, index) => (
          <motion.div
            key={track.url}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass-card rounded-xl overflow-hidden"
          >
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.url)}&color=%23d4952b&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
              title={track.title}
            />
          </motion.div>
        ))}
      </div>

      {/* Streaming Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-6 rounded-xl"
      >
        <h3 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
          <ExternalLink size={20} className="text-primary" />
          Find Me on Streaming Services
        </h3>
        <div className="flex flex-wrap gap-3">
          {streamingServices.map((service) => (
            <a
              key={service.name}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              <span>{service.icon}</span>
              {service.name}
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-xs mt-3 italic">
          Update the streaming links above with your actual artist profile URLs.
        </p>
      </motion.div>
    </section>
  );
};

export default MusicSection;
