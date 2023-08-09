/** @format */

import React, { useState } from "react";
import classes from "./FontSelector.module.css";
import { fontSizes, fontTypes } from "@/model/const";

const FontSelector = (props) => {
  const [open, setOpen] = useState(false);
  const [fontType, setFontType] = useState("popins");
  const [fontSize, setFontSize] = useState("md");

  const onClickListener = (event) => {
    setOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <div className={`${classes.root_container}`}>
        <div
          className={` ${classes.font} ${classes.font_header}`}
          onClick={onClickListener}
        >
          aa
        </div>
        {open && (
          <div className={`${classes.container}`}>
            <p className={`${classes.title}`}>Reader Settings</p>
            <div className={`${classes.font_selector_grid}`}>
              {fontSizes.map((font, index) => {
                return (
                  <div
                    key={`${fontSize}_${index}`}
                    className={
                      fontSize === font
                        ? `${classes.font_grid_item} ${classes.item_active}`
                        : `${classes.font_grid_item}`
                    }
                    onClick={(event) => {
                      setFontSize((prevState) => font);
                    }}
                  >
                    <div
                      className={`${classes.font}   ${classes.font_border} ${
                        classes[`font_${font}`]
                      }`}
                    >
                      aa
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={`${classes.font_type}`}>
              {fontTypes.map((fontFamily, _) => {
                return (
                  <div
                    key={fontFamily}
                    className={
                      fontType === fontFamily
                        ? `${classes.font_type_item} ${classes.item_active} `
                        : `${classes.font_type_item}`
                    }
                    onClick={(event) => {
                      setFontType((prevState) => fontFamily);
                    }}
                  >
                    <span>{fontFamily}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default FontSelector;
