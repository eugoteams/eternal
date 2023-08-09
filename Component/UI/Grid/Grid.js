/** @format */

import React from "react";
import classes from "./Grid.module.css";

const Grid = (props) => {
  return (
    <React.Fragment>
      <div className={`${classes.container}`}>{props.children}</div>
    </React.Fragment>
  );
};

export default Grid;
