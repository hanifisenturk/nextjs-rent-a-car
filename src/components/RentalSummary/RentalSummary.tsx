import Image from "next/image";
import { Card } from "../UI/Card/Card";
import classes from "./RentalSummary.module.css";
import { Rate } from "../Rate/Rate";
import { TextInput } from "../UI/Input/Text/Text";

const RentalSummary = () => {
  return (
    <Card className="bg-white rounded-[0.625rem] p-6 basis-[30.75rem] sticky top-6 ">
      <h4 className={classes.title}>Rental Summary</h4>
      <p className={classes.description}>
        Prices may change depending on the length of the rental and the price of
        your rental car.
      </p>
      <div className={classes.product}>
        <Image
          src="/carPage.png"
          alt="Rental Summary"
          width={132}
          height={108}
          className="rounded-lg"
          style={{ objectFit: "cover" }}
        />
        <div>
          <h5 className={classes["product-name"]}>Nissan GT-R</h5>
          <div className={classes.rating}>
            <Rate />
            <p>440+ Reviewer</p>
          </div>
        </div>
      </div>
      <div className={classes.subtotal}>
        <p>Subtotal</p>
        <span>$80.00</span>
      </div>
      <div className={classes.tax}>
        <p>Tax</p>
        <span>$0</span>
      </div>

      <TextInput placeholder="Apply promo code" className="mt-6 mb-8" />
      <div className={classes["total-price"]}>
        <div>
          <p className="text-lg font-bold text-secondary-default mb-1">
            Total Rental Price
          </p>
          <p className="text-sm font-medium text-secondary-300">
            Overall price and includes rental discount
          </p>
        </div>
        <span className="font-bold text-2xl text-secondary-500">$80.00</span>
      </div>
    </Card>
  );
};

export { RentalSummary, RentalSummary as default };
