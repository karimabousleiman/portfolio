import { motion } from "framer-motion";
import aboutPhoto from "@/assets/about-photo.jpg";
const AboutSection = () => {
  return (
    <section id="about" className="section-padding max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-bold mb-10"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-5 gap-8 items-start">
        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <div className="aspect-[3/4] rounded-xl overflow-hidden">
            <img src={aboutPhoto} alt="About me" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-3 space-y-4"
        >
          <p className="text-secondary-foreground leading-relaxed">
            Product Manager with a background in cinema who made the leap into tech — 
            driven by a love for building things and a curiosity for how technology can 
            shape the world for the better. I bring a creative, problem-solving mindset 
            to every product I work on.
          </p>
          <p className="text-secondary-foreground leading-relaxed">
            Multi-instrumentalist who plays 10+ instruments — from keys and guitar to 
            brass, woodwinds, and percussion. Art and science aren't opposites to me; 
            they're two lenses on the same world. Whether I'm composing a track, designing 
            a product, or diving into a new side project, I'm happiest when I'm making 
            something from scratch.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
