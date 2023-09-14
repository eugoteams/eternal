/** @format */

import React from "react";
import styles from "./Switch.module.css";

const Switch = ({ itemSelected, toggleButton, onItemChange, size = "sm" }) => {
  return (
    <React.Fragment>
      <div className={`${styles.container} ${styles[`size_${size}`]}`}>
        {toggleButton.map((button, index) => {
          const { label, value } = button;
          return (
            <span
              key={`${label}_${index}`}
              className={
                value === itemSelected
                  ? `${styles.toggle_item} ${styles[`item_${size}_pd`]} ${
                      styles.toggle_item_active
                    }`
                  : `${styles.toggle_item} ${styles[`item_${size}_pd`]}`
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
