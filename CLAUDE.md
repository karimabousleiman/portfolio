# karimabousleiman.com

Personal portfolio of Karim Abousleiman (Senior Product Manager, music composer, Paris). Live at https://karimabousleiman.com. Product context lives in `PRODUCT.md`, the visual system in `DESIGN.md`; read both before design or copy work.

## Commands

- `npm run dev`: local dev server (Vite).
- `npm run build`: production build; run it after every change, it must pass.
- `npx tsc --noEmit -p tsconfig.app.json`: type check.
- `npm run lint`: ESLint. The `react-refresh/only-export-components` warnings are expected (data and components share files).
- `npm run preview`: serve the production build.

Repo: GitHub `karimabousleiman/portfolio`. Work on a branch, then fast-forward `main` when the owner approves.

## Hosting

- Netlify builds and deploys every push to `main` (site `karimabousleiman.netlify.app`). Pushing to `main` is publishing.
- `public/_redirects` is the SPA fallback so deep links like `/music` load. Don't remove it.
- Domain is registered at IONOS, but its nameservers are Cloudflare (`maxim`/`veda.ns.cloudflare.com`), so DNS records live in Cloudflare: `@` A → `75.2.60.5` (Netlify), `www` CNAME → `karimabousleiman.netlify.app`, no AAAA on `@`, records DNS only (grey cloud). Leave the IONOS MX records alone (email).
- Subdomains are separate Netlify sites and need a Cloudflare CNAME each: `cauldron` → `fluffy-arithmetic-6395e1.netlify.app` (repo `cauldron-companion`), `meridian` → `meridian-karimabousleiman.netlify.app`.
- HTTPS is Netlify's Let's Encrypt certificate; `www` redirects to the bare domain.
- The site used to be hosted by Lovable (`185.158.133.1`, behind Cloudflare). A Cloudflare "Error 1001" means a stale DNS cache still points there; clear the browser or OS DNS cache.

## Stack

Vite + React 18 + TypeScript + Tailwind, react-router (`BrowserRouter`), framer-motion, lucide-react. Fonts are self-hosted through `@fontsource` (Anton for display, DM Sans 500 for body). shadcn/ui components exist in `src/components/ui` but the site pages don't use them.

## Where things live

- `src/data/site.ts`: all content. `chapters` (TF1+, Garantme, MYKI: role, dates, headline result, extra results, rows, roles, press), `products`, `tracks`, `streamingServices`, `photos` (gallery order and mosaic spans), `languages`, contact links (`EMAIL`, `LINKEDIN`, `IMDB`, `FILM`).
- `src/site/site.css`: the Caldera design system. Theme tokens on `:root[data-theme="light"]` (Limestone) and `[data-theme="dark"]` (Magma), plus every component class. Change colours and spacing here, not inline.
- `src/site/Shell.tsx`: header pill nav (Work dropdown, theme toggle, Contact), full-screen phone menu that grows from the Menu button, contact band with copy-email, footer. Every page wraps in `<Shell title active band>`, which sets `document.title`.
- `src/site/theme.ts` + the inline script in `index.html`: theme is the saved choice (`localStorage.theme`), else the system setting, applied before first paint.
- `src/site/Iso.tsx` (+ `iso.css`): isometric scenes (home sound-wave chart, TF1+ wordmark, Garantme G-house, MYKI owl mark), traced from the real logos.
- `src/pages/`: `Home`, `Work` (one data-driven page per company at `/work/:slug`), `Products`, `Music` (inline SoundCloud players; `/music#track-1` opens a track paused), `PhotoFilm` (mosaic, lightbox that opens from the tapped photo and can be dragged away, YouTube film), `Bio` (cut-out portrait hero with pointer parallax), `NotFound`.
- Old URLs redirect: `/experience` → `/work/tf1`, `/visual-arts` → `/photo-film`, `/about` → `/bio`.
- `public/og.png`: link-preview image (1200×630). `index.html` holds the title, description and absolute `og:image` URL.

## Rollback to the previous site

The dark editorial site that ran until Nov 2026 is preserved as tag `legacy-dark-editorial` and branch `legacy/dark-editorial`. To put it back live: `git checkout main && git reset --hard legacy-dark-editorial && git push --force-with-lease origin main` (Netlify redeploys), or redeploy that commit from the Netlify dashboard's deploy list.

## Rules for content

- Only real, attributable facts. Never invent metrics, clients, testimonials, press or claims. Ask before changing any factual copy.
- Copy is first person, outcome-first ("Raised X by doing Y"). Activity without a result gets cut.
- MYKI launched at TechCrunch Disrupt SF in 2016, before Karim joined (Apr 2017). Credit it to the company, never to Karim. PCMag Editors' Choice 2018 falls within his tenure.
- Karim directly managed 4 PMs at Garantme ("Managed 4 PMs and led an 11-person squad").
- Write MYKI in capitals in all copy (the URL slug stays `myki`).
- Answered by the owner (Nov 2026):
  - TF1+ +12 is percentage points of first-session watch rate, measured over the first 30 days. Shown as "+12 pts".
  - MYKI +29% is 90-day retention. MYKI support feedback fed the onboarding rebuild behind it, and Karim was MYKI's first PM.
  - Garantme +26% is sign-ups and activation. The +8% website conversion was dropped.
  - At TF1+ he works within a 35-person team and does not lead it. The product-health metrics focused the roadmap on clearer priorities.
  - The Garantme discovery framework starts every feature from its "why" (user-centric).
  - He writes every Meridian issue. His cinema background: director of photography.
  - His next role is decided: he is joining Spendesk. Don't add "open to roles" copy. Whether and how the site mentions Spendesk is still open.
- Still open: whether a CV PDF should be offered.

## Owner decisions (don't relitigate)

- Visual direction is Caldera (Nov 2026): pill nav, huge condensed Anton caps, 40px-radius cards, halftone dot fields, isometric illustrations in Caldera's style (black machined objects, white edges, flat orange/violet/yellow fields). The previous near-black editorial direction is retired (see Rollback).
- Two themes with a toggle: Limestone (light: `#e2e2df` ground, ember `#fc5000`, violet `#524ae9`, sulfur) and Magma (dark: `#101418` ground, ember `#ff5c1a`, teal `#1aa894`, yellow). Other palettes (Basalt, Tidewater, Cobalt, Pink, Moss) were offered and not chosen.
- Isometric scenes must echo each company's real logo and alternate direction from scene to scene.
- Bio hero: natural-colour cut-out portrait, zoomed to head and chest, between a giant white "KARIM" and a solid black "ABOUSLEIMAN"; no floating tags. Heavier stylisation (screenprint) was rejected.
- Mission/vision lines per company are not shown until the owner confirms them; screenshot slots stay hidden until real images exist.
- Company logos print monochrome (ink); streaming-service icons keep their brand colours.
- Nav labels: Work (TF1+, Garantme, MYKI), Products, Music, Photo & Film, Bio, Contact.
- All nine photos stay on Photo & Film.
- The contact band says "Let's talk about *your product*." (site is for jobs and clients); Music and Photo & Film say "Let's make *something*."
- Design canvas (source for this direction): https://claude.ai/artifact/FoWPFDWFRsU4iwJz17cyNS. The code is the source of truth.

## Working conventions

- Accessibility is part of done: 44px touch targets, visible focus, `prefers-reduced-motion` paths for every animation, sr-only "(opens in a new tab)" on external links, descriptive alt text.
- Verify visually at 390, 768, 1024, 1280 and 1440 widths before calling a layout change done (headless Chrome screenshots work; see `/impeccable` critique history in `.impeccable/critique/`).
- Don't commit or push without the owner asking. Untracked files left alone on purpose: `.agents/`, `.claude/skills/`, `skills-lock.json`. `.impeccable/` (critiques, design.json sidecar) is gitignored.
