/** @format */

import React, { useEffect, useRef, useState } from "react";
import classes from "./AudioComponent.module.css";
import { AlignRightIcon } from "lucide-react";

const AudioComponent = ({
  trackId,
  chapter,
  onTrackPlayEnded,
  onPlayerNextTrack,
  onPlayerPrevTrack,
  onBrowserError,
}) => {
  let audioRef = useRef();
  const [playerState, setState] = useState({
    play: false,
    trackDuration: 0,
    trackDurationPlayed: 0,
    optMenu: false,
    playbackRate: 1,
    playerClosed: false,
    mute: true,
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

  const playerStateManipulator = (key, value) => {
    let prevState = playerState;

    switch (true) {
      case key === "play":
        if (value) {
          audioRef.current.src = `/${chapter}/${trackId}.mp3`;
          audioRef.current.load();

          if (prevState["trackDurationPlayed"] > 0) {
            audioRef.current.currentTime = prevState["trackDurationPlayed"];
            audioRef.current.playbackRate = prevState["playbackRate"];
          }
          let playPromise = audioRef.current.play();

          if (playPromise !== undefined) {
            playPromise
              .then((_) => {
                // Automatic playback started!
                // Show playing UI.
                console.log("Playing audio");
              })
              .catch((error) => {
                // Auto-play was prevented
                // Show paused UI.
                console.log("error", error.name);

                if (error.name === "NotAllowedError") {
                  console.log("PopUp");
                  onBrowserError();
                  alert("NotAllowedError");
                }
                return;
              });
          }
        } else {
          audioRef.current.pause();
        }
        prevState[key] = value;
        setState((prevSt) => {
          return { ...prevState };
        });
        break;
      case key === "playbackRate":
        if (value === 0 || value === "normal") {
          audioRef.current.playbackRate = 1;
          prevState[key] = 1;
        } else {
          audioRef.current.playbackRate = value;
          prevState[key] = value;
        }

        prevState["optMenu"] = false;
        setState((prevSt) => {
          return { ...prevState };
        });
        break;
      case key === "reset":
        prevState["trackDuration"] = 0;
        prevState["trackDurationPlayed"] = 0;
        prevState["playbackRate"] = 1;
        setState((prevSt) => {
          return { ...prevState };
        });
        break;
      default:
        prevState[key] = value;
        setState((prevSt) => {
          return { ...prevState };
        });
    }

    // setState((prevState) => {

    //   return { ...prevState };
    // });
  };

  //console.log("Play State", playerState["play"]);
  const onPlayerDurationUpdateListener = () => {
    let durationPlayed = audioRef.current.currentTime;
    playerStateManipulator("trackDurationPlayed", durationPlayed);
  };

  const onPlayerPlayEndedListener = () => {
    playerStateManipulator("reset", undefined);
    playerStateManipulator("play", false);
    onTrackPlayEnded();
  };

  const onRangeChangeListener = (event) => {
    let dragedRange = event.target.value;
    audioRef.current.currentTime = dragedRange;
    playerStateManipulator("trackDurationPlayed", dragedRange);
  };

  const onLoadMetaDataListener = () => {
    playerStateManipulator("trackDuration", audioRef.current.duration);
  };

  const onClickForwardListener = (event) => {
    playerStateManipulator("play", false);
    playerStateManipulator("reset", undefined);
    onPlayerNextTrack();
  };

  const onClickBackWardListener = (event) => {
    playerStateManipulator("play", false);
    playerStateManipulator("reset", undefined);
    onPlayerPrevTrack();
  };

  const onCanPlayListener = (e) => {
    console.log("onCanPlayListener");
  };

  /** Track ID  */
  useEffect(() => {
    if (trackId !== 0 && trackId !== undefined) {
      console.log("Test", trackId);
      playerStateManipulator("playerClosed", true);
      playerStateManipulator("reset", undefined);
      setTimeout(() => {
        playerStateManipulator("reset", undefined);
        playerStateManipulator("play", true);
      }, 1800);
    }
  }, [trackId]);

  return (
    <React.Fragment>
      {playerState["playerClosed"] && (
        <div>
          <audio
            style={{ display: "none" }}
            ref={audioRef}
            onTimeUpdate={onPlayerDurationUpdateListener}
            onEnded={onPlayerPlayEndedListener}
            preload="metadata"
            onLoadedMetadata={onLoadMetaDataListener}
            onCanPlay={onCanPlayListener}
          ></audio>
          <div className={`${classes.container}`}>
            <div>
              <input
                type="range"
                className={`${classes.slider}`}
                onChange={onRangeChangeListener}
                value={playerState["trackDurationPlayed"]}
                min={0}
                max={playerState["trackDuration"]}
              />
            </div>
            <div>{convertSecToMinutes(playerState["trackDurationPlayed"])}</div>
            <div className={`${classes.controls}`}>
              <div
                className={`${classes.icons} `}
                onClick={(e) => playerStateManipulator("optMenu", true)}
              >
                <span>...</span>
              </div>
              <div
                className={`${classes.icons}`}
                onClick={onClickBackWardListener}
              >
                <span>fb</span>
              </div>
              <div className={`${classes.icons}`}>
                {playerState["play"] ? (
                  <span
                    onClick={(e) => {
                      console.log("onPause clicked");
                      playerStateManipulator("play", false);
                    }}
                  >
                    pa
                  </span>
                ) : (
                  <span
                    onClick={(e) => {
                      console.log("Click Activated");
                      playerStateManipulator("play", true);
                    }}
                    style={{ border: "1px solid red" }}
                  >
                    p
                  </span>
                )}
              </div>
              <div
                className={`${classes.icons}`}
                onClick={onClickForwardListener}
              >
                <span>fa</span>
              </div>
              <div
                className={`${classes.icons}`}
                onClick={(e) => playerStateManipulator("playerClosed", false)}
              >
                <span>c</span>
              </div>
            </div>
            <div>{convertSecToMinutes(playerState["trackDuration"])}</div>
            {playerState["optMenu"] && (
              <div className={`${classes.playback_opt}`}>
                {playbackRate.map((playRate, index) => {
                  return (
                    <span
                      key={`${playRate}_${index}`}
                      onClick={(e) =>
                        playerStateManipulator("playbackRate", playRate)
                      }
                    >
                      {playRate}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default AudioComponent;
