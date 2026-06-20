import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import FeaturedProjects from "@/sections/FeaturedProjects";
import ShowcaseSequence from "@/sections/ShowcaseSequence";
import Skills from "@/sections/Skills";
import About from "@/sections/About";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <FeaturedProjects />
      <ShowcaseSequence />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
