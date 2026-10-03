import cauldronShot from "@/assets/products/cauldron.webp";

// Products Karim designs and builds on his own, newest first.
export const products = [
  {
    slug: "cauldron",
    name: "Cauldron Who's Who",
    kind: "WEB APP",
    url: "https://cauldron.karimabousleiman.com",
    domain: "cauldron.karimabousleiman.com",
    book: "The Cauldron: The Making of the Modern Middle East",
    description:
      "Look up any person, movement, place or year as you read, see who appears in your chapter, and follow on a map who ruled where, from 1299 to today.",
    role: "I designed it and built it with Claude Code.",
    image: { src: cauldronShot, width: 2000, height: 1161, alt: "Cauldron Who's Who: a chapter panel listing the people and places in “British Conquest”, beside a map of the Middle East in 1911 coloured by who ruled each territory, above a timeline from 1300 to 2020" },
  },
];
