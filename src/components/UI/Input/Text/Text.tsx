import classes from "./Text.module.css";
import cx from "classnames";

type Props = {
  className?: string;
  placeholder?: string;
};

const TextInput = ({ className, placeholder }: Props) => {
  return (
    <input
      placeholder={placeholder}
      className={cx(classes.input, className)}
      type="text"
    />
  );
};

export { TextInput, TextInput as default };
