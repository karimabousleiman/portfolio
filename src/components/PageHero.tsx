import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  accent?: string;
  icon?: React.ReactNode;
  compact?: boolean;
}

const PageHero = ({ title, subtitle, accent, icon }: PageHeroProps) => {
  return (
    <section className="relative pt-24 pb-4 px-6 overflow-hidden sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border/50">
      {/* Subtle decorative lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-primary"
            style={{
              width: "150%",
              top: `${20 + i * 20}%`,
              left: "-25%",
              transform: `rotate(${-6 + i * 3}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-4">
        {icon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
            className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.25)]"
          >
            {icon}
          </motion.div>
        )}
        <div>
          {accent && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-primary font-heading font-medium tracking-widest uppercase text-xs mb-1"
            >
              {accent}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="font-heading text-3xl md:text-4xl font-bold tracking-tight"
          >
            <span className="text-gradient">{title}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="text-sm text-muted-foreground mt-1 leading-relaxed max-w-xl"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
