/** @format */

import React, { forwardRef } from "react";
import classes from "./SlokCard.module.css";
import { ICON_COLOR, ICON_SIZE } from "@/model/const";
import IconHolder from "../IconHolder/IconHolder";

const SlokCard = forwardRef(
  (
    {
      slok,
      slokTransliteration,
      chapterNumber,
      slokNumber,
      slokMeaning,
      slokTranslation,
      onPlayBtClick,
      readerPref,
    },
    ref
  ) => {
    let verse = slokNumber / 10 < 1 ? "0" + slokNumber : slokNumber;

    const onClickPlay = () => {
      onPlayBtClick({ chapterNumber, slokNumber });
    };

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
      let slokSplit = newLine(slok);
      let transliterationSplit = slokTransliteration?.split("\n");
      return slokSplit?.map((slok, index) => {
        return (
          <div key={`${slok}_${index}`} style={{ margin: "0.5rem auto" }}>
            <span>{slok}</span>
            <span>{transliterationSplit[index]}</span>
          </div>
        );
      });
    };

    return (
      <React.Fragment>
        <section
          className={
            readerPref === "reading"
              ? `${classes.container_reading_pref}`
              : `${classes.container}`
          }
          ref={ref}
        >
          {/** Grid-Item-1 */}
          <div
            className={
              readerPref === "reading"
                ? `${classes.action_container_reading_pref}`
                : `${classes.action_container}`
            }
          >
            <span>
              {chapterNumber}:<mark>{verse}</mark>
            </span>

            <span onClick={onClickPlay}>
              <IconHolder>
                p{/* <Play size={ICON_SIZE} color={ICON_COLOR} /> */}
              </IconHolder>
            </span>

            <span>
              <IconHolder>
                b{/* <Bookmark size={ICON_SIZE} color={ICON_COLOR} /> */}
              </IconHolder>
            </span>
          </div>
          {/** Grid-Item-2 */}
          <div
            className={
              readerPref === "reading"
                ? `${classes.content_container} ${classes.content_container_reading_pref_pos}`
                : `${classes.content_container}`
            }
          >
            <div className={`${classes.div_with_sloak}`}>{mergeLines()}</div>
            {readerPref === "translation" && slokMeaning !== "" && (
              <div className={`${classes.div_with_header}`}>
                <h3>word meanings</h3>
                <div>{newLine(slokMeaning)}</div>
              </div>
            )}
            {readerPref === "translation" && (
              <div className={`${classes.div_with_header}`}>
                <h3 className={`${classes.h3_translation}`}>translation</h3>
                <div>{newLine(slokTranslation)}</div>
              </div>
            )}
          </div>
        </section>
      </React.Fragment>
    );
  }
);

export default SlokCard;
