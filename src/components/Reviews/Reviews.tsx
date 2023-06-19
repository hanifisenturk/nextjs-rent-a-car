import classes from "./Reviews.module.css";
import { Card } from "../UI/Card/Card";
import { Review } from "./Review";

import { ArrowDownIcon } from "@/Icons/Index";

const Reviews = () => {
  return (
    <Card className="p-6 bg-white mb-8">
      <div className={classes["review-header"]}>
        <h2 className="text-lg font-semibold">Reviews</h2>
        <span className={classes["review-count"]}>13</span>
      </div>
      <Review />
      <Review />
      <button className={classes["show-all"]}>
        Show All
        <ArrowDownIcon color="#90A3BF" />
      </button>
    </Card>
  );
};

export { Reviews, Reviews as default };
