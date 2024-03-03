import About from "@/components/about";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex flex-col items-start gap-8">
      <Hero />
      <About />
    </main>
  );
}
