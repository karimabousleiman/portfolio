import { motion } from "framer-motion";
import { Music } from "lucide-react";

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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-6 rounded-xl"
      >
        {/* Replace the SoundCloud URL below with your actual profile/playlist embed */}
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/karim-abousleiman&color=%23d4952b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          className="rounded-lg"
          title="SoundCloud Player"
        />
      </motion.div>
    </section>
  );
};

export default MusicSection;
