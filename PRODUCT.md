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

- Routes: `/` (home), `/experience`, `/visual-arts`, `/music`, `/about`, plus `/prototype` (design-direction explorer with five variants: Archive, Signal, Monolith, Bloom, Pulse).
- Contact paths: LinkedIn and email (mailto). No forms.
- Visitors are typically on desktop between tasks or on mobile from a LinkedIn tap.

## Capabilities and Constraints

- Existing stack: Vite, React, TypeScript, Tailwind, shadcn/ui, react-router single-page app.
- Experience section lists roles, companies, periods and quantified achievements.
- Music section links to releases on Spotify, Apple Music, YouTube Music and Deezer.
- Visual arts section links to external project pages.
- Open decision: which `/prototype` direction becomes the production design.

## Brand Commitments

- Name: Karim Abousleiman. Monogram "KA" used in the nav.
- Only real work: show only real releases, projects, roles and metrics. Never placeholder work, invented clients, testimonials or claims.

## Evidence on Hand

- Career (in `src/components/ExperienceSection.tsx`):
  - Senior Product Manager, TF1+ (Mar 2025 – present): +17% user engagement; +12% first-session watch rate; product-health metrics for leadership.
  - Group Product Manager, Garantme (Jan 2022 – Mar 2025; Product Manager there Jan 2021 – Jan 2022): led a squad of 11 and a team of 4 PMs; +26% user acquisition; €200k/year upsell revenue; +8% site conversion; core SaaS to 10k DAU in 6 months.
  - Product Manager, Myki (Apr 2017 – Jul 2020): 1M+ DAU in under 2 years; +29% retention; +39% QoQ positive reviews.
- Music releases (in `src/components/MusicSection.tsx`): including "Prelude to Freedom", "Bittersweet Relief", "Curse of Knowledge", "Soul Swap", "Kayafet Part II", "Je t'offre", "Honey Tea", "12.1.08", "1989a".
- Visual projects (in `src/components/VisualArtsSection.tsx`): "Look, The Sun Is Leaving Us...", "On My Way.", "Under Beirut's Sky.", "Chaotic Vision", "Prince From The Biomass.", "Whatever Works In Venice."
- Photo: `src/assets/about-photo.jpg` (Karim playing guitar).
- Absent: testimonials, press, client logos, case-study write-ups. Do not fabricate these.

## Product Principles

1. Credibility first: a recruiter should grasp role, seniority and impact within seconds.
2. Creativity as proof: art and music appear as evidence of craft and taste, framed in service of the product story.
3. Real over impressive: every claim, number and piece of work is real and attributable.
4. One clear next step: every visit should make reaching out effortless.
