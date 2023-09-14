/** @format */

import useApi from "@/hooks/use-Api";
import useStorage from "@/hooks/use-Storage";
import { PERSIST_SETTING, defaultSetting } from "@/model/const";
import React, { useEffect, useReducer, useState } from "react";

export const AppContext = React.createContext([]);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_R":
      return { ...action.payload };
    default:
      console.log("Test", action);
      break;
  }
};

const StoreProvider = (props) => {
  const { fetchData } = useApi();
  const { saveToStorage, getFromStorage } = useStorage();
  const [state, dispatch] = useReducer(reducer, defaultSetting);
  const [client, setClient] = useState(false);
  const [nav, setNav] = useState({
    chapter: "",
    sloks: "",
    openMenu: false,
    startingVerse: 0,
  });

  //On DOM initialized.
  useEffect(() => {
    if (typeof window !== undefined && window.localStorage) {
      let dataInStorage = getFromStorage(PERSIST_SETTING);
      if (dataInStorage) {
        dispatch({ type: "ADD_R", payload: dataInStorage });
      } else {
        saveToStorage(state, PERSIST_SETTING);
      }
    }
  }, [client]);

  //Setting the DOM.
  useEffect(() => {
    setClient((prevState) => true);
  }, []);

  //When ever state changes it stores in to local storage.
  useEffect(() => {
    if (client) {
      saveToStorage(state, PERSIST_SETTING);
    }
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch, nav, setNav }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default StoreProvider;
