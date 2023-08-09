/** @format */

import React, { useContext } from "react";
import classes from "./ChapterComponenet.module.css";
import { AppContext } from "@/sotre/store";
import Image from "next/image";
import ch01 from "../../public/assets/images/ch01.jpeg";
import ch02 from "../../public/assets/images/ch02.jpeg";
import ch03 from "../../public/assets/images/ch03.jpeg";
import ch04 from "../../public/assets/images/ch04.jpeg";
import ch05 from "../../public/assets/images/ch05.jpeg";
import ch06 from "../../public/assets/images/ch06.jpeg";
import ch07 from "../../public/assets/images/ch07.jpeg";
import ch08 from "../../public/assets/images/ch08.jpeg";
import ch09 from "../../public/assets/images/ch09.jpeg";
import ch10 from "../../public/assets/images/ch10.jpeg";
import ch11 from "../../public/assets/images/ch11.jpeg";
import ch12 from "../../public/assets/images/ch12.jpeg";
import ch13 from "../../public/assets/images/ch13.jpeg";
import ch14 from "../../public/assets/images/ch14.jpeg";
import ch15 from "../../public/assets/images/ch15.jpeg";
import ch16 from "../../public/assets/images/ch16.jpeg";
import ch17 from "../../public/assets/images/ch17.jpeg";
import ch18 from "../../public/assets/images/ch18.jpeg";
import Grid from "../UI/Grid/Grid";

const ChapterComponent = (props) => {
  const geetaPlates = [
    ch01,
    ch02,
    ch03,
    ch04,
    ch05,
    ch06,
    ch07,
    ch08,
    ch09,
    ch10,
    ch11,
    ch12,
    ch13,
    ch14,
    ch15,
    ch16,
    ch17,
    ch18,
  ];
  const { state } = useContext(AppContext);
  let chapters = state["chapters"];
  console.log(chapters);
  return (
    <React.Fragment>
      <Grid>
        {chapters.map((chapter, index) => {
          let chapterNumber =
            chapter["chapter_number"] / 10 < 1
              ? "0" + chapter["chapter_number"]
              : chapter["chapter_number"];
          let chapterIntro = chapter["summary"]["en"];
          console.log(
            chapterNumber,
            chapterIntro.length,
            chapterIntro.substring(0, 350)
          );
          return (
            <div
              className={`${classes.container}`}
              key={`${chapter["name"]}${index}`}
            >
              <div className={`${classes.img_placeholder}`}>
                <Image
                  className={`${classes.image}`}
                  src={geetaPlates[index]}
                  alt="gita iamge"
                  width="100"
                  height="100"
                />
              </div>
              <div style={{ padding: "0.5rem" }}>
                <span className={`${classes.number}`}>{chapterNumber} </span>
                <h2 className={`${classes.title}`}>{chapter["translation"]}</h2>
                <p className={`${classes.ch_intro}`}>
                  Krishna concludes by summarizing the essence of all teachings
                  and presents the paths of selfless action, self-knowledge, and
                  devotion, leaving Arjuna to make his choice.
                </p>
                <span className={`${classes.slokas}`}>
                  slokas : <mark>{chapter["verses_count"]}</mark>
                </span>
              </div>
            </div>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default ChapterComponent;
