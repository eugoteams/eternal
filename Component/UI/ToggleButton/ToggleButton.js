/** @format */

import React, { useContext } from "react";
import classes from "./ToggleButton.module.css";
import { REACT_LOADABLE_MANIFEST } from "next/dist/shared/lib/constants";
import { AppContext } from "@/sotre/store";

const ToggleButton = () => {
  const { state, dispatch } = useContext(AppContext);
  let readingPreference = state["readingPreference"];
  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <span
          className={
            readingPreference === "translation"
              ? `${classes.toggle_item} ${classes.toggle_item_active}`
              : `${classes.toggle_item}`
          }
          onClick={(event) => {
            dispatch({
              type: "ADD",
              key: "readingPreference",
              payload: "translation",
            });
          }}
        >
          translation
        </span>
        <span
          className={
            readingPreference === "reading"
              ? `${classes.toggle_item} ${classes.toggle_item_active}`
              : `${classes.toggle_item}`
          }
          onClick={(event) => {
            dispatch({
              type: "ADD",
              key: "readingPreference",
              payload: "reading",
            });
          }}
        >
          reading
        </span>
      </div>
    </React.Fragment>
  );
};

export default ToggleButton;
