export const NAV_LINKS = [
  { label: "Work", jp: "作品", href: "#projects" },
  { label: "Showcase", jp: "展示", href: "#showcase" },
  { label: "Skills", jp: "技術", href: "#skills" },
  { label: "About", jp: "経歴", href: "#about" },
  { label: "Contact", jp: "連絡", href: "#contact" },
];

export type Project = {
  id: string;
  jp: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  gradient: string;
};

export const PROJECTS: Project[] = [
  {
    id: "01",
    jp: "疾走",
    title: "XSR Showcase",
    category: "Product Film / Web Experience",
    image: "/images/xsr-showcase.png",
    description:
      "A high-octane digital showcase built around a retro-modern motorcycle silhouette — full-bleed motion, chrome-dark gradients, and scroll-timed reveals engineered to feel like a throttle being opened.",
    tags: ["Web Design", "Motion", "WebGL"],
    gradient: "linear-gradient(160deg, #15140f 0%, #38362c 55%, #5d5a48 100%)",
  },
  {
    id: "02",
    jp: "暗影",
    title: "Batman Reveal",
    category: "Title Sequence / Brand Film",
    image: "/images/batman-reveal.png",
    description:
      "A cinematic title-card concept built in shadow and silhouette — typography that emerges from black the way a figure does from the night, timed frame-by-frame to a score.",
    tags: ["Title Design", "After Effects", "Sound Design"],
    gradient: "linear-gradient(160deg, #0c0b09 0%, #221f18 60%, #3c3a31 100%)",
  },
  {
    id: "03",
    jp: "教本",
    title: "Student's Canva Handbook",
    category: "Editorial / Design System",
    image: "/images/canva-handbook.png",
    description:
      "A teaching resource turned design object — a ruled-grid handbook that demystifies Canva for first-time student designers, built with the same rigor as a print manual.",
    tags: ["Editorial Design", "Education", "Layout System"],
    gradient: "linear-gradient(160deg, #2a2820 0%, #4d4a3c 55%, #847f68 100%)",
  },
  {
    id: "04",
    jp: "詩集",
    title: "Japanese Poster Collection",
    category: "Poster Series",
    image: "/images/japanese-posters.png",
    description:
      "A set of minimal posters built on the grammar of Japanese editorial design — vertical type, generous negative space, and a single gesture of red ink against the page.",
    tags: ["Poster Design", "Typography", "Print"],
    gradient: "linear-gradient(160deg, #18170f 0%, #46422f 50%, #76705a 100%)",
  },
];

export const SHOWCASE_ITEMS = [
{ id: "i01", jp: "疾走", label: "XSR Showcase" },
{ id: "i02", jp: "暗影", label: "Batman Reveal" },
{ id: "i03", jp: "教本", label: "Student's Canva Handbook" },
{ id: "i04", jp: "詩集", label: "Japanese Poster Collection" },
{ id: "i05", jp: "創造", label: "Portfolio V2" },
];


export const SKILLS = [
  "Canva",
  "Three.js",
  "GSAP",
  "Figma",
  "Procreate",
  "React",
  "Next.js",
  "Framer Motion",
  "Motion Design",
  "Art Direction",
  "Graphic Design",
  "Typography",
  "WebGL",
  "Tailwind CSS",
  "UI Engineering",
];

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/shardul.5.7.5" },
  { label: "GitHub", href: "https://github.com/Shardul844" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shardul-lad-7b9068347" },
  { label: "Email", href: "mailto:ladshardul575@gmail.com" },
];

export const INTRO_PARAGRAPH =
  "Every interface is a small act of storytelling. I work at the line where editorial design meets motion — building pages that move the way a well-cut film moves, frame by frame, with intention behind every cut. This is the practice of Shardul Lad: design that reads like narrative, and code that holds it together.";
