import cauldronShot from "@/assets/products/cauldron.webp";
import meridianShot from "@/assets/products/meridian.jpg";
import meridianWeeklyShot from "@/assets/products/meridian-weekly.webp";

// Products Karim designs and builds on his own, newest first.
export const products = [
  {
    slug: "meridian-weekly",
    name: "Meridian Weekly",
    kind: "WEB APP",
    cta: "OPEN THE TOOL",
    url: "https://meridian.karimabousleiman.com",
    domain: "meridian.karimabousleiman.com",
    description:
      "The web companion to the Meridian newsletter. Every Monday it lays out the week's five big stories and pairs each one with precedents: past situations like it, what happened next, how they ended, and how today is different, with the sources behind every story. Read it as a list or on a globe, then close the tab.",
    role: "I designed it and built it, and I review every precedent before it is published.",
    image: { src: meridianWeeklyShot, width: 1440, height: 960, alt: "Meridian Weekly for the week of 1 to 7 October 2026: the headline “Five stories this week. Some are heavy. We'll take them one at a time.” above the first two story cards, on the Hormuz shutdown and on Russia targeting Kyiv's bridges, each with a pictogram and a line on how similar situations went before" },
  },
  {
    slug: "cauldron",
    name: "Cauldron Who's Who",
    kind: "WEB APP",
    cta: "OPEN THE TOOL",
    url: "https://cauldron.karimabousleiman.com",
    domain: "cauldron.karimabousleiman.com",
    book: "The Cauldron: The Making of the Modern Middle East",
    description:
      "Look up any person, movement, place or year as you read, see who appears in your chapter, and follow on a map who ruled where, from 1299 to today.",
    role: "I designed it and built it with Claude Code.",
    image: { src: cauldronShot, width: 2000, height: 1161, alt: "Cauldron Who's Who: a chapter panel listing the people and places in “British Conquest”, beside a map of the Middle East in 1911 coloured by who ruled each territory, above a timeline from 1300 to 2020" },
  },
  {
    slug: "meridian",
    name: "Meridian",
    kind: "WEEKLY NEWSLETTER",
    cta: "READ MERIDIAN",
    url: "https://readmeridian.substack.com",
    domain: "readmeridian.substack.com",
    description:
      "World news makes people more anxious than the news itself requires. Meridian covers five stories a week in eight calm minutes: for each one, the context the headline skips, what was claimed against what held up, what is settled versus disputed, and what nobody knows yet.",
    role: "I created it.",
    image: { src: meridianShot, width: 2000, height: 1000, alt: "The Meridian logo, a calm robot face on a slate-blue panel, beside the wordmark “Meridian” and the line “Five stories · Zero panic attacks · (Results may vary)”" },
  },
];
