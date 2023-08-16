/** @format */

import React, { useState } from "react";
import classes from "./SmDropDown.module.css";
import { BsChevronDown } from "react-icons/bs";

const SmDropDown = (props) => {
  const [dropDown, setDropDown] = useState(false);
  const [seletedNum, setSeletedNum] = useState(1);
  const closeDropDown = (event) => {
    setDropDown((prevState) => !prevState);
  };

  const onItemClick = (value) => {
    closeDropDown();
    setSeletedNum((prevState) => value);
    console.log("value", value);
  };
  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <div
          className={`${classes.dropdown_placeholder}`}
          onClick={closeDropDown}
        >
          {seletedNum}
        </div>
        {dropDown && (
          <div className={`${classes.dropdown_item}`}>
            {[...Array(18)].map((_, index) => {
              let num = index + 1;
              return (
                <p
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
