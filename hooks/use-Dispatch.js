/** @format */

import { AppContext } from "@/sotre/store";
import { useContext } from "react";

const useDispatch = () => {
  const { state, dispatch } = useContext(AppContext);
  let readerPreferences = state["readingPreferencesN"];
  let readerStyles = state["gitaReaderStyles"];
  let readerPref = readerPreferences["readingPreference"];
  let translator = readerPreferences["readingPreferenceTranslator"];
  let contentType = readerPreferences["wordByWordContentType"];
  let displayType = readerPreferences["wordByWordDisplay"];
  let lang = readerPreferences["wordByWordLocale"];
  let theme = readerPreferences[""];
  let fontType = readerStyles["gitaFont"];
  let chapters = state["chapters"];

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

  return {
    setReaderPref,
    setReaderStyle,
    readerPref,
    translator,
    contentType,
    displayType,
    lang,
    theme,
    readerStyles,
    fontType,
    chapters,
  };
};

export default useDispatch;
