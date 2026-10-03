import { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Menu, X } from "lucide-react";
import "@fontsource-variable/schibsted-grotesk";
import "@fontsource/fragment-mono";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@/pages/home.css";

export const EMAIL = "abousleiman70@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/karim-abousleiman";
export const IMDB = "https://www.imdb.com/title/tt11426640/";
export const PCMAG = "https://www.pcmag.com/reviews/myki";
export const TECHCRUNCH = "https://techcrunch.com/2016/09/13/myki-rolls-out-a-password-manager-that-locks-all-your-info-away-on-your-phone/";

export const nav = [
  { label: "Product", to: "/experience" },
  { label: "Music", to: "/music" },
  { label: "Image", to: "/visual-arts" },
  { label: "About", to: "/about" },
];

/** Big serif page word with its lead, ruled off from the content below. */
export const PageTitle = ({ title, lead }: { title: string; lead: string }) => (
  <header className="grid gap-6 border-b border-[var(--h-line-strong)] pb-12 pt-12 md:grid-cols-[minmax(0,1fr)_22rem] md:items-end md:gap-16 md:pb-16 md:pt-20">
    <h1 className="serif m-0 text-[4.5rem] leading-[0.9] tracking-[-0.02em] md:text-[10rem]">{title}</h1>
    <p className="m-0 text-[0.9375rem] leading-[1.6] text-[var(--h-muted)] md:text-[1.0625rem]">{lead}</p>
  </header>
);

/**
 * Modal behaviour for overlays: locks page scroll, keeps Tab inside, closes on Escape,
 * and hands focus back to whatever opened it.
 */
export function useModal<T extends HTMLElement>(open: boolean, onClose: () => void) {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab" || !ref.current) return;
      const items = ref.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), iframe");
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      if (opener?.isConnected) opener.focus();
    };
  }, [open, onClose]);
  return ref;
}

/** Scroll to the contact band and move keyboard focus there, after any overlay has handed focus back. */
const goToContact = (e: React.MouseEvent) => {
  const target = document.getElementById("contact-title");
  if (!target) return;
  e.preventDefault();
  window.setTimeout(() => {
    target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    target.focus({ preventScroll: true });
  }, 60);
};

const parisTime = () =>
  new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Paris", hour: "2-digit", minute: "2-digit" }).format(new Date());

const ParisClock = () => {
  const [time, setTime] = useState(parisTime);
  useEffect(() => {
    const id = window.setInterval(() => setTime(parisTime()), 30_000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <span className="mono">
      PARIS · <time>{time}</time>
    </span>
  );
};

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(id);
  }, [copied]);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };
  return (
    <div className="mono flex items-center gap-3.5 text-[var(--h-muted)]">
      <span className="break-all text-[0.875rem]">{EMAIL}</span>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy email address"
        className={`btn btn-secondary !h-11 shrink-0 !px-3.5 !text-[0.75rem] ${copied ? "btn-done" : ""}`}
      >
        {copied ? "COPIED" : "COPY"}
      </button>
      <span aria-live="polite" className="sr-only">{copied ? "Email address copied" : ""}</span>
    </div>
  );
};

/** The closing contact band every page ends on. "product" speaks to hiring managers. */
export const Closing = ({ variant = "product" }: { variant?: "product" | "something" }) => (
  <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16 border-t border-[var(--h-line)] pb-16 pt-16 md:pb-20 md:pt-24">
    <h2 id="contact-title" tabIndex={-1} className="serif m-0 text-[3rem] leading-none md:text-[4.5rem]">
      {variant === "product" ? "Let's talk about " : "Let's make "}
      <em className="text-[var(--h-accent)]">{variant === "product" ? "your product" : "something"}</em>.
    </h2>
    <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 md:mt-9">
      <a href={`mailto:${EMAIL}`} className="btn btn-primary">EMAIL ME</a>
      <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
        LINKEDIN <span aria-hidden="true">↗</span>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
      <div className="mt-3 sm:ml-4 sm:mt-0">
        <CopyEmail />
      </div>
    </div>
  </section>
);

const SiteShell = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const menuRef = useModal<HTMLDivElement>(menuOpen, closeMenu);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.background;
    root.style.background = "#0f0f10";
    return () => {
      root.style.background = prev;
    };
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const brand = isHome ? (
    <ParisClock />
  ) : (
    <Link to="/" className="mono no-underline">KARIM ABOUSLEIMAN</Link>
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="home">
        <header className="sticky top-0 z-20 border-b border-[var(--h-line)] bg-[color-mix(in_srgb,var(--h-bg)_88%,transparent)] backdrop-blur-md md:border-transparent md:bg-[var(--h-bg)] md:backdrop-blur-none">
          <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between px-4 md:h-16 md:px-12">
            {brand}
            <nav aria-label="Main" className="hidden md:block">
              <ul className="m-0 flex list-none items-center gap-7 p-0">
                {nav.map((item) => (
                  <li key={item.to}>
                    <NavLink to={item.to} className="mono nav-link uppercase">{item.label}</NavLink>
                  </li>
                ))}
                <li>
                  <a href="#contact" onClick={goToContact} className="mono nav-link text-[var(--h-accent)]">CONTACT</a>
                </li>
              </ul>
            </nav>
            <button
              type="button"
              className="mono -mr-1 flex h-11 items-center gap-2 px-1 md:hidden"
              aria-expanded={menuOpen}
              aria-controls={menuOpen ? "mobile-menu" : undefined}
              onClick={() => setMenuOpen(true)}
            >
              MENU <Menu size={20} strokeWidth={1.6} aria-hidden="true" />
            </button>
          </div>
        </header>

        {menuOpen && (
          <div ref={menuRef} id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu" className="menu-panel fixed inset-0 z-30 flex flex-col bg-[var(--h-bg)] md:hidden">
            <div className="flex h-14 items-center justify-between border-b border-[var(--h-line)] px-4">
              <Link to="/" className="mono no-underline">KARIM ABOUSLEIMAN</Link>
              <button type="button" className="mono -mr-1 flex h-11 items-center gap-2 px-1" onClick={closeMenu} autoFocus>
                CLOSE <X size={20} strokeWidth={1.6} aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="px-4 pt-6">
              <ul className="m-0 list-none p-0">
                {nav.map((item, i) => (
                  <li key={item.to} className="border-b border-[var(--h-line)]">
                    <NavLink to={item.to} className="flex items-baseline justify-between py-3.5 no-underline">
                      <span className="serif text-[3.25rem] leading-none">{item.label}</span>
                      <span className="mono text-[0.75rem] text-[var(--h-meta)]" aria-hidden="true">0{i + 1}</span>
                    </NavLink>
                  </li>
                ))}
                <li className="border-b border-[var(--h-line)]">
                  <a href="#contact" onClick={(e) => { closeMenu(); goToContact(e); }} className="flex items-baseline justify-between py-3.5 no-underline">
                    <em className="serif text-[3.25rem] leading-none text-[var(--h-accent)]">Contact</em>
                    <span className="mono text-[0.75rem] text-[var(--h-meta)]" aria-hidden="true">05</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="mt-auto flex flex-col px-4 pb-8">
              <a href={`mailto:${EMAIL}`} className="mono flex min-h-11 items-center text-[0.75rem] text-[var(--h-muted)] no-underline">{EMAIL.toUpperCase()}</a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="mono flex min-h-11 items-center text-[0.75rem] text-[var(--h-muted)] no-underline">LINKEDIN<span aria-hidden="true"> ↗</span><span className="sr-only"> (opens in a new tab)</span></a>
            </div>
          </div>
        )}

        <main className="mx-auto max-w-[1280px] px-4 md:px-12">{children}</main>

        <footer className="mx-auto flex max-w-[1280px] flex-col gap-2 border-t border-[var(--h-line)] px-4 py-6 sm:flex-row sm:justify-between md:px-12">
          <span className="mono text-[0.75rem] text-[var(--h-meta)]">© {new Date().getFullYear()} Karim Abousleiman · Paris</span>
          <span className="mono text-[0.75rem] text-[var(--h-meta)]">Released as kimbü</span>
        </footer>
      </div>
    </MotionConfig>
  );
};

export default SiteShell;
