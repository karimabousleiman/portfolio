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

- Routes: `/` (home), `/experience` (nav label "Experience"), `/music`, `/visual-arts` (nav label "Visual Arts"), `/about`, plus `/prototype` (old design-direction explorer, lazy-loaded, not linked).
- Domain: https://karimabousleiman.com
- Contact paths: LinkedIn and email (mailto plus a copy-email button). No forms. Every page ends on the same contact band.
- Visitors are typically on desktop between tasks or on mobile from a LinkedIn tap.

## Capabilities and Constraints

- Existing stack: Vite, React, TypeScript, Tailwind, shadcn/ui, react-router single-page app.
- Experience page lists each company (logo, one-line description) and the roles held there, with outcome-first bullets. Home shows one headline result per company.
- Music section links to releases on Spotify, Apple Music, YouTube Music and Deezer.
- Visual Arts page shows nine self-hosted photographs in a lightbox gallery, plus a film embed and the IMDb link.
- Production design is the dark editorial direction (see DESIGN.md); the `/prototype` explorer is historical.

## Brand Commitments

- Name: Karim Abousleiman. Role line: "Senior Product Manager · Music Composer · Paris". Music is released as kimbü.
- Only real work: show only real releases, projects, roles and metrics. Never placeholder work, invented clients, testimonials or claims.

## Evidence on Hand

- Career (in `src/components/ExperienceSection.tsx`):
  - Senior Product Manager, TF1+ (Mar 2025 – present): +12% first-session watch rate (headline); replaced revenue-only reporting with product-health metrics for TF1+ leadership; moved the team to a product-led model.
  - Group Product Manager, Garantme (Jan 2022 – Mar 2025; Product Manager there Jan 2021 – Jan 2022): €200k/year upsell revenue (headline); managed 4 PMs and led an 11-person squad; +26% user acquisition via onboarding redesign (label unconfirmed); +8% site conversion; launched the core SaaS to 10k daily users in 6 months.
  - Product Manager, Myki (Apr 2017 – Jul 2020): +29% retention (headline; period unconfirmed); helped grow to 1M+ daily users in under 2 years with 12 engineers.
  - Removed as vanity or undefined: "+17% user engagement", "+39% QoQ positive reviews".
- Music releases (in `src/components/MusicSection.tsx`): including "Prelude to Freedom", "Bittersweet Relief", "Curse of Knowledge", "Soul Swap", "Kayafet Part II", "Je t'offre", "Honey Tea", "12.1.08", "1989a".
- Visual projects (in `src/components/VisualArtsSection.tsx`): "Look, The Sun Is Leaving Us...", "On My Way.", "Under Beirut's Sky.", "Chaotic Vision", "Prince From The Biomass.", "Whatever Works In Venice."
- Photo: `src/assets/portrait.webp` (Karim playing guitar; used on Music and About).
- Press (real, linked): Myki named PCMag Editors' Choice in 2018 (https://www.pcmag.com/reviews/myki), during Karim's tenure. Myki launched at TechCrunch Disrupt SF in 2016 (https://techcrunch.com/2016/09/13/myki-rolls-out-a-password-manager-that-locks-all-your-info-away-on-your-phone/), before he joined: credit the company, not Karim.
- Background: cinema, then QA, then product. 10+ instruments. Native French, English and Arabic; intermediate Italian.
- Absent: testimonials, client logos, case-study write-ups, CV PDF. Do not fabricate these.

## Product Principles

1. Credibility first: a recruiter should grasp role, seniority and impact within seconds.
2. Creativity as proof: art and music appear as evidence of craft and taste, framed in service of the product story.
3. Real over impressive: every claim, number and piece of work is real and attributable.
4. One clear next step: every visit should make reaching out effortless.
