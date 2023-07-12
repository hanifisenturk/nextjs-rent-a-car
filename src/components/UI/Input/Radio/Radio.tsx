import classes from "./Radio.module.css";

type Props = {
  label: string;
};

const Radio = ({ label }: Props) => {
  return (
    <div className="flex items-center">
      <input
        className={classes.radio}
        type="radio"
        name="paymentType"
        id="creditCard"
        value={"creditCard"}
      />
      <label
        htmlFor="creditCard"
        className="pl-2 font-semibold w-full cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};

export { Radio, Radio as default };
