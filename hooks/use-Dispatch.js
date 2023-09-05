/** @format */

import { defaultSetting } from "@/model/const";
import { AppContext } from "@/sotre/store";
import { defaultAuthors, fontToggleBtx } from "@/model/const";
import { useContext } from "react";

const useDispatch = () => {
  const { state, dispatch, player, setPlayer } = useContext(AppContext);
  let readerPreferences = state["readingPreferencesN"];
  let readerStyles = state["gitaReaderStyles"];
  let navigation = state["navigation"];
  let readerPref = readerPreferences["readingPreference"];
  let translator = readerPreferences["readingPreferenceTranslator"];
  let contentType = readerPreferences["wordByWordContentType"];
  let displayType = readerPreferences["wordByWordDisplay"];
  let lang = readerPreferences["wordByWordLocale"];
  let theme = readerPreferences[""];
  let fontType = readerStyles["gitaFont"];
  // let chapters = state["chapters"];
  // let chapterNavigated = navigation["chapter"];
  let sideNavVisible = navigation["navigationIsVisible"];
  let sloks = navigation["sloks"];
  let audioTagRef = player["audioRef"];
  let isVisible = player["isVisible"];

  const setReaderPref = (key, value) => {
    readerPreferences[key] = value;
    state["readingPreferencesN"] = readerPreferences;
    dispatch({
      type: "ADD_R",
      payload: { ...state },
    });
  };

  const setReaderStyle = (key, value) => {
    readerStyles[key] = value;
    state["gitaReaderStyles"] = readerStyles;
    dispatch({
      type: "ADD_R",
      payload: { ...state },
    });
  };

  const setNavigation = (key, value) => {
    navigation[key] = value;
    dispatch({
      type: "ADD_R",
      payload: { ...state },
    });
  };

  const setDefaultSetting = () => {
    dispatch({
      type: "ADD_R",
      payload: {
        navigation: {
          chapter: "Arjuna's Dilemma",
          sloks: 0,
          navigationIsVisible: false,
        },
        gitaReaderStyles: { gitaFont: fontToggleBtx[1]["value"] },
        readingPreferencesN: {
          readingPreference: "translation",
          wordByWordLocale: "et",
          wordByWordContentType: [],
          wordByWordDisplay: [],
          readingPreferenceTranslator: defaultAuthors["et"],
        },
      },
    });
  };

  // const setPlayer = (key, value) => {
  //   player[key] = value;
  //   dispatch({
  //     type: "ADD_R",
  //     payload: { ...state },
  //   });
  // };

  const setPlayerState = (key, value) => {
    player[key] = value;
    setPlayer((prevState) => {
      return { ...player };
    });
    console.log("Player State", player);
  };

  return {
    setReaderPref,
    setReaderStyle,
    setNavigation,
    setPlayerState,
    setDefaultSetting,
    readerPref,
    translator,
    contentType,
    displayType,
    lang,
    theme,
    readerStyles,
    fontType,
    // chapters,
    // chapterNavigated,
    sloks,
    sideNavVisible,
    audioTagRef, //It holds the refrenc to audio Tag,
    isVisible, //on this state we will display / hide the player.
  };
};

export default useDispatch;
