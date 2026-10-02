import { Link } from "react-router-dom";
import SiteShell, { ContactSection, PageHeader, Section } from "@/components/SiteShell";
import ExperienceSection from "@/components/ExperienceSection";
import { LanguagesList, StrengthsList } from "@/components/SkillsSection";

const Experience = () => (
  <SiteShell>
    <PageHeader
      title="Experience"
      lead="Eight years in product, from scaling a password manager past a million daily users to driving engagement at TF1+."
    />
    <Section id="roles" title="Roles">
      <ExperienceSection />
    </Section>
    <Section id="strengths" title="Strengths">
      <StrengthsList />
    </Section>
    <Section id="languages" title="Languages">
      <div className="max-w-[28rem]">
        <LanguagesList />
      </div>
      <p className="mt-8 text-[0.9375rem]">
        <Link to="/about" className="text-link">More about me</Link>
      </p>
    </Section>
    <ContactSection />
  </SiteShell>
);

export default Experience;
