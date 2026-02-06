import { motion } from "framer-motion";
import { Camera, Film } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
        A selection of my photography and cinema work. Explore more on my DeviantArt.
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-12"
      >
        {/* Photography Section */}
        <motion.div variants={item}>
          <div className="flex items-center gap-2 mb-6">
            <Camera size={20} className="text-primary" />
            <h3 className="font-heading text-xl font-semibold">Photography</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-4 rounded-xl flex items-center justify-center min-h-[300px]">
              <p className="text-muted-foreground text-sm text-center px-4">
                Add your DeviantArt photo embeds here.<br />
                <span className="text-xs text-primary mt-2 block">
                  Replace this placeholder in <code>VisualArtsSection.tsx</code>
                </span>
              </p>
            </div>
            <div className="glass-card p-4 rounded-xl flex items-center justify-center min-h-[300px]">
              <p className="text-muted-foreground text-sm text-center px-4">
                Add your DeviantArt photo embeds here.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cinema Section */}
        <motion.div variants={item}>
          <div className="flex items-center gap-2 mb-6">
            <Film size={20} className="text-primary" />
            <h3 className="font-heading text-xl font-semibold">Cinema</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-4 rounded-xl overflow-hidden min-h-[300px] flex items-center justify-center">
              <p className="text-muted-foreground text-sm text-center px-4">
                Embed your videos here (YouTube, Vimeo, or DeviantArt).<br />
                <span className="text-xs text-primary mt-2 block">
                  Replace this placeholder in <code>VisualArtsSection.tsx</code>
                </span>
              </p>
            </div>
            <div className="glass-card p-4 rounded-xl overflow-hidden min-h-[300px] flex items-center justify-center">
              <p className="text-muted-foreground text-sm text-center px-4">
                Embed your videos here.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VisualArtsSection;
