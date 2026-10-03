import aboutPhoto from "@/assets/portrait.webp";

const AboutSection = () => (
    <section aria-labelledby="story-title" className="grid gap-6 pb-4 pt-12 md:grid-cols-[minmax(0,1fr)_300px] md:gap-10  md:pt-16 lg:grid-cols-[200px_minmax(0,1fr)_360px]">
      <h2 id="story-title" className="mono m-0 font-normal text-[var(--h-meta)] md:col-span-2 lg:col-span-1">STORY</h2>
      <div className="flex max-w-[38rem] flex-col gap-5 text-base leading-[1.65] text-[var(--h-muted)] md:text-[1.125rem]">
        <p className="m-0">
          My background is in cinema. I moved into tech through QA, where the job was finding what breaks, and
          product management turned that into building things that don't.
        </p>
        <p className="m-0">
          As a manager I hold on to two habits: measure what matters, and make discovery routine. At TF1+ that meant
          replacing revenue-only reporting with product-health metrics. At Garantme it meant managing four PMs and
          building a discovery framework that became part of how the company works.
        </p>
        <p className="m-0">
          Outside work I play more than ten instruments, from keys and guitar to brass, woodwinds and percussion, and
          release music as kimbü. Art and science aren't opposites to me; they're two lenses on the same world.
        </p>
      </div>
      <img
        src={aboutPhoto}
        alt="Karim playing a Telecaster-style electric guitar in a living room, black and white"
        width={864}
        height={1184}
        className="-order-1 -mx-4 h-[460px] w-[calc(100%+2rem)] max-w-none object-cover object-[30%_center] md:order-none md:mx-0 md:h-[480px] md:w-full"
      />
    </section>
);

export default AboutSection;
