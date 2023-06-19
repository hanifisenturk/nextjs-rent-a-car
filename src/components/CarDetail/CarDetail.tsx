import { HeartIcon } from "@/Icons/Index";
import classes from "./CarDetail.module.css";
import { PrimaryButton } from "../UI/Button/PrimaryButton";
import { Rate } from "../Rate/Rate";
import { Card } from "../UI/Card/Card";

const CarDetail = () => {
  return (
    <Card className={classes.container}>
      <div className={classes["title-container"]}>
        <div>
          <h1>Nissan GT-R</h1>
          <div className={classes["review-group"]}>
            <Rate />
            <span className={classes["reviewer-count"]}>440+ Reviewer</span>
          </div>
        </div>
        <button>
          <HeartIcon />
        </button>
      </div>
      <p className={classes.description}>
        NISMO has become the embodiment of Nissan&apos;s outstanding
        performance, inspired by the most unforgiving proving ground, the
        &quot;race track&quot;.
      </p>
      <div className={classes.features}>
        <div className={classes["feature-group"]}>
          <div className={classes.feature}>
            <span className={classes["feature-type"]}>Type Car</span>
            <span className={classes["feature-text"]}>Sport</span>
          </div>
          <div className={classes.feature}>
            <span className={classes["feature-type"]}>Capacity</span>
            <span className={classes["feature-text"]}>2 Person</span>
          </div>
        </div>
        <div className={classes["feature-group"]}>
          <div className={classes.feature}>
            <span className={classes["feature-type"]}>Steering</span>
            <span className={classes["feature-text"]}>Manual</span>
          </div>
          <div className={classes.feature}>
            <span className={classes["feature-type"]}>Gasoline</span>
            <span className={classes["feature-text"]}>70 L</span>
          </div>
        </div>
      </div>

      <div className={classes["price-container"]}>
        <div className={classes["price-group"]}>
          <span className={classes.price}>$80.00/</span>
          <span className={classes["price-type"]}>day</span>
          <div className={classes["old-price"]}>$100.00</div>
        </div>
        <PrimaryButton text="Rent Now" size="large" className="!px-8 !py-4" />
      </div>
    </Card>
  );
};

export { CarDetail, CarDetail as default };
