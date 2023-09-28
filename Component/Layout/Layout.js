/** @format */
import React from "react";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <main className={`${styles.layout}`}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
