import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import { Projects } from "@/components/projects";
import Strategy from "@/components/strategy";

export default function Home() {
  return (
    <main className="flex flex-col items-start gap-8">
      <Hero />
      <About />
      <Projects />
      <Strategy />
      <Contact />
    </main>
  );
}
