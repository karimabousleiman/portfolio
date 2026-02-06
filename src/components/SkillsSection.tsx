import { motion } from "framer-motion";
import { Users, Zap, Target, Globe, Lightbulb, Rocket, Handshake } from "lucide-react";

const strengths = [
  { icon: Users, label: "People Management", desc: "Leading and communicating efficiently across large, cross-functional teams." },
  { icon: Zap, label: "Learning Agility", desc: "Quickly adapting and thriving across fast-paced industries." },
  { icon: Target, label: "Decision Making", desc: "Making fast, actionable decisions under pressure with limited data." },
  { icon: Lightbulb, label: "Product Thinking", desc: "Bridging user needs and business goals into cohesive product strategies." },
  { icon: Rocket, label: "Execution Speed", desc: "Shipping high-quality work fast without sacrificing attention to detail." },
  { icon: Handshake, label: "Stakeholder Alignment", desc: "Building consensus across diverse teams, partners, and executives." },
];

const languages = [
  { name: "French", level: "Native", percent: 100 },
  { name: "English", level: "Native", percent: 100 },
  { name: "Arabic", level: "Native", percent: 100 },
  { name: "Italian", level: "Intermediate", percent: 55 },
];

const SkillsSection = () => {
  return (
    <section className="section-padding max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Strengths */}
        <div className="md:col-span-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold mb-8"
          >
            Strengths
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {strengths.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5"
              >
                <s.icon className="text-primary mb-3" size={24} />
                <h3 className="font-heading font-semibold text-sm mb-1">{s.label}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3"
          >
            <Globe size={28} className="text-primary" />
            Languages
          </motion.h2>
          <div className="glass-card p-5 space-y-4">
            {languages.map((l, i) => (
              <div key={i}>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="text-foreground font-medium">{l.name}</span>
                  <span className="text-muted-foreground text-xs">{l.level}</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
