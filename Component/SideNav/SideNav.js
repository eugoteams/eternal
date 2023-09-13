/** @format */

import React from "react";
import Link from "next/link";
import classes from "./SideNav.module.css";
import useDispatch from "@/hooks/use-Dispatch";
import { CHAPTERS_MENU } from "@/model/const";
import Drawer from "../UI/Drawer/Drawer";

const SideNav = (props) => {
  const {
    chapterNavigated,
    sloks,
    setNavigation,
    sideNavVisible,
    setNavigation_1,
    chapterNavigated_1,
    sloks_1,
    sloakHeaderMenu,
  } = useDispatch();

  let container_drop_down = CHAPTERS_MENU.map((chapter, index) => {
    const { label, value, verses } = chapter;
    let chapterIndex = index + 1;
    return (
      <Link
        href={`/slokas/${chapterIndex}`}
        key={`${value}_${index}`}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <div
          className={
            value === chapterNavigated_1
              ? `${classes.dropdown_item} ${classes.dropdown_item_active}`
              : `${classes.dropdown_item} ${`${classes.item_hover}`}`
          }
          onClick={(e) => {
            // setOpen((prevState) => !prevState);
            setNavigation("chapter", value);
            setNavigation("sloks", verses);
            setNavigation_1("chapter", value);
            setNavigation_1("sloks", verses);
            setNavigation_1("startingVerse", 0);
            // setNavigation_1("openMenu", !sloakHeaderMenu);
          }}
        >
          <span>
            {chapterIndex / 10 < 1 ? `0${chapterIndex}` : chapterIndex}.
          </span>
          <span> {label}</span>
        </div>
      </Link>
    );
  });

  let verses = [...Array(sloks_1)].map((_, index) => {
    return (
      <p
        key={`nav_${index}`}
        className={
          1 === chapterNavigated
            ? `${classes.dropdown_item} ${classes.dropdown_item_active}`
            : `${classes.dropdown_item} ${`${classes.item_hover}`}`
        }
        onClick={(e) => {
          setNavigation_1("startingVerse", index + 1);
          // setNavigation_1("openMenu", !sloakHeaderMenu);
        }}
      >
        {index + 1}
      </p>
    );
  });

  return (
    <React.Fragment>
      <div className={`${classes.dropdown}`}>
        <div>{container_drop_down}</div>
        <div className={`${classes.verses}`}>{verses}</div>
      </div>
    </React.Fragment>
  );
};

export default SideNav;
