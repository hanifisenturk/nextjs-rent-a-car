import { useId } from "react";
import classes from "./Checkbox.module.css";

type Props = {
  label: string;
};

const Checkbox = ({ label }: Props) => {
  const id = useId();
  return (
    <div className={classes.checkbox}>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export { Checkbox, Checkbox as default };
