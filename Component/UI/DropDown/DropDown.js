/** @format */

import React, { useState } from "react";
import classes from "./DropDown.module.css";

const DropDown = ({ data, defaultValue, onChange }) => {
  const [dropDown, setDropDown] = useState(false);
  const valueSelected = data.find((item) => item.value === defaultValue)[
    "label"
  ];

  const closeDropDown = (event) => {
    setDropDown((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <div
          className={`${classes.dropdown_placeholder}`}
          onClick={closeDropDown}
        >
          <span>{valueSelected}</span>
          {/* <LuChevronsDownUp /> */}
        </div>
        {dropDown && (
          <div className={`${classes.dropdown_item_container}`}>
            {data.map((item, index) => {
              const { value, label } = item;
              return (
                <p
                  className={
                    value === defaultValue
                      ? `${classes.dropdown_item} ${classes.dropdown_item_active}`
                      : `${classes.dropdown_item} ${`${classes.item_hover}`}`
                  }
                  key={`${label}_${index}`}
                  onClick={(e) => {
                    closeDropDown();
                    onChange(value);
                  }}
                >
                  {label}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default DropDown;
