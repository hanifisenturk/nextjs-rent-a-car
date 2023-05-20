import { AdCard } from "@/components/AdCard/AdCard";
import { DateTracker } from "@/components/DateTracker/DateTracker";

export default function Home() {
  return (
    <main className="mt-8">
      <div className="flex items-center justify-between gap-8">
        <AdCard />
        <AdCard />
      </div>
      <div className="mt-8">
        <DateTracker />
      </div>
    </main>
  );
}
