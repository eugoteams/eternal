/** @format */

import useApi from "@/hooks/use-Api";
import useStorage from "@/hooks/use-Storage";
import { PERSIST_SETTING, defaultSetting } from "@/model/const";
import React, { useEffect, useReducer, useState } from "react";

export const AppContext = React.createContext([]);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CH":
      state["chapters"] = action.payload;
      return { ...state };
    case "ADD":
      //console.log("ADD", action.payload);
      state[action.key] = action.payload;
      return { ...state };
    case "R_STATE":
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

  useEffect(() => {
    if (typeof window !== undefined && window.localStorage) {
      let dataInStorage = getFromStorage(PERSIST_SETTING);
      // console.log("use Effect Store .. -->", dataInStorage);
      if (dataInStorage) {
        dispatch({ type: "R_STATE", payload: dataInStorage });
      }
    }
  }, [client]);

  useEffect(() => {
    setClient((prevState) => true);
    /**Fetch Chapters from the api */
    fetchData("/api/harekrishna", { method: "GET" }).then((data) => {
      if (data["chapters"].length > 0) {
        dispatch({ type: "ADD_CH", payload: data.chapters });
        return;
      }
    });
  }, []);

  const toLocalStorage = () => {
    if (client) {
      saveToStorage(state, PERSIST_SETTING);
    }
  };
  toLocalStorage();

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default StoreProvider;
