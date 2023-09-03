/** @format */

import React, { useState, useEffect } from "react";
import classes from "./SlokasComponent.module.css";
import usePerfomanceHandler from "@/hooks/use-PerfomanceHandler";
import SlokCard from "../UI/SlokCard/SlokCard";
import { GITA_CH, readingPrefSwitch } from "@/model/const";
import AudioComponent from "../UI/AudioComponent/AudioComponent";
import Switch from "../UI/Switch/Switch";
import { useRouter } from "next/router";
import useDispatch from "@/hooks/use-Dispatch";
import Layout from "../Layout/Layout";
import Stack from "../UI/Stack/Stack";
import useHelper from "@/hooks/use-Helper";
import {
  ArrowLeft,
  BackpackIcon,
  BadgeCheck,
  ChevronLeft,
  Play,
} from "lucide-react";
import Grid from "../UI/Grid/Grid";
import IconHolder from "../UI/IconHolder/IconHolder";

const SlokasComponent = ({ chapter }) => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const [trackId, setTrackId] = useState(0);
  const { getData } = usePerfomanceHandler();
  const { getTranslator } = useHelper();
  const {
    translator,
    lang,
    readerPref,
    chapters,
    contentType,
    fontType,
    sideNavVisible,
    setReaderPref,
  } = useDispatch();

  let chapterDetail = chapters[chapter - 1];
  let refHookArray = [];

  //Smooth Scrolling
  const selectSloak = (sloakNum) => {
    refHookArray[sloakNum - 1].current.scrollIntoView({ behavior: "smooth" });
  };

  const fetchData = () => {
    getData(
      `/api/gita`,
      {
        method: "POST",
        body: JSON.stringify(`{\n"chapter":${chapter}}`),
        headers: {
          "Content-Type": "application/json",
        },
      },
      GITA_CH
    ).then((response) => {
      setData((prevState) => response);
    });
  };

  //Load component on chapter change
  // useEffect(() => {
  //   fetchData();
  // }, [chapter, sideNavVisible]);

  //OnComponentLoad.
  useEffect(() => {
    fetchData();
  }, []);

  const onPlayBtClickListener = (payload) => {
    const { chapterNumber, slokNumber } = payload;
    //  setTrackId((prevState) => slokNumber);
    console.log("PlayButton clicked");
    let audio = new Audio(
      `http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg`
    );
    audio.play();
    setTimeout(() => {
      audio.pause();
      console.log("timeout & pause");
      setTrackId((prevState) => slokNumber);
    }, 1200);
  };

  const onBrowserErrorListener = () => {
    setTrackId((prevState) => prevState);
    alert("On Error Listener");
  };

  const onTrackPlayEndedListener = () => {
    if (true && trackId < data.length) {
      setTrackId((prevState) => prevState + 1);
      selectSloak(trackId + 1);
    }
  };

  const onPlayerNextTrackListener = () => {
    if (trackId < data.length) {
      setTrackId((prevState) => prevState + 1);
      selectSloak(trackId + 1);
    }
  };
  const onPlayerPrevTrackListener = () => {
    if (trackId > 1) {
      setTrackId((prevState) => prevState - 1);
      selectSloak(trackId - 1);
    }
  };

  const onAutoPlayClickListener = () => {
    // setTrackId((prevState) => 0);
    onTrackPlayEndedListener();
  };

  const onItemSelectListener = (item) => {
    setReaderPref("readingPreference", item);
  };

  const onClickBack = () => {
    router.push("/chapters");
  };

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
            <Stack>
              {data.length > 0 &&
                data.map((slokObj, index) => {
                  let refToSlokCard = React.createRef();
                  refHookArray.push(refToSlokCard);
                  let verse = slokObj["verse"];
                  let slok = slokObj["slok"];
                  let slokTransliteration = contentType.includes(
                    "transliteration"
                  )
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
                })}
            </Stack>
          </section>

          <AudioComponent
            trackId={trackId}
            chapter={chapter}
            onTrackPlayEnded={onTrackPlayEndedListener}
            onPlayerNextTrack={onPlayerNextTrackListener}
            onPlayerPrevTrack={onPlayerPrevTrackListener}
            onBrowserError={onBrowserErrorListener}
          />
        </main>
      </Layout>
    </React.Fragment>
  );
};

export default SlokasComponent;
