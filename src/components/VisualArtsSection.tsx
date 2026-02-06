import { motion } from "framer-motion";
import { Camera, Film, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const photos = [
  { slug: "01-176335991", title: "01" },
  { slug: "02-176335199", title: "02" },
  { slug: "Look-The-Sun-Is-Leaving-Us-159257163", title: "Look The Sun Is Leaving Us" },
  { slug: "On-My-Way-159257892", title: "On My Way" },
  { slug: "Under-Beirut-s-Sky-159252769", title: "Under Beirut's Sky" },
  { slug: "Chaotic-Vision-159093712", title: "Chaotic Vision" },
  { slug: "Prince-From-The-Biomass-152154122", title: "Prince From The Biomass" },
  { slug: "Whatever-Works-In-Venice-156905640", title: "Whatever Works In Venice" },
  { slug: "12-1-08-157283589", title: "12-1-08" },
];

interface OEmbedData {
  url: string;
  thumbnail_url?: string;
  title: string;
}

const DeviantArtCard = ({ slug, title }: { slug: string; title: string }) => {
  const [thumbUrl, setThumbUrl] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      `https://backend.deviantart.com/oembed?url=https://www.deviantart.com/skipandcreate/art/${slug}`
    )
      .then((r) => r.json())
      .then((data: OEmbedData) => {
        setThumbUrl(data.url || data.thumbnail_url || null);
      })
      .catch(() => setThumbUrl(null));
  }, [slug]);

  return (
    <a
      href={`https://www.deviantart.com/skipandcreate/art/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card rounded-xl overflow-hidden group block hover:ring-1 hover:ring-primary/30 transition-all"
    >
      <div className="aspect-[4/3] bg-muted/20 overflow-hidden">
        {thumbUrl ? (
          <img
            src={thumbUrl}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-muted-foreground text-sm animate-pulse">Loading…</span>
          </div>
        )}
      </div>
      <div className="p-3 flex items-center justify-between">
        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors truncate">
          {title}
        </p>
        <ExternalLink size={14} className="text-muted-foreground/50 shrink-0" />
      </div>
    </a>
  );
};

const VisualArtsSection = () => {
  return (
    <section id="visual-arts" className="section-padding max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3"
      >
        Gallery
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-muted-foreground mb-10 max-w-xl"
      >
        A selection of my photography and cinema work. Explore more on my{" "}
        <a
          href="https://www.deviantart.com/skipandcreate"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          DeviantArt
        </a>
        .
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-12"
      >
        {/* Photography */}
        <motion.div variants={item}>
          <div className="flex items-center gap-2 mb-6">
            <Camera size={20} className="text-primary" />
            <h3 className="font-heading text-xl font-semibold">Photography</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <DeviantArtCard key={photo.slug} {...photo} />
            ))}
          </div>
        </motion.div>

        {/* Cinema */}
        <motion.div variants={item}>
          <div className="flex items-center gap-2 mb-6">
            <Film size={20} className="text-primary" />
            <h3 className="font-heading text-xl font-semibold">Cinema</h3>
          </div>
          <div className="glass-card p-2 rounded-xl overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/Ntqdo39yhVQ"
                title="Cinema video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VisualArtsSection;
