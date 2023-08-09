/** @format */

import React, { useReducer } from "react";

export const AppContext = React.createContext([]);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CH":
      state["chapters"] = action.payload;
      return { ...state };
    default:
      console.log("Test", action);
      break;
  }
};

const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    fontSize: "",
    fontType: "",
    chapters: [],
  });
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default StoreProvider;
