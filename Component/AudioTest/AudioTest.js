/** @format */

import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const AudioTest = ({ trackId, onTrackPlayEnded }) => {
  const [play, setPlay] = useState(false);
  let ref = useRef();
  console.log(trackId);
  useEffect(() => {
    if (trackId > 0) {
      setPlay((prevState) => !prevState);
      console.log(ref.current);
    }
  }, [trackId]);
  return (
    <React.Fragment>
      <ReactPlayer
        ref={ref}
        url={`/1/${trackId > 0 && trackId}.mp3`}
        playing={play}
        onEnded={onTrackPlayEnded}
        controls
      />
    </React.Fragment>
  );
};

export default AudioTest;
