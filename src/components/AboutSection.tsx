import { motion } from "framer-motion";
import aboutPhoto from "@/assets/about-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding max-w-4xl mx-auto flex flex-col items-center text-center -mt-8">
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mb-10 ring-4 ring-primary/20"
      >
        <img src={aboutPhoto} alt="About me" className="w-full h-full object-cover" />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed">
          Product Manager with a background in cinema who made the leap into tech — 
          driven by a love for building things and a curiosity for how technology can 
          shape the world for the better. I bring a creative, problem-solving mindset 
          to every product I work on.
        </p>
        <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed">
          Multi-instrumentalist who plays 10+ instruments — from keys and guitar to 
          brass, woodwinds, and percussion. Art and science aren't opposites to me; 
          they're two lenses on the same world. Whether I'm composing a track, designing 
          a product, or diving into a new side project, I'm happiest when I'm making 
          something from scratch.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
