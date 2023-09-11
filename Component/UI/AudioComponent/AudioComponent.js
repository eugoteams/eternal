/** @format */

import React, { useState, forwardRef } from "react";
import classes from "./AudioComponent.module.css";
import {
  MoreHorizontal,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  X,
} from "lucide-react";

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

  // console.log(playerState["play"]);
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
          }}
          onPause={() => {
            stateHandler("play", false);
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
          }}
        ></audio>
        {playerState["playerClosed"] && (
          <div className={`${classes.container}`}>
            <div>
              <input
                type="range"
                className={`${classes.slider}`}
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
            <div className={`${classes.controls}`}>
              <div
                className={`${classes.icons} `}
                onClick={(e) => {
                  stateHandler("optMenu", !playerState["optMenu"]);
                }}
              >
                <MoreHorizontal />
              </div>
              <div
                className={`${classes.icons}`}
                onClick={(e) => controlListener({ type: "backward" })}
              >
                <SkipBack />
              </div>
              <div className={`${classes.icons}`}>
                {playerState["play"] ? (
                  <Pause
                    onClick={(e) => {
                      console.log("Player *****", playerState["play"]);
                      controlListener({ type: "pause" });
                    }}
                  />
                ) : (
                  <Play
                    onClick={(e) => {
                      console.log("Player**** ", playerState["play"]);
                      controlListener({ type: "play" });
                    }}
                  />
                )}
              </div>
              <div
                className={`${classes.icons}`}
                onClick={(e) => controlListener({ type: "forward" })}
              >
                <SkipForward />
              </div>
              <div
                className={`${classes.icons}`}
                onClick={(e) => {
                  stateHandler("playerClosed", !playerState["playerClosed"]);
                  controlListener({ type: "close" });
                }}
              >
                <X />
              </div>
            </div>
            <div>{convertSecToMinutes(playerState["trackDuration"])}</div>
            {playerState["optMenu"] && (
              <div className={`${classes.playback_opt}`}>
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
