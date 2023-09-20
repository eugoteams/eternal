/** @format */

import React, { useState, forwardRef } from "react";
import styles from "./AudioComponent.module.css";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaXmark,
} from "react-icons/fa6";

const AudioComponent = forwardRef(({ controlListener }, ref) => {
  const [playerState, setState] = useState({
    play: false,
    trackDuration: 0,
    trackDurationPlayed: 0,
    optMenu: false,
    playbackRate: 1,
    playerClosed: false,
  });

  let playbackRate = [
    "0.25",
    "0.5",
    "0.75",
    "normal",
    "1.25",
    "1.5",
    "1.75",
    "2",
  ];

  const convertSecToMinutes = (time) => {
    let minutes = Math.floor(time / 60);
    let extraSeconds = Math.round(time % 60);
    extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
    return `${minutes}:${extraSeconds}`;
  };

  const stateHandler = (key, value) => {
    setState((prevState) => {
      prevState[key] = value;
      return { ...prevState };
    });
  };

  return (
    <React.Fragment>
      <div>
        <audio
          ref={ref}
          autoPlay
          preload="metadata"
          style={{ display: "none" }}
          onPlay={() => {
            stateHandler("play", true);
            if (!playerState["playerClosed"]) {
              stateHandler("playerClosed", !playerState["playerClosed"]);
            }
            controlListener({
              type: "play",
            });
          }}
          onPause={() => {
            stateHandler("play", false);
            controlListener({
              type: "durationPlayed",
              payload: ref.current.currentTime,
            });
          }}
          onTimeUpdate={() => {
            stateHandler("trackDurationPlayed", ref.current.currentTime);
          }}
          onEnded={() => {
            stateHandler("play", false);
            controlListener({ type: "ended" });
          }}
          onLoadedMetadata={(value) => {
            stateHandler("trackDuration", ref.current.duration);
            controlListener({ type: "loadedMetaData" });
          }}
        ></audio>
        {playerState["playerClosed"] && (
          <div className={`${styles.container}`}>
            <div>
              <input
                type="range"
                className={`${styles.slider}`}
                onChange={(e) => {
                  controlListener({ type: "seek", payload: e.target.value });
                  stateHandler("trackDurationPlayed", e.target.value);
                }}
                value={playerState["trackDurationPlayed"]}
                min={0}
                max={playerState["trackDuration"]}
              />
            </div>
            <div>{convertSecToMinutes(playerState["trackDurationPlayed"])}</div>
            <div className={`${styles.controls}`}>
              <div
                onClick={(e) => {
                  stateHandler("optMenu", !playerState["optMenu"]);
                }}
              >
                <FiMoreHorizontal className={`${styles.icons}`} />
              </div>
              <div onClick={(e) => controlListener({ type: "backward" })}>
                <FaBackward />
              </div>
              <div>
                {playerState["play"] ? (
                  <FaPause
                    onClick={(e) => {
                      controlListener({ type: "pause" });
                    }}
                  />
                ) : (
                  <FaPlay
                    onClick={(e) => {
                      controlListener({ type: "play" });
                    }}
                  />
                )}
              </div>
              <div onClick={(e) => controlListener({ type: "forward" })}>
                <FaForward />
              </div>
              <div
                onClick={(e) => {
                  stateHandler("playerClosed", !playerState["playerClosed"]);
                  controlListener({ type: "close" });
                }}
              >
                <FaXmark />
              </div>
            </div>
            <div>{convertSecToMinutes(playerState["trackDuration"])}</div>
            {playerState["optMenu"] && (
              <div className={`${styles.playback_opt}`}>
                {playbackRate.map((playRate, index) => {
                  return (
                    <span
                      key={`${playRate}_${index}`}
                      onClick={(e) => {
                        stateHandler("playbackRate", playRate);
                        stateHandler("optMenu", !playerState["optMenu"]);
                        controlListener({
                          type: "playBackRate",
                          payload: playRate === "normal" ? 1 : playRate,
                        });
                      }}
                    >
                      {playRate}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
});

export default AudioComponent;
