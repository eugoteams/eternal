/** @format */

import React, { useState } from "react";
import classes from "./SlokHeader.module.css";
import useDispatch from "@/hooks/use-Dispatch";
import DropDown from "../UI/DropDown/DropDown";
import { CHAPTERS_DROP_DOWN } from "@/model/const";
import Drawer from "../UI/Drawer/Drawer";
import { useRouter } from "next/router";
import Link from "next/link";

const SlokHeader = (props) => {
  const { chapterNavigated, sloks, setNavigation, chapters, sideNavVisible } =
    useDispatch();

  let container_drop_down = chapters.map((chapter, index) => {
    let verseCount = chapter["verses_count"];
    let chapterName = chapter["translation"];
    let chapterIndex = index + 1;
    return (
      <Link
        href={`/slokas/${chapterIndex}`}
        key={`${chapterName}_${index}`}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <p
          className={
            chapterName === chapterNavigated
              ? `${classes.dropdown_item} ${classes.dropdown_item_active}`
              : `${classes.dropdown_item} ${`${classes.item_hover}`}`
          }
          key={`${chapterName}_${index}`}
          onClick={(e) => {
            setOpen((prevState) => !prevState);
            setNavigation("chapter", chapterName);
            setNavigation("sloks", verseCount);
          }}
        >
          {chapterName}
        </p>
      </Link>
    );
  });
  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <span
          onClick={(e) => {
            setNavigation("navigationIsVisible", !sideNavVisible);
          }}
        >
          {chapterNavigated}
        </span>
        <span>{`sloks/${sloks}`}</span>
      </div>
    </React.Fragment>
  );
};

export default SlokHeader;
