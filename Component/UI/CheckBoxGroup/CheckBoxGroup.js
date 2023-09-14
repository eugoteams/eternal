/** @format */

import React, { useEffect, useState } from "react";
import styles from "./CheckBoxGroup.module.css";
import Stack from "../Stack/Stack";

const CheckBoxGroup = ({ defaultValue, onChange, data }) => {
  const checkBoxListener = (e) => {
    var updatedList = [...defaultValue];
    if (e.target.checked) {
      updatedList = [...defaultValue, e.target.value];
    } else {
      updatedList.splice(defaultValue.indexOf(e.target.value), 1);
    }
    onChange(updatedList);
  };
  return (
    <React.Fragment>
      <Stack>
        {data.map((checkbox, index) => {
          return (
            <label
              key={`${checkbox}_${index}`}
              className={`${styles.checkbox_container}`}
            >
              <input
                className={`${styles.input}`}
                type="checkbox"
                name={checkbox}
                value={checkbox}
                onChange={checkBoxListener}
                checked={defaultValue.includes(checkbox)}
              />
              <span> {checkbox}</span>
            </label>
          );
        })}
      </Stack>
    </React.Fragment>
  );
};

export default CheckBoxGroup;
