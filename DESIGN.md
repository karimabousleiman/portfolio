---
name: Karim Abousleiman
description: Caldera-style portfolio for a senior product manager and music composer; huge condensed caps, rounded flat surfaces, halftone fields and logo-derived isometric scenes, in a light (Limestone) and a dark (Magma) theme.
colors:
  light:
    canvas: "#e2e2df"
    surface: "#f7f6f2"
    ink: "#070607"
    soft: "#4f4c47"
    ember: "#fc5000"
    on-ember: "#070607"
    plasma: "#524ae9"
    on-plasma: "#ffffff"
    sulfur: "#f5f28e"
  dark:
    canvas: "#101418"
    surface: "#1b2228"
    ink: "#f2efe8"
    soft: "#a9b1b8"
    ember: "#ff5c1a"
    on-ember: "#101418"
    plasma: "#1aa894"
    on-plasma: "#06110f"
    sulfur: "#ffd43b"
typography:
  display:
    fontFamily: "Anton, Impact, sans-serif"
    textTransform: uppercase
    letterSpacing: "0.02em"
    lineHeight: 0.94
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontWeight: 500
    fontSize: "18px"
    lineHeight: 1.55
  caption:
    fontFamily: "system-ui"
    fontSize: "13px"
    letterSpacing: "0.06em"
    textTransform: uppercase
rounded:
  card: "40px"
  card-phone: "28px"
  pill: "800px"
---

# Design System: Karim Abousleiman

Tokens and every component class live in `src/site/site.css`. The visual reference is the Caldera style; the design canvas is https://claude.ai/artifact/FoWPFDWFRsU4iwJz17cyNS (the code is the source of truth).

## Themes

Two themes share one structure. Limestone (light) is warm grey with ember orange and violet; Magma (dark) is blue-black with ember and teal. The toggle sits in the nav and the phone menu; the choice is saved, otherwise the system setting wins, and it is applied before first paint. Swapping eases colours for 350ms. Ember carries actions and headline results in both themes; violet/teal carries one secondary surface per section; sulfur is only for small tags.

## Type

- Anton, uppercase, +0.02em tracking (the reference forbids negative tracking): page names, headline numbers, section titles one step smaller. Long sentences never go in Anton.
- DM Sans 500 for everything else; system-ui caps at 13px for small labels.
- Display sizes are `clamp()` with phone minimums sized so the longest word fits 358px.

## Surfaces and shape

Flat: no drop shadows except the floating nav and dropdown. Cards are 40px-radius surfaces on the canvas (28px on phones); controls are pills. Dotted 1.5px rules separate rows. Halftone dot fields (`.ht`) are the signature texture.

## Components

- **Nav:** translucent pill (`backdrop-filter`, solid under reduced transparency or high contrast) with a Work dropdown that opens from its trigger, the theme toggle and an ember Contact pill. On phones it becomes brand + toggle + Menu; the full-screen menu grows out of the Menu button and back.
- **Result cards:** big Anton figure, label, role, in ember / surface / violet.
- **Chapters (`/work/:slug`):** chapter switcher, giant company name, facts list, logo + one-liner card beside the isometric scene, then "What changed" first, supporting results, rows, roles, press, next chapter.
- **Isometric scenes (`Iso.tsx`):** black objects with white edges on a flat colour field, traced from each company's logo, alternating direction; hovering lifts a piece; the home chart pulses like a sound wave.
- **Bio hero:** cut-out portrait between a white "KARIM" and a black "ABOUSLEIMAN" on ember, pointer parallax by depth, dotted dissolve at the chest.
- **Lightbox:** opens from the tapped photo and closes back into it; drag follows 1:1, rubber-bands upward, and a flick is judged by its projected momentum.
- **Contact band:** ember block ending every page, with Email, LinkedIn and copy-email (announces "Copied").

## Motion

Exponential ease-out (`cubic-bezier(.16,1,.3,1)`); press feedback on pointer-down (scale .96). Every animation has a `prefers-reduced-motion` path: entrances and loops stop, the phone menu and lightbox fall back to fades.

## Accessibility

44px targets, a two-tone focus ring (ink outline + surface halo) that shows on any background, sr-only "(opens in a new tab)", descriptive alt text, the ticker has a pause control, and white text on ember is only used at display sizes.
