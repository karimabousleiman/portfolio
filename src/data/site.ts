import tf1Logo from "@/assets/work/tf1plus-logo.svg";
import garantmeLogo from "@/assets/work/garantme-logo.svg";
import mykiLogo from "@/assets/work/myki-logo.png";
import cauldronShot from "@/assets/products/cauldron.webp";
import meridianShot from "@/assets/products/meridian.jpg";
import spotifyLogo from "@/assets/spotify-logo.svg";
import appleMusicLogo from "@/assets/apple-music-logo.svg";
import ytMusicLogo from "@/assets/youtube-music-logo.svg";
import deezerLogo from "@/assets/deezer-logo.svg";
import untitled01 from "@/assets/photos/untitled-01.webp";
import untitled02 from "@/assets/photos/untitled-02.webp";
import lookTheSun from "@/assets/photos/look-the-sun-is-leaving-us.webp";
import onMyWay from "@/assets/photos/on-my-way.webp";
import underBeirut from "@/assets/photos/under-beiruts-sky.webp";
import chaoticVision from "@/assets/photos/chaotic-vision.webp";
import princeBiomass from "@/assets/photos/prince-from-the-biomass.webp";
import venice from "@/assets/photos/whatever-works-in-venice.webp";
import d120108 from "@/assets/photos/12-1-08.webp";

export const EMAIL = "abousleiman70@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/karim-abousleiman";
export const IMDB = "https://www.imdb.com/title/tt11426640/";
export const FILM = "https://www.youtube.com/embed/Ntqdo39yhVQ";

export type Scene = "home" | "tf1" | "garantme" | "myki";

export interface Chapter {
  slug: string;
  name: string;
  logo: string;
  logoHeight: number;
  role: string;
  when: string;
  where: string;
  years: string;
  about: string;
  scene: Scene;
  /** The headline result: big number on the orange card. */
  result: { label: string; figure: string; text: string };
  /** Myki's second headline card. */
  second?: { label: string; figure: string; text: string };
  extras?: { figure: string; text: string }[];
  rows?: { label: string; text: string }[];
  roles?: { years: string; title: string; points: string[] }[];
  press?: { tag: string; during: boolean; title: string; source: string; url: string }[];
}

// Outcome-first, the same facts as the previous site. Mission and vision lines are left out until confirmed.
export const chapters: Chapter[] = [
  {
    slug: "tf1",
    name: "TF1+",
    logo: tf1Logo,
    logoHeight: 28,
    role: "Senior Product Manager",
    when: "Mar 2025 – Present",
    where: "Boulogne-Billancourt, France",
    years: "2025 — now",
    about: "The TF1 group's free streaming platform: live channels, replay and a catalogue of films and series.",
    scene: "tf1",
    result: {
      label: "First-session watch rate",
      figure: "+12 pts",
      text: "Raised first-session watch rate by 12 points in the first 30 days, by redesigning the first journey so new viewers reach a programme in fewer steps.",
    },
    rows: [
      { label: "Metrics", text: "Replaced revenue-only reporting with product-health metrics, which focused the roadmap on clearer priorities." },
      { label: "Team", text: "Part of a 35-person team, working with it on a product-led model built on discovery and cross-functional squads." },
    ],
  },
  {
    slug: "garantme",
    name: "Garantme",
    logo: garantmeLogo,
    logoHeight: 26,
    role: "Product Manager → Group Product Manager",
    when: "Jan 2021 – Mar 2025",
    where: "Paris, France",
    years: "2021 — 2025",
    about: "Rent-guarantee insurance plus a SaaS platform that estate agencies use to verify and manage tenant applications.",
    scene: "garantme",
    result: { label: "Upsell revenue a year", figure: "€200k", text: "Created an upsell offer that brought in €200k a year in new revenue." },
    extras: [
      { figure: "+26%", text: "Sign-ups and activation, after I redesigned onboarding." },
      { figure: "10k", text: "Daily users on the new agency SaaS, six months after launch." },
    ],
    roles: [
      {
        years: "2022 — 2025",
        title: "Group Product Manager",
        points: [
          "Managed 4 PMs and led an 11-person squad of engineers, designers and QA.",
          "Introduced a discovery framework that starts every feature from its why, making the team user-centric.",
        ],
      },
      {
        years: "2021 — 2022",
        title: "Product Manager",
        points: [
          "Launched the agency SaaS and grew it to 10k daily users in six months.",
        ],
      },
    ],
  },
  {
    slug: "myki",
    name: "MYKI",
    logo: mykiLogo,
    logoHeight: 36,
    role: "Product Manager",
    when: "Apr 2017 – Jul 2020",
    where: "Beirut, Lebanon",
    years: "2017 — 2020",
    about: "A password manager and authenticator that kept credentials on the user's devices instead of the cloud. Acquired by JumpCloud in 2022.",
    scene: "myki",
    result: { label: "90-day retention", figure: "+29%", text: "Lifted 90-day retention 29% by rebuilding onboarding around usage data." },
    second: { label: "Daily users, in under two years", figure: "1M+", text: "I was the product manager for a team of 12 engineers." },
    rows: [
      { label: "Delivery", text: "As MYKI's first product manager, set up how the team shipped, from planning to stand-ups." },
      { label: "Support", text: "Started customer support and turned it into a feedback loop that shaped the onboarding rebuild behind +29% retention." },
    ],
    // Myki launched at TechCrunch Disrupt in 2016, before Karim joined: credited to the company.
    press: [
      { tag: "2018 · during my time", during: true, title: "PCMag Editors' Choice", source: "PCMag review of MYKI", url: "https://www.pcmag.com/reviews/myki" },
      { tag: "2016 · before I joined", during: false, title: "Launched at TechCrunch Disrupt SF", source: "TechCrunch, Sep 2016", url: "https://techcrunch.com/2016/09/13/myki-rolls-out-a-password-manager-that-locks-all-your-info-away-on-your-phone/" },
    ],
  },
];

export const products = [
  {
    slug: "cauldron",
    name: "Cauldron Who's Who",
    kind: "Web app",
    cta: "Open the tool",
    url: "https://cauldron.karimabousleiman.com",
    domain: "cauldron.karimabousleiman.com",
    book: "The Cauldron: The Making of the Modern Middle East",
    description: "Look up any person, movement, place or year as you read, see who appears in your chapter, and follow on a map who ruled where, from 1299 to today.",
    role: "I designed it and built it with Claude Code.",
    image: { src: cauldronShot, width: 2000, height: 1161, alt: "Cauldron Who's Who: a chapter panel listing the people and places in “British Conquest”, beside a map of the Middle East in 1911 coloured by who ruled each territory, above a timeline from 1300 to 2020" },
  },
  {
    slug: "meridian",
    name: "Meridian",
    kind: "Weekly newsletter",
    cta: "Read Meridian",
    url: "https://readmeridian.substack.com",
    domain: "readmeridian.substack.com",
    book: null,
    description: "World news makes people more anxious than the news itself requires. Meridian covers five stories a week in eight calm minutes: for each one, the context the headline skips, what was claimed against what held up, what is settled versus disputed, and what nobody knows yet.",
    role: "I created it and write every issue.",
    image: { src: meridianShot, width: 2000, height: 1000, alt: "The Meridian logo, a calm robot face on a slate-blue panel, beside the wordmark “Meridian” and the line “Five stories · Zero panic attacks · (Results may vary)”" },
  },
];

export const tracks = [
  { title: "1989", url: "https://soundcloud.com/karim-abousleiman/1989a" },
  { title: "Prelude to Freedom", url: "https://soundcloud.com/karim-abousleiman/prelude-to-freedom" },
  { title: "Bittersweet Relief", url: "https://soundcloud.com/karim-abousleiman/bittersweet-relief" },
  { title: "Curse of Knowledge", url: "https://soundcloud.com/karim-abousleiman/curse-of-knowledge" },
  { title: "Soul Swap", url: "https://soundcloud.com/karim-abousleiman/soul-swap" },
  { title: "Kayafet Part II", url: "https://soundcloud.com/karim-abousleiman/kayafet-part-ii" },
  { title: "Je t'offre", url: "https://soundcloud.com/karim-abousleiman/je-toffre" },
  { title: "Honey Tea", url: "https://soundcloud.com/karim-abousleiman/honey-tea" },
];

export const streamingServices = [
  { name: "Spotify", url: "https://open.spotify.com/artist/0Imw18A2tidYlTFiVFLgBG", logo: spotifyLogo },
  { name: "Apple Music", url: "https://music.apple.com/us/artist/kimb%C3%BC/1596942904", logo: appleMusicLogo },
  { name: "YouTube Music", url: "https://music.youtube.com/channel/UCOxgVKMtQRnLqTLpcZTbSww", logo: ytMusicLogo },
  { name: "Deezer", url: "https://www.deezer.com/us/artist/152271282", logo: deezerLogo },
];

/** Gallery in display order; `span` and `ratio` drive the mosaic, `stack` pairs the last two in one column. */
export const photos = [
  { title: "Look, The Sun Is Leaving Us", src: lookTheSun, width: 840, height: 556, span: 6, ratio: "21 / 9", alt: "A hooded figure in silhouette at a railing, watching the sun set over the sea" },
  { title: "Whatever Works In Venice", src: venice, width: 824, height: 614, span: 3, ratio: "3 / 2", alt: "Gondolas and moored boats along Venice's Grand Canal in saturated colour" },
  { title: "Under Beirut's Sky", src: underBeirut, width: 824, height: 549, span: 3, ratio: "3 / 2", alt: "Golden sunset clouds over the sea and the dark Beirut coastline" },
  { title: "Prince From The Biomass", src: princeBiomass, width: 824, height: 545, span: 2, ratio: "4 / 5", alt: "A figure with outstretched arms in silhouette against a glowing pink and violet sky" },
  { title: "On My Way", src: onMyWay, width: 838, height: 556, span: 2, ratio: "4 / 5", alt: "A small aeroplane crossing an orange sunset reflected on the water" },
  { title: "Chaotic Vision", src: chaoticVision, width: 812, height: 537, span: 2, ratio: "4 / 5", alt: "A misty golden sunset over a shoreline and still water" },
  { title: "12.1.08", src: d120108, width: 824, height: 614, span: 4, ratio: "16 / 9", alt: "Colourful lakeside hotels lit at dusk, reflected in dark water" },
  { title: "Untitled", src: untitled01, width: 999, height: 664, span: 2, ratio: "", alt: "Long-exposure light trails in pink, yellow and green curving through darkness" },
  { title: "Untitled", src: untitled02, width: 950, height: 631, span: 2, ratio: "", alt: "Red and yellow light trails sweeping across a black frame" },
];

export const languages = [
  { name: "French", level: "Native" },
  { name: "English", level: "Native" },
  { name: "Arabic", level: "Native" },
  { name: "Italian", level: "Intermediate" },
];
