/** @format */

import { AppContext } from "@/sotre/store";
import { useContext } from "react";

const useDispatch = () => {
  const { state, dispatch } = useContext(AppContext);
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
  let chapters = state["chapters"];
  // let chapterNavigated = navigation["chapter"];
  let sideNavVisible = navigation["navigationIsVisible"];
  let sloks = navigation["sloks"];

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

  return {
    setReaderPref,
    setReaderStyle,
    setNavigation,
    readerPref,
    translator,
    contentType,
    displayType,
    lang,
    theme,
    readerStyles,
    fontType,
    chapters,
    // chapterNavigated,
    sloks,
    sideNavVisible,
  };
};

export default useDispatch;
