"use client";
import { useRef } from "react";
import { Card } from "../UI/Card/Card";
import { ButtonWithOnlyIcon } from "../UI/Button/PrimaryButton";
import { SwapIcon, ArrowDownIcon } from "@/Icons/Index";
import classes from "./DateTracker.module.css";
import { LocationModal } from "./LocationModal/LocationModal";

const DateTracker = () => {
  const locationModalRef = useRef<HTMLDialogElement>(null);

  return (
    <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-[44px]">
      <LocationModal ref={locationModalRef} />
      <Card className="rounded-[0.625rem] bg-white p-4 lg:px-12 lg:py-6 w-full lg:max-w-[582px]">
        <div className="flex items-center gap-2 mb-4">
          <span className={classes["circle-1"]}></span>
          <span className="text-base font-semibold">Pick Up</span>
        </div>
        <div className="flex items-center divide-x-[1.5px]">
          <div className="pr-5 lg:pr-6">
            <label htmlFor="" className="font-bold text-base mb-2 block">
              Locations
            </label>
            <button
              onClick={() => locationModalRef.current?.show()}
              className="text-xs font-medium text-secondary-300 flex items-center gap-1 lg:gap-2 text-left"
            >
              <span className="lg:w-[6.5rem]">Select your city</span>
              <ArrowDownIcon />
            </button>
          </div>
          <div className="px-5 lg:px-6">
            <label htmlFor="" className="font-bold text-base mb-2 block">
              Date
            </label>
            <button className="text-xs font-medium text-secondary-300 flex items-center gap-1 lg:gap-2 text-left">
              <span className="lg:w-[6.5rem]">Select your date</span>
              <ArrowDownIcon />
            </button>
          </div>
          <div className="pl-5 lg:px-6">
            <label htmlFor="" className="font-bold text-base mb-2 block">
              Time
            </label>
            <button className="text-xs font-medium text-secondary-300 flex items-center gap-1 lg:gap-2 text-left">
              <span className="lg:w-[6.5rem]">Select your time</span>
              <ArrowDownIcon />
            </button>
          </div>
        </div>
      </Card>
      <ButtonWithOnlyIcon
        icon={<SwapIcon />}
        size="large"
        className="bg-white text-secondary-300 !rounded-[0.625rem] !p-[1.125rem] absolute top-1/2 -translate-y-1/2 lg:static"
      />
      <Card className="rounded-[0.625rem] bg-white p-4 lg:px-12 lg:py-6 w-full lg:max-w-[582px]">
        <div className="flex items-center gap-2 mb-4">
          <span className={classes["circle-2"]}></span>
          <span className="text-base font-semibold">Drop-Off</span>
        </div>
        <div className="flex items-center divide-x-[1.5px]">
          <div className="pr-5 lg:pr-6">
            <label htmlFor="" className="font-bold text-base mb-2 block">
              Locations
            </label>
            <button className="text-xs font-medium text-secondary-300 flex items-center gap-1 lg:gap-2 text-left">
              <span className="lg:w-[6.5rem]">Select your city</span>
              <ArrowDownIcon />
            </button>
          </div>
          <div className="px-5 lg:px-6">
            <label htmlFor="" className="font-bold text-base mb-2 block">
              Date
            </label>
            <button className="text-xs font-medium text-secondary-300 flex items-center gap-1 lg:gap-2 text-left">
              <span className="lg:w-[6.5rem]">Select your date</span>
              <ArrowDownIcon />
            </button>
          </div>
          <div className="pl-5 lg:px-6">
            <label htmlFor="" className="font-bold text-base mb-2 block">
              Time
            </label>
            <button className="text-xs font-medium text-secondary-300 flex items-center gap-1 lg:gap-2 text-left">
              <span className="lg:w-[6.5rem]">Select your time</span>
              <ArrowDownIcon />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export { DateTracker, DateTracker as default };
