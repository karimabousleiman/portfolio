import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail, Plus } from "lucide-react";
import SiteShell, { ContactSection, EMAIL, External, IMDB, LINKEDIN, Section } from "@/components/SiteShell";
import portrait from "@/assets/about-photo.jpg";
import { jobs } from "@/components/ExperienceSection";
import { tracks, streamingServices } from "@/components/MusicSection";
import { photos } from "@/components/VisualArtsSection";

const outcomes: { figure: string; text: string; source: string; href?: string }[] = [
  { figure: "1M+", text: "daily active users for Myki's password manager, reached in under two years.", source: "Myki · 2017–2020" },
  { figure: "+17%", text: "user engagement after leading the shift to a product-centric organisation.", source: "TF1+ · 2025–now" },
  { figure: "+26%", text: "user acquisition from a redesigned onboarding and user experience.", source: "Garantme · 2022–2025" },
  { figure: "PCMag", text: "Editors' Choice award for Myki's password manager.", source: "Myki · 2018", href: "https://www.pcmag.com/reviews/myki" },
  { figure: "Disrupt", text: "Myki was presented on the Startup Battlefield stage at TechCrunch Disrupt SF.", source: "Myki · 2016", href: "https://techcrunch.com/2016/09/13/myki-rolls-out-a-password-manager-that-locks-all-your-info-away-on-your-phone/" },
];

const ease = [0.16, 1, 0.3, 1] as const;

const rise = (i: number, reduce: boolean | null) => reduce ? {} : ({
  initial: { opacity: 0.001, y: 12, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.7, ease, delay: 0.06 * i },
});

const Index = () => {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <SiteShell>
          <section aria-labelledby="hero-title" className="hero-band mb-14 grid gap-10 pt-14 pb-14 md:mb-16 md:grid-cols-[minmax(0,1fr)_17rem] md:items-end md:gap-20 md:pt-20 md:pb-20">
            <div className="max-w-[60rem]">
              <motion.h1
                id="hero-title"
                {...rise(0, reduce)}
                className="text-balance text-[2.375rem] font-semibold leading-[1.08] tracking-[-0.035em] md:text-[3.125rem] lg:text-[3.75rem]"
              >
                Senior Product Manager with eight years growing <span className="mark">products people come back to</span>.
              </motion.h1>
              <motion.p {...rise(1, reduce)} className="mt-6 max-w-[40rem] text-[1.0625rem] md:text-[1.125rem] leading-[1.65] text-[var(--h-muted)]">
                I started in QA, finding what broke, and ended up wanting to build things that don't. Since then I've made
                products in security, fintech and streaming, and I still love the same things: hard problems, plain language
                and products that treat people well. When I'm not working, I'm at the piano, finishing a track or out with
                a camera.
              </motion.p>
              <motion.div {...rise(2, reduce)} className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${EMAIL}`} className="btn btn-primary">
                  <Mail size={16} aria-hidden="true" />
                  Email me
                </a>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <Linkedin size={16} aria-hidden="true" />
                  LinkedIn
                </a>
              </motion.div>
            </div>

            <motion.figure {...rise(2, reduce)} className="order-first m-0 flex items-center gap-4 md:order-none md:block">
              <img
                src={portrait}
                alt="Karim Abousleiman playing an electric guitar"
                width={864}
                height={1184}
                className="aspect-[4/5] w-20 shrink-0 rounded-xl md:w-full object-cover object-[30%_center] shadow-[0_1px_2px_rgb(0_0_0/0.06),0_12px_32px_-12px_rgb(0_0_0/0.18)]"
              />
              <figcaption className="md:mt-4">
                <span className="block font-semibold">Karim Abousleiman</span>
                <span className="mt-1 flex items-center gap-2 text-[0.875rem] text-[var(--h-muted)]">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--h-accent)]" />
                  Currently at TF1+ · Paris
                </span>
              </figcaption>
            </motion.figure>
          </section>

          <motion.ul {...rise(3, reduce)} aria-label="Selected outcomes" className="mb-16 grid border-t border-[var(--h-line)] sm:grid-cols-2 md:mb-20">
            {outcomes.map((o, i) => (
              <li
                key={o.figure}
                className={`flex flex-col gap-2 border-b border-[var(--h-line)] py-6 sm:pr-8 ${i % 2 === 1 ? "sm:border-l sm:pl-8" : ""}`}
              >
                <p className="m-0 text-[1.0625rem] leading-[1.5] text-[var(--h-muted)]">
                  <span className="figure mr-1.5 text-[1.75rem] font-semibold leading-none text-[var(--h-ink)]">{o.figure}</span>
                  {o.href ? <External href={o.href}>{o.text}</External> : o.text}
                </p>
                <span className="mono">{o.source}</span>
              </li>
            ))}
          </motion.ul>

          <Section id="experience" title="Experience">
            <ol className="m-0 list-none p-0">
              {jobs.map((job, i) => {
                const isOpen = open === i;
                const current = job.period.includes("Present");
                return (
                  <li key={`${job.company}-${job.period}`} className="border-b border-[var(--h-line)] first:border-t">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`job-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="group grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-x-6 gap-y-1 py-5 text-left md:grid-cols-[10rem_minmax(0,1fr)_auto]"
                    >
                      <span className="mono order-2 col-span-2 flex items-center gap-2 md:order-none md:col-span-1 md:pt-[3px]">
                        {current && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--h-accent)]" />}
                        {job.period.replace("Present", "Now")}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-medium">
                          {job.title} <span className="text-[var(--h-muted)]">· {job.company}</span>
                        </span>
                        <span className="mt-1 block text-[0.9375rem] text-[var(--h-muted)]">{job.description}</span>
                      </span>
                      <Plus
                        size={18}
                        aria-hidden="true"
                        className={`mt-1 text-[var(--h-meta)] transition-transform duration-300 group-hover:text-[var(--h-ink)] ${isOpen ? "rotate-45" : ""}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`job-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease }}
                          className="overflow-hidden"
                        >
                          <ul className="m-0 list-none space-y-2.5 pb-6 pl-0 md:pl-[11.5rem] md:pr-10">
                            {job.highlights.map((h) => (
                              <li key={h} className="relative pl-4 text-[0.9375rem] leading-[1.6] text-[var(--h-muted)] before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-[var(--h-meta)]">
                                {h}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ol>
            <p className="mt-6 text-[0.9375rem]">
              <Link to="/experience" className="text-link">Full experience and skills</Link>
            </p>
          </Section>

          <Section id="outside" title="Outside product">
            <p className="m-0 max-w-[36rem] text-[1.0625rem] leading-[1.65] text-[var(--h-muted)]">
              I write and produce music and shoot photographs and film. It is where I practise the craft, taste and
              storytelling I bring to product work.
            </p>

            <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-10">
              <div>
                <h3 className="mb-4 text-[0.9375rem] font-semibold">
                  Music <span className="font-normal text-[var(--h-muted)]">on SoundCloud</span>
                </h3>
                <ul className="m-0 list-none border-t border-[var(--h-line)] p-0">
                  {tracks.slice(0, 5).map((t) => (
                    <li key={t.url} className="border-b border-[var(--h-line)]">
                      <a
                        href={t.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 py-3 no-underline transition-colors hover:bg-[var(--h-hover)]"
                      >
                        <span className="flex-1 font-medium">{t.title}</span>
                        <ArrowUpRight size={14} aria-hidden="true" className="text-[var(--h-meta)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[0.9375rem]">
                  {streamingServices.map((s) => (
                    <External key={s.name} href={s.url}>{s.name}</External>
                  ))}
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-[0.9375rem] font-semibold">Photography and film</h3>
                <div className="grid grid-cols-3 gap-2">
                  {photos.slice(2, 8).map((p) => (
                    <Link key={p.title} to="/visual-arts" className="photo-tile block overflow-hidden rounded-md bg-[var(--h-hover)]">
                      <img src={p.url} alt={p.title} loading="lazy" className="aspect-square w-full object-cover" />
                    </Link>
                  ))}
                </div>
                <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[0.9375rem]">
                  <Link to="/visual-arts" className="text-link">All visual work</Link>
                  <External href={IMDB}>Film on IMDb</External>
                </p>
              </div>
            </div>
          </Section>

          <ContactSection />
    </SiteShell>
  );
};

export default Index;
