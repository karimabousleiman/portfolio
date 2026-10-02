---
name: Karim Abousleiman
description: Senior product manager's portfolio, light ledger of attributed outcomes with creative work as proof of craft.
colors:
  paper: "#fbfbfa"
  ink: "#17181a"
  ink-raised: "#2c2e31"
  muted: "#5c5e63"
  meta: "#6b6d72"
  hairline: "#e6e6e2"
  hairline-strong: "#cfcfca"
  wash: "#f2f2ef"
  surface: "#ffffff"
  sunburst: "#e0531c"
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3.125rem"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  figure:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
  title:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
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
  sm: "6px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "40px"
  xl: "80px"
  2xl: "112px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "{colors.ink-raised}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "40px"
  button-secondary-hover:
    backgroundColor: "{colors.wash}"
  button-compact:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: "32px"
  text-link:
    textColor: "{colors.ink}"
  list-row-hover:
    backgroundColor: "{colors.wash}"
  photo-tile:
    backgroundColor: "{colors.wash}"
    rounded: "{rounded.sm}"
---

# Design System: Karim Abousleiman

## Overview

**Creative North Star: "The Attributed Ledger"**

The category standard for a senior product portfolio, played straight at peer-site craft (the bar is brianlovin.com, rauno.me, linear.app). A near-white page, cool ink, and hairline rules carry everything. Claims are set as sentences in a ruled ledger, each figure in weight and each source in mono, so a recruiter reads role, seniority and four attributed numbers in one glance and believes them because every number names its company and years.

Density is calm and editorial: one centered column (1080px), generous vertical rests between sections, section titles held in a narrow left rail on desktop. Nothing is boxed; structure comes from 1px rules and alignment. Creative work (music, photography, film) appears in the same quiet grammar as the career, as evidence of craft rather than a second identity.

Motion is a single orchestrated fade-up on load and small state responses; nothing loops. The only colour beyond ink and greys is one orange, used as a signal, never as decoration.

**Key Characteristics:**
- Light paper ground, cool near-black ink, three greys for hierarchy.
- Hairline rules instead of cards, tiles or panels.
- One accent (sunburst orange) for live-state, focus and link hover only.
- One sans for everything; mono only for dates and sources; tabular numerals throughout.
- Figures set inline in sentences, never as stat tiles.
- One load-in choreography; no looping motion.

## Colors

A near-monochrome paper-and-ink palette with a single warm signal.

### Primary
- **Sunburst Orange** (`sunburst`): the Telecaster-sunburst signal. Used only for the live "current role" dot, focus rings, link-underline hover, caret, an 18% selection tint and a 24% marker highlight under the hero headline's key phrase. At 3.7:1 on paper it is a non-text signal colour; never set body text in it.

### Neutral
- **Gallery Paper** (`paper`): the page ground, also the text colour on the primary button. Also painted onto the document root so overscroll matches.
- **Cool Ink** (`ink`): headlines, body emphasis, figures, primary button fill (17:1 on paper).
- **Raised Ink** (`ink-raised`): primary button hover only.
- **Graphite** (`muted`): supporting prose, nav links, descriptions (6.3:1).
- **Ledger Grey** (`meta`): mono sources and dates, footer line, icon strokes, list dashes (5.0:1; the floor for text on paper).
- **Hairline** (`hairline`): every 1px rule, section dividers, secondary button border, sticky-header border once scrolled.
- **Hairline Strong** (`hairline-strong`): secondary button border on hover.
- **Wash** (`wash`): row hover fill, photo-tile placeholder, secondary button hover.
- **Sunburst Wash** (`#f8eee6`): full-bleed band behind the home hero and every page header, the one warm surface on each page.
- **White** (`surface`): secondary button fill, lifting it a step off paper.

### Named Rules
**The One Signal Rule.** Sunburst Orange marks something live or focused: the current role, the focused element, the hovered link. If it would decorate, it does not appear. The one exception is the top of each page: a warm wash band and a single marker highlight on the title, so the first screen is not all white.

**The Meta Floor Rule.** Ledger Grey is the lightest text colour. Nothing lighter carries words.

## Typography

**Display Font:** Schibsted Grotesk Variable (with ui-sans-serif, system-ui)
**Body Font:** Schibsted Grotesk Variable
**Label/Mono Font:** Fragment Mono (with ui-monospace)

Both self-hosted via @fontsource.

**Character:** A firm, slightly newsprint grotesk tightened at large sizes reads as confident and editorial; a soft mono for provenance makes every date and source look like a footnote rather than a badge.

### Hierarchy
- **Display** (600, 3.125rem desktop / 2.375rem mobile, 1.08, -0.035em, balanced wrap): the hero statement only; max ~46rem measure.
- **Headline** (600, 2.75rem desktop / 2rem mobile, 1.1, -0.03em, balanced): the closing call-to-action heading.
- **Figure** (600, 1.75rem, line-height 1, -0.03em, tabular): an outcome number, set inline at the start of its sentence in ink.
- **Title** (600, 1.0625rem, -0.01em): section titles in the left rail; h3 sub-titles drop to 0.9375rem.
- **Lead** (400, 1.0625rem, 1.65, muted): intro and section prose, max 34–36rem.
- **Body** (400, 1rem, 1.6): default; list item names use 500.
- **Body small** (400–500, 0.9375rem): buttons, descriptions, highlights, link rows; nav and footer at 0.875rem.
- **Label** (Fragment Mono 400, 0.8125rem, tracking 0, tabular, meta grey): dates, periods, sources only. Sentence case, never uppercase.

### Named Rules
**The Provenance Mono Rule.** Mono is reserved for where-and-when: company, years, periods. It never titles, labels a section or sits above a heading.

**The Sentence Figure Rule.** A number is the first words of a sentence, not a tile. Figure in ink and weight, the claim in muted body, the source in mono beneath.

## Layout

A single centred container, max 1080px, with 20px gutters on mobile and 32px from md (768px). The sticky header is 56px tall in the same container.

Content sections share one grammar: a 1px top rule, then on md+ a two-column grid of a 13rem title rail and a fluid content column (40px gap); below md the title stacks above content (24px gap). Section padding is 40px top / 80px bottom, rising to 48px / 112px at md. The closing contact section drops the rail and sits full-width with 80px / 112px padding.

The hero is a fluid text column plus a 15rem portrait column, bottom-aligned, on md+; on mobile the portrait shrinks to an 80px thumbnail in a row with its caption, above the headline. Outcomes form a two-column ruled ledger from sm (640px), split by a vertical hairline, single column below. The experience list uses a 10rem date column on md+, collapsing the date beneath the title on mobile. Creative work splits into two columns from lg (1024px).

Spacing rhythm: 8 / 12 / 24 / 40 / 80 / 112px, with 16px and 32px used inside components.

## Elevation & Depth

Flat. Depth comes from tonal steps (paper, white, wash) and hairlines, not shadows. The sticky header gains an 85%-opacity paper fill, a 12px backdrop blur and a hairline once the page scrolls past 8px. The one shadow belongs to the portrait photograph, a soft ambient lift that sets the image off the paper.

### Shadow Vocabulary
- **Photo lift** (`box-shadow: 0 1px 2px rgb(0 0 0 / 0.06), 0 12px 32px -12px rgb(0 0 0 / 0.18)`): the hero portrait only.

### Named Rules
**The Rules-Not-Boxes Rule.** Group with a 1px hairline and alignment. No cards, no bordered panels, no tinted containers around content.

## Shapes

Restrained, gentle corners on interactive and photographic elements only: 6px on photo tiles and focus rings, 8px on buttons, 12px on the portrait, full circles for the 6px status dot. Text structures (ledger, lists, sections) are square-edged and defined only by hairlines. Photographs crop to fixed aspect ratios (4:5 portrait, 1:1 tiles). Icons are Lucide line icons at 14–18px, stroke in meta grey.

## Components

### Buttons
Quiet, solid and compact.
- **Shape:** gently curved (8px), 40px tall, 16px horizontal padding, 8px icon gap, 15px / 500 text, optional 16px leading icon.
- **Primary:** ink fill, paper text. One per group, for the main action (email).
- **Secondary:** white fill, hairline border, ink text, for the alternative (LinkedIn).
- **Hover / Focus:** primary lifts to raised ink; secondary takes the wash fill and the stronger hairline; 160ms ease-out. Press nudges down 1px. Focus is the shared 2px sunburst ring, 3px offset.
- **Compact:** the header "Get in touch" is the secondary button at 32px tall, 12px padding, 14px text.

### Text links
- Ink text with a 1px underline at 0.22em offset, underline tinted meta at 45%; on hover the underline turns sunburst (160ms). External links carry a 14px up-right arrow in meta grey.

### Outcome ledger (signature)
- Ruled list, two columns from sm with a vertical hairline divider, 24px vertical padding per row. Each row: figure + sentence, then a mono source line ("Company · years").

### Expandable timeline (signature)
- Each row is a full-width button: mono period (with the sunburst dot when current), title in 500 with company in muted, one-line description, and a plus icon that rotates 45 degrees when open (300ms). The panel expands height and opacity over 350ms on the expo-out curve. Highlights are muted 15px lines marked by an 8px hairline dash, indented to the title column. One row is open by default.

### Link rows
- Hairline-ruled list of external links, 12px vertical padding, name in 500, trailing arrow that nudges up-right on hover while the row takes the wash fill.

### Photo tiles
- Square, 6px corners, wash placeholder, 3-up grid with 8px gaps. Image sits at 1.14 scale and eases to 1.18 on hover (500ms, expo-out).

### Navigation
- Sticky 56px bar: name in 15px / 600 on the left; text links in 14px muted that turn ink on hover; compact secondary button at the end. Links hide below md, leaving name and button. Footer repeats the links at 14px beside a meta-grey copyright line.

## Do's and Don'ts

### Do:
- **Do** separate content with 1px `hairline` rules and alignment.
- **Do** set every metric as a sentence that opens with the figure and ends with a mono "Company · years" source.
- **Do** keep Sunburst Orange to live-state dots, focus rings, link-underline hover, caret and selection.
- **Do** use Fragment Mono at 0.8125rem with tabular numerals for dates and sources only.
- **Do** use the 2px sunburst focus ring with 3px offset on every interactive element.
- **Do** run one staggered fade-up on load (12px rise, 6px blur clearing, 700ms, `cubic-bezier(0.16, 1, 0.3, 1)`, 60ms steps) and honour reduced motion.

### Don't:
- **Don't** put figures in stat tiles, cards or bordered boxes.
- **Don't** use glow, gradient text or a dark-and-neon palette, and don't frost content panels; the scrolled sticky header is the only translucent surface.
- **Don't** set text in Sunburst Orange or in any grey lighter than `meta`.
- **Don't** use mono or uppercase labels as kickers above headings.
- **Don't** add looping or ambient motion.
- **Don't** add shadows to buttons, rows or sections; the portrait's lift is the only shadow.
