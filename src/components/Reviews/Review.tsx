import Image from "next/image";
import classes from "./Review.module.css";
import { Rate } from "../Rate/Rate";

const Review = () => {
  return (
    <div className={classes.container}>
      <Image src="/profile.png" width={56} height={56} alt="Profile" />
      <div className="w-full">
        <div className={classes["reviewer-header"]}>
          <div>
            <p className={classes["reviewer-name"]}>Alex Stanton</p>
            <p className={classes["reviewer-title"]}>CEO at Bukalapak</p>
          </div>
          <div>
            <time className={classes["review-date"]}>21 July 2022</time>
            <Rate />
          </div>
        </div>
        <p className={classes.review}>
          We are very happy with the service from the MORENT App. Morent has a
          low price and also a large variety of cars with good and comfortable
          facilities. In addition, the service provided by the officers is also
          very friendly and very polite.
        </p>
      </div>
    </div>
  );
};

export { Review, Review as default };
