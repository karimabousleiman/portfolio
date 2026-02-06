import { motion } from "framer-motion";

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
          <div className="aspect-[3/4] rounded-xl bg-secondary border border-border flex items-center justify-center overflow-hidden">
            <p className="text-sm text-muted-foreground text-center px-4">
              Upload your photo and update <code className="text-primary">AboutSection.tsx</code>
            </p>
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
            Tech geek interested in how technology can lead positive change in the world. 
            Passionate about finding new and innovative ways of solving problems and using 
            this as a guiding principle in my management style.
          </p>
          <p className="text-secondary-foreground leading-relaxed">
            People management aficionado with 5+ years of demonstrated experience leading 
            cross-functional teams. When I'm not building products, you'll find me playing 
            jazz, exploring cutting-edge tech trends, or gaming competitively.
          </p>
          <p className="text-muted-foreground text-sm italic mt-6">
            Feel free to update this text with your own personal story!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
