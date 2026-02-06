import { motion } from "framer-motion";

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

const jobs: Job[] = [
  {
    title: "Senior Product Manager",
    company: "TF1+",
    location: "Boulogne-Billancourt, France",
    period: "Mar 2025 – Present",
    description: "France's leading multimedia company; focused on the TF1 streaming platform.",
    highlights: [
      "Led the shift to a product-centric organization, driving a 17% increase in user engagement.",
      "Moved from tracking only revenue to measuring product health and defining product metrics.",
      "Delivered a 12% increase in first-session watch rates by redesigning the initial user journey.",
    ],
  },
  {
    title: "Group Product Manager",
    company: "Garantme",
    location: "Paris, France",
    period: "Jan 2022 – Mar 2025",
    description: "Insurtech that builds and deploys innovative insurance products for real estate.",
    highlights: [
      "Led a product squad of 11 people, including developers, PMs, designers and QA.",
      "Boosted user acquisition by 26% by redesigning the onboarding process.",
      "Set up an additional revenue stream through upsell, generating €200k yearly.",
    ],
  },
  {
    title: "Product Manager",
    company: "Garantme",
    location: "Paris, France",
    period: "Jan 2021 – Jan 2022",
    description: "Fast-growing insurtech startup offering real estate insurance products.",
    highlights: [
      "Increased the conversion rate of the website by 8%.",
      "Launched and grew core SaaS product to 10k daily active users in 6 months.",
      "Assessed and improved the implementation of agile methodologies.",
    ],
  },
  {
    title: "Product Manager",
    company: "Myki",
    location: "Beirut, Lebanon",
    period: "Apr 2017 – Jul 2020",
    description: "Award-winning offline password manager for consumers and enterprises.",
    highlights: [
      "Grew the product to over 1M DAU in less than 2 years.",
      "Redesigned onboarding, increasing retention rate by 29%.",
      "Kick-started customer support, increasing positive reviews by 39% QoQ.",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-bold mb-12"
      >
        Experience
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden md:block" />

        <div className="space-y-10">
          {jobs.map((job, i) => (
            <motion.div key={i} variants={item} className="md:pl-10 relative">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-primary border-4 border-background hidden md:block" />

              <div className="glass-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-3">
                  <h3 className="font-heading text-xl font-semibold">{job.title}</h3>
                  <span className="text-sm text-primary font-medium">{job.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  {job.company} · {job.location}
                </p>
                <p className="text-sm text-muted-foreground mb-4 italic">{job.description}</p>
                <ul className="space-y-2">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-secondary-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
