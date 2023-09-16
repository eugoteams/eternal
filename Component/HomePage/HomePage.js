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

const HomePage = () => {
  return (
    <React.Fragment>
      <Layout>
        <div className={`${styles.hero}`}>
          <div className={`${styles.hero_text}`}>
            <h1>Eternal bhagavad gita </h1>
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
          <div className={`${styles.image_container}`}>
            <Image
              src={"/assets/images/hero.jpeg"}
              alt="srimad bhagavad gita.jpeg"
              layout="fill"
              objectFit="fill"
            />
          </div>
        </div>

        {/* Feature Section* */}

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
        </div>

        {/**Feature List Section */}

        <div className={`${styles.feature}`}>
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
          </div>
        </div>
        {/**CTA Section */}
        <div className={`${styles.cta}`}>
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
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default HomePage;
