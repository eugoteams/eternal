/** @format */

import React, { useState, useEffect, useRef } from "react";
import classes from "./AudioComponent.module.css";
import { TbPlayerPlayFilled, TbPlayerPauseFilled } from "react-icons/tb";

const AudioComponent = (props) => {
  const [client, setClient] = useState(false);
  const [play, setPlay] = useState(false);

  // console.log("ref", audioRef);
  return (
    <React.Fragment>
      <div
        onClick={() => {
          setPlay((prevState) => !prevState);
        }}
        className={`${classes.icon}`}
      >
        {play ? (
          <TbPlayerPauseFilled className={`${classes.icon_pause}`} />
        ) : (
          <TbPlayerPlayFilled />
        )}
      </div>
      <div>{props.children}</div>
       
      {/* <audio
        autoPlay
        ref={audioRef}
        className={`${classes.audio}`}
        id={`audio_tag_${sloakNum}`}
        src={`../1/${sloakNum}.mp3`}
        onEnded={() => {
          setPlay((prevState) => false);
          onPlayerEnd();
        }}
      ></audio> */}
    </React.Fragment>
  );
};

export default AudioComponent;
