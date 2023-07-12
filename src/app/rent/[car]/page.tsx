import { CarDetail } from "@/components/CarDetail/CarDetail";
import { CarPhoto } from "@/components/CarPhoto/CarPhoto";
import { Reviews } from "@/components/Reviews/Reviews";

export default function CarPage({ params }: { params: { car: string } }) {
  const { car } = params;

  return (
    <>
      <div className="flex flex-col lg:flex-row items-start gap-8 py-8 w-full ">
        <CarPhoto />
        <CarDetail />
      </div>
      <Reviews />
    </>
  );
}
