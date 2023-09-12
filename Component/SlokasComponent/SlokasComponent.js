/** @format */

import React, { useState, useEffect } from "react";
import classes from "./SlokasComponent.module.css";
import SlokCard from "../UI/SlokCard/SlokCard";
import { CHAPTERS_MENU, readingPrefSwitch } from "@/model/const";
import AudioComponent from "../UI/AudioComponent/AudioComponent";
import Switch from "../UI/Switch/Switch";
import { useRouter } from "next/router";
import useDispatch from "@/hooks/use-Dispatch";
import Layout from "../Layout/Layout";
import Stack from "../UI/Stack/Stack";
import useHelper from "@/hooks/use-Helper";
import { ChevronLeft, Play } from "lucide-react";
import Modal from "../UI/Modal/Modal";
import Footer from "./Footer/Footer";

const SlokasComponent = ({ chapter, content }) => {
  const router = useRouter();
  const [trackId, setTrack] = useState(0);
  const { getTranslator } = useHelper();
  const {
    translator,
    lang,
    readerPref,
    contentType,
    fontType,
    startingVerse,
    setReaderPref,
    setNavigation,
    setNavigation_1,
  } = useDispatch();
  const [error, setError] = useState("");
  const audioRef = React.createRef();
  let refHookArray = [];

  useEffect(() => {
    console.log(
      "SlokasComponent --> setNavigation",
      chapter,
      CHAPTERS_MENU[chapter - 1]
    );
    const { label, value, verses } = CHAPTERS_MENU[chapter - 1];
    setNavigation("chapter", value);
    setNavigation("sloks", verses);
    setNavigation_1("chapter", value);
    setNavigation_1("sloks", verses);
  }, [chapter]);

  //Smooth Scrolling
  const scrollTo = (sloakNum) => {
    refHookArray[sloakNum - 1].current.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (startingVerse != 0) {
      console.log(
        refHookArray.length,
        startingVerse,
        refHookArray[startingVerse - 1]
      );
      scrollTo(startingVerse);
    }
  }, [startingVerse]);

  const audioSrcLoader = (trackId) => {
    audioRef.current.src = `/audio/${chapter}/${trackId}.mp3`;
    audioRef.current.load();
  };

  const onPlayBtClickListener = (payload) => {
    const { chapterNumber, slokNumber } = payload;
    setTrack((prevState) => slokNumber);
    audioSrcLoader(slokNumber);
  };

  //AudioComponenet control Listener
  const controlListenerHanlder = (action) => {
    switch (action.type) {
      case "play":
        audioRef.current.play();
        break;
      case "pause":
        audioRef.current.pause();
        break;
      case "forward":
        let nextTrack = trackId + 1;
        setTrack((prevState) => nextTrack);
        audioSrcLoader(nextTrack);
        scrollTo(nextTrack);
        break;
      case "backward":
        let prevTrack = trackId - 1;
        if (prevTrack > 0) {
          setTrack((prevState) => prevTrack);
          audioSrcLoader(prevTrack);
          scrollTo(prevTrack);
        }
        break;
      case "seek":
        audioRef.current.currentTime = action.payload;
        break;
      case "close":
        audioRef.current.pause();
        break;
      case "playBackRate":
        audioRef.current.playbackRate = action.payload;
        break;
      case "ended":
        let playNext = trackId + 1;
        setTrack((prevState) => playNext);
        audioSrcLoader(playNext);
        scrollTo(playNext);
        break;
      default:
        //no-opt
        break;
    }
  };

  const onAutoPlayClickListener = () => {
    console.log("Play all with scroll effect");
  };

  const onItemSelectListener = (item) => {
    setReaderPref("readingPreference", item);
  };

  const onClickBack = () => {
    router.push("/chapters");
  };
  const onModalClickListener = () => {
    setError((prevState) => "");
  };

  //content here
  let Cards = content.map((slokObj, index) => {
    let refToSlokCard = React.createRef();
    refHookArray.push(refToSlokCard);
    let verse = slokObj["verse"];
    let slok = slokObj["slok"];
    let slokTransliteration = contentType.includes("transliteration")
      ? slokObj["transliteration"]
      : "";
    let slokMeaning = contentType.includes("translation")
      ? slokObj["word_meanings"]
      : "";
    let slokTranslation = slokObj[translator][lang];

    return (
      <SlokCard
        ref={refToSlokCard}
        key={verse}
        chapterNumber={chapter}
        slokNumber={verse}
        slok={slok}
        slokTransliteration={slokTransliteration}
        slokMeaning={slokMeaning}
        slokTranslation={slokTranslation}
        readerPref={readerPref}
        onPlayBtClick={onPlayBtClickListener}
      />
    );
  });

  return (
    <React.Fragment>
      <Layout>
        <main
          style={{ fontFamily: `${fontType}` }}
          className={`${classes.root_main}`}
        >
          <section>
            <div className={`${classes.back_bt}`} onClick={onClickBack}>
              <ChevronLeft
                style={{ textAlign: "center" }}
                className={`${classes.icon}`}
              />
              <span>back</span>
            </div>
          </section>
          <section>
            <Switch
              toggleButton={readingPrefSwitch}
              itemSelected={readerPref}
              onItemChange={onItemSelectListener}
              size="md"
            />
          </section>
          <section className={`${classes.translator_section}`}>
            <div className={`${classes.translator_name}`}>
              <Stack>
                <span>translation by</span>
                <span>{getTranslator(translator)["label"]}</span>
              </Stack>
            </div>

            <div
              className={`${classes.play_button}`}
              onClick={onAutoPlayClickListener}
            >
              <Play size={15} color="#3b5bdb" strokeWidth={3} />
              <span>play audio</span>
            </div>
          </section>
          <section className={`${classes.container}`}>
            <Stack>{Cards}</Stack>
          </section>
          <AudioComponent
            ref={audioRef}
            controlListener={controlListenerHanlder}
          />
          {error && <Modal message={error} onClick={onModalClickListener} />}
        </main>
        <Footer currentChapter={chapter} />
      </Layout>
    </React.Fragment>
  );
};

export default SlokasComponent;
