import classes from "./PrimaryButton.module.css";
import cx from "classnames";

type Props = {
  text: string;
  className?: string;
  size: "small" | "medium" | "large";
  disabled?: boolean;
};

const sizeGenerator = (size: Props["size"]) => {
  switch (size) {
    case "small":
      return classes.small;
    case "medium":
      return classes.medium;
    case "large":
      return classes.large;
    default:
      return classes.small;
  }
};

const PrimaryButton = ({ text, className, size, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      className={cx(classes.primary, className, sizeGenerator(size))}
    >
      {text}
    </button>
  );
};

export { PrimaryButton, PrimaryButton as default };
