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
      "Led the shift to a product-centric organization, driving a 17% increase in user engagement by instituting rigorous discovery frameworks and cross-functional squad alignment.",
      "Led the move from tracking only revenue to measuring product health and defining product metrics to guide upper management's decision-making.",
      "Delivered a 12% increase in first-session watch rates by redesigning the initial user journey and streamlining the path-to-content.",
    ],
  },
  {
    title: "Group Product Manager",
    company: "Garantme",
    location: "Paris, France",
    period: "Jan 2021 – Mar 2025",
    description: "Insurtech that builds and deploys simple and innovative insurance products for real estate professionals.",
    highlights: [
      "Led a product squad of 11 people, including developers, product managers, product designers and QA.",
      "Led and set the product process for a team of 4 product managers.",
      "Boosted user acquisition by 26% by redesigning the onboarding process and enhancing user experience.",
      "Created and maintained a discovery framework to better integrate Product Discovery within company culture and processes.",
      "Set up an additional revenue stream through upsell, generating €200k yearly.",
    ],
  },
  {
    title: "Product Manager",
    company: "Garantme",
    location: "Paris, France",
    period: "Jan 2021 – Jan 2022",
    description: "Fast-growing insurtech startup offering real estate insurance products as well as digital products to both agents and tenants.",
    highlights: [
      "Rolled out product changes that increased the conversion rate of the website by 8%.",
      "Discovered, improved and maintained the product integration between Garantme and key partners across France.",
      "Launched and grew Garantme's core SaaS product to 10k daily active users in 6 months.",
      "Assessed and improved the implementation of agile methodologies.",
    ],
  },
  {
    title: "Product Manager",
    company: "Myki",
    location: "Beirut, Lebanon",
    period: "Apr 2017 – Jul 2020",
    description: "Award-winning offline password manager with offerings for consumers, enterprises and Managed Service Providers.",
    highlights: [
      "Worked with a team of 12 engineers through cross-functional processes, growing the product to over 1M DAU in less than 2 years.",
      "Redesigned product onboarding and developed a new data-driven approach, increasing retention rate by 29%.",
      "Designed and led entire internal workflow introducing agile methodologies, daily stand-ups, sprint planning and backlog grooming sessions.",
      "Assessed user feedback and led initiatives for product adjustments to grow user base and customer satisfaction.",
      "Kick-started customer support department, gathering continuous user feedback increasing positive reviews by 39% QoQ.",
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
    <section id="experience" className="pt-8 md:pt-12 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-10">
          {jobs.map((job, i) => (
            <motion.div key={i} variants={item} className="pl-10 relative">
              {/* Timeline dot */}
              <div className="absolute left-0 top-[10px] w-[15px] h-[15px] rounded-full bg-primary border-4 border-background" />

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
