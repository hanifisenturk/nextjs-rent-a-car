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
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 lg:items-center w-full lg:w-auto order-2 lg:order-1">
          <Logo />
          <SearchInput />
        </div>
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
          <button className="flex-none">
            <Avatar />
          </button>
        </div>
      </nav>
    </div>
  );
};

export { Navbar, Navbar as default };
