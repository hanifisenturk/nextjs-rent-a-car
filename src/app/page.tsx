"use client";
import { AdCard } from "@/components/AdCard/AdCard";
import { CarList } from "@/components/CarList/CarList";
import { DateTracker } from "@/components/DateTracker/DateTracker";

export default function Home() {
  return (
    <main className="max-w-[1360px] px-6 mx-auto mt-8">
      <div className="flex items-center justify-between gap-8">
        <AdCard />
        <div className="hidden lg:inline-block basis-1/2">
          <AdCard />
        </div>
      </div>
      <div className="mt-8 mb-9">
        <DateTracker />
      </div>
      <CarList />
    </main>
  );
}
