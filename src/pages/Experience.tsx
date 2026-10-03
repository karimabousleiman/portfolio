import SiteShell, { Closing, PageTitle, PCMAG } from "@/components/SiteShell";
import { companies, jobs, results } from "@/components/ExperienceSection";
import { languages } from "@/components/SkillsSection";

const years = (period: string) => {
  const [from, to] = period.split("–").map((p) => p.trim());
  return `${from.slice(-4)} — ${to === "Present" ? "NOW" : to.slice(-4)}`;
};

// One block per company: what the product is and the roles held there.
const blocks = results.map((r) => ({
  ...r,
  ...companies[r.company],
  roles: jobs.filter((j) => j.company === r.company).map((j) => ({ ...j, years: years(j.period) })),
}));

const native = languages.filter((l) => l.level === "Native").map((l) => l.name);
const other = languages.filter((l) => l.level !== "Native");

const NewTab = () => <span className="sr-only"> (opens in a new tab)</span>;

const Experience = () => (
  <SiteShell title="Experience · Karim Abousleiman">
    <PageTitle
      title="Experience"
      lead="Product manager since 2017, across security, insurtech and streaming. I started in QA, finding what broke, and ended up wanting to build things that don't."
    />

    <ol className="m-0 list-none p-0" aria-label="Companies">
      {blocks.map((c) => (
        <li
          key={c.company}
          className="grid gap-5 border-b border-[var(--h-line)] py-10 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10 md:py-16"
        >
          <div className="flex items-center justify-between gap-4 md:flex-col md:items-start md:justify-start md:gap-3">
            <h2 className="m-0"><img src={c.logo} alt={c.company} width={c.size[0]} height={c.size[1]} className={`logo-mono w-auto ${c.logoHeight}`} /></h2>
            <span className="mono text-[var(--h-accent)]">{c.years}</span>
          </div>

          <div className="min-w-0">
            <p className="m-0 max-w-[40rem] text-[0.9375rem] leading-[1.6] text-[var(--h-muted)]">{c.about}</p>

            {c.roles.map((r) => (
              <div key={r.period} className="mt-6">
                <h3 className="m-0 text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.015em] md:text-[1.5rem]">
                  {r.title}{" "}
                  {c.roles.length > 1 && <span className="mono ml-3 align-middle text-[0.75rem] font-normal text-[var(--h-accent)]">{r.years}</span>}
                </h3>
                <ul className="m-0 mt-3 flex max-w-[40rem] list-disc flex-col gap-2.5 pl-5 marker:text-[var(--h-meta)]">
                  {r.highlights.map((h) => (
                    <li key={h} className="text-[0.9375rem] leading-[1.6] text-[var(--h-body)]">{h}</li>
                  ))}
                </ul>
              </div>
            ))}

            {c.company === "Myki" && (
              <div className="mt-6 flex">
                <a href={PCMAG} target="_blank" rel="noopener noreferrer" className="btn btn-secondary !h-11">
                  PCMAG EDITORS' CHOICE 2018 <span aria-hidden="true">↗</span><NewTab />
                </a>
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>

    <section aria-labelledby="lang-title" className="grid gap-3 pb-4 pt-12 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10  md:pt-16">
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
