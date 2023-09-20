/** @format */

import React, { useEffect, useState } from "react";
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
  // const [chapter, setChapter] = useState(0);
  const [lang, setLang] = useState("en");
  const [trackId, setTrack] = useState(0);
  const [play, setPlay] = useState(false);
  const [player, setPlayer] = useState(false);
  const [durationPlayed, setDutationPlaye] = useState(0);

  const audioSrcLoader = (track, d = 1) => {
    console.log(
      "audioSrc",
      `/audio/lib/${lang}/${track}.mp3`,
      durationPlayed,
      d
    );
    audioRef.current.src = `/audio/lib/${lang}/${track}.mp3`;
    if (durationPlayed !== 0 && d === 1) {
      audioRef.current.currentTime = durationPlayed;
      audioRef.current.play();
    } else {
      audioRef.current.load();
    }

    console.log("playerOpen", player);
  };

  //AudioComponenet control Listener
  const controlListenerHanlder = (action) => {
    switch (action.type) {
      case "play":
        audioRef.current.play();
        setPlay((prevState) => !play);
        console.log("playing");
        break;
      case "pause":
        audioRef.current.pause();
        setPlay((prevState) => !play);
        // console.log("pause");
        break;
      case "forward":
        //Forward
        break;
      case "backward":
        //backward
        break;
      case "seek":
        setDutationPlaye((prevState) => action.payload);
        audioRef.current.currentTime = action.payload;
        break;
      case "close":
        audioRef.current.pause();
        setPlay((prevState) => !play);
        break;
      case "playBackRate":
        audioRef.current.playbackRate = action.payload;
        break;
      case "ended":
        //no track Play ended
        console.log("ended");
        break;
      case "durationPlayed":
        //duration played
        //console.log("durationPlayed", action.payload);
        setDutationPlaye((prevState) => action.payload);
        break;
      case "loadedMetaData":
        setPlayer((prevState) => true);
        break;
      default:
        //no-opt
        break;
    }
  };

  useEffect(() => {
    // setPlayer((prevState) => false);
    // setDutationPlaye((prevState) => 0);
  }, [trackId]);
  // console.log(trackId);

  return (
    <React.Fragment>
      <Layout>
        <div className={`${style.select_area}`}>
          <span>Select the Language</span>
          <div>
            <DropDown
              data={langCode}
              defaultValue={lang}
              onChange={(value) => {
                setLang((prevState) => value);
              }}
            />
          </div>
        </div>

        {CHAPTERS_MENU.map((chapter, index) => {
          let trackTitle = chapter["label"];
          let meaning = chapter["meaning"]["en"];
          let chapterNumber = index + 1;
          let number = chapterNumber / 10 < 1 ? `0${chapterNumber}` : index + 1;
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
                      // audioSrcLoader(chapterNumber);
                    }}
                  >
                    <h3>{trackTitle}</h3>
                    <span>{meaning}.</span>
                  </div>
                </div>

                <div className={`${style.icon_control}`}>
                  <IconHolder>
                    {trackId === chapterNumber && play ? (
                      // <div className={`${style.loader}`}></div>
                      <FaPause
                        className={`${style.icon_pause}`}
                        onClick={(e) => {
                          e.preventDefault();
                          audioRef.current.pause();
                          setPlay((prevState) => !play);
                        }}
                      />
                    ) : (
                      <FaPlay
                        className={`${style.icon}`}
                        onClick={(e) => {
                          e.preventDefault();

                          console.log("---->", trackId, chapterNumber);
                          if (trackId !== chapterNumber) {
                            console.log("Chapter & trackID is not equal ");
                            setTrack((prevState) => chapterNumber);
                            audioSrcLoader(chapterNumber, 0);
                            setPlay((prevState) => true);
                            setDutationPlaye((prevState) => 0);
                          } else {
                            setPlay((prevState) => !prevState);
                            audioSrcLoader(chapterNumber);
                          }
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
