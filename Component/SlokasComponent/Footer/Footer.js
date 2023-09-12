/** @format */

import React from "react";
import styles from "./Footer.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const Footer = ({ currentChapter }) => {
  let prevChapter = Number(currentChapter) - 1;
  let nextChapter = Number(currentChapter) + 1;
  return (
    <React.Fragment>
      <div className={`${styles.container}`}>
        {currentChapter > 1 && (
          <Link href={`/slokas/${prevChapter}`} className={`${styles.button}`}>
            <ChevronLeft size={14} strokeWidth="3" />
            <span>previous chapter</span>
          </Link>
        )}

        <div className={`${styles.button}`}>
          <span>beginning of chapter</span>
        </div>
        {currentChapter < 18 && (
          <Link href={`/slokas/${nextChapter}`} className={`${styles.button} `}>
            <span>next chapter</span>
            <ChevronRight size={14} strokeWidth="3" />
          </Link>
        )}
      </div>
    </React.Fragment>
  );
};

export default Footer;
