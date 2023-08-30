/** @format */

import React, { useContext, useState } from "react";
import classes from "./Wrapper.module.css";
import { AppContext } from "@/sotre/store";

const Wrapper = (props) => {
  const { state, dispatch } = useContext(AppContext);
  let readingPreference = state["readingPreference"];
  let transliteration = state["transliterationInline"];
  let word_meanings = state["wordMeaning"];

  const onChangeSettings = (key) => {
    dispatch({ type: "ADD", key: key, payload: !state[key] });
  };

  const togglePlayerControl = () => {
    props.onAutoPlayClick();
  };

  return (
    <React.Fragment>
      <section>
        <div className={`${classes.wrapper_header}`}>
          <div className={`${classes.shortcut_setting}`}>
            <span
              onClick={(e) => {
                onChangeSettings("transliterationInline");
              }}
              className={transliteration ? `${classes.span_active}` : undefined}
            >
              transliteration
            </span>
            {readingPreference === "translation" && (
              <span
                onClick={(e) => {
                  onChangeSettings("wordMeaning");
                }}
                className={word_meanings ? `${classes.span_active}` : undefined}
              >
                word_meanings
              </span>
            )}
          </div>
          <div
            className={`${classes.player_control}`}
            onClick={togglePlayerControl}
          >
            <span>play audio</span>
          </div>
        </div>

        <div>{props.children}</div>
      </section>
    </React.Fragment>
  );
};

export default Wrapper;
