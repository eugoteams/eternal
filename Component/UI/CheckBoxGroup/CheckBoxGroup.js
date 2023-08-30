/** @format */

import React, { useEffect, useState } from "react";
import classes from "./CheckBoxGroup.module.css";
import Stack from "../Stack/Stack";

const CheckBoxGroup = ({ defaultValue, onChange }) => {
  const checkboxes = ["translation", "transliteration"];
  const [checked, setchecked] = useState([]);

  const checkBoxListener = (e) => {
    var updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    setchecked(updatedList);
  };

  useEffect(() => {
    console.log("Compoenent loaded");
    console.log("dfv", defaultValue);
  }, []);

  useEffect(() => {
    onChange(checked);
  }, [checked]);
  console.log(checked);

  return (
    <React.Fragment>
      <Stack>
        {checkboxes.map((checkbox, index) => {
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
