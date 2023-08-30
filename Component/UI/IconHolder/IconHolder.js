/** @format */

import React from "react";
import classes from "./IconHolder.module.css";

const IconHolder = (props) => {
  return (
    <React.Fragment>
      <div className={`${classes.icon_placeholder}`}>{props.children}</div>
    </React.Fragment>
  );
};

export default IconHolder;
