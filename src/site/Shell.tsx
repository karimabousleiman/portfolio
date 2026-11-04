import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Copy, Moon, Sun } from "lucide-react";
import "@fontsource/anton";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/500-italic.css";
import "./site.css";
import { chapters, EMAIL, LINKEDIN } from "@/data/site";
import { useModal } from "@/hooks/useModal";
import { useTheme } from "./theme";

export type Section = "work" | "products" | "music" | "photo" | "bio" | null;

/** Headline figure; a unit after a space ("+12 pts") is set smaller so the number stays one line. */
export const Figure = ({ value }: { value: string }) => {
  const [n, ...u] = value.split(" ");
  return u.length ? <>{n}<span className="unit"> {u.join(" ")}</span></> : <>{value}</>;
};

export const Arrow = () => <ArrowRight className="arrow" size={18} strokeWidth={2} aria-hidden="true" />;
export const OutArrow = ({ size = 18 }: { size?: number }) => <ArrowUpRight className="arrow" size={size} strokeWidth={2} aria-hidden="true" />;
export const NewTab = () => <span className="sr"> (opens in a new tab)</span>;

const ThemeButton = () => {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button type="button" className="theme-btn" onClick={toggle} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} aria-pressed={dark}>
      {dark ? <Sun size={20} strokeWidth={2} aria-hidden="true" /> : <Moon size={20} strokeWidth={2} aria-hidden="true" />}
    </button>
  );
};

const NavLinks = ({ active }: { active: Section }) => {
  const pill = (key: Section) => (active === key ? "pl on" : "pl");
  const current = (key: Section) => (active === key ? ("page" as const) : undefined);
  return (
    <div className="links">
      <div className="has-menu">
        <Link className={pill("work")} to="/work/tf1" aria-current={current("work")} aria-haspopup="true">
          Work <ChevronDown size={14} strokeWidth={2.4} aria-hidden="true" />
        </Link>
        <div className="menu">
          {chapters.map((c) => (
            <Link key={c.slug} className="mi" to={`/work/${c.slug}`}>
              <img src={c.logo} alt={c.name} style={{ height: c.slug === "myki" ? 20 : 16 }} />
              <span className="cap">{c.years}</span>
            </Link>
          ))}
        </div>
      </div>
      <Link className={pill("products")} to="/products" aria-current={current("products")}>Products</Link>
      <span className="vdiv" aria-hidden="true" />
      <Link className={pill("music")} to="/music" aria-current={current("music")}>Music</Link>
      <Link className={pill("photo")} to="/photo-film" aria-current={current("photo")}>Photo &amp; Film</Link>
      <span className="vdiv" aria-hidden="true" />
      <Link className={pill("bio")} to="/bio" aria-current={current("bio")}>Bio</Link>
    </div>
  );
};

/** Full-screen phone menu: grows out of the Menu button and shrinks back into it; a second tap mid-close reverses. */
const PhoneMenu = ({ open, closing, onClose }: { open: boolean; closing: boolean; onClose: () => void }) => {
  const ref = useModal<HTMLDivElement>(open, onClose);
  const closeBtn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (open) closeBtn.current?.focus();
  }, [open]);
  if (!open) return null;
  return (
    <div ref={ref} className={closing ? "mob out" : "mob"} role="dialog" aria-modal="true" aria-label="Site menu">
      <div className="nav">
        <Link to="/" className="brand" onClick={onClose}>Karim <span>Abousleiman</span></Link>
        <ThemeButton />
        <button ref={closeBtn} className="inkb" type="button" onClick={onClose}>Close</button>
      </div>
      <nav aria-label="Site">
        <Link className="big" to="/work/tf1">Work</Link>
        <div className="sub">
          {chapters.map((c) => <Link key={c.slug} to={`/work/${c.slug}`}>{c.name}</Link>)}
        </div>
        <Link className="big" to="/products">Products</Link>
        <Link className="big" to="/music">Music</Link>
        <Link className="big" to="/photo-film">Photo &amp; Film</Link>
        <Link className="big" to="/bio">Bio</Link>
      </nav>
      <a className="cta" href="#contact" onClick={onClose} style={{ alignSelf: "flex-start" }}>Contact</a>
    </div>
  );
};

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      /* clipboard blocked: the address stays visible on the button */
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      <button className={copied ? "ghost copy-btn done" : "ghost copy-btn"} type="button" onClick={copy} aria-label={`Copy email address ${EMAIL}`}>
        {EMAIL}
        <span className="ic" aria-hidden="true">{copied ? <Check size={18} strokeWidth={2.2} /> : <Copy size={16} strokeWidth={2} />}</span>
      </button>
      <span className="sr" aria-live="polite">{copied ? "Email address copied" : ""}</span>
    </>
  );
};

const ContactBand = ({ variant }: { variant: "product" | "make" }) => (
  <section id="contact" className="wrap sec" style={{ paddingBottom: 32 }} aria-labelledby="contact-h">
    <div className="band">
      <h2 id="contact-h" className="d" tabIndex={-1}>
        {variant === "product" ? <>Let's talk about <span>your product.</span></> : <>Let's make <span>something.</span></>}
      </h2>
      <div className="acts">
        <a className="inkb" href={`mailto:${EMAIL}`}>Email me</a>
        <a className="ghost" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn<NewTab /></a>
        <CopyEmail />
      </div>
    </div>
    <footer className="foot">
      <span>© {new Date().getFullYear()} Karim Abousleiman · Paris</span>
    </footer>
  </section>
);

interface ShellProps {
  title: string;
  active: Section;
  band?: "product" | "make";
  children: ReactNode;
}

// Tiles below the first screen rise into place once, as they scroll into view (like caldera.xyz).
const REVEAL = ".card, .ht, .result, .tile, .stat, .ph, .shot, .band, .half, .row, .extra, .press, .film, .music-hero";
const useReveal = (key: string) => {
  useEffect(() => {
    const els = [...document.querySelectorAll<HTMLElement>(`.site :is(${REVEAL})`)].filter(
      (el) => !el.classList.contains("rise") && !el.parentElement?.closest(REVEAL) && el.getBoundingClientRect().top > window.innerHeight,
    );
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        // Also catch tiles a fast scroll skipped past, so nothing stays hidden.
        if (!e.isIntersecting && e.boundingClientRect.top > 0) continue;
        const el = e.target as HTMLElement;
        io.unobserve(el);
        // Siblings entering together stagger by 70ms.
        const i = [...(el.parentElement?.children ?? [])].indexOf(el);
        el.style.transitionDelay = `${Math.min(Math.max(i, 0), 3) * 70}ms`;
        el.dataset.in = "";
        // Hand transitions back to the tile (hover lift etc.) once it has landed.
        window.setTimeout(() => { el.classList.remove("reveal"); el.style.transitionDelay = ""; delete el.dataset.in; }, 1300);
      }
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
    return () => { io.disconnect(); els.forEach((el) => el.classList.remove("reveal")); };
  }, [key]);
};

const Shell = ({ title, active, band = "product", children }: ShellProps) => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const timer = useRef<number>();
  useEffect(() => {
    document.title = title;
  }, [title]);
  useReveal(title);
  const toggle = useCallback(() => {
    window.clearTimeout(timer.current);
    if (!open) {
      setOpen(true);
      setClosing(false);
    } else if (closing) {
      setClosing(false);
    } else {
      setClosing(true);
      timer.current = window.setTimeout(() => {
        setOpen(false);
        setClosing(false);
      }, 220);
    }
  }, [open, closing]);
  // The nav sits flush at the top and detaches into a floating pill once the page has scrolled.
  const [float, setFloat] = useState(false);
  useEffect(() => {
    const onScroll = () => setFloat(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="site">
      <header className={float ? "hdr float" : "hdr"}>
        <nav aria-label="Main" className="nav">
          <Link to="/" className="brand">Karim <span>Abousleiman</span></Link>
          <NavLinks active={active} />
          <ThemeButton />
          <a className="cta" href="#contact">Contact</a>
          <button className="inkb menu-btn" type="button" aria-label="Open menu" aria-expanded={open} onClick={toggle}>Menu</button>
        </nav>
      </header>
      <PhoneMenu open={open} closing={closing} onClose={toggle} />
      <main>{children}</main>
      <ContactBand variant={band} />
    </div>
  );
};

export default Shell;
