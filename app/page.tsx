import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-start gap-8">
      <Hero />
      <Button className="btn-primary-outline px-4 py-2">
        Primary Button Outline
      </Button>
    </main>
  );
}
