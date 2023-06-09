"use client";
import { useRef } from "react";
import { Card } from "../../UI/Card/Card";
import { ButtonWithOnlyIcon } from "../../UI/Button/PrimaryButton";
import { SwapIcon, ArrowDownIcon } from "@/Icons/Index";
import classes from "./DateTracker.module.css";
import { LocationModal } from "../LocationModal/LocationModal";
import { TimeModal } from "../TimeModal/TimeModal";

const DateTracker = () => {
  const locationModalRef = useRef<HTMLDialogElement>(null);
  const TimeModalRef = useRef<HTMLDialogElement>(null);
  const DateModalRef = useRef<HTMLDialogElement>(null);

  return (
    <div className="flex items-center gap-[43px] relative ">
      <LocationModal ref={locationModalRef} />
      <Card className="rounded-[0.625rem] bg-white p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className={classes["circle-1"]}></span>
          <span className="text-base font-semibold">Pick Up</span>
        </div>
        <div className="flex items-center divide-x-[1.5px]">
          <div className="pr-6">
            <label htmlFor="" className="font-bold text-base mb-2 block">
              Locations
            </label>
            <button
              onClick={() => locationModalRef.current?.show()}
              className="text-xs font-medium text-secondary-300 flex items-center gap-2 text-left"
            >
              <span className="w-[6.5rem]">Select your city</span>
              <ArrowDownIcon />
            </button>
          </div>
          <div className="px-6">
            <label htmlFor="" className="font-bold text-base mb-2 block">
              Date
            </label>
            <button className="text-xs font-medium text-secondary-300 flex items-center gap-2 text-left">
              <span className="w-[6.5rem]">Select your date</span>
              <ArrowDownIcon />
            </button>
          </div>
          <div className="pl-6">
            <label htmlFor="" className="font-bold text-base mb-2 block">
              Time
            </label>
            <button className="text-xs font-medium text-secondary-300 flex items-center gap-2 text-left">
              <span className="w-[6.5rem]">Select your time</span>
              <ArrowDownIcon />
            </button>
          </div>
        </div>
      </Card>
      <ButtonWithOnlyIcon
        icon={<SwapIcon />}
        size="large"
        className="bg-white text-secondary-300 !rounded-[0.625rem] !p-[1.125rem] absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2"
      />
      <Card className="rounded-[0.625rem] bg-white p-6 basis-1/2">
        <div className="flex items-center gap-2 mb-4">
          <span className={classes["circle-2"]}></span>
          <span className="text-base font-semibold">Drop-Off</span>
        </div>
        <div className="flex items-center divide-x-[1.5px]">
          <div className="pr-6">
            <label htmlFor="" className="font-bold text-base mb-2 block">
              Locations
            </label>
            <button className="text-xs font-medium text-secondary-300 flex items-center gap-2 text-left">
              <span className="w-[6.5rem]">Select your city</span>
              <ArrowDownIcon />
            </button>
          </div>
          <div className="px-6">
            <label htmlFor="" className="font-bold text-base mb-2 block">
              Date
            </label>
            <button className="text-xs font-medium text-secondary-300 flex items-center gap-2 text-left">
              <span className="w-[6.5rem]">Select your date</span>
              <ArrowDownIcon />
            </button>
          </div>
          <div className="pl-6">
            <label htmlFor="" className="font-bold text-base mb-2 block">
              Time
            </label>
            <button className="text-xs font-medium text-secondary-300 flex items-center gap-2 text-left">
              <span className="w-[6.5rem]">Select your time</span>
              <ArrowDownIcon />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export { DateTracker, DateTracker as default };
