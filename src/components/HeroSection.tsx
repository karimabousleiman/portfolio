import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import InteractiveBackground from "./InteractiveBackground";

const titles = ["Senior Product Manager", "Music Producer", "Visual Storyteller"];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      <InteractiveBackground />

      <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
        <div className="h-8 md:h-10 mb-6 relative w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={titleIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="font-heading font-semibold tracking-[0.25em] uppercase text-lg md:text-xl absolute"
              style={{ color: "#C4B5FD" }}
            >
              {titles[titleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8"
        >
          Karim{" "}
          <span className="text-gradient">Abousleiman</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Tech geek passionate about finding innovative ways of solving problems. 
          8+ years building products that millions of people use every day.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-5"
        >
          <a
            href="https://www.linkedin.com/in/karim-abousleiman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="mailto:abousleiman70@gmail.com"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-border text-foreground font-semibold text-base hover:bg-secondary transition-all"
          >
            <Mail size={20} />
            Email Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
