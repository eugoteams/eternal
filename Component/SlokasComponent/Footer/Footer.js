/** @format */

import React from "react";
import styles from "./Footer.module.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Link from "next/link";

const Footer = ({ currentChapter }) => {
  let prevChapter = Number(currentChapter) - 1;
  let nextChapter = Number(currentChapter) + 1;
  return (
    <React.Fragment>
      <div className={`${styles.container}`}>
        {currentChapter > 1 && (
          <Link href={`/chapter/${prevChapter}`} className={`${styles.button}`}>
            <BiChevronLeft
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            />
            <span>previous chapter</span>
          </Link>
        )}
        <div
          className={`${styles.button}`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span>beginning of chapter</span>
        </div>
        {currentChapter < 18 && (
          <Link
            href={`/chapter/${nextChapter}`}
            className={`${styles.button} `}
          >
            <span>next chapter</span>
            <BiChevronRight
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            />
          </Link>
        )}
      </div>
    </React.Fragment>
  );
};

export default Footer;
