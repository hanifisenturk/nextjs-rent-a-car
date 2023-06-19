import { CarDetail } from "@/components/CarDetail/CarDetail";
import { CarPhoto } from "@/components/CarPhoto/CarPhoto";
import { Reviews } from "@/components/Reviews/Reviews";

export default function CarPage({ params }: { params: { car: string } }) {
  const { car } = params;

  return (
    <>
      <div className="flex items-start gap-8 py-8 ">
        <CarPhoto />
        <CarDetail />
      </div>
      <Reviews />
    </>
  );
}
