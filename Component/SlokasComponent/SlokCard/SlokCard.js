/** @format */

import React, { forwardRef } from "react";
import styles from "./SlokCard.module.css";
import { ICON_COLOR, ICON_SIZE } from "@/model/const";
import IconHolder from "../../UI/IconHolder/IconHolder";

import { FaPlay } from "react-icons/fa6";

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
          <p style={{ margin: "0.5rem auto" }} key={`${data}_${index}`}>
            {data}
          </p>
        );
      });
    };

    const mergeLines = () => {
      let slokSplit = newLine(slok);
      let transliterationSplit = slokTransliteration?.split("\n");
      return slokSplit?.map((slok, index) => {
        return (
          <div key={`${slok}_${index}`} style={{ margin: "0.5rem auto" }}>
            <span
              style={{
                color: "#212529",
                fontWeight: 500,
              }}
            >
              {slok}
            </span>
            <span
              style={{
                color: "#4263eb",
                fontWeight: 500,
              }}
            >
              {transliterationSplit[index]}
            </span>
          </div>
        );
      });
    };

    return (
      <React.Fragment>
        <section
          className={
            readerPref === "reading"
              ? `${styles.container_reading_pref}`
              : `${styles.container}`
          }
          ref={ref}
          tabIndex={slokNumber}
        >
          {/** Grid-Item-1 */}
          <div
            className={
              readerPref === "reading"
                ? `${styles.action_container_reading_pref}`
                : `${styles.action_container}`
            }
          >
            <span>
              {chapterNumber}:<mark>{verse}</mark>
            </span>

            <span onClick={onClickPlay} onTouchStart={onClickPlay}>
              <IconHolder>
                <FaPlay style={{ fontSize: "1.5rem", color: "#7950f2" }} />
              </IconHolder>
            </span>

            <span>
              {/* <IconHolder>
                <Bookmark size={ICON_SIZE} color={ICON_COLOR} />
              </IconHolder> */}
            </span>
          </div>
          {/** Grid-Item-2 */}
          <div
            className={
              readerPref === "reading"
                ? `${styles.content_container} ${styles.content_container_reading_pref_pos}`
                : `${styles.content_container}`
            }
          >
            <div className={`${styles.div_with_sloak}`}>{mergeLines()}</div>
            {readerPref === "translation" && slokMeaning !== "" && (
              <div className={`${styles.div_with_header}`}>
                <h3>word meanings :</h3>
                <div>{newLine(slokMeaning)}</div>
              </div>
            )}
            {readerPref === "translation" && (
              <div className={`${styles.div_with_header}`}>
                <h3>translation :</h3>
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
