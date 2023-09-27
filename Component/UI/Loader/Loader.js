/** @format */

import React from "react";
import styles from "./Loader.module.css";

const Loader = (props) => {
  return (
    <React.Fragment>
      <div className={`${styles.spinner}`}></div>
    </React.Fragment>
  );
};

export default Loader;
