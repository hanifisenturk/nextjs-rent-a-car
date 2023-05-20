import Link from "next/link";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <Link href="/" className={classes.logo}>
      MORENT
    </Link>
  );
};

export { Logo, Logo as default };
