import classes from "./Text.module.css";
import cx from "classnames";

type Props = {
  className?: string;
  placeHolder?: string;
};

const TextInput = ({ className, placeHolder }: Props) => {
  return <input className={cx(classes.input, className)} type="text" />;
};

export { TextInput, TextInput as default };
