import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Button className="btn-primary px-4 py-2 mb-8">Primary Button</Button>
      <Button className="btn-primary-outline px-4 py-2">Primary Button Outline</Button>
    </main>
  );
}
