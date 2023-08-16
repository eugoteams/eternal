/** @format */

import React, { useContext, useEffect, useState } from "react";
import classes from "./FontCounter.module.css";
import { DefaultContext } from "react-icons";
import { BiMinus, BiPlus } from "react-icons/bi";
import { AppContext } from "@/sotre/store";

const FontCounter = ({ datakey }) => {
  const { state, dispatch } = useContext(AppContext);

  const plusMinusOpt = (opt) => {
    let initialFont = state["fontSize"][datakey];
    switch (true) {
      case opt === "minus" && initialFont > 1:
        initialFont = initialFont - 1;
        break;
      case opt === "plus" && initialFont < 9:
        initialFont = initialFont + 1;
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
      <div className={`${classes.container}`}>
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
