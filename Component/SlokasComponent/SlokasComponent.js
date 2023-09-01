/** @format */

import React, { useContext, useState, useEffect, useRef } from "react";
import classes from "./SlokasComponent.module.css";
import usePerfomanceHandler from "@/hooks/use-PerfomanceHandler";
import { AppContext } from "@/sotre/store";
import SlokCard from "../UI/SlokCard/SlokCard";
import { GITA_CH, readingPrefSwitch } from "@/model/const";
import AudioComponent from "../UI/AudioComponent/AudioComponent";
import Switch from "../UI/Switch/Switch";
import { useRouter } from "next/router";
import AudioTest from "../AudioTest/AudioTest";

const SlokasComponent = ({ chapter }) => {
  const { state, dispatch } = useContext(AppContext);
  const [data, setData] = useState([]);
  const router = useRouter();
  //let data = state["data"];
  let readingPref = state["readingPreferencesN"];
  let translator = readingPref["readingPreferenceTranslator"];
  let lang = readingPref["wordByWordLocale"];
  let readerPref = readingPref["readingPreference"];
  let chapterDetail = state["chapters"][chapter - 1];
  let refHookArray = [];

  //Player track state
  const [trackId, setTrackId] = useState(0);
  const { getData } = usePerfomanceHandler();
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

  //OnComponentLoad.
  useEffect(() => {
    fetchData();
  }, []);

  const onPlayBtClickListener = (payload) => {
    const { chapterNumber, slokNumber } = payload;
    setTrackId((prevState) => slokNumber);
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
    setTrackId((prevState) => 0);
    onTrackPlayEndedListener();
  };

  const onItemSelectListener = (item) => {
    readingPref["readingPreference"] = item;
    dispatch({
      type: "ADD",
      key: "readingPreferencesN",
      payload: { ...readingPref },
    });
  };

  const onClickBack = () => {
    router.push("/chapters");
  };

  //console.log(translator, lang, data[0]);
  return (
    <React.Fragment>
      <main>
        <section>
          <Switch
            toggleButton={readingPrefSwitch}
            itemSelected={readerPref}
            onItemChange={onItemSelectListener}
          />
        </section>
        <section className={`${classes.container}`}>
          <section>
            <span className={`${classes.back_bt}`} onClick={onClickBack}>
              back
            </span>
          </section>

          <section>
            {data.length > 0 &&
              data.map((slokObj, index) => {
                let refToSlokCard = React.createRef();
                refHookArray.push(refToSlokCard);
                let verse = slokObj["verse"];
                let slok = slokObj["slok"];
                let slokTransliteration = slokObj["transliteration"];
                let slokMeaning = slokObj["word_meanings"];
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
          </section>
        </section>
        {/* <AudioTest
          trackId={trackId}
          onTrackPlayEnded={onTrackPlayEndedListener}
        /> */}
        <AudioComponent
          trackId={trackId}
          chapter={chapter}
          onTrackPlayEnded={onTrackPlayEndedListener}
          onPlayerNextTrack={onPlayerNextTrackListener}
          onPlayerPrevTrack={onPlayerPrevTrackListener}
        />
      </main>
    </React.Fragment>
  );
};

export default SlokasComponent;
