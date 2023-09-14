/** @format */

import React, { useContext, useEffect, useState } from "react";
import styles from "./FontCounter.module.css";
import { DefaultContext } from "react-icons";
import { BiMinus, BiPlus } from "react-icons/bi";
import { AppContext } from "@/store/store";

const FontCounter = ({ datakey }) => {
  const { state, dispatch } = useContext(AppContext);

  const plusMinusOpt = (opt) => {
    let initialFont = state["fontSize"][datakey];
    switch (true) {
      case opt === "minus" && initialFont > 1:
        initialFont = initialFont - 0.5;
        break;
      case opt === "plus" && initialFont < 3:
        initialFont = initialFont + 0.5;
        break;
      default:
        //no-opt
        break;
    }
    state["fontSize"][datakey] = initialFont;
    dispatch({
      type: "ADD",
      key: "fontSize",
      payload: { ...state["fontSize"] },
    });
  };

  return (
    <React.Fragment>
      <div className={`${styles.container}`}>
        <button onClick={(e) => plusMinusOpt("minus")}>
          <BiMinus />
        </button>
        <span>{state["fontSize"][datakey]}</span>
        <button>
          <BiPlus onClick={(e) => plusMinusOpt("plus")} />
        </button>
      </div>
    </React.Fragment>
  );
};

export default FontCounter;
