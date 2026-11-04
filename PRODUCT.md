# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: hiring managers, product leaders and recruiters evaluating Karim Abousleiman for a senior or lead product management role. They arrive from LinkedIn, a CV link or a referral, scan quickly, and need to decide whether to reach out.

Secondary (not ranked): creative collaborators and listeners who find the music or visual work.

## Product Purpose

A personal portfolio site for Karim Abousleiman, a Paris-based product manager. Its job is to turn a recruiter's quick visit into a conversation: make the product track record legible and credible, and make the person memorable. Success means a hiring manager or recruiter contacts Karim (LinkedIn or email).

## Positioning

Creativity is the edge, not a side hobby. Karim is a product manager who also releases music and makes films and photography; the creative practice is evidence of taste, craft and storytelling that make him a better product leader. Creative work supports the product story rather than competing with it as a second identity.

## Operating Context

- Routes: `/` (home), `/work/tf1`, `/work/garantme`, `/work/myki` (one chapter per company; nav label "Work"), `/products` (own products), `/music`, `/photo-film` (nav label "Photo & Film"), `/bio`. Old URLs (`/experience`, `/visual-arts`, `/about`) redirect.
- Domain: https://karimabousleiman.com
- Contact paths: LinkedIn and email (mailto plus a copy-email button). No forms. Every page ends on the same contact band.
- Visitors are typically on desktop between tasks or on mobile from a LinkedIn tap.

## Capabilities and Constraints

- Existing stack: Vite, React, TypeScript, Tailwind, shadcn/ui, react-router single-page app.
- Each company gets a full chapter page: role, dates, place, what the company does, an isometric scene from its logo, the headline result first, then supporting results, roles and press. Home shows one headline result per company.
- Music section links to releases on Spotify, Apple Music, YouTube Music and Deezer.
- Photo & Film shows nine self-hosted photographs in a lightbox gallery, plus a film embed and the IMDb link.
- Production design is the Caldera direction with Limestone (light) and Magma (dark) themes (see DESIGN.md). The previous dark editorial site is preserved as git tag `legacy-dark-editorial`.

## Brand Commitments

- Name: Karim Abousleiman. Role line: "Senior Product Manager · Music Composer · Paris". Music is released as kimbü.
- Only real work: show only real releases, projects, roles and metrics. Never placeholder work, invented clients, testimonials or claims.

## Evidence on Hand

- Career (in `src/components/ExperienceSection.tsx`):
  - Senior Product Manager, TF1+ (Mar 2025 – present): +12 percentage points first-session watch rate over the first 30 days (headline); replaced revenue-only reporting with product-health metrics, which focused the roadmap on clearer priorities; works within a 35-person team; moved the team to a product-led model.
  - Group Product Manager, Garantme (Jan 2022 – Mar 2025; Product Manager there Jan 2021 – Jan 2022): €200k/year upsell revenue (headline); managed 4 PMs and led an 11-person squad; +26% sign-ups and activation via onboarding redesign; launched the core SaaS to 10k daily users in 6 months.
  - Product Manager, MYKI (Apr 2017 – Jul 2020), its first PM: +29% 90-day retention (headline); helped grow to 1M+ daily users in under 2 years with 12 engineers.
  - Removed as vanity or undefined: "+17% user engagement", "+39% QoQ positive reviews".
- Music releases (in `src/components/MusicSection.tsx`): including "Prelude to Freedom", "Bittersweet Relief", "Curse of Knowledge", "Soul Swap", "Kayafet Part II", "Je t'offre", "Honey Tea", "12.1.08", "1989".
- Visual projects (in `src/components/VisualArtsSection.tsx`): "Look, The Sun Is Leaving Us...", "On My Way.", "Under Beirut's Sky.", "Chaotic Vision", "Prince From The Biomass.", "Whatever Works In Venice."
- Photo: `src/assets/portrait.webp` (Karim playing guitar; used on Music and About).
- Press (real, linked): MYKI named PCMag Editors' Choice in 2018 (https://www.pcmag.com/reviews/myki), during Karim's tenure. MYKI launched at TechCrunch Disrupt SF in 2016 (https://techcrunch.com/2016/09/13/myki-rolls-out-a-password-manager-that-locks-all-your-info-away-on-your-phone/), before he joined: credit the company, not Karim.
- Background: cinema (director of photography), then QA, then product. 10+ instruments. Native French, English and Arabic; beginner Italian.
- Absent: testimonials, client logos, case-study write-ups, CV PDF. Do not fabricate these.

## Product Principles

1. Credibility first: a recruiter should grasp role, seniority and impact within seconds.
2. Creativity as proof: art and music appear as evidence of craft and taste, framed in service of the product story.
3. Real over impressive: every claim, number and piece of work is real and attributable.
4. One clear next step: every visit should make reaching out effortless.
