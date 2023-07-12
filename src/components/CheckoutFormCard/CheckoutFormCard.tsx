import classes from "./CheckoutFormCard.module.css";
import { TextInput } from "../UI/Input/Text/Text";
import { Card } from "../UI/Card/Card";

type Props = {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
  step: number;
};

const CheckoutFormCard = ({ children, title, subtitle, step }: Props) => {
  return (
    <Card className="bg-white p-6 rounded-[10px] mb-8 step">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="lg:text-lg font-bold text-secondary-default mb-1">
            {title}
          </p>
          <p className="text-xs lg:text-sm font-medium text-secondary-300">
            {subtitle}
          </p>
        </div>
        <p className="text-xs lg:text-sm font-medium text-secondary-300">
          Step {step} of 4
        </p>
      </div>
      {children}
    </Card>
  );
};

export { CheckoutFormCard, CheckoutFormCard as default };
