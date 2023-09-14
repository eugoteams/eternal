/** @format */

import React from "react";
import styles from "./IconHolder.module.css";

const IconHolder = (props) => {
  return (
    <React.Fragment>
      <div className={`${styles.icon_placeholder}`}>{props.children}</div>
    </React.Fragment>
  );
};

export default IconHolder;
