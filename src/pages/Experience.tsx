import SiteShell, { Closing, PageTitle, PCMAG, TECHCRUNCH } from "@/components/SiteShell";
import { jobs, results } from "@/components/ExperienceSection";
import { languages } from "@/components/SkillsSection";

const years = (period: string) => {
  const [from, to] = period.split("–").map((p) => p.trim());
  return `${from.slice(-4)} — ${to === "Present" ? "NOW" : to.slice(-4)}`;
};

// The headline figure belongs to a company, so it sits on that company's most recent role only.
const roles = jobs.map((j, i) => ({
  ...j,
  years: years(j.period),
  result: jobs.findIndex((x) => x.company === j.company) === i ? results.find((r) => r.company === j.company) : undefined,
}));

// Three moves taken from the roles above, each a decision rather than an adjective.
const decisions = [
  {
    title: "Measure health, not just revenue",
    where: "TF1+",
    body: "Moved upper management from tracking revenue alone to measuring product health, and defined the product metrics that guide its decisions.",
  },
  {
    title: "Make discovery a habit",
    where: "Garantme",
    body: "Built and ran a discovery framework so product discovery became part of how the company works, and set the product process for a team of 4 PMs.",
  },
  {
    title: "Give the team a rhythm",
    where: "Myki",
    body: "Designed and led the team's whole workflow with 12 engineers: agile methods, daily stand-ups, sprint planning and backlog grooming.",
  },
];

const native = languages.filter((l) => l.level === "Native").map((l) => l.name);
const other = languages.filter((l) => l.level !== "Native");

const NewTab = () => <span className="sr-only"> (opens in a new tab)</span>;

const Experience = () => (
  <SiteShell title="Product · Karim Abousleiman">
    <PageTitle
      title="Product"
      lead="Eight years in security, insurtech and streaming. I started in QA, finding what broke, and ended up wanting to build things that don't."
    />

    <ol className="m-0 list-none p-0" aria-label="Roles">
      {roles.map((r, i) => (
        <li
          key={`${r.company}-${r.period}`}
          className="grid gap-3 border-b border-[var(--h-line)] py-8 md:grid-cols-[200px_minmax(0,1fr)_220px] md:gap-10 md:py-10"
        >
          <div className="flex items-center justify-between md:block">
            <span className={`mono ${i === 0 ? "text-[var(--h-accent)]" : "text-[var(--h-meta)]"}`}>{r.years}</span>
            {r.result && <span className="figure text-[2rem] font-semibold leading-none md:hidden">{r.result.figure}</span>}
          </div>
          <div className="min-w-0">
            <h2 className="m-0 text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.015em] md:text-[1.625rem]">
              {r.title} <em className="serif font-normal text-[var(--h-muted)]">at {r.company}</em>
            </h2>
            <ul className="m-0 mt-4 flex max-w-[40rem] list-none flex-col gap-2.5 p-0">
              {r.highlights.map((h) => (
                <li key={h} className="text-[0.9375rem] leading-[1.6] text-[var(--h-body)]">{h}</li>
              ))}
            </ul>
            {r.company === "Myki" && (
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <a href={PCMAG} target="_blank" rel="noopener noreferrer" className="btn btn-secondary !h-11">
                  PCMAG EDITORS' CHOICE 2018 <span aria-hidden="true">↗</span><NewTab />
                </a>
                <a href={TECHCRUNCH} target="_blank" rel="noopener noreferrer" className="btn btn-secondary !h-11">
                  TECHCRUNCH DISRUPT SF <span aria-hidden="true">↗</span><NewTab />
                </a>
              </div>
            )}
          </div>
          {r.result && (
            <div className="hidden text-right md:block">
              <span className="figure block text-[2.75rem] font-semibold leading-none">{r.result.figure}</span>
              <span className="mt-2 block text-[0.9375rem] text-[var(--h-muted)]">{r.result.label}</span>
            </div>
          )}
        </li>
      ))}
    </ol>

    <section aria-labelledby="how-title" className="grid gap-4 pt-14 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10 md:pt-24">
      <h2 id="how-title" className="mono m-0 font-normal text-[var(--h-meta)]">HOW I WORK</h2>
      <ol className="m-0 grid list-none p-0 lg:grid-cols-3">
        {decisions.map((d) => (
          <li key={d.title} className="border-t border-[var(--h-line-strong)] py-5 lg:pr-8 lg:pt-6">
            <h3 className="m-0 text-[1.25rem] font-semibold leading-[1.25] tracking-[-0.01em]">{d.title}</h3>
            <p className="mono m-0 mt-1.5 text-[var(--h-meta)]">{d.where.toUpperCase()}</p>
            <p className="m-0 mt-3 text-[0.9375rem] leading-[1.6] text-[var(--h-body)]">{d.body}</p>
          </li>
        ))}
      </ol>
    </section>

    <section aria-labelledby="lang-title" className="grid gap-3 pb-20 pt-10 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10 md:pb-28 md:pt-16">
      <h2 id="lang-title" className="mono m-0 font-normal text-[var(--h-meta)]">LANGUAGES</h2>
      <p className="serif m-0 text-[1.75rem] leading-[1.3]">
        {native.join(", ")} <em className="text-[var(--h-meta)]">— native.</em>{" "}
        {other.map((l) => (
          <span key={l.name}>
            {l.name} <em className="text-[var(--h-meta)]">— {l.level.toLowerCase()}.</em>{" "}
          </span>
        ))}
      </p>
    </section>

    <Closing variant="product" />
  </SiteShell>
);

export default Experience;
