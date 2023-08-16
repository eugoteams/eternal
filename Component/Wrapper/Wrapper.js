/** @format */

import React, { useContext } from "react";
import classes from "./Wrapper.module.css";
import { BiCheckDouble } from "react-icons/bi";
import { AppContext } from "@/sotre/store";
import SmDropDown from "../UI/SmDropDown/SmDropDown";

const Wrapper = (props) => {
  const { state, dispatch } = useContext(AppContext);
  let readingPreference = state["readingPreference"];
  let transliteration = state["transliterationInline"];
  let word_meanings = state["wordMeaning"];

  const onChangeSettings = (key) => {
    dispatch({ type: "ADD", key: key, payload: !state[key] });
  };

  return (
    <React.Fragment>
      <section>
        <div className={`${classes.header}`}>
          <SmDropDown />
        </div>
        <div className={`${classes.shortcut_setting}`}>
          <span
            onClick={(e) => {
              onChangeSettings("transliterationInline");
            }}
            className={transliteration ? `${classes.span_active}` : undefined}
          >
            transliteration <BiCheckDouble className={`${classes.icon}`} />
          </span>
          {readingPreference === "translation" && (
            <span
              onClick={(e) => {
                onChangeSettings("wordMeaning");
              }}
              className={word_meanings ? `${classes.span_active}` : undefined}
            >
              word_meanings <BiCheckDouble className={`${classes.icon}`} />
            </span>
          )}
        </div>
        <div className={`${classes.list_container}`}>{props.children}</div>
      </section>
    </React.Fragment>
  );
};

export default Wrapper;
