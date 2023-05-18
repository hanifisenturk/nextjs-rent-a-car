import Image from "next/image";
import classes from "./Avatar.module.css";

const Avatar = () => {
  return (
    <Image
      src="/profile.png"
      width={44}
      height={44}
      alt="Profile"
      className={classes.avatar}
    />
  );
};

export { Avatar, Avatar as default };
