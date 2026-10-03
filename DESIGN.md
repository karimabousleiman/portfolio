---
name: Karim Abousleiman
description: Dark editorial portfolio for a senior product manager and music composer; one orange accent, three typefaces with fixed jobs, a sound-field hero.
colors:
  bg: "#0f0f10"
  ink: "#f2f0eb"
  muted: "#c9c6bf"
  body: "#b9b7b1"
  meta: "#9b9a96"
  line: "#2a2a2d"
  line-strong: "#3a3a3d"
  control: "#6b6a67"
  accent: "#ff8a5c"
typography:
  display-sans:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(4.25rem, min(19vw, 22svh), 12.5rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  display-serif:
    fontFamily: "Instrument Serif, ui-serif, Georgia, serif"
    fontSize: "clamp(3.4rem, min(20vw, 24svh), 13.5rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  page-title:
    fontFamily: "Instrument Serif, ui-serif, Georgia, serif"
    fontSize: "10rem"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3.25rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  closing:
    fontFamily: "Instrument Serif, ui-serif, Georgia, serif"
    fontSize: "4.5rem"
    fontWeight: 400
    lineHeight: 1
  figure:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
    fontFeature: "tnum"
  role:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Fragment Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
    fontFeature: "tnum"
rounded:
  none: "0"
spacing:
  tight-1: "16px"
  tight-2: "24px"
  group-1: "48px"
  group-2: "64px"
  section-1: "96px"
  section-2: "112px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "#ffffff"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "52px"
  button-done:
    textColor: "{colors.accent}"
  text-link:
    textColor: "{colors.ink}"
  nav-link:
    typography: "{typography.label}"
    textColor: "{colors.ink}"
  row-link:
    height: "52px"
---

# Design System: Karim Abousleiman

## Overview

**Creative North Star: "The Plucked String"**

A dark, editorial portfolio whose job is to make a recruiter or hiring manager reach out. The page is near-black, the type does the work, and one warm orange marks what matters: the results, the dates, links and the closing call to action. Creative work (music, photographs, film) appears as proof of craft, never as a second identity.

The signature moments are the home first screen and its **sound field**: a band of fine vertical lines behind the name that breathes on its own and ripples outward when the cursor plucks it, like a played note. It ties the two halves of the person together: product and music.

**Key Characteristics:**
- Near-black ground, off-white type, one orange accent that only ever means something.
- Three typefaces, each with a single job: sans for proof, serif for voice, mono for metadata.
- Flat and square: hairline rules instead of cards, shadows or rounded corners.
- One authored motion moment per page; everything else is quiet micro-feedback.

## Colors

All tokens live on `.home` in `src/pages/home.css` as `--h-*` custom properties.

### Primary
- **Accent `#ff8a5c`**: the only colour. Used for headline result figures, dates, link underlines, the active-page underline, the CONTACT nav item, the italic word in the closing line, the highlighted words on home ("come back to"), focus rings and the COPIED state. 8.3:1 on the background.

### Neutral
- **Background `#0f0f10`**: every page.
- **Ink `#f2f0eb`**: headings and primary text (16.8:1).
- **Muted `#c9c6bf`**: leads and secondary text (11.2:1).
- **Body `#b9b7b1`**: bullet and paragraph text (9.6:1).
- **Meta `#9b9a96`**: mono labels and captions (6.8:1).
- **Line `#2a2a2d` / Line-strong `#3a3a3d`**: hairline dividers (decorative only).
- **Control `#6b6a67`**: outlined button borders (3.5:1, the minimum for control edges).

### Named Rules
**The One Accent Rule.** No second hue. Warm, plum, midnight and cream variants were tried and rejected.

**The Off-White Logo Rule.** Company logos print through `.logo-mono` (`brightness(0) invert(0.94)`). Coloured brand logos were rejected. Streaming-service icons are the exception and keep their brand colours.

**The Photos Carry Colour Rule.** Portraits (Music, About) and the gallery are in full colour; the interface around them stays neutral.

## Typography

Three faces, each with one job:

- **Schibsted Grotesk** (sans): facts. The heavy "KARIM", headlines, roles, result figures, body text.
- **Instrument Serif**: voice. "Abousleiman", page titles ("Experience", "Music", "Visual Arts", "About"), track titles, the closing line, the 404 headline. Italic only for the accented word.
- **Fragment Mono**: metadata. Nav, labels, dates, buttons, captions; uppercase, tabular numerals.

### Hierarchy
1. Home name lockup: sans "KARIM" over serif "Abousleiman", sized by viewport so the first screen always fits.
2. Page titles: serif at 10rem desktop, 7rem tablet, 4.5rem phone, with a lead paragraph beside or below.
3. Headlines and closing line: 3–4.5rem.
4. Roles and figures: 1.5–3.5rem.
5. Body 15–18px; labels 12–13px mono.

### Named Rules
**The Proof and Voice Rule.** Sans for proof, serif for voice. Results and roles are never set in the serif.

**The Trailing Separator Rule.** Separators travel with the text before them, so a wrapped line never starts with "·".

## Layout

- Content container `max-w-[1280px]` with 16px (phone) and 48px (desktop) side padding.
- **Spacing scale**: tight 16–24px inside a group, 48–64px between groups, 96–112px between sections. The closing band owns the gap before it; sections don't add bottom padding on top.
- **Label gutter**: on inner pages, a 200px left column holds a mono label (company logo and dates on Experience). Multi-column grids start at `lg` (1024px); below that everything stacks.
- **Full bleed**: `.bleed` spans the viewport from inside the container (home hero, Music hero, Visual Arts lead photo). `.home` clips horizontal overflow.
- **Home first screen**: exactly one viewport tall (minus the header). Name and role centred, "Building products people come back to." anchored at the bottom; results start after the first scroll.

## Elevation & Depth

Flat. No shadows. Depth comes from hairline rules, the sound field behind the hero, and photography.

## Shapes

Square corners everywhere (buttons, photos, tiles). No pills, no cards.

## Components

### Buttons
Mono uppercase, square, 52px tall (44px compact). Primary is filled ink; secondary is outlined in the control colour and turns ink on hover. `btn-done` turns the COPY button orange once copied.

### Results ledger (signature, home)
One row per company: off-white logo, role and dates (orange), one scope line, and one large orange figure with its label. Stacked on phone and tablet; three columns from 1024px.

### Company blocks (Experience)
Left gutter: logo (as the company heading) and dates in orange. Right: one-line company description, then each role as a heading with bulleted, outcome-first achievements. No big KPIs and no product screenshots on this page.

### Product entry (Products)
The live product leads: a full-width screenshot framed by a hairline, which opens the tool. Below it, the label gutter holds the kind ("WEB APP"); the right column has the serif name, the description with the book title in italic ink, the role line, and OPEN THE TOOL plus the domain. On home, the newest product appears as a teaser mirrored against the craft section (image left, text right).

### Contact band
Ends every page: serif headline with one italic orange word ("Let's talk about *your product*." on Home, Experience, About and 404; "Let's make *something*." on Music and Visual Arts), then EMAIL ME, LINKEDIN and the address with COPY. If the clipboard is blocked, the address is selected and the button reads SELECTED.

### Header and menu
Desktop: name on the left (empty on home, where the name is the hero), mono nav on the right with an orange underline on the current page and CONTACT in orange. Phone: MENU opens a full-screen menu with large serif links; it traps focus and returns it on close.

### Track list (Music)
Numbered rows with serif titles; LISTEN opens an inline SoundCloud player, one at a time. Streaming buttons carry the services' brand icons.

### Gallery (Visual Arts)
Full-bleed lead photo, then a 2-up (phone) to 4-up (≥1280px) grid with numbered mono captions; all nine photos stay.

### Motion

One authored moment per page, all with `prefers-reduced-motion` alternatives:
- **Home**: the name racks into focus (blur → sharp) while the sound field fades in. The field runs a 1-D wave simulation on canvas, pauses off-screen and in hidden tabs, autoplays a note every few seconds on touch devices, and draws a still frame for reduced motion.
- **Visual Arts**: the clicked photo lifts from the grid into the lightbox and settles back on close (framer-motion `layoutId`); paging crossfades.
- **Music**: a track's SoundCloud player unfolds from its row.
- **Contact jump**: an accent underline sweeps under the closing line's italic word.
- Micro: arrows nudge on hover/focus, buttons press to 0.98, nav underline wipes in.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` throughout.

## Do's and Don'ts

### Do:
- Keep every claim real and attributable; ask before changing factual copy.
- Use the accent for meaning (results, dates, actions), never decoration.
- Give every animation a reduced-motion path and every external link an sr-only "(opens in a new tab)".
- Check 390, 768, 1024, 1280 and 1440 widths.

### Don't:
- Add a second accent colour or colour the company logos.
- Put a portrait, clock or location back on the home first screen.
- Use rounded cards, shadows, gradients as decoration, or emoji/Unicode glyphs as icons.
- Add numbered "01 —" eyebrow labels above headings.
