import classes from "./RangeSlider.module.css";

const RangeSlider = () => {
  return <input className={classes.slider} type="range" />;
};

export { RangeSlider, RangeSlider as default };
