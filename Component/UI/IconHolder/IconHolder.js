/** @format */

import React from "react";
import classes from "./IconHolder.module.css";
import { IoSettingsSharp } from "react-icons/io5";

const IconHolder = (props) => {
  return (
    <React.Fragment>
      <div className={`${classes.icon_placeholder}`}>{props.children}</div>
    </React.Fragment>
  );
};

export default IconHolder;
