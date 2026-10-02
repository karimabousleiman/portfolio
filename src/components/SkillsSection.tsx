export const strengths = [
  { label: "People Management", desc: "Leading and communicating efficiently across large, cross-functional teams." },
  { label: "Learning Agility", desc: "Quickly adapting and thriving across fast-paced industries." },
  { label: "Decision Making", desc: "Making fast, actionable decisions under pressure with limited data." },
  { label: "Product Thinking", desc: "Bridging user needs and business goals into cohesive product strategies." },
  { label: "Execution Speed", desc: "Shipping high-quality work fast without sacrificing attention to detail." },
  { label: "Stakeholder Alignment", desc: "Building consensus across diverse teams, partners, and executives." },
];

export const languages = [
  { name: "French", level: "Native" },
  { name: "English", level: "Native" },
  { name: "Arabic", level: "Native" },
  { name: "Italian", level: "Intermediate" },
];

export const StrengthsList = () => (
  <dl className="m-0 grid border-t border-[var(--h-line)] sm:grid-cols-2">
    {strengths.map((s, i) => (
      <div key={s.label} className={`border-b border-[var(--h-line)] py-5 sm:pr-8 ${i % 2 === 1 ? "sm:border-l sm:pl-8" : ""}`}>
        <dt className="font-medium">{s.label}</dt>
        <dd className="m-0 mt-1 text-[0.9375rem] leading-[1.6] text-[var(--h-muted)]">{s.desc}</dd>
      </div>
    ))}
  </dl>
);

export const LanguagesList = () => (
  <ul className="m-0 list-none border-t border-[var(--h-line)] p-0">
    {languages.map((l) => (
      <li key={l.name} className="flex items-baseline justify-between border-b border-[var(--h-line)] py-3">
        <span className="font-medium">{l.name}</span>
        <span className="text-[0.9375rem] text-[var(--h-muted)]">{l.level}</span>
      </li>
    ))}
  </ul>
);
