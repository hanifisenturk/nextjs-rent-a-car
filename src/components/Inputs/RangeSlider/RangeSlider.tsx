"use client";

import { useEffect, useState, useRef } from "react";

import classes from "./RangeSlider.module.css";

const RangeSlider = () => {
  const min = 30;
  const max = 100;
  const [sliderValue, setSliderValue] = useState(65);

  const calculatePercent = (value: number) => {
    return ((value - min) / (max - min)) * 100;
  };

  const sliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let percent = calculatePercent(sliderValue);
    slider?.style.setProperty("--thumb-percent", percent + "%");
  }, []);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.valueAsNumber;
    setSliderValue(newValue);

    const slider = e.target;
    let percent = calculatePercent(newValue);
    slider.style.setProperty("--thumb-percent", percent + "%");
  };

  return (
    <input
      ref={sliderRef}
      min={min}
      max={max}
      // @ts-ignore
      style={{ "--thumb-percent": `${calculatePercent(sliderValue)}%` }}
      className={classes.slider}
      type="range"
      value={sliderValue}
      onChange={handleSliderChange}
    />
  );
};

export { RangeSlider, RangeSlider as default };
