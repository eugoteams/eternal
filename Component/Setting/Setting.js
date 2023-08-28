/** @format */

import React, { useContext, useState } from "react";
import { AppContext } from "@/sotre/store";
import classes from "./Setting.module.css";
import { FcSettings } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import DropDown from "../UI/DropDown/DropDown";
import FontCounter from "../UI/FontCounter/FontCounter";

import {
  FONT_2,
  FONT_1,
  TRANSLATION_LANG,
  defaultSetting,
  defaultAuthors,
} from "@/model/const";

const Setting = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const onClickReset = () => {
    dispatch({ type: "R_STATE", payload: defaultSetting });
  };

  const onLangSelectListener = (lang) => {
    dispatch({
      type: "ADD",
      key: "translationTo",
      payload: lang,
    });
    dispatch({
      type: "ADD",
      key: "author",
      payload: defaultAuthors[lang],
    });
  };

  const onDisplaySelect = (stateKey) => {
    dispatch({
      type: "ADD",
      key: stateKey,
      payload: !state[stateKey],
    });
  };
  const onSelectFont = (font) => {
    dispatch({
      type: "ADD",
      key: "fontStyle",
      payload: font,
    });
  };
  return (
    <React.Fragment>
      <div
        className={`${classes.icon}`}
        onClick={(event) => {
          setOpen((prevState) => !prevState);
        }}
      >
        <FcSettings />
      </div>
      {open && (
        <div className={`${classes.container}`}>
          <div
            className={`${classes.icon}`}
            onClick={(event) => {
              setOpen((prevState) => !prevState);
            }}
          >
            <GrClose />
          </div>
          <section className={`${classes.font_style_section}`}>
            <h3 className={`${classes.section_title}`}>bagvad gita font</h3>
            <div className={`${classes.toggle_style}`}>
              <span
                className={
                  state.fontStyle === FONT_2
                    ? `${classes.toggle_item} ${classes.toggle_item_active} `
                    : `${classes.toggle_item}`
                }
                onClick={(event) => {
                  onSelectFont(FONT_2);
                }}
              >
                noto devanagari
              </span>
              <span
                className={
                  state.fontStyle === FONT_1
                    ? `${classes.toggle_item} ${classes.toggle_item_active} `
                    : `${classes.toggle_item}`
                }
                onClick={(event) => {
                  onSelectFont(FONT_1);
                }}
              >
                poppins
              </span>
            </div>
          </section>
          <section className={`${classes.font_style_section}`}>
            <h3 className={`${classes.section_title}`}>sloak font size</h3>
            <div className={`${classes.font_size_counter}`}>
              <span>font size</span>
              <FontCounter datakey="sloak" />
            </div>
            <div className={`${classes.font_size_counter}`}>
              <span>translation size</span>
              <FontCounter datakey="translation" />
            </div>
          </section>
          <section className={`${classes.font_style_section}`}>
            <h3 className={`${classes.section_title}`}>translation to ...</h3>
            {TRANSLATION_LANG.map((lang, index) => {
              return (
                <div
                  key={`${lang}${index}`}
                  className={`${classes.radio_select}`}
                >
                  <input
                    type="checkbox"
                    className={`${classes.radio}`}
                    id={lang["id"]}
                    name="fav_language"
                    value={lang["id"]}
                    onChange={(event) => {
                      onLangSelectListener(event.target.value);
                    }}
                    checked={state.translationTo === lang["id"] ? true : false}
                  />
                  <label htmlFor={lang["id"]}>{lang["name"]}</label>
                </div>
              );
            })}
          </section>
          <section className={`${classes.font_style_section}`}>
            <h3 className={`${classes.section_title}`}>word by word</h3>
            <div className={`${classes.radio_select}`}>
              <input
                type="checkbox"
                className={`${classes.radio}`}
                id={"transliterationInline"}
                name="transliterationInline"
                value={state.transliterationInline}
                onChange={(e) => {
                  onDisplaySelect("transliterationInline");
                }}
                checked={state.transliterationInline ? true : false}
              />
              <label htmlFor={"transliterationInline"}>
                inline transliteration
              </label>
            </div>
            <div className={`${classes.radio_select}`}>
              <input
                type="checkbox"
                className={`${classes.radio}`}
                id={"word_meanings"}
                name="word_meanings"
                value={state.wordMeaning}
                onChange={(e) => {
                  onDisplaySelect("wordMeaning");
                }}
                checked={state.wordMeaning ? true : false}
              />
              <label htmlFor={"wordMeaning"}>word meanings</label>
            </div>
          </section>
          <section className={`${classes.font_style_section}`}>
            <h3 className={`${classes.section_title}`}>translators</h3>
            <div>
              <DropDown filterKey="name" />
            </div>
            <div className={`${classes.author_description}`}>
              <em>{state["author"]["description"]}</em>
            </div>
          </section>
          <section style={{ textAlign: "center", margin: "4rem auto" }}>
            <button onClick={onClickReset} className={`${classes.button}`}>
              reset setting
            </button>
          </section>
        </div>
      )}
    </React.Fragment>
  );
};

export default Setting;
