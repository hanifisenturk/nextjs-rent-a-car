import { Checkbox } from "../Inputs/Checkbox/Checkbox";
import { RangeSlider } from "../Inputs/RangeSlider/RangeSlider";
import classes from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <h2 className="text-xs font-semibold text-secondary-300 mb-7">TYPE</h2>
      <div className="flex flex-col gap-8">
        <Checkbox label="Sport (10)" />
        <Checkbox label="Sport (10)" />
        <Checkbox label="Sport (10)" />
        <Checkbox label="Sport (10)" />
        <Checkbox label="Sport (10)" />
        <Checkbox label="Sport (10)" />
      </div>
      <h2 className="text-xs font-semibold text-secondary-300 mb-7 mt-14 tracking-[3px]">
        CAPACITY
      </h2>
      <div className="flex flex-col gap-8">
        <Checkbox label="Sport (10)" />
        <Checkbox label="Sport (10)" />
        <Checkbox label="Sport (10)" />
        <Checkbox label="Sport (10)" />
      </div>
      <h2 className="text-xs font-semibold text-secondary-300 mb-7 mt-14">
        PRICE
      </h2>

      <RangeSlider />
      <span className="inline-block mt-3 text-lg font-semibold text-secondary-400">
        Max. $100
      </span>
    </aside>
  );
};

export { Sidebar, Sidebar as default };
