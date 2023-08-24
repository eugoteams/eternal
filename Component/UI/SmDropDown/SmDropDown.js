/** @format */

import React, { useState } from "react";
import classes from "./SmDropDown.module.css";
import { BsChevronDown } from "react-icons/bs";

const SmDropDown = ({ label, length, onSelectListener, defaultValue }) => {
  const [dropDown, setDropDown] = useState(false);
  const [seletedNum, setSeletedNum] = useState(defaultValue);
  const closeDropDown = (event) => {
    setDropDown((prevState) => !prevState);
  };
  const items = [...Array(length)];

  const onItemClick = (value) => {
    closeDropDown();
    setSeletedNum((prevState) => value);
    onSelectListener(value);
    console.log("value", value);
  };
  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <div
          className={`${classes.dropdown_placeholder}`}
          onClick={closeDropDown}
        >
          {label}: {seletedNum < 10 ? "0" + seletedNum : seletedNum}
          <BsChevronDown style={{ fontSize: "1.2rem", marginLeft: "1rem" }} />
        </div>
        {dropDown && (
          <div className={`${classes.dropdown_item}`}>
            {items.map((_, index) => {
              let num = index + 1;
              return (
                <p
                  key={`${label}_${num}`}
                  onClick={(event) => {
                    onItemClick(num);
                  }}
                >
                  {num}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default SmDropDown;
