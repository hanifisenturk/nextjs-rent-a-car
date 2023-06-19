import { useId } from "react";
import classes from "./Checkbox.module.css";

type Props = {
  label: string;
  labelClassName?: string;
};

const Checkbox = ({ label, labelClassName }: Props) => {
  const id = useId();
  return (
    <div className={classes.checkbox}>
      <input type="checkbox" id={id} />
      <label className={labelClassName} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export { Checkbox, Checkbox as default };
