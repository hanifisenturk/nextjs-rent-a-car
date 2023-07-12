import Image from "next/image";
import { Card } from "../UI/Card/Card";
import classes from "./CarCard.module.css";
import {
  HeartIcon,
  HeartOutlinedIcon,
  GasStationIcon,
  GearIcon,
  UserIcon,
} from "@/Icons/Index";
import { PrimaryButton } from "../UI/Button/PrimaryButton";

const CarCard = () => {
  return (
    <Card className="w-[15rem] lg:w-[19rem] bg-white rounded-[0.625rem] p-4 lg:p-6 snap-center">
      <div className={classes.header}>
        <div className={classes["car-title"]}>
          <h4>Nissan GT - R</h4>
          <span>Sport</span>
        </div>
        <button>
          <HeartOutlinedIcon />
        </button>
      </div>
      <div className={classes["image-container"]}>
        <Image src="/car-2.png" width={248} height={100} alt="car" />
        <div className={classes["fade-effect"]}></div>
      </div>
      <div className={classes["info"]}>
        <div className={classes["info-item"]}>
          <GasStationIcon />
          <span>80L</span>
        </div>
        <div className={classes["info-item"]}>
          <GearIcon />
          <span>Manual</span>
        </div>
        <div className={classes["info-item"]}>
          <UserIcon />
          <span>6 People</span>
        </div>
      </div>
      <div className={classes["price-container"]}>
        <div>
          <span className={classes["price"]}>$80.00/</span>
          <span className={classes["per-day"]}>day</span>
        </div>
        <PrimaryButton
          text="Rent Now"
          size="medium"
          className="ml-auto w-[6.25rem] lg:w-[7.25rem] h-[2.25rem] lg:!h-[2.75rem] !text-xs lg:text-sm flex items-center justify-center"
        />
      </div>
    </Card>
  );
};

export { CarCard, CarCard as default };
