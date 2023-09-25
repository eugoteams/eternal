/** @format */

import React from "react";
import Layout from "../Layout/Layout";
import styles from "./HomePage.module.css";
import Link from "next/link";
import Image from "next/image";
import { BiMouse } from "react-icons/bi";
import useImage from "@/hooks/use-Image";
import useDispatch from "@/hooks/use-Dispatch";

const HomePage = ({ chapters }) => {
  const { getImage } = useImage();
  const { setNavigation } = useDispatch();
  let count = 1;
  return (
    <React.Fragment>
      <Layout>
        <div className={`${styles.hero}`}>
          <div className={`${styles.hero_text}`}>
            <img
              src={"../assets/images/little_krishna.png"}
              height={120}
              width={120}
              className={`${styles.hero_img}`}
            />
            <h1> bhagavad gita </h1>
            <p>
              Immerse yourself in the sacred teaching of Lord Krishna with
              Eternal .Explore the wisdom of ages and apply it to your modern
              life.
            </p>
            <div className={`${styles.click_to_action_container}`}>
              <div className={`${styles.button}`}>
                <Link
                  href="/chapter/1"
                  className={`${styles.link}`}
                  onClick={() => {
                    //Will set the SlokHeaderComponent.
                    setNavigation("startingVerse", 0);
                  }}
                >
                  <span>read chapter 1</span>
                </Link>
              </div>

              <div className={`${styles.button}`}>
                <Link href="/audio" className={`${styles.link}`}>
                  <span>listen to chapters</span>
                </Link>
              </div>
            </div>
            <div className={`${styles.scroll_indicator}`}>
              <BiMouse style={{ fontSize: "2.4rem" }} />
              <span>scroll to see chapter</span>
            </div>
          </div>
        </div>

        <div className={`${styles.grid_autofill_container}`}>
          {chapters.map((chapter, index) => {
            let classStyle = "sm";
            let chapterNumber =
              chapter["chapter_number"] / 10 < 1
                ? "0" + chapter["chapter_number"]
                : chapter["chapter_number"];
            let title = chapter["translation"];
            let titleMeaning = chapter["meaning"]["en"];
            let verses_count = chapter["verses_count"];
            count = count + 1;
            switch (true) {
              case count === 1:
                classStyle = "sm";
                break;
              case count === 2:
                classStyle = "md";
                break;
              case count === 3:
                classStyle = "l";
                break;
              default:
                classStyle = "sm";
                count = 2;

                break;
            }

            return (
              <Link
                key={`${chapter["name"]}${index}`}
                href={`/chapter/${chapter["chapter_number"]}`}
                style={{ textDecoration: "none", color: "inherit" }}
                className={`${styles.card} ${styles[`card_${classStyle}`]}`}
              >
                <div
                  className={`${styles.img_placeholder}`}
                  onClick={() => {
                    //Will set the SlokHeaderComponent.
                    setNavigation("chapter", chapter["translation"]);
                    setNavigation("sloks", chapter["verses_count"]);
                    setNavigation("startingVerse", 0);
                  }}
                >
                  <Image
                    className={`${styles.image}`}
                    src={getImage(index)}
                    alt="gita iamge"
                    width="800"
                    height="800"
                  />
                </div>
                <div className={`${styles.descriptionContainer}`}>
                  <div className={`${styles.description_header}`}>
                    <span className={`${styles.chapter_number}`}>
                      {chapterNumber}
                    </span>
                    <p className={`${styles.title}`}> {title}</p>
                  </div>
                  <p className={`${styles.sub_text}`}> {titleMeaning}</p>
                  <span>
                    verses: <mark>{verses_count}</mark>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default HomePage;
