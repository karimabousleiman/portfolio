import tf1Logo from "@/assets/work/tf1plus-logo.svg";
import garantmeLogo from "@/assets/work/garantme-logo.svg";
import mykiLogo from "@/assets/work/myki-logo.png";

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

// Each highlight leads with the outcome, then how. Activity without a result was cut.
export const jobs: Job[] = [
  {
    title: "Senior Product Manager",
    company: "TF1+",
    location: "Boulogne-Billancourt, France",
    period: "Mar 2025 – Present",
    highlights: [
      "Raised first-session watch rate 12% by redesigning the first journey and shortening the path to content.",
      "Replaced revenue-only reporting with product-health metrics for TF1+ leadership.",
      "Moved the team to a product-led model built on discovery and cross-functional squads.",
    ],
  },
  {
    title: "Group Product Manager",
    company: "Garantme",
    location: "Paris, France",
    period: "Jan 2022 – Mar 2025",
    highlights: [
      "Built an upsell revenue stream worth €200k a year.",
      "Grew user acquisition 26% by redesigning onboarding.",
      "Managed 4 PMs and led an 11-person squad of engineers, designers and QA.",
      "Introduced a discovery framework that made product discovery part of how the company works.",
    ],
  },
  {
    title: "Product Manager",
    company: "Garantme",
    location: "Paris, France",
    period: "Jan 2021 – Jan 2022",
    highlights: [
      "Launched the core SaaS product for estate agencies and grew it to 10k daily users in six months.",
      "Raised website conversion 8%.",
    ],
  },
  {
    title: "Product Manager",
    company: "Myki",
    location: "Beirut, Lebanon",
    period: "Apr 2017 – Jul 2020",
    highlights: [
      "Lifted retention 29% by rebuilding onboarding around usage data.",
      "Helped grow the product to 1M+ daily users in under two years, working with 12 engineers.",
      "Designed and ran the team's whole delivery process: sprints, planning, backlog grooming and stand-ups.",
      "Started the customer support function and used it as a continuous source of user feedback.",
    ],
  },
];

/** One headline result per company, used everywhere a role is summarised. */
export const results = [
  {
    company: "TF1+",
    role: "Senior Product Manager",
    years: "2025 — NOW",
    figure: "+12%",
    label: "first-session watch rate",
    scope: "Redesigned the first journey and shortened the path to content",
  },
  {
    company: "Garantme",
    role: "Product Manager → Group Product Manager",
    years: "2021 — 2025",
    figure: "€200k",
    label: "upsell revenue a year",
    scope: "Managed 4 PMs and led an 11-person squad",
  },
  {
    company: "Myki",
    role: "Product Manager",
    years: "2017 — 2020",
    figure: "+29%",
    label: "user retention",
    scope: "Helped grow to 1M+ daily users in under two years",
  },
];

/** What each product is, with its logo. */
export const companies: Record<string, { about: string; logo: string; logoHeight: string; size: [number, number] }> = {
  "TF1+": {
    about: "The TF1 group's free streaming platform: live channels, replay and a catalogue of films and series.",
    logo: tf1Logo,
    logoHeight: "h-5",
    size: [1663, 391],
  },
  Garantme: {
    about: "Rent-guarantee insurance plus a SaaS platform that estate agencies use to verify and manage tenant applications.",
    logo: garantmeLogo,
    logoHeight: "h-5",
    size: [348, 55],
  },
  Myki: {
    about: "A password manager and authenticator that kept credentials on the user's devices instead of the cloud. Launched at TechCrunch Disrupt SF in 2016, acquired by JumpCloud in 2022.",
    logo: mykiLogo,
    logoHeight: "h-6",
    size: [562, 152],
  },
};
