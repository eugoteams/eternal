/** @format */

import React from "react";
import classes from "./Switch.module.css";

const Switch = ({ itemSelected, toggleButton, onItemChange, size = "sm" }) => {
  return (
    <React.Fragment>
      <div className={`${classes.container} ${classes[`size_${size}`]}`}>
        {toggleButton.map((button, index) => {
          const { label, value } = button;
          return (
            <span
              key={`${label}_${index}`}
              className={
                value === itemSelected
                  ? `${classes.toggle_item} ${classes[`item_${size}_pd`]} ${
                      classes.toggle_item_active
                    }`
                  : `${classes.toggle_item} ${classes[`item_${size}_pd`]}`
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
