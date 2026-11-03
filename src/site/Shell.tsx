import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronDown, Moon, Sun } from "lucide-react";
import "@fontsource/anton";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/500-italic.css";
import "./site.css";
import { chapters, EMAIL, LINKEDIN } from "@/data/site";
import { useModal } from "@/hooks/useModal";
import { useTheme } from "./theme";

export type Section = "work" | "products" | "music" | "photo" | "bio" | null;

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
      <button className="ghost" type="button" onClick={copy}>{EMAIL} · {copied ? "Copied" : "Copy"}</button>
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
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
        <a className="inkb" href={`mailto:${EMAIL}`}>Email me</a>
        <a className="ghost" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn<NewTab /></a>
        <CopyEmail />
      </div>
    </div>
    <footer className="foot">
      <span>© {new Date().getFullYear()} Karim Abousleiman · Paris</span>
      <span>Speaks French, English, Arabic and Italian</span>
    </footer>
  </section>
);

interface ShellProps {
  title: string;
  active: Section;
  band?: "product" | "make";
  children: ReactNode;
}

const Shell = ({ title, active, band = "product", children }: ShellProps) => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const timer = useRef<number>();
  useEffect(() => {
    document.title = title;
  }, [title]);
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
  return (
    <div className="site">
      <header className="hdr">
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
