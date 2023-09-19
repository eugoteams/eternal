/** @format */

import React from "react";
import Link from "next/link";
import styles from "./ContextMenu.module.css";
import useDispatch from "@/hooks/use-Dispatch";
import { CHAPTERS_MENU } from "@/model/const";

const ContextMenu = (props) => {
  const {
    chapterNavigated,
    sloks,
    sloakHeaderMenu,
    setNavigation,
    startingVerse,
  } = useDispatch();

  let container_drop_down = CHAPTERS_MENU.map((chapter, index) => {
    const { label, value, verses } = chapter;
    let chapterIndex = index + 1;
    return (
      <Link
        href={`/chapter/${chapterIndex}`}
        key={`${value}_${index}`}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <div
          className={
            value === chapterNavigated
              ? `${styles.dropdown_item} ${styles.dropdown_item_active}`
              : `${styles.dropdown_item} ${`${styles.item_hover}`}`
          }
          onClick={(e) => {
            setNavigation("chapter", value);
            setNavigation("sloks", verses);
            setNavigation("startingVerse", 0);
            setNavigation("openMenu", !sloakHeaderMenu);
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

  let verses = [...Array(sloks)].map((_, index) => {
    let verseNum = index + 1;
    return (
      <p
        key={`nav_${index}`}
        className={
          startingVerse === verseNum
            ? `${styles.dropdown_item} ${styles.dropdown_item_active}`
            : `${styles.dropdown_item} ${`${styles.item_hover}`}`
        }
        onClick={(e) => {
          e.preventDefault();
          setNavigation("openMenu", !sloakHeaderMenu);
          setNavigation("startingVerse", verseNum);
        }}
      >
        {verseNum}
      </p>
    );
  });

  return (
    <React.Fragment>
      <div className={`${styles.dropdown}`}>
        <div>{container_drop_down}</div>
        <div className={`${styles.verses}`}>{verses}</div>
      </div>
    </React.Fragment>
  );
};

export default ContextMenu;
