/** @format */

import React, { forwardRef, useContext, useEffect, useState } from "react";
import classes from "./SloaKcontainer.module.css";
import {
  BsFillPlayFill,
  BsFillPauseFill,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { AppContext } from "@/sotre/store";

const SloaKContainer = forwardRef(
  (
    {
      sloak,
      sloakTransliteration,
      chapterNumber,
      sloakNumber,
      sloakMeaning,
      sloakTranslation,
      onPlayBtClick,
    },
    ref
  ) => {
    const { state, dispatch } = useContext(AppContext);
    const [playBt, setPlayBt] = useState(true);
    let readingPreference = state["readingPreference"];
    let audioPlayer = state["player"];
    let audioId = audioPlayer["id"];
    let playerState = audioPlayer["playState"];
    let transliteration = state["transliterationInline"];
    let wordMeaning = state["wordMeaning"];
    let sloakNum = sloakNumber / 10 < 1 ? "0" + sloakNumber : sloakNumber;

    const onClickPlay = () => {
      setPlayBt((prevState) => !prevState);
      audioPlayer["id"] = sloakNumber;
      audioPlayer["playState"] = !audioPlayer["playState"];
      dispatch({ type: "ADD", key: "player", payload: audioPlayer });
    };

    useEffect(() => {
      // onPlayBtClick(playBt, sloakNumber);
    }, [playBt]);

    const newLine = (data) => {
      return data.split("\n").map((data, index) => {
        return (
          <div style={{ margin: "0.5rem auto" }} key={`${data}_${index}`}>
            {data}
          </div>
        );
      });
    };

    const mergeLines = () => {
      let sloakSplit = newLine(sloak);
      let transliterationSplit = sloakTransliteration.split("\n");
      return sloakSplit.map((sloak, index) => {
        return (
          <div key={`${sloak}_${index}`} style={{ margin: "0.5rem auto" }}>
            <span>{sloak}</span>
            <span>{transliterationSplit[index]}</span>
          </div>
        );
      });
    };

    const playerButton = () => {
      if (audioId === sloakNumber) {
        return playerState ? (
          <BsFillPauseFill className={`${classes.icon_pause}`} />
        ) : (
          <BsFillPlayFill className={`${classes.icon_play}`} />
        );
      } else {
        return <BsFillPlayFill className={`${classes.icon_play}`} />;
      }
    };

    return (
      <React.Fragment>
        <section
          className={
            readingPreference === "reading"
              ? `${classes.container_reading_pref}`
              : `${classes.container}`
          }
          ref={ref}
        >
          <div
            className={
              readingPreference === "reading"
                ? `${classes.action_container_reading_pref}`
                : `${classes.action_container}`
            }
          >
            <span>
              {chapterNumber}:<mark>{sloakNum}</mark>
            </span>
            <span onClick={onClickPlay}>{playerButton()}</span>
            <span>
              <BsFillBookmarkFill />
            </span>
          </div>
          <div className={`${classes.content_container}`}>
            <div className={`${classes.div_with_sloak}`}>
              {transliteration ? mergeLines() : newLine(sloak)}
            </div>
            {readingPreference === "translation" && wordMeaning && (
              <div className={`${classes.div_with_header}`}>
                <h3>word meanings</h3>
                <div>{newLine(sloakMeaning)}</div>
              </div>
            )}
            {readingPreference === "translation" && (
              <div className={`${classes.div_with_header}`}>
                <h3 className={`${classes.h3_translation}`}>translation</h3>
                <div>{newLine(sloakTranslation)}</div>
              </div>
            )}
          </div>
        </section>
      </React.Fragment>
    );
  }
);

export default SloaKContainer;
