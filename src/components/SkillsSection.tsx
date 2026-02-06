import { motion } from "framer-motion";
import { Users, Zap, Target, GraduationCap, Globe } from "lucide-react";

const strengths = [
  { icon: Users, label: "People Management", desc: "Leading and communicating efficiently across large teams." },
  { icon: Zap, label: "Learning Agility", desc: "Quickly adapting across fast-paced industries." },
  { icon: Target, label: "Decision Making", desc: "Making fast, actionable decisions under pressure." },
];

const languages = [
  { name: "French", level: "Native" },
  { name: "English", level: "Native" },
  { name: "Arabic", level: "Native" },
  { name: "Italian", level: "Intermediate" },
];

const education = [
  { title: "Masters in Cinematography", school: "EICAR | International Film & TV School", period: "2013 – 2015" },
  { title: "C++, iOS & Web Development", school: "Udemy & Udacity", period: "2014 – 2016" },
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
          <div className="glass-card p-5 space-y-3">
            {languages.map((l, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <span className="text-foreground font-medium">{l.name}</span>
                <span className="text-muted-foreground">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
          <GraduationCap size={28} className="text-primary" />
          Education
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {education.map((e, i) => (
            <div key={i} className="glass-card p-5">
              <h3 className="font-heading font-semibold text-sm mb-1">{e.title}</h3>
              <p className="text-xs text-muted-foreground">{e.school}</p>
              <p className="text-xs text-primary mt-1">{e.period}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
