import { useEffect, useRef } from "react";

/**
 * A field of thin vertical lines behind the home hero, read like a slowed-down waveform.
 * Each line is a string on a 1-D wave: it breathes on its own, the pointer plucks the lines
 * it passes over, and the energy ripples outward to neighbours before settling.
 * Plucked lines take their colour from a palette that drifts across the field and over time, so
 * every gesture paints a different chord. The letters of "come back to" (marked data-echo) take
 * the colour of the lines above them as the wave passes, and settle back to the accent.
 * Pauses off-screen and in hidden tabs; draws a single still frame for reduced motion.
 */
const SPACING = 9; // px between lines
const TENSION = 0.18; // how strongly a line pulls its neighbours (ripple speed)
const DAMPING = 0.965; // energy kept per frame (ripple length)
const PLUCK = 0.9; // how hard the pointer plucks
const REACH = 70; // px either side of the pointer that gets plucked
// Colours a plucked line can take, cycling; the accent leads so the field starts and settles on it.
const PALETTE = ["#ff8a5c", "#ffc857", "#ff5c8a", "#a98bff", "#5cc8ff"];
const DRIFT = 0.12; // palette cycles per second
const STRETCH = 0.012; // palette cycles per line across the field

const hexToRgb = (hex: string) => {
  const v = parseInt(hex.replace("#", ""), 16);
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
};
const mix = (a: number[], b: number[], k: number) => a.map((v, j) => v + (b[j] - v) * k);
const rgb = (c: number[]) => `rgb(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])})`;

const SoundField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const css = getComputedStyle(canvas);
    const ink = hexToRgb(css.getPropertyValue("--h-ink").trim() || "#f2f0eb");
    const accent = hexToRgb(css.getPropertyValue("--h-accent").trim() || "#ff8a5c");
    const palette = PALETTE.map(hexToRgb);

    let w = 0, h = 0, n = 0, dpr = 1;
    let disp = new Float32Array(0); // current swell of each line
    let vel = new Float32Array(0);
    let heat = new Float32Array(0); // recent pluck energy, drives the accent tint
    const pointer = { x: -1, y: -1, px: -1, inside: false };
    // Touch screens have no cursor to play the field, so an unseen hand plucks a note every few seconds.
    const autoplay = window.matchMedia("(hover: none)").matches;
    let nextNote = 1.2;
    let raf = 0, visible = true, t = 0;
    // The palette colour line i would show now, blended smoothly between neighbouring stops.
    const colourAt = (i: number) => {
      const p = (((t * DRIFT + i * STRETCH) % 1) + 1) % 1 * palette.length;
      const a = Math.floor(p);
      return mix(palette[a], palette[(a + 1) % palette.length], p - a);
    };
    // Letters that echo the field, with the line index above each one and how much colour it shows.
    const letters = Array.from(canvas.parentElement?.querySelectorAll<HTMLElement>("[data-echo]") ?? []);
    const echoAt = new Int32Array(letters.length);
    const glow = new Float32Array(letters.length);
    const measure = () => {
      const left = canvas.getBoundingClientRect().left;
      letters.forEach((el, k) => {
        const r = el.getBoundingClientRect();
        echoAt[k] = Math.round((r.left + r.width / 2 - left) / SPACING);
      });
    };
    const echo = () => {
      for (let k = 0; k < letters.length; k++) {
        const c = echoAt[k];
        let e = 0;
        for (let i = Math.max(0, c - 3); i <= Math.min(n - 1, c + 3); i++) e = Math.max(e, heat[i], Math.abs(disp[i]) * 1.6);
        const target = Math.min(1, e);
        // Take the colour fast, give it back slowly, so a passing wave lingers on the word.
        glow[k] += (target - glow[k]) * (target > glow[k] ? 0.35 : 0.04);
        letters[k].style.color = glow[k] < 0.01 ? "" : rgb(mix(accent, colourAt(c), glow[k]));
      }
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      n = Math.ceil(w / SPACING) + 1;
      disp = new Float32Array(n);
      vel = new Float32Array(n);
      heat = new Float32Array(n);
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const cy = h * 0.42; // optical centre of the name
      const span = h * 0.62;
      ctx.lineWidth = 1;
      for (let i = 0; i < n; i++) {
        const x = i * SPACING + 0.5;
        const u = x / w;
        // Envelope: tall in the middle, tapering to the edges, like a sustained note.
        const env = Math.pow(Math.sin(Math.PI * Math.min(Math.max(u, 0), 1)), 1.6);
        // Idle breathing: two slow, out-of-phase waves so the field never looks looped.
        const idle = reduce ? 0.42 : 0.38 + 0.14 * Math.sin(t * 0.6 + i * 0.11) + 0.09 * Math.sin(t * 0.23 - i * 0.047);
        const len = Math.min(h * 0.86, Math.max(2, span * env * (idle + Math.max(-0.25, disp[i]))));
        const hot = Math.min(1, heat[i]);
        ctx.strokeStyle = hot > 0.02 ? rgb(mix(ink, colourAt(i), Math.min(1, hot * 3))) : rgb(ink);
        ctx.globalAlpha = 0.12 + env * 0.18 + hot * 0.55;
        ctx.beginPath();
        ctx.moveTo(x, cy - len / 2);
        ctx.lineTo(x, cy + len / 2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    const step = () => {
      t += 1 / 60;
      // Pluck the lines the pointer crossed since last frame, harder for faster movement.
      if (pointer.inside && pointer.px >= 0) {
        const speed = Math.min(Math.abs(pointer.x - pointer.px), 60);
        if (speed > 0.5) {
          const from = Math.max(0, Math.floor((Math.min(pointer.x, pointer.px) - REACH) / SPACING));
          const to = Math.min(n - 1, Math.ceil((Math.max(pointer.x, pointer.px) + REACH) / SPACING));
          for (let i = from; i <= to; i++) {
            const d = Math.abs(i * SPACING - pointer.x) / REACH;
            const k = Math.exp(-d * d * 2);
            vel[i] += (PLUCK * speed * k) / 60;
            heat[i] = Math.min(1.2, heat[i] + k * speed * 0.02);
          }
        }
      }
      pointer.px = pointer.x;
      if (autoplay && t > nextNote) {
        const c = Math.floor(n * (0.2 + Math.random() * 0.6));
        for (let i = Math.max(0, c - 4); i <= Math.min(n - 1, c + 4); i++) {
          const k = Math.exp(-((i - c) ** 2) / 6);
          vel[i] += 0.35 * k;
          heat[i] = Math.min(1.2, heat[i] + 0.6 * k);
        }
        nextNote = t + 2.8 + Math.random() * 2;
      }
      // 1-D wave: each line is pulled toward its neighbours, then damped.
      for (let i = 0; i < n; i++) {
        const l = i > 0 ? disp[i - 1] : 0;
        const r = i < n - 1 ? disp[i + 1] : 0;
        vel[i] += TENSION * (l + r - 2 * disp[i]) - 0.02 * disp[i];
        vel[i] *= DAMPING;
        heat[i] *= 0.97;
      }
      for (let i = 0; i < n; i++) disp[i] += vel[i];
      if (t % 0.5 < 1 / 60) measure(); // webfonts and resizes can shift the letters
      echo();
      draw();
      raf = visible ? requestAnimationFrame(step) : 0;
    };

    const start = () => {
      if (!reduce && visible && !raf && !document.hidden) raf = requestAnimationFrame(step);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.inside = pointer.y >= 0 && pointer.y <= r.height;
      if (pointer.px < 0) pointer.px = pointer.x;
    };
    const onLeave = () => {
      pointer.inside = false;
      pointer.px = -1;
    };

    resize();
    draw();
    measure();
    const ro = new ResizeObserver(() => { resize(); measure(); draw(); });
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start(); else stop();
    });
    io.observe(canvas);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);
    if (!reduce) {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerdown", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
    }
    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      document.removeEventListener("pointerleave", onLeave);
      letters.forEach((el) => (el.style.color = ""));
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="sound-field pointer-events-none absolute inset-0 h-full w-full" />;
};

export default SoundField;
