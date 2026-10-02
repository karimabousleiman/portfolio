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

const ExperienceSection = () => (
  <ol className="m-0 list-none p-0">
    {jobs.map((job) => {
      const current = job.period.includes("Present");
      return (
        <li
          key={`${job.company}-${job.period}`}
          className="grid gap-x-10 gap-y-2 border-b border-[var(--h-line)] py-8 first:border-t md:grid-cols-[10rem_minmax(0,1fr)]"
        >
          <span className="mono flex items-center gap-2 self-start md:pt-[3px]">
            {current && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--h-accent)]" />}
            {job.period.replace("Present", "Now")}
          </span>
          <div className="min-w-0">
            <h3 className="text-[1.0625rem] font-semibold tracking-[-0.01em]">
              {job.title} <span className="font-normal text-[var(--h-muted)]">· {job.company}</span>
            </h3>
            <p className="mt-1 text-[0.9375rem] text-[var(--h-muted)]">
              {job.description} {job.location}.
            </p>
            <ul className="mt-4 list-none space-y-2.5 p-0">
              {job.highlights.map((h) => (
                <li key={h} className="relative max-w-[42rem] pl-4 text-[0.9375rem] leading-[1.6] text-[var(--h-muted)] before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-[var(--h-meta)]">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </li>
      );
    })}
  </ol>
);

export default ExperienceSection;
