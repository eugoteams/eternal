/** @format */

import React, { Fragment, useState } from "react";
import { ChevronsUpDown } from "lucide-react";
import classes from "./DropDown.module.css";
import { validateConfig } from "next/dist/server/config-shared";

const DropDown = (props) => {
  const [dropDown, setDropDown] = useState(false);
  const [itemSelected, setItemSelected] = useState("");
  const onClickListener = (event) => {
    setDropDown((prevState) => !prevState);
  };

  const onItemClick = (value) => {
    setItemSelected((prevState) => {
      return value;
    });
    setDropDown((prevState) => false);
  };
  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <div
          className={`${classes.dropdown_placeholder}`}
          onClick={onClickListener}
        >
          <span>chapter {itemSelected}</span>
          <ChevronsUpDown size={17} />
        </div>
        {dropDown && (
          <div className={`${classes.dropdown_item}`}>
            {[...Array(18)].map((_, index) => {
              return (
                <p
                  key={`chapter_${index}`}
                  onClick={(event) => {
                    onItemClick(index + 1);
                  }}
                >
                  chapter {index + 1}
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
