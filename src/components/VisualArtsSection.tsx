import { motion, AnimatePresence } from "framer-motion";
import { Camera, Film, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const photos = [
  {
    slug: "01-176335991",
    title: "01",
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bdbfaf8-4080-434d-a77e-8b532dc71e96/d2wzhpz-103faeee-e290-4c11-a84f-a78ddfcfac37.jpg/v1/fill/w_1077,h_742,q_70,strp/01_by_skipandcreate_d2wzhpz-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzQwMSIsInBhdGgiOiIvZi8zYmRiZmFmOC00MDgwLTQzNGQtYTc3ZS04YjUzMmRjNzFlOTYvZDJ3emhwei0xMDNmYWVlZS1lMjkwLTRjMTEtYTg0Zi1hNzhkZGZjZmFjMzcuanBnIiwid2lkdGgiOiI8PTQ5MzcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Xe-Q80xe0uRDPzm_MBq1J8b4IgvZXeVbaWUPnBhDepU",
  },
  {
    slug: "02-176335199",
    title: "02",
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bdbfaf8-4080-434d-a77e-8b532dc71e96/d2wzh3z-2b8fe4fe-e4d1-4528-bc77-84e63be7af8c.jpg/v1/fill/w_1024,h_705,q_75,strp/02_by_skipandcreate_d2wzh3z-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzA1IiwicGF0aCI6Ii9mLzNiZGJmYWY4LTQwODAtNDM0ZC1hNzdlLThiNTMyZGM3MWU5Ni9kMnd6aDN6LTJiOGZlNGZlLWU0ZDEtNDUyOC1iYzc3LTg0ZTYzYmU3YWY4Yy5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.mEDe-9N_48cJiEWP4KbY-o9_PoaMs4kPfuPytPWXjQs",
  },
  {
    slug: "Look-The-Sun-Is-Leaving-Us-159257163",
    title: "Look, The Sun Is Leaving Us...",
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bdbfaf8-4080-434d-a77e-8b532dc71e96/d2mtfm3-d9c7b954-165a-43f2-b574-2d1ff6bb8e65.jpg/v1/fill/w_900,h_616,q_75,strp/look__the_sun_is_leaving_us____by_skipandcreate_d2mtfm3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE2IiwicGF0aCI6Ii9mLzNiZGJmYWY4LTQwODAtNDM0ZC1hNzdlLThiNTMyZGM3MWU5Ni9kMm10Zm0zLWQ5YzdiOTU0LTE2NWEtNDNmMi1iNTc0LTJkMWZmNmJiOGU2NS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.f7AsU4KBi81pRwqUFoRla9M_319JbnaN1qpUMwYnzEc",
  },
  {
    slug: "On-My-Way-159257892",
    title: "On My Way.",
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bdbfaf8-4080-434d-a77e-8b532dc71e96/d2mtg6c-2dd52e61-2ba8-415a-9ba2-afd25fd9d959.jpg/v1/fill/w_900,h_616,q_75,strp/on_my_way__by_skipandcreate_d2mtg6c-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE2IiwicGF0aCI6Ii9mLzNiZGJmYWY4LTQwODAtNDM0ZC1hNzdlLThiNTMyZGM3MWU5Ni9kMm10ZzZjLTJkZDUyZTYxLTJiYTgtNDE1YS05YmEyLWFmZDI1ZmQ5ZDk1OS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.yhDfhqjgYzcU4sOUJ7kI5HCG_0yWGC88V7LvBjPP66k",
  },
  {
    slug: "Under-Beirut-s-Sky-159252769",
    title: "Under Beirut's Sky.",
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bdbfaf8-4080-434d-a77e-8b532dc71e96/d2mtc81-0ae4f4a3-4091-41ec-958b-dc66920591ba.jpg/v1/fill/w_900,h_625,q_75,strp/under_beirut_s_sky__by_skipandcreate_d2mtc81-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjI1IiwicGF0aCI6Ii9mLzNiZGJmYWY4LTQwODAtNDM0ZC1hNzdlLThiNTMyZGM3MWU5Ni9kMm10YzgxLTBhZTRmNGEzLTQwOTEtNDFlYy05NThiLWRjNjY5MjA1OTFiYS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.A5XwOyr48LvDfquXDjm7wL4cFDOac9Gwot2YOLxLkW0",
  },
  {
    slug: "Chaotic-Vision-159093712",
    title: "Chaotic Vision",
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bdbfaf8-4080-434d-a77e-8b532dc71e96/d2mpxhs-2da0c601-17ca-4ffa-9f6e-71224c9fbd82.jpg/v1/fill/w_900,h_627,q_75,strp/chaotic_vision_by_skipandcreate_d2mpxhs-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjI3IiwicGF0aCI6Ii9mLzNiZGJmYWY4LTQwODAtNDM0ZC1hNzdlLThiNTMyZGM3MWU5Ni9kMm1weGhzLTJkYTBjNjAxLTE3Y2EtNGZmYS05ZjZlLTcxMjI0YzlmYmQ4Mi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.0iii4Uwk51WYYiCr_TFI94gXazIfctpU1gDJNCmJUXg",
  },
  {
    slug: "Prince-From-The-Biomass-152154122",
    title: "Prince From The Biomass.",
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bdbfaf8-4080-434d-a77e-8b532dc71e96/d2il6ve-3430e334-0c5e-4262-bf65-0566458e3f9f.jpg/v1/fill/w_900,h_621,q_75,strp/prince_from_the_biomass__by_skipandcreate_d2il6ve-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjIxIiwicGF0aCI6Ii9mLzNiZGJmYWY4LTQwODAtNDM0ZC1hNzdlLThiNTMyZGM3MWU5Ni9kMmlsNnZlLTM0MzBlMzM0LTBjNWUtNDI2Mi1iZjY1LTA1NjY0NThlM2Y5Zi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.onUfi9V93Gt8Cr5OJindMGswaqAZmfd-k_zwZcZ_SUg",
  },
  {
    slug: "Whatever-Works-In-Venice-156905640",
    title: "Whatever Works In Venice.",
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bdbfaf8-4080-434d-a77e-8b532dc71e96/d2lf160-21bf2f36-0f3a-464c-bca0-caca5dfa4ec7.jpg/v1/fill/w_900,h_692,q_75,strp/whatever_works_in_venice__by_skipandcreate_d2lf160-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjkyIiwicGF0aCI6Ii9mLzNiZGJmYWY4LTQwODAtNDM0ZC1hNzdlLThiNTMyZGM3MWU5Ni9kMmxmMTYwLTIxYmYyZjM2LTBmM2EtNDY0Yy1iY2EwLWNhY2E1ZGZhNGVjNy5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7j67so-Mm6V5hv7V5HddD6ZtvP78K1MhLHxJ5g6xUVI",
  },
  {
    slug: "12-1-08-157283589",
    title: "12.1.08",
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bdbfaf8-4080-434d-a77e-8b532dc71e96/d2ln4sl-2a8eee31-d357-4bf4-8e06-26fb141b6c1f.jpg/v1/fill/w_900,h_692,q_75,strp/12_1_08_by_skipandcreate_d2ln4sl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjkyIiwicGF0aCI6Ii9mLzNiZGJmYWY4LTQwODAtNDM0ZC1hNzdlLThiNTMyZGM3MWU5Ni9kMmxuNHNsLTJhOGVlZTMxLWQzNTctNGJmNC04ZTA2LTI2ZmIxNDFiNmMxZi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.sh17bv3ob9s-LJ_38QG_oHMhy9Mj0M9tOzwgIZ_x_d0",
  },
];

const VisualArtsSection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(() => setLightboxIndex((i) => (i !== null ? (i + 1) % photos.length : null)), []);
  const goPrev = useCallback(() => setLightboxIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null)), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <section id="visual-arts" className="pt-8 md:pt-12 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">

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
            {photos.map((photo, index) => (
              <button
                key={photo.slug}
                onClick={() => setLightboxIndex(index)}
                className="glass-card rounded-xl overflow-hidden group block hover:ring-1 hover:ring-primary/30 transition-all text-left cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors truncate">
                    {photo.title}
                  </p>
                  <ExternalLink size={14} className="text-muted-foreground/50 shrink-0" />
                </div>
              </button>
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
            <div className="p-3 flex items-center gap-2">
              <a
                href="https://www.imdb.com/title/tt11426640/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
              >
                <ExternalLink size={14} />
                View on IMDb
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10 p-2"
            >
              <X size={28} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 text-white/70 hover:text-white transition-colors z-10 p-2"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              src={photos[lightboxIndex].url}
              alt={photos[lightboxIndex].title}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 text-white/70 hover:text-white transition-colors z-10 p-2"
            >
              <ChevronRight size={36} />
            </button>

            {/* Title */}
            <div className="absolute bottom-6 text-white/80 text-sm font-medium">
              {photos[lightboxIndex].title} — {lightboxIndex + 1}/{photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VisualArtsSection;
