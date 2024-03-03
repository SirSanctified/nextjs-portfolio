import About from "@/components/about";
import Hero from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-start gap-8">
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
