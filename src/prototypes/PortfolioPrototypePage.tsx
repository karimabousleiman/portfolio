import { useEffect, useMemo, useRef, useState } from "react";
import "./prototype.css";
import { QuietVariant } from "./QuietVariant";
import { EditorialVariant } from "./EditorialVariant";
import { StudioVariant } from "./StudioVariant";
import { BloomVariant } from "./BloomVariant";
import { PulseVariant } from "./PulseVariant";

const variants = [
  { label: "Archive", render: () => <QuietVariant /> },
  { label: "Signal", render: () => <EditorialVariant /> },
  { label: "Monolith", render: () => <StudioVariant /> },
  { label: "Bloom", render: () => <BloomVariant /> },
  { label: "Pulse", render: () => <PulseVariant /> },
];

const PortfolioPrototypePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [reRenderKey, setReRenderKey] = useState(0);
  const pickerRef = useRef<HTMLDivElement | null>(null);
  const highlightRef = useRef<HTMLSpanElement | null>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const moveHighlight = () => {
    const activeItem = itemRefs.current[activeIndex];
    const highlight = highlightRef.current;
    if (!activeItem || !highlight || !pickerRef.current) return;

    highlight.style.width = `${activeItem.offsetWidth}px`;
    highlight.style.transform = `translateX(${activeItem.offsetLeft}px)`;
  };

  const mountVariant = (index: number) => {
    setActiveIndex(index);
    setReRenderKey((prev) => prev + 1);
  };

  const setActive = (index: number) => {
    if (index < 0 || index >= variants.length) return;
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("v", String(index + 1));
    window.history.replaceState({}, "", nextUrl);
    mountVariant(index);
  };

  const currentVariant = useMemo(() => variants[activeIndex], [activeIndex]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = Number(params.get("v") || "1") - 1;
    if (fromQuery >= 0 && fromQuery < variants.length) {
      setActiveIndex(fromQuery);
    }

    const onResize = () => moveHighlight();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    moveHighlight();
  }, [activeIndex]);

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setReady(true));
    });
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (event.metaKey || event.ctrlKey || event.altKey) return;

      const numericKey = Number.parseInt(event.key, 10);
      if (numericKey >= 1 && numericKey <= variants.length) {
        setActive(numericKey - 1);
        return;
      }

      if (event.key === "ArrowRight") {
        setActive((activeIndex + 1) % variants.length);
      }

      if (event.key === "ArrowLeft") {
        setActive((activeIndex - 1 + variants.length) % variants.length);
      }

      if (event.key === "r" || event.key === "R") {
        setReRenderKey((prev) => prev + 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <>
      <div key={`${activeIndex}-${reRenderKey}`} className="prototype-stage">
        {currentVariant.render()}
      </div>

      <nav className="proto-picker" aria-label="Prototype variants" data-ready={ready ? "true" : undefined} ref={pickerRef}>
        <span className="proto-picker-highlight" aria-hidden="true" ref={highlightRef} />

        {variants.map((variant, index) => (
          <button
            key={variant.label}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="proto-picker-item"
            data-active={index === activeIndex ? "true" : undefined}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => setActive(index)}
          >
            {variant.label}
          </button>
        ))}

        <span className="proto-picker-divider" aria-hidden="true" />
        <button
          className="proto-picker-item proto-picker-replay"
          aria-label="Replay animation (R)"
          onClick={() => setReRenderKey((prev) => prev + 1)}
        >
          ↻
        </button>
      </nav>
    </>
  );
};

export default PortfolioPrototypePage;
