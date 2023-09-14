/** @format */
import React from "react";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className={`${styles.layout}`}>{props.children}</div>
    </React.Fragment>
  );
};

export default Layout;
