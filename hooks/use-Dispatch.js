/** @format */

import { defaultSetting } from "@/model/const";
import { AppContext } from "@/store/store";
import { defaultAuthors, fontToggleBtx } from "@/model/const";
import { useContext } from "react";

const useDispatch = () => {
  const { state, dispatch, nav, setNav } = useContext(AppContext);
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
  let chapterNavigated = navigation["chapter"];
  let chapterNavigated_1 = nav["chapter"];

  let sideNavVisible = navigation["navigationIsVisible"];
  let sloks = navigation["sloks"];
  let sloks_1 = nav["sloks"];
  let sloakHeaderMenu = nav["openMenu"];
  let startingVerse = nav["startingVerse"];

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

  //SetNavigation_not in localstorage
  const setNavigation_1 = (key, value) => {
    nav[key] = value;
    setNav((prevState) => {
      return { ...nav };
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

  return {
    setReaderPref,
    setReaderStyle,
    setNavigation,
    //AppState -> notStored in LocalStorage
    setNavigation_1,
    setDefaultSetting,
    readerPref,
    translator,
    contentType,
    displayType,
    lang,
    theme,
    readerStyles,
    fontType,
    chapterNavigated,
    sloks,
    sideNavVisible,
    //AppState -> notStored in LocalStorage
    chapterNavigated_1,
    sloks_1,
    sloakHeaderMenu,
    startingVerse,
  };
};

export default useDispatch;
