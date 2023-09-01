/** @format */

import { Play } from "lucide-react";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const AudioTest = ({ trackId }) => {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    if (trackId > 0) {
      setPlay((prevState) => !prevState);
    }
  }, [trackId]);
  return (
    <React.Fragment>
      <ReactPlayer url={`/1/${trackId > 0 && trackId}.mp3`} playing={play} />
    </React.Fragment>
  );
};

export default AudioTest;
