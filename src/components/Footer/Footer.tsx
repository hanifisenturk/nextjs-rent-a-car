import Link from "next/link";
import classes from "./Footer.module.css";
import { Logo } from "../Logo/Logo";

const links = [
  {
    mainTitle: "About",
    links: [
      {
        title: "How it Works?",
        href: "/",
      },
      {
        title: "Featured",
        href: "/",
      },
      {
        title: "Partnership",
        href: "/",
      },
      {
        title: "Bussiness Relation",
        href: "/",
      },
    ],
  },
  {
    mainTitle: "Community",
    links: [
      {
        title: "Events",
        href: "/",
      },
      {
        title: "Blog",
        href: "/",
      },
      {
        title: "Podcast",
        href: "/",
      },
      {
        title: "Invite a Friend",
        href: "/",
      },
    ],
  },
  {
    mainTitle: "Socials",
    links: [
      {
        title: "Discord",
        href: "/",
      },
      {
        title: "Instagram",
        href: "/",
      },
      {
        title: "Twitter",
        href: "/",
      },
      {
        title: "Facebook",
        href: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes["inner-container"]}>
          <div>
            <Logo />
            <p>
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>

          <div className={classes.links}>
            {links.map((link, index) => {
              return (
                <ul key={index}>
                  <li className={classes["main-title"]}>
                    <h3>{link.mainTitle}</h3>
                  </li>
                  {link.links.map((link, index) => {
                    return (
                      <li key={index}>
                        <Link className={classes.link} href="/">
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>

        <hr />
        <div className={classes.infos}>
          <span>©2022 MORENT. All rights reserved</span>
          <div>
            <Link href="/">Privacy & Policy</Link>
            <Link href="/">Terms & Conditon</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer, Footer as default };
