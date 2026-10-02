import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail, Menu, X } from "lucide-react";
import "@fontsource-variable/schibsted-grotesk";
import "@fontsource/fragment-mono";
import "@/pages/home.css";

export const EMAIL = "abousleiman70@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/karim-abousleiman";
export const IMDB = "https://www.imdb.com/title/tt11426640/";

export const nav = [
  { label: "Experience", to: "/experience" },
  { label: "Music", to: "/music" },
  { label: "Visual arts", to: "/visual-arts" },
  { label: "About", to: "/about" },
];

export const External = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-link inline-flex items-center gap-1">
    {children}
    <ArrowUpRight size={14} aria-hidden="true" className="text-[var(--h-meta)]" />
  </a>
);

export const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="border-t border-[var(--h-line)] pt-10 pb-20 md:pt-12 md:pb-28">
    <div className="grid gap-6 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10">
      <h2 id={`${id}-title`} className="text-[1.0625rem] font-semibold tracking-[-0.01em]">{title}</h2>
      <div className="min-w-0">{children}</div>
    </div>
  </section>
);

export const PageHeader = ({ title, lead }: { title: string; lead: string }) => (
  <header className="hero-band mb-14 pt-14 pb-14 md:mb-16 md:pt-20 md:pb-20">
    <h1 className="text-balance text-[2.375rem] font-semibold leading-[1.08] tracking-[-0.035em] md:text-[3.125rem]">
      <span className="mark">{title}</span>
    </h1>
    <p className="mt-5 max-w-[36rem] text-[1.0625rem] leading-[1.65] text-[var(--h-muted)]">{lead}</p>
  </header>
);

export const ContactSection = () => (
  <section aria-labelledby="contact-title" className="border-t border-[var(--h-line)] py-20 md:py-28">
    <h2 id="contact-title" className="text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] md:text-[2.75rem]">
      Let's talk about your product.
    </h2>
    <p className="mt-4 max-w-[34rem] text-[1.0625rem] text-[var(--h-muted)]">Email is the quickest way to reach me.</p>
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <a href={`mailto:${EMAIL}`} className="btn btn-primary">
        <Mail size={16} aria-hidden="true" />
        {EMAIL}
      </a>
      <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
        <Linkedin size={16} aria-hidden="true" />
        LinkedIn
      </a>
    </div>
  </section>
);

const SiteShell = ({ children }: { children: React.ReactNode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.background;
    root.style.background = "#fbfbfa";
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      root.style.background = prev;
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navLinks = nav.map((item) => (
    <li key={item.to} className="shrink-0">
      <NavLink
        to={item.to}
        className={({ isActive }) =>
          `text-[0.875rem] no-underline transition-colors hover:text-[var(--h-ink)] ${
            isActive ? "text-[var(--h-ink)]" : "text-[var(--h-muted)]"
          }`
        }
      >
        {item.label}
      </NavLink>
    </li>
  ));

  return (
    <MotionConfig reducedMotion="user">
      <div className="home">
        <header
          className={`sticky top-0 z-20 border-b backdrop-blur-md transition-colors duration-200 ${
            scrolled || menuOpen ? "border-[var(--h-line)] bg-[rgb(251_251_250/0.85)]" : "border-transparent bg-[var(--h-bg)]"
          }`}
        >
          <div className="mx-auto flex h-14 max-w-[1240px] items-center justify-between px-5 md:px-8">
            <Link to="/" className="text-[0.9375rem] font-semibold tracking-[-0.01em] no-underline">
              Karim Abousleiman
            </Link>
            <nav aria-label="Main" className="flex items-center gap-6">
              <ul className="hidden items-center gap-6 md:flex">{navLinks}</ul>
              <a href={`mailto:${EMAIL}`} className="btn btn-secondary !hidden !h-8 !px-3 !text-[0.875rem] md:!inline-flex">
                Get in touch
              </a>
              <button
                type="button"
                className="-mr-2 grid h-10 w-10 place-items-center text-[var(--h-ink)] md:hidden"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen((o) => !o)}
              >
                {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
              </button>
            </nav>
          </div>
          {menuOpen && (
            <nav id="mobile-menu" aria-label="Mobile" className="border-t border-[var(--h-line)] md:hidden">
              <ul className="flex flex-col gap-5 px-5 py-6 [&_a]:text-[1.0625rem]">{navLinks}</ul>
              <div className="px-5 pb-6">
                <a href={`mailto:${EMAIL}`} className="btn btn-primary w-full justify-center">
                  <Mail size={16} aria-hidden="true" />
                  Get in touch
                </a>
              </div>
            </nav>
          )}
        </header>

        <main className="mx-auto max-w-[1240px] px-5 md:px-8">{children}</main>

        <footer className="border-t border-[var(--h-line)]">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between md:px-8">
            <span className="text-[0.875rem] text-[var(--h-meta)]">© {new Date().getFullYear()} Karim Abousleiman · Paris</span>
            <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 text-[0.875rem]">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-[var(--h-muted)] no-underline hover:text-[var(--h-ink)]">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
};

export default SiteShell;
