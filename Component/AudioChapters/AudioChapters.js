/** @format */

import React, { useState } from "react";
import style from "./AudioChapter.module.css";
import Layout from "../Layout/Layout";
import AudioComponent from "../UI/AudioComponent/AudioComponent";
import useImage from "@/hooks/use-Image";
import Image from "next/image";
import { CHAPTERS_MENU } from "@/model/const";
import { FaPlay, FaPause } from "react-icons/fa6";
import IconHolder from "../UI/IconHolder/IconHolder";
import DropDown from "../UI/DropDown/DropDown";
import langCode from "@/model/LangCode";

const AudioChapters = (props) => {
  const { getImage } = useImage();
  const audioRef = React.createRef();
  const [play, setControl] = useState(0);
  const [lang, setLang] = useState("en");
  const audioSrcLoader = (trackId) => {
    audioRef.current.src = `/audio/lib/${lang}/${trackId}.mp3`;
    audioRef.current.load();
  };

  //AudioComponenet control Listener
  const controlListenerHanlder = (action) => {
    switch (action.type) {
      case "play":
        audioRef.current.play();

        break;
      case "pause":
        audioRef.current.pause();
        break;
      case "forward":
        //Forward
        break;
      case "backward":
        //backward
        break;
      case "seek":
        audioRef.current.currentTime = action.payload;
        break;
      case "close":
        audioRef.current.pause();
        break;
      case "playBackRate":
        audioRef.current.playbackRate = action.payload;
        break;
      case "ended":
        //no track Play ended
        console.log("ended");
        break;
      default:
        //no-opt
        break;
    }
  };

  console.log(play);

  return (
    <React.Fragment>
      <Layout>
        <p>New Feaure will be added later</p>
        <DropDown
          data={langCode}
          defaultValue={lang}
          onChange={(value) => {
            setLang((prevState) => value);
          }}
        />
        {CHAPTERS_MENU.map((chapter, index) => {
          let trackTitle = chapter["label"];
          let meaning = chapter["meaning"]["en"];
          let number = (index + 1) / 10 < 1 ? `0` + (index + 1) : index + 1;
          return (
            <div className={`${style.track}`} key={`track_${index + 1}`}>
              <span className={`${style.number}`}>{number}.</span>
              <div className={`${style.right_cnt}`}>
                <div className={`${style.card}`}>
                  <div className={`${style.image_container}`}>
                    <Image
                      src={getImage(index)}
                      alt="bhagavad gita"
                      width="100"
                      height="100"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>

                  <div
                    className={`${style.track_description}`}
                    onClick={(e) => {
                      e.preventDefault();
                      audioSrcLoader(index + 1);
                    }}
                  >
                    <h3>{trackTitle}</h3>
                    <span>{meaning}.</span>
                  </div>
                </div>

                <div>
                  <IconHolder>
                    {play === number ? (
                      <FaPause
                        className={`${style.icon}`}
                        onClick={(e) => {
                          e.preventDefault();
                          audioRef.current.pause();
                          setControl((prevState) => 0);
                        }}
                      />
                    ) : (
                      <FaPlay
                        className={`${style.icon}`}
                        onClick={(e) => {
                          e.preventDefault();
                          audioSrcLoader(index + 1);
                          setControl((prevState) => number);
                        }}
                      />
                    )}
                  </IconHolder>
                </div>
              </div>
            </div>
          );
        })}
      </Layout>
      <AudioComponent ref={audioRef} controlListener={controlListenerHanlder} />
    </React.Fragment>
  );
};

export default AudioChapters;
