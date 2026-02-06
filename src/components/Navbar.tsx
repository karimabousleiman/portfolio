import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const links = [
  { label: "Home", href: "/", anchor: undefined },
  { label: "Experience", href: "/experience", anchor: "#experience" },
  { label: "Visual Arts", href: "/visual-arts", anchor: "#visual-arts" },
  { label: "Music", href: "/music", anchor: "#music" },
  { label: "About", href: "/about", anchor: "#about" },
];

const sectionIds = ["experience", "visual-arts", "music", "about"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const currentPage = links.find((l) => l.href === location.pathname);
  const isSubPage = location.pathname !== "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 120);

      if (!isMobile || location.pathname !== "/") return;

      // Find which section is currently in view
      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile, location.pathname]);

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const handleMobileNavClick = (link: typeof links[0]) => {
    setOpen(false);
    if (link.href === "/") {
      if (location.pathname !== "/") {
        navigate("/");
      }
      setActiveSection(null);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 200);
    } else if (link.anchor) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(link.anchor!);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        setTimeout(() => {
          const el = document.querySelector(link.anchor!);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="font-heading text-xl font-bold text-primary tracking-tight">
          <span className="relative">
            <AnimatePresence mode="wait">
              {isSubPage && scrolled ? (
                <motion.span
                  key="page-title"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {currentPage?.label}
                </motion.span>
              ) : (
                <motion.span
                  key="logo"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  KA
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm font-medium transition-colors ${location.pathname === l.href ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleMobileNavClick(l)}
                  className={`text-base font-medium transition-colors text-left ${
                    (l.anchor && activeSection === l.anchor.slice(1)) || (!l.anchor && !activeSection && location.pathname === "/")
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
