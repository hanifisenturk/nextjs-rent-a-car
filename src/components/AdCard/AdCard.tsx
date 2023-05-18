import { PrimaryButton } from "../UI/Button/PrimaryButton";
import { Card } from "../UI/Card/Card";
import classes from "./AdCard.module.css";

const AdCard = () => {
  return (
    <Card className={classes.container}>
      <h3 className={classes.title}>The best platform for Car Rental</h3>
      <p className={classes.description}>
        Ease of doing a car rental safely and reliably. Of course at a low
        price.
      </p>
      <PrimaryButton
        text="Rental Car"
        size="medium"
        className="mt-5 w-[120px] h-11"
      />
    </Card>
  );
};

export { AdCard, AdCard as default };
