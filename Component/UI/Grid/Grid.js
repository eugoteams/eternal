/** @format */

import React from "react";
import styles from "./Grid.module.css";

const Grid = (props) => {
  return (
    <React.Fragment>
      <div className={`${styles.container}`}>{props.children}</div>
    </React.Fragment>
  );
};

export default Grid;
