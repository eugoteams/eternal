/** @format */

import React, { useEffect, useState } from "react";
import classes from "./CheckBoxGroup.module.css";
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
          console.log(
            defaultValue,
            checkbox,
            defaultValue.includes(checkbox),
            checkbox
          );
          return (
            <label
              key={`${checkbox}_${index}`}
              className={`${classes.checkbox_container}`}
            >
              <input
                className={`${classes.input}`}
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
