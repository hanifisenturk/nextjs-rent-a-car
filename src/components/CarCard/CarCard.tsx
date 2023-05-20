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
    <Card className="max-w-[304px] bg-white rounded-[0.625rem] p-6">
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
          <span>90L</span>
        </div>
        <div className={classes["info-item"]}>
          <GearIcon />
          <span>Manual</span>
        </div>
        <div className={classes["info-item"]}>
          <UserIcon />
          <span>2 People</span>
        </div>
      </div>
      <div className={classes["price-container"]}>
        <span className={classes["price"]}>$99.00/</span>
        <span className={classes["per-day"]}>day</span>
        <PrimaryButton
          text="Rent Now"
          size="medium"
          className="ml-auto w-[7.25rem] !h-[2.75rem]"
        />
      </div>
    </Card>
  );
};

export { CarCard, CarCard as default };
