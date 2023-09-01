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

const SlokasComponent = ({ chapter }) => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const [trackId, setTrackId] = useState(0);
  const { getData } = usePerfomanceHandler();
  const { translator, lang, readerPref, chapters, contentType, setReaderPref } =
    useDispatch();
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
    setReaderPref("readingPreference", item);
  };

  const onClickBack = () => {
    router.push("/chapters");
  };

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
        <section>
          {contentType.map((item, _) => {
            return <span key={`${contentType}_${item}`}>{item}</span>;
          })}
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
          </section>
        </section>
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
