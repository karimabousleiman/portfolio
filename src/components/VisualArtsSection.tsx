import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useModal } from "@/components/SiteShell";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import untitled01 from "@/assets/photos/untitled-01.webp";
import untitled02 from "@/assets/photos/untitled-02.webp";
import lookTheSun from "@/assets/photos/look-the-sun-is-leaving-us.webp";
import onMyWay from "@/assets/photos/on-my-way.webp";
import underBeirut from "@/assets/photos/under-beiruts-sky.webp";
import chaoticVision from "@/assets/photos/chaotic-vision.webp";
import princeBiomass from "@/assets/photos/prince-from-the-biomass.webp";
import venice from "@/assets/photos/whatever-works-in-venice.webp";
import d120108 from "@/assets/photos/12-1-08.webp";


// Self-hosted, cropped exports of the DeviantArt originals (frames and watermark removed).
export const photos = [
  { slug: "01-176335991", title: "01", url: untitled01, alt: "Long-exposure light trails in pink, yellow and green curving through darkness" },
  { slug: "02-176335199", title: "02", url: untitled02, alt: "Red and yellow light trails sweeping across a black frame" },
  { slug: "Look-The-Sun-Is-Leaving-Us-159257163", title: "Look, The Sun Is Leaving Us...", url: lookTheSun, alt: "A hooded figure in silhouette at a railing, watching the sun set over the sea" },
  { slug: "On-My-Way-159257892", title: "On My Way.", url: onMyWay, alt: "A small aeroplane crossing an orange sunset reflected on the water" },
  { slug: "Under-Beirut-s-Sky-159252769", title: "Under Beirut's Sky.", url: underBeirut, alt: "Golden sunset clouds over the sea and the dark Beirut coastline" },
  { slug: "Chaotic-Vision-159093712", title: "Chaotic Vision", url: chaoticVision, alt: "A misty golden sunset over a shoreline and still water" },
  { slug: "Prince-From-The-Biomass-152154122", title: "Prince From The Biomass.", url: princeBiomass, alt: "A figure with outstretched arms in silhouette against a glowing pink and violet sky" },
  { slug: "Whatever-Works-In-Venice-156905640", title: "Whatever Works In Venice.", url: venice, alt: "Gondolas and moored boats along Venice's Grand Canal in saturated colour" },
  { slug: "12-1-08-157283589", title: "12.1.08", url: d120108, alt: "Colourful lakeside hotels lit at dusk, reflected in dark water" },
];

// Display order: the strongest image leads, the untitled pair closes.
const order = ["Whatever-Works", "Under-Beirut", "Look-The-Sun", "On-My-Way", "12-1-08", "Chaotic-Vision", "Prince-From", "01-", "02-"];
export const gallery = order.map((key) => photos.find((p) => p.slug.startsWith(key))!);

const caption = (title: string) => (/^\d+$/.test(title) ? "Untitled" : title.replace(/\.+$/, ""));
const num = (i: number) => String(i + 1).padStart(2, "0");

const VisualArtsSection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(() => setLightboxIndex((i) => (i !== null ? (i + 1) % gallery.length : null)), []);
  const goPrev = useCallback(() => setLightboxIndex((i) => (i !== null ? (i - 1 + gallery.length) % gallery.length : null)), []);

  const reduce = useReducedMotion();
  const dialogRef = useModal<HTMLDivElement>(lightboxIndex !== null, closeLightbox);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, goNext, goPrev]);

  const [lead, ...rest] = gallery;

  return (
    <>
      <button
        type="button"
        onClick={() => setLightboxIndex(0)}
        aria-label={`Open ${caption(lead.title)}`}
        className="photo-tile relative -mx-4 block w-[calc(100%+2rem)] overflow-hidden md:-mx-12 md:w-[calc(100%+6rem)]"
      >
        <img src={lead.url} alt={lead.alt} className="block h-[300px] w-full object-cover md:h-[640px]" />
        <span className="absolute inset-x-0 bottom-0 flex justify-between bg-[linear-gradient(transparent,rgb(21_17_14/0.75))] px-4 pb-4 pt-16 text-left md:px-12 md:pb-6">
          <span className="mono text-[0.75rem] text-[var(--h-ink)]">01 — {caption(lead.title).toUpperCase()}</span>
          <span className="mono text-[0.75rem] text-[var(--h-ink)]">1 / {gallery.length}</span>
        </span>
      </button>

      <ul className="m-0 mt-4 grid list-none grid-cols-1 gap-x-4 gap-y-6 p-0 sm:grid-cols-2 md:mt-4 lg:grid-cols-4">
        {rest.map((photo, i) => (
          <li key={photo.slug} className="min-w-0">
            <button
              type="button"
              onClick={() => setLightboxIndex(i + 1)}
              aria-label={`Open ${caption(photo.title)}`}
              className="photo-tile block w-full overflow-hidden"
            >
              <img src={photo.url} alt={photo.alt} loading="lazy" className="block aspect-[4/3] w-full object-cover" />
            </button>
            <p className="mono m-0 mt-2.5 text-[0.75rem] text-[var(--h-muted)]">
              {num(i + 1)} — {caption(photo.title)}
            </p>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={caption(gallery[lightboxIndex].title)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgb(21_17_14/0.95)]"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} aria-label="Close" autoFocus className="mono absolute right-3 top-3 z-10 flex h-11 items-center gap-2 px-2 text-[var(--h-ink)]">
              CLOSE <X size={20} strokeWidth={1.6} aria-hidden="true" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous photo"
              className="absolute left-2 z-10 grid h-11 w-11 place-items-center text-[var(--h-muted)] hover:text-[var(--h-ink)]"
            >
              <ChevronLeft size={28} strokeWidth={1.6} />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, filter: reduce ? "blur(0px)" : "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              src={gallery[lightboxIndex].url}
              alt={gallery[lightboxIndex].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-[88vw] object-contain"
            />
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next photo"
              className="absolute right-2 z-10 grid h-11 w-11 place-items-center text-[var(--h-muted)] hover:text-[var(--h-ink)]"
            >
              <ChevronRight size={28} strokeWidth={1.6} />
            </button>
            <p className="mono absolute bottom-6 m-0 text-[0.75rem] text-[var(--h-muted)]">
              {num(lightboxIndex)} — {caption(gallery[lightboxIndex].title).toUpperCase()} · {lightboxIndex + 1} / {gallery.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VisualArtsSection;

export const FilmEmbed = () => (
  <div className="bg-black">
    <iframe
      src="https://www.youtube.com/embed/Ntqdo39yhVQ"
      title="Film by Karim Abousleiman"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="block aspect-video w-full border-0"
    />
  </div>
);
