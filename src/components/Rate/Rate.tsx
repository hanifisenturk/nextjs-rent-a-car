import classes from "./Rate.module.css";
import { StarIcon } from "@/Icons/Index";

const Rate = () => {
  return (
    <div className={classes.container}>
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
    </div>
  );
};

export { Rate, Rate as default };
