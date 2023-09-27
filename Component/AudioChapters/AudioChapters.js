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
import Loader from "../UI/Loader/Loader";

const AudioChapters = (props) => {
  const { getImage } = useImage();
  const audioRef = React.createRef();
  const trackRefArray = [];
  const [lang, setLang] = useState("en");
  const [trackId, setTrack] = useState(0);
  const [play, setPlay] = useState(false);
  const [durationPlayed, setDutationPlaye] = useState(0);
  const [loader, setLoader] = useState(false);

  const audioSrcLoader = (track, d = 1) => {
    audioRef.current.src = `/audio/lib/${lang}/${track}.mp3`;
    if (durationPlayed !== 0 && d === 1) {
      console.log("entered into if block");
      audioRef.current.currentTime = durationPlayed;
      audioRef.current.play();
    } else {
      audioRef.current.load();
    }
  };

  const scrollTo = (trackId) => {
    let index = trackId - 1;
    trackRefArray[index].current.scrollIntoView({
      behavior: "smooth",
    });
  };

  //AudioComponent control Listener
  const controlListenerHanlder = (action) => {
    switch (action.type) {
      case "play":
        audioRef.current.play();
        setPlay((prevState) => true);
        setLoader((prevState) => false);
        break;
      case "pause":
        audioRef.current.pause();
        setPlay((prevState) => false);
        break;
      case "forward":
        setPlay((prevState) => !prevState);
        setDutationPlaye((prevState) => 0);
        let nextTrack = trackId + 1;
        scrollTo(nextTrack);
        if (trackId < 18) {
          setTrack((prevState) => nextTrack);
        }
        setLoader((prevState) => true);
        break;
      case "backward":
        //backward
        setPlay((prevState) => !prevState);
        setDutationPlaye((prevState) => 0);
        let prevTrack = trackId - 1;
        scrollTo(prevTrack);
        if (prevTrack > 0) {
          setTrack((prevState) => prevTrack);
        }
        setLoader((prevState) => true);
        break;
      case "seek":
        setDutationPlaye((prevState) => action.payload);
        audioRef.current.currentTime = action.payload;
        break;
      case "close":
        audioRef.current.pause();
        setPlay((prevState) => !prevState);
        break;
      case "playBackRate":
        audioRef.current.playbackRate = action.payload;
        break;
      case "ended":
        //no track Play ended
        setPlay((prevState) => !prevState);
        setDutationPlaye((prevState) => 0);
        if (trackId < 18) {
          let newTrack = trackId + 1;
          scrollTo(newTrack);
          setTrack((prevState) => newTrack);
        }
        break;
      case "durationPlayed":
        setDutationPlaye((prevState) => action.payload);
        break;
      default:
        //no-opt
        break;
    }
  };

  useEffect(() => {
    //If Lang changes force to load src.
    audioSrcLoader(trackId, 0);
  }, [lang, trackId]);

  return (
    <React.Fragment>
      <Layout>
        <div className={`${style.select_area}`}>
          <span>Select the audio Language</span>
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
        <div className={`${style.playList}`}>
          {CHAPTERS_MENU.map((chapter, index) => {
            let trackTitle = chapter["label"];
            let meaning = chapter["meaning"]["en"];
            let chapterNumber = index + 1;
            let number =
              chapterNumber / 10 < 1 ? `0${chapterNumber}` : index + 1;
            let trackRef = React.createRef();
            trackRefArray.push(trackRef);
            return (
              <div
                className={`${style.track}`}
                key={`track_${index + 1}`}
                ref={trackRef}
              >
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
                            setLoader((prevState) => !prevState);
                            if (trackId !== chapterNumber) {
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
                {/** Loader Container */}
                {loader && trackId === chapterNumber ? (
                  <div className={`${style.Loader}`}>
                    <div className={`${style.loader_overlay}`}></div>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    >
                      <Loader />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </Layout>
      <AudioComponent ref={audioRef} controlListener={controlListenerHanlder} />
    </React.Fragment>
  );
};

export default AudioChapters;
