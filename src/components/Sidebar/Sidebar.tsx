import { Checkbox } from "../UI/Input/Checkbox/Checkbox";
import { RangeSlider } from "../UI/Input/RangeSlider/RangeSlider";
import classes from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.section}>
        <h3 className={classes["section-title"]}>TYPE</h3>
        <div className={classes["checkbox-group"]}>
          <Checkbox label="Sport" />
          <Checkbox label="SUV" />
          <Checkbox label="MPV" />
          <Checkbox label="Sedan" />
          <Checkbox label="Coupe" />
          <Checkbox label="Hatchback" />
        </div>
      </div>
      <div className={classes.section}>
        <h3 className={classes["section-title"]}>CAPACITY</h3>
        <div className={classes["checkbox-group"]}>
          <Checkbox label="2 Person" />
          <Checkbox label="4 Person" />
          <Checkbox label="6 Person" />
          <Checkbox label="8 or More" />
        </div>
      </div>
      <div className={classes.section}>
        <h3 className={classes["section-title"]}>PRICE</h3>
        <RangeSlider />
        <p className={classes.price}>Max. $100.00 </p>
      </div>
    </aside>
  );
};

export { Sidebar, Sidebar as default };
