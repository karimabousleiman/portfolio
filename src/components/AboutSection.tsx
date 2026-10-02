import aboutPhoto from "@/assets/portrait.webp";
import { languages } from "@/components/SkillsSection";

const facts = [
  { figure: "10+", label: "INSTRUMENTS PLAYED" },
  { figure: String(languages.filter((l) => l.level === "Native").length), label: "NATIVE LANGUAGES" },
  { figure: "8", label: "YEARS IN PRODUCT" },
];

const AboutSection = () => (
  <>
    <section aria-labelledby="story-title" className="grid gap-6 pt-10 md:grid-cols-[200px_minmax(0,1fr)_360px] md:gap-10 md:pt-16">
      <h2 id="story-title" className="mono m-0 font-normal text-[var(--h-meta)]">STORY</h2>
      <div className="flex max-w-[38rem] flex-col gap-5 text-base leading-[1.65] text-[var(--h-muted)] md:text-[1.125rem]">
        <p className="m-0">
          Product Manager with a background in cinema who made the leap into tech — driven by a love for building
          things and a curiosity for how technology can shape the world for the better. I bring a creative,
          problem-solving mindset to every product I work on.
        </p>
        <p className="m-0">
          Multi-instrumentalist who plays 10+ instruments — from keys and guitar to brass, woodwinds, and percussion.
          Art and science aren't opposites to me; they're two lenses on the same world. Whether I'm composing a track,
          designing a product, or diving into a new side project, I'm happiest when I'm making something from scratch.
        </p>
      </div>
      <img
        src={aboutPhoto}
        alt="Karim playing a Telecaster-style electric guitar in a living room, black and white"
        width={864}
        height={1184}
        className="mono-photo -order-1 -mx-4 h-[460px] w-[calc(100%+2rem)] max-w-none object-cover object-[30%_center] md:order-none md:mx-0 md:h-[480px] md:w-full"
      />
    </section>

    <ul className="m-0 grid list-none gap-0 p-0 pb-20 pt-10 md:grid-cols-3 md:pb-28 md:pt-24">
      {facts.map((f) => (
        <li key={f.label} className="flex items-center justify-between border-t border-[var(--h-line-strong)] py-4 md:block md:pr-6 md:pt-6">
          <span className="figure block text-[3rem] font-semibold leading-none md:text-[4.5rem]">{f.figure}</span>
          <span className="mono block text-[var(--h-meta)] md:mt-3">{f.label}</span>
        </li>
      ))}
    </ul>
  </>
);

export default AboutSection;
