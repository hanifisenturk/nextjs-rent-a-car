import { useId } from "react";
import classes from "./Text.module.css";
import cx from "classnames";

type Props = {
  className?: string;
  placeholder?: string;
  label: string;
};

const TextInput = ({ className, placeholder, label }: Props) => {
  const id = useId();

  return (
    <>
      <label
        className="text-sm lg:text-base mb-2 block font-semibold text-secondary-default"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        className={cx(classes.input, className)}
        type="text"
      />
    </>
  );
};

export { TextInput, TextInput as default };
