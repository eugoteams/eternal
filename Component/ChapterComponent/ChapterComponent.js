/** @format */

import React, { useContext } from "react";
import classes from "./ChapterComponenet.module.css";
import { AppContext } from "@/sotre/store";
import Image from "next/image";
import Grid from "../UI/Grid/Grid";
import useImage from "@/hooks/use-Image";
import Link from "next/link";
import useDispatch from "@/hooks/use-Dispatch";

const ChapterComponent = (props) => {
  const { getImage } = useImage();
  const { chapters, setNavigation } = useDispatch();

  const onClickListener = (chapter, sloks) => {
    setNavigation("chapter", chapter);
    setNavigation("sloks", sloks);
  };

  return (
    <React.Fragment>
      <div className={`${classes.layout_container}`}>
        <Grid>
          {chapters.map((chapter, index) => {
            let chapterNumber =
              chapter["chapter_number"] / 10 < 1
                ? "0" + chapter["chapter_number"]
                : chapter["chapter_number"];

            return (
              <Link
                key={`${chapter["name"]}${index}`}
                href={`/slokas/${chapter["chapter_number"]}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className={`${classes.container}`}
                  onClick={() => {
                    onClickListener(
                      chapter["translation"],
                      chapter["verses_count"]
                    );
                  }}
                >
                  <div className={`${classes.img_placeholder}`}>
                    <Image
                      className={`${classes.image}`}
                      src={getImage(index)}
                      alt="gita iamge"
                      width="100"
                      height="100"
                    />
                  </div>
                  <div className={`${classes.text_holder}`}>
                    <span className={`${classes.chapter_number}`}>
                      {chapterNumber}
                    </span>
                    <h2 className={`${classes.chapter_title}`}>
                      {chapter["translation"]}
                    </h2>
                    <p className={`${classes.chapter_short_intro}`}>
                      {chapter["short_summary"]}
                    </p>
                    <span className={`${classes.slokas}`}>
                      slokas : <mark>{chapter["verses_count"]}</mark>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default ChapterComponent;
