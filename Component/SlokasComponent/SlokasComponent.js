/** @format */

import React, { useContext, useState, useEffect } from "react";
import classes from "./SlokasComponent.module.css";
import usePerfomanceHandler from "@/hooks/use-PerfomanceHandler";
import Setting from "../Setting/Setting";
import { AppContext } from "@/sotre/store";

import SloaKContainer from "../UI/SloakCard/SloakCard";
import Wrapper from "../Wrapper/Wrapper";

import { GITA_CH } from "@/model/const";
import AudioComponent from "../UI/AudioComponent/AudioComponent";
import SloakCard from "../UI/SloakCard/SloakCard";

const SlokasComponent = ({ chapter }) => {
  const { state, dispatch } = useContext(AppContext);
  let fontFamily = state["fontStyle"];
  let chapterDetail = state["chapters"][chapter - 1];
  let refHookArray = [];
  const [chapterNum, setChapter] = useState(chapter);
  const [trackId, setTrackId] = useState(0);
  const { getData } = usePerfomanceHandler();
  const [data, setData] = useState([]);
  console.log("state", state);
  const chapterSelected = (chapter) => {
    setChapter((prevState) => chapter);
  };

  const selectSloak = (sloakNum) => {
    refHookArray[sloakNum - 1].current.scrollIntoView({ behavior: "smooth" });
  };

  const onPlayBtClickListener = (payload) => {
    const { chapterNumber, sloakNumber } = payload;
    setTrackId((prevState) => sloakNumber);
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

  useEffect(() => {
    console.log("useEffect");
    getData(
      "/api/gita",
      {
        method: "POST",
        body: JSON.stringify({ chapter: chapter }),
        headers: { "Content-Type": "application-json" },
      },
      GITA_CH
    ).then((response) => {
      setData((prevState) => response);
    });
  }, [chapter]);

  return (
    <React.Fragment>
      <main style={{ fontFamily: `${fontFamily}` }}>
        <section></section>
        <section className={`${classes.container}`}>
          <Wrapper onAutoPlayClick={onAutoPlayClickListener}>
            {data.length > 0 &&
              [...Array(data.length)].map((_, index) => {
                //  if (sloakNumber === 47) {
                // return (
                //   <SloakCard
                //     ref={refToSloakContainer}
                //     key={sloakNumber}
                //     chapterNumber={chapter}
                //     sloakNumber={sloakNumber}
                //     sloak={sloak}
                //     sloakTransliteration={sloakTransliteration}
                //     sloakMeaning={wordMeaning}
                //     sloakTranslation={sloakTranslation}
                //     onPlayBtClick={onPlayBtClickListener}
                //   />
                // );
                // }
              })}
          </Wrapper>
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
