/** @format */

import React from "react";
import classes from "./NavLinkComponent.module.css";
import Link from "next/link";

const NavLinkComponent = ({ breakPoint, onLinkClick }) => {
  let linkLabels = [
    {
      label: "home",
      path: "/",
    },
    {
      label: "chapters",
      path: "/chapters",
    },
    {
      label: "art",
      path: "/gallery",
    },
  ];
  return (
    <React.Fragment>
      <nav
        className={
          breakPoint === "md"
            ? `${classes.nav_container_item_responsive}`
            : `${classes.nav_container_item}`
        }
      >
        {linkLabels.map((link, _) => {
          return (
            <Link
              key={`${link["label"]}`}
              href={`${link["path"]}`}
              className={`${classes.nav_link}`}
              onClick={(e) => {
                console.log(onLinkClick);
                if (onLinkClick !== undefined) {
                  onLinkClick();
                }
              }}
            >
              {link["label"]}
            </Link>
          );
        })}
      </nav>
    </React.Fragment>
  );
};

export default NavLinkComponent;
