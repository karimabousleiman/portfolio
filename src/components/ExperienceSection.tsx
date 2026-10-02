interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export const jobs: Job[] = [
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
    period: "Jan 2022 – Mar 2025",
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
    description: "Offline password manager for consumers, enterprises and Managed Service Providers. PCMag award winner, presented at TechCrunch Disrupt.",
    highlights: [
      "Worked with a team of 12 engineers through cross-functional processes, growing the product to over 1M DAU in less than 2 years.",
      "Redesigned product onboarding and developed a new data-driven approach, increasing retention rate by 29%.",
      "Designed and led entire internal workflow introducing agile methodologies, daily stand-ups, sprint planning and backlog grooming sessions.",
      "Assessed user feedback and led initiatives for product adjustments to grow user base and customer satisfaction.",
      "Kick-started customer support department, gathering continuous user feedback increasing positive reviews by 39% QoQ.",
    ],
  },
];

/** One headline result per company, used everywhere a role is summarised. */
export const results = [
  { company: "TF1+", role: "Senior Product Manager", years: "2025 — NOW", figure: "+17%", label: "user engagement", scope: "Moved leadership from revenue-only reporting to product-health metrics" },
  { company: "Garantme", role: "Product Manager → Group Product Manager", years: "2021 — 2025", figure: "+26%", label: "user acquisition", scope: "Led a squad of 11 and set the product process for 4 PMs" },
  { company: "Myki", role: "Product Manager", years: "2017 — 2020", figure: "1M+", label: "daily active users", scope: "Grew to 1M+ DAU in under two years with a team of 12 engineers" },
];

