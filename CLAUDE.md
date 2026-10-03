# karimabousleiman.com

Personal portfolio of Karim Abousleiman (Senior Product Manager, music composer, Paris). Live at https://karimabousleiman.com. Product context lives in `PRODUCT.md`, the visual system in `DESIGN.md`; read both before design or copy work.

## Commands

- `npm run dev`: local dev server (Vite).
- `npm run build`: production build; run it after every change, it must pass.
- `npx tsc --noEmit -p tsconfig.app.json`: type check.
- `npm run lint`: ESLint. The `react-refresh/only-export-components` warnings are expected (data and components share files).
- `npm run preview`: serve the production build.

Repo: GitHub `karimabousleiman/karimabousleiman`. The hosting is assumed to build from `main` (not confirmed in this repo); `public/_redirects` is the Netlify SPA fallback so deep links load. Work on a branch, then fast-forward `main` when the owner approves.

## Stack

Vite + React 18 + TypeScript + Tailwind, react-router (`BrowserRouter`), framer-motion, lucide-react. Fonts are self-hosted through `@fontsource` (Schibsted Grotesk Variable, Instrument Serif, Fragment Mono). shadcn/ui components exist in `src/components/ui` but the site pages don't use them.

## Where things live

- `src/components/SiteShell.tsx`: header and nav, full-screen phone menu, `PageTitle`, contact band (`Closing`) with copy-email, footer, `useModal` (focus trap, scroll lock, focus return), contact links (`EMAIL`, `LINKEDIN`, `IMDB`, `PCMAG`, `TECHCRUNCH`). Every page wraps in `<SiteShell title="…">`, which sets `document.title`.
- `src/pages/home.css`: all design tokens (`--h-*` custom properties on `.home`), buttons, links, motion and reduced-motion rules. Change colours and spacing here, not inline.
- `src/pages/Index.tsx`: home. First screen is a full-viewport hero over `SoundField`, then the results ledger, craft section, contact band.
- `src/components/SoundField.tsx`: the interactive canvas behind the home hero (wave-propagation lines; pointer plucks them; autoplays on touch; pauses off-screen; still frame for reduced motion). Tuning constants are at the top of the file.
- `src/components/ExperienceSection.tsx`: data only. `jobs` (roles and outcome-first bullets), `results` (one headline result per company, used on home), `companies` (one-line description, logo, logo size).
- `src/pages/Experience.tsx`: Experience page (company blocks, roles, languages).
- `src/components/MusicSection.tsx`: `tracks`, `streamingServices` and `TrackList` (inline SoundCloud players; `/music#track-1` opens a track paused).
- `src/components/VisualArtsSection.tsx`: `photos` (self-hosted WebP in `src/assets/photos`, with alt text and sizes), gallery order, lightbox with shared-element open/close, `FilmEmbed`.
- `src/components/AboutSection.tsx`, `src/components/SkillsSection.tsx` (languages only).
- `src/prototypes/`: old design-direction explorer at `/prototype`, lazy-loaded; not part of the live design.
- `public/og.png`: link-preview image (1200×630). `index.html` holds the title, description and absolute `og:image` URL.

## Rules for content

- Only real, attributable facts. Never invent metrics, clients, testimonials, press or claims. Ask before changing any factual copy.
- Copy is first person, outcome-first ("Raised X by doing Y"). Activity without a result gets cut.
- Myki launched at TechCrunch Disrupt SF in 2016, before Karim joined (Apr 2017). Credit it to the company, never to Karim. PCMag Editors' Choice 2018 falls within his tenure.
- Karim directly managed 4 PMs at Garantme ("Managed 4 PMs and led an 11-person squad").
- Open questions, not yet answered by the owner; don't guess:
  - Was Garantme's "+26% user acquisition" really acquisition, or sign-ups/activation?
  - Are "+12% first-session watch rate" and "+29% retention" relative, and what is the retention period?
  - What role he's looking for next, current team size at TF1+, his cinema background specifics, and whether a CV PDF should be offered.

## Owner decisions (don't relitigate)

- Neutral near-black palette (`#0f0f10`) with off-white text and one orange accent (`#ff8a5c`). Warm, plum, midnight and cream colour passes were all tried and rejected.
- Company logos stay monochrome off-white. Coloured brand logos were tried and rejected.
- Streaming-service icons keep their brand colours.
- Portraits are in colour on Music and About. There is no portrait on the home page.
- Home first screen: name, "SENIOR PRODUCT MANAGER · MUSIC COMPOSER · PARIS", then "Building products people come back to." with "come back to" in orange. No clock or location in the header on home.
- Nav labels: Experience, Music, Visual Arts, About, Contact.
- All nine photos stay on the Visual Arts page (curating to five was rejected). No product screenshots and no big KPI numbers on the Experience page.
- The contact band says "Let's talk about *your product*." (site is for jobs and clients); Music and Visual Arts say "Let's make *something*."
- Shared design artifacts: design canvas https://claude.ai/artifact/3C6smdaVo6XESqAdUkStnE and Figma file https://www.figma.com/design/i6Tu0TWF23GmwvL9mzFbPY (both older than the code; the code is the source of truth).

## Working conventions

- Accessibility is part of done: 44px touch targets, visible focus, `prefers-reduced-motion` paths for every animation, sr-only "(opens in a new tab)" on external links, descriptive alt text.
- Verify visually at 390, 768, 1024, 1280 and 1440 widths before calling a layout change done (headless Chrome screenshots work; see `/impeccable` critique history in `.impeccable/critique/`).
- Don't commit or push without the owner asking. Untracked files left alone on purpose: `.agents/`, `.claude/skills/`, `skills-lock.json`. `.impeccable/` (critiques, design.json sidecar) is gitignored.
