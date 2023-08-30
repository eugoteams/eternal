/** @format */

import React from "react";
import classes from "./Switch.module.css";

const Switch = ({ itemSelected, toggleButton, onItemChange }) => {
  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        {toggleButton.map((button, index) => {
          const { label, value } = button;
          return (
            <span
              key={`${label}_${index}`}
              className={
                value === itemSelected
                  ? `${classes.toggle_item} ${classes.toggle_item_active}`
                  : `${classes.toggle_item}`
              }
              onClick={(e) => onItemChange(value)}
            >
              {label}
            </span>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Switch;
