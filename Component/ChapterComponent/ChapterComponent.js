/** @format */

import React from "react";
import styles from "./ChapterComponenet.module.css";
import Image from "next/image";
import Grid from "../UI/Grid/Grid";
import useImage from "@/hooks/use-Image";
import Link from "next/link";
import useDispatch from "@/hooks/use-Dispatch";
/**Component was used for the initial version v1.1.2 */

const ChapterComponent = ({ chapters }) => {
  const { setNavigation } = useDispatch();
  const { getImage } = useImage();
  return (
    <React.Fragment>
      <div className={`${styles.layout_container}`}>
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
                  className={`${styles.container}`}
                  onClick={() => {
                    //Will set the SlokHeaderComponent.
                    setNavigation("chapter", chapter["translation"]);
                    setNavigation("sloks", chapter["verses_count"]);
                  }}
                >
                  <div className={`${styles.img_placeholder}`}>
                    <Image
                      className={`${styles.image}`}
                      src={getImage(index)}
                      alt="gita iamge"
                      width="100"
                      height="100"
                    />
                  </div>
                  <div className={`${styles.text_holder}`}>
                    <span className={`${styles.chapter_number}`}>
                      {chapterNumber}
                    </span>
                    <h2 className={`${styles.chapter_title}`}>
                      {chapter["translation"]}
                    </h2>
                    <p className={`${styles.chapter_short_intro}`}>
                      {chapter["short_summary"]}
                    </p>
                    <span className={`${styles.slokas}`}>
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
