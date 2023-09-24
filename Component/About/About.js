/** @format */

import React from "react";
import styles from "./About.module.css";
import Layout from "../Layout/Layout";
import Link from "next/link";
import useImage from "@/hooks/use-Image";
import useDispatch from "@/hooks/use-Dispatch";

const About = (props) => {
  const { getImage } = useImage();
  const { setNavigation } = useDispatch();
  return (
    <React.Fragment>
      <Layout>
        <div className={`${styles.container_center}`}>
          <img
            src={getImage(19)["src"]}
            alt="author of bhagavad gita vyasa muni"
          />
        </div>
        <div className={`${styles.container}`}>
          <h1>What is Bhagavad Gita ?</h1>
          <p>
            Bhagavad Gita, also known as the Gita - "The Song of The Lord" is a
            practical guide to one's life that guides one to re-organise their
            life, achieve inner peace and approach the Supreme Lord (the
            Ultimate Reality). It is a 700-verse text in Sanskrit which
            comprises{" "}
            <strong>
              chapters 23 through 40 in the Bhishma-Parva section of the
              Mahabharata.
            </strong>
          </p>
          <p>
            The Bhagavad Gita is a dialogue between Arjuna, a supernaturally
            gifted warrior and his guide and charioteer Lord Krishna on the
            battlefield of Kurukshetra. As both armies stand ready for the
            battle, the mighty warrior Arjuna, on observing the warriors on both
            sides becomes overwhelmed with grief and compassion due to the fear
            of losing his relatives and friends and the consequent sins
            attributed to killing his own relatives. So, he surrenders to Lord
            Krishna, seeking a solution. Thus, follows the wisdom of the
            Bhagavad Gita. Over 18 chapters, Gita packs an intense analysis of
            life, emotions and ambitions, discussion of various types of yoga,
            including Jnana, Bhakti, Karma and Raja, the difference between Self
            and the material body as well as the revelation of the Ultimate
            Purpose of Life.
          </p>
        </div>
        <div className={`${styles.container}`}>
          <h1>What are some major themes in the Bhagavad Gita?</h1>
          <p>
            The Bhagavad Gita is revered for its profound teachings on ethics,
            spirituality, and the nature of reality. Here are some of the main
            themes and teachings of the Bhagavad Gita:
          </p>
          <ul>
            <li>
              <strong> The nature of the self:</strong> The Bhagavad Gita
              teaches that the self is eternal and indestructible. It is not the
              body or the mind, but rather the consciousness that animates them.
              The self is part of the larger universal consciousness, which is
              also eternal and unchanging.
            </li>
            <li>
              <strong>The nature of action:</strong> The Bhagavad Gita
              emphasizes the importance of action, but not just any action.
              Actions must be performed with the right intention, without
              attachment to the results, and in accordance with one's duty or
              dharma. By doing so, one can achieve spiritual growth and
              ultimately liberation from the cycle of birth and death.
            </li>
            <li>
              <strong>The nature of karma:</strong> Karma refers to the law of
              cause and effect. The Bhagavad Gita teaches that every action has
              a consequence, and that one must accept the consequences of their
              actions. However, the Bhagavad Gita also teaches that one can
              overcome the effects of past karma by performing good deeds and
              spiritual practices.
            </li>
            <li>
              <strong>The nature of devotion:</strong> The Bhagavad Gita teaches
              that devotion or bhakti is an important aspect of spiritual
              practice. This involves developing a deep love and devotion for
              God or the divine. By cultivating devotion, one can overcome
              negative tendencies and develop a deeper connection with the
              divine.
            </li>
            <li>
              <strong>The nature of detachment:</strong> The Bhagavad Gita
              teaches that detachment is essential for spiritual growth. This
              does not mean that one should abandon their responsibilities or
              become indifferent to the world, but rather that one should not be
              attached to the fruits of their actions or to material
              possessions. By cultivating detachment, one can overcome the cycle
              of birth and death and attain enlightenment.
            </li>
            <li>
              <strong>The nature of yoga:</strong> Yoga is a spiritual practice
              that involves physical postures, breath control, and meditation.
              The Bhagavad Gita teaches that yoga is a means of achieving union
              with the divine. There are many different types of yoga, including
              karma yoga (the yoga of action), bhakti yoga (the yoga of
              devotion), and jnana yoga (the yoga of knowledge).
            </li>
            <li>
              <strong>The nature of the divine:</strong> The Bhagavad Gita
              teaches that the ultimate reality is Brahman, a formless,
              infinite, and eternal consciousness. Brahman is the source of all
              creation and is present in all things. God, or Ishvara, is a
              personal aspect of Brahman that can be worshipped and approached
              through devotion and spiritual practices.
            </li>
            <li>
              <strong> The importance of self-control:</strong> The Bhagavad
              Gita emphasizes the importance of self-control in achieving
              spiritual growth. This includes control over one's thoughts,
              emotions, and desires. By developing self-control, one can
              overcome negative tendencies and cultivate positive qualities such
              as compassion, humility, and detachment.
            </li>
            <li>
              <strong>The nature of suffering: </strong>The Bhagavad Gita
              teaches that suffering is an inherent part of the human condition.
              However, it also teaches that suffering can be overcome through
              spiritual practices and by cultivating a deeper understanding of
              the nature of reality. By embracing suffering and using it as a
              catalyst for spiritual growth, one can achieve inner peace and
              happiness.
            </li>
            <li>
              <strong> The importance of service:</strong> The Bhagavad Gita
              teaches that service to others is an important aspect of spiritual
              practice. This can take many forms, such as helping those in need,
              performing acts of kindness, or contributing to the greater good.
              By serving others, one can cultivate humility, compassion, and a
              sense of interconnectedness with all beings.
            </li>
            <li>
              <strong>The importance of knowledge:</strong> The Bhagavad Gita
              teaches that knowledge is essential for spiritual growth. This
              includes knowledge of the self, the nature of reality, and the
              nature of God. By acquiring knowledge through spiritual practices
              and study, one can develop a deeper understanding of the universe
              and one's place within it.
            </li>
            <li>
              <strong>The role of the guru:</strong> The Bhagavad Gita
              emphasizes the importance of having a spiritual teacher or guru.
              The guru serves as a guide and mentor, helping the student to
              develop spiritual qualities and overcome obstacles on the path to
              enlightenment.
            </li>
            <li>
              <strong>The nature of renunciation:</strong> The Bhagavad Gita
              teaches that renunciation is a path to spiritual growth. This
              involves giving up attachment to material possessions, desires,
              and even the ego. By renouncing these things, one can cultivate
              detachment and focus on spiritual growth.
            </li>
            <li>
              <strong>The importance of faith:</strong> The Bhagavad Gita
              emphasizes the importance of faith in achieving spiritual growth.
              This includes faith in God, faith in oneself, and faith in the
              spiritual path. By having faith, one can overcome doubt and
              develop a deeper sense of trust in the universe.
            </li>
            <li>
              <strong>The nature of liberation:</strong> The Bhagavad Gita
              teaches that liberation or moksha is the ultimate goal of
              spiritual practice. This involves achieving a state of
              consciousness that is free from suffering, delusion, and the cycle
              of birth and death. Liberation can be achieved through spiritual
              practices such as meditation, devotion, and self-knowledge.
            </li>
            <li>
              <strong> The nature of dharma:</strong> The Bhagavad Gita teaches
              that dharma, or duty, is an important aspect of spiritual
              practice. This involves fulfilling one's responsibilities in life
              in a way that is ethical and in accordance with one's nature. By
              fulfilling one's dharma, one can develop positive qualities and
              achieve spiritual growth.
            </li>
            <li>
              <strong> The nature of Maya:</strong> The Bhagavad Gita teaches
              that Maya, or illusion, is a fundamental aspect of the universe.
              Maya refers to the illusion of separateness and the belief in the
              reality of the material world. By overcoming Maya through
              spiritual practices, one can achieve a deeper understanding of the
              nature of reality.
            </li>
            <li>
              <strong>The nature of divine grace:</strong> The Bhagavad Gita
              teaches that divine grace or blessings are an important aspect of
              spiritual practice. This refers to the idea that spiritual growth
              is not just a matter of individual effort, but also involves the
              grace of the divine. By cultivating devotion and surrendering to
              the divine, one can receive divine grace and support on the
              spiritual path.
            </li>
            <li>
              <strong> The importance of non-violence:</strong> The Bhagavad
              Gita emphasizes the importance of non-violence in all aspects of
              life. This includes physical violence, as well as verbal and
              mental violence. By cultivating non-violence, one can create a
              more peaceful and harmonious world.
            </li>
            <li>
              <strong> The nature of enlightenment:</strong> The Bhagavad Gita
              teaches that enlightenment is a state of consciousness that is
              characterized by wisdom, inner peace, and unconditional love. This
              is a state of being that is free from suffering, delusion, and the
              ego. By striving towards enlightenment through spiritual
              practices, one can achieve a deeper sense of purpose and meaning
              in life.
            </li>
            <li>
              <strong> The importance of meditation:</strong> The Bhagavad Gita
              teaches that meditation is an essential spiritual practice.
              Through meditation, one can cultivate inner peace, clarity, and a
              deeper understanding of the nature of reality. Meditation can also
              help to quiet the mind and overcome negative tendencies.
            </li>
          </ul>
          <p>
            In summary, the Bhagavad Gita teaches that the ultimate goal of life
            is spiritual liberation, which can be achieved through right action,
            devotion to God, detachment, and spiritual practices such as yoga
            and meditation. It emphasizes the importance of cultivating a deeper
            understanding of the nature of the self, the nature of action, and
            the nature of the divine. Its teachings have had a profound
            influence on Hinduism, as well as on many other spiritual and
            philosophical traditions around the world.
          </p>
        </div>
        <div className={`${styles.container}`}>
          <h1>Who Wrote Bhagavad Gita ?</h1>
          <div className={`${styles.container_center}`}>
            <img
              src={getImage(20)["src"]}
              alt="author of bhagavad gita vyasa muni"
            />
          </div>
          <p>
            <strong>Krishna Dvaipayana</strong> , better known as Vyasa
            (/ˈvjɑːsə/; Sanskrit: व्यासः, romanized: Vyāsaḥ, lit. 'compiler') or
            <strong>Vedavyasa</strong> (वेदव्यासः, Veda-vyāsaḥ, "the one who
            classified the Vedas"), is a revered sage portrayed in most Hindu
            traditions. He is traditionally regarded as the author of the epic
            Mahabharata.
          </p>
        </div>
        <div
          className={`${styles.container_center}`}
          onClick={() => {
            //Will set the SlokHeaderComponent.
            setNavigation("startingVerse", 0);
          }}
        >
          <Link href={`/chapter/1`} className={`${styles.button} `}>
            <span>start reading the gita</span>
          </Link>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default About;
