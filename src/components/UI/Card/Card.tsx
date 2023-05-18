import classes from "./Card.module.css";
import cx from "classnames";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return <div className={cx(classes.card, className)}>{children}</div>;
};

export { Card, Card as default };
