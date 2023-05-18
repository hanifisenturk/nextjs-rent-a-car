import { AdCard } from "@/components/AdCard/AdCard";

export default function Home() {
  return (
    <main className="mt-8">
      <div className="flex items-center justify-between gap-8">
        <AdCard />
        <AdCard />
      </div>
    </main>
  );
}
