import Link from "next/link";
import classes from "./Navbar.module.css";
import { SearchInput } from "../Inputs/SearchInput/SearchInput";
import { Avatar } from "../Avatar/Avatar";
import { HeartIcon, NotificationIcon, SettingsIcon } from "@/Icons/Index";
import { Logo } from "../Logo/Logo";
const Navbar = () => {
  return (
    <div className={classes.container}>
      <nav>
        <Logo />
        <SearchInput />
        <div className={classes.operations}>
          <Link href="/">
            <HeartIcon fill="#596780" />
          </Link>
          <Link href="/">
            <NotificationIcon />
          </Link>
          <Link href="/">
            <SettingsIcon />
          </Link>
          <button>
            <Avatar />
          </button>
        </div>
      </nav>
    </div>
  );
};

export { Navbar, Navbar as default };
