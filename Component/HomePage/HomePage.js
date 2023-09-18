/** @format */

import React from "react";
import Layout from "../Layout/Layout";
import styles from "./HomePage.module.css";
import Stack from "../UI/Stack/Stack";
import Link from "next/link";
import SimpleCard from "./SimpleCard/SimpleCard";
import Image from "next/image";
import { BiMouse } from "react-icons/bi";
import Grid from "../UI/Grid/Grid";
import ImageGrid from "../ImageGrid/ImageGrid";
import Chapter from "@/pages/slokas/[ch]";
import useImage from "@/hooks/use-Image";

const HomePage = ({ chapters }) => {
  const { getImage } = useImage();
  let count = 1;
  return (
    <React.Fragment>
      <Layout>
        <div className={`${styles.pin_container}`}>
          {chapters.map((chapter, index) => {
            let classStyle = "sm";
            let chapterNumber =
              chapter["chapter_number"] / 10 < 1
                ? "0" + chapter["chapter_number"]
                : chapter["chapter_number"];
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

            console.log("chapter", chapter["translation"], classStyle);
            return (
              <div
                className={`${styles.card} ${styles[`card_${classStyle}`]}`}
                key={`${chapterNumber}`}
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
                {chapter["translation"]}-{classStyle}
              </div>
            );
          })}
          {/* <div className={`${styles.card} ${styles.card_sm}`}>
            <div className={`${styles.img_placeholder}`}>
              <Image
                className={`${styles.image}`}
                src={getImage(1)}
                alt="gita iamge"
                width="100"
                height="100"
              />
            </div>
          </div>
          <div className={`${styles.card} ${styles.card_md}`}></div>

          <div className={`${styles.card} ${styles.card_md}`}>1</div>
          <div className={`${styles.card} ${styles.card_l}`}>2</div>
          <div className={`${styles.card} ${styles.card_sm}`}>3</div>
          <div className={`${styles.card} ${styles.card_md}`}>4</div>
          <div className={`${styles.card} ${styles.card_l}`}>5</div>
          <div className={`${styles.card} ${styles.card_sm}`}></div>
          <div className={`${styles.card} ${styles.card_md}`}></div>
          <div className={`${styles.card} ${styles.card_l}`}></div>
          <div className={`${styles.card} ${styles.card_sm}`}></div>
          <div className={`${styles.card} ${styles.card_md}`}></div>
          <div className={`${styles.card} ${styles.card_l}`}></div>
          <div className={`${styles.card} ${styles.card_sm}`}></div>
          <div className={`${styles.card} ${styles.card_md}`}></div>
          <div className={`${styles.card} ${styles.card_l}`}></div>
          */}
        </div>
        {/* <div className={`${styles.hero}`}>
          <div className={`${styles.hero_text}`}>
            <h1> bhagavad gita </h1>
            <p>
              Immerse yourself in the sacred teaching of Lord Krishna with
              Eternal .Explore the wisdom of ages and apply it to your modern
              life.
            </p>
            <div className={`${styles.click_to_action_container}`}>
              <div className={`${styles.button}`}>
                <Link href="/chapters" className={`${styles.link}`}>
                  <span>read chapters</span>
                </Link>
              </div>

              <div className={`${styles.button}`}>
                <Link href="/chapters" className={`${styles.link}`}>
                  <span>listen chapters</span>
                </Link>
              </div>
            </div>
            <div className={`${styles.scroll_indicator}`}>
              <BiMouse style={{ fontSize: "2.4rem" }} />
              <span>scroll to see more sections</span>
            </div>
          </div>
          <div className={`${styles.cnt}`}>
            <ImageGrid />
          </div> */}
        {/* <div className={`${styles.image_container}`}>
            <Image
              src={"/assets/images/bhagavadgita_6.jpeg"}
              alt="srimad bhagavad gita.jpeg"
              layout="fill"
              objectFit="fill"
              style={{ borderRadius: "0.5rem", overflow: "hidden" }}
            />
          </div>
               </div> */}

        {/* Feature Section* */}
        {/*
        <div className={`${styles.feature}`}>
          <span>explore</span>
          <h2>the wisdom of Bhagavad Gita</h2>
          <p>
            Explore the profound wisdom of the Bhagavad Gita{" "}
            <b>The Song Of The Lord</b>, a 700-verse Sanskrit text in the
            Mahabharata. Join the dialogue between Arjuna and Lord Krishna,
            unraveling life's purpose,with timeless guidance, helping to attain
            inner peace, and connect with the Supreme Lord.
          </p>
          <div className={`${styles.card_container}`}>
            <SimpleCard
              title={"spiritual enlightenment:"}
              content={
                "Dive into the Gita's teachings to discover profound insights on self-awareness, emotions, and the pursuit of inner harmony."
              }
            />
            <SimpleCard
              title={"life's purpose:"}
              content={
                "Gain clarity on your life's purpose as you explore the wisdom shared in the Bhagavad Gita."
              }
            />
            <SimpleCard
              title={"path to inner peace:"}
              content={
                "larn how to navigate life's challenges and find tranquility amidst chaos through the Gita's wisdom."
              }
            />
            <SimpleCard
              title={"universal relevance :"}
              content={
                "Explore the Gita's universal teachings that transcend cultures, making it a guide for seekers worldwide."
              }
            />
          </div>
        </div> */}

        {/**Feature List Section */}

        {/* <div className={`${styles.feature}`}>
          <span>discover</span>
          <h2>Explore the World Of Bhagavad Gita Translation</h2>
          <p>
            Eternal offers a wide select of english , hindi translation of the
            Bhagavad Gita by various authors.Dive deep into the teachings of
            this sacred scripture with our comprehensive collection.
          </p>
          <div className={`${styles.card_container_flex}`}>
            <SimpleCard
              title={"listen to sacred slokas"}
              content={
                "immerse yourself in the divine verses of the Bhagavad Gita through our audio versions.EXperience the power of the slokas and chapters as they come to life."
              }
            />
            <SimpleCard
              title={" translations"}
              content={
                "explore the profound interpretations of the Bhagavad Gita by renowned authors.Gain new insights and prespective oh this timeless scripture."
              }
            />
            <SimpleCard
              title={"user friendly interface"}
              content={
                "eternal provides a seamless and intuitive platform for easy naviagation and study of the Bhagavad Gita.Enjoy a hassle-free learnig experince."
              }
            />
          </div>  </div> */}

        {/**CTA Section */}
        {/* <div className={`${styles.cta}`}>
          <div className={`${styles.cta_container}`}>
            <h2>start your spiritual journey today</h2>
            <p>
              explore the Teachings of Bhagavad Gita and Deepen your
              understanding.
            </p>
            <div className={`${styles.button}`}>
              <Link href="/chapters" className={`${styles.link}`}>
                <span>read</span>
              </Link>
            </div>
          </div>
        </div> */}
      </Layout>
    </React.Fragment>
  );
};

export default HomePage;
