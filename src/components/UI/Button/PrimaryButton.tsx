import classes from "./PrimaryButton.module.css";
import cx from "classnames";

type GeneralProps = {
  className?: string;
  size: "small" | "medium" | "large";
  disabled?: boolean;
};

type PrimaryButtonProps = {
  text: string;
} & GeneralProps;

type ButtonWithOnlyIconProps = {
  icon: React.ReactNode;
} & GeneralProps;

const sizeGenerator = (size: GeneralProps["size"]) => {
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

const PrimaryButton = ({
  text,
  className,
  size,
  disabled,
}: PrimaryButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={cx(classes.primary, className, sizeGenerator(size))}
    >
      {text}
    </button>
  );
};

const ButtonWithOnlyIcon = ({
  icon,
  className,
  size,
  disabled,
}: ButtonWithOnlyIconProps) => {
  return (
    <button
      disabled={disabled}
      className={cx(classes.primary, className, sizeGenerator(size))}
    >
      {icon}
    </button>
  );
};

export { PrimaryButton, ButtonWithOnlyIcon };
