import { motion } from "framer-motion";
import InteractiveBackground from "./InteractiveBackground";

interface PageHeroProps {
  title: string;
  subtitle: string;
  accent?: string;
  icon?: React.ReactNode;
}

const PageHero = ({ title, subtitle, accent, icon }: PageHeroProps) => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <InteractiveBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />

      {/* Decorative diagonal lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-primary"
            style={{
              width: "150%",
              top: `${10 + i * 12}%`,
              left: "-25%",
              transform: `rotate(${-8 + i * 2}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        {icon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20"
          >
            {icon}
          </motion.div>
        )}
        {accent && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-primary font-heading font-medium tracking-widest uppercase text-sm mb-4"
          >
            {accent}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-gradient">{title}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHero;
