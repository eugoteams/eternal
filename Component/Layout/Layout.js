/** @format */
import React from "react";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className={`${classes.layout}`}>{props.children}</div>
    </React.Fragment>
  );
};

export default Layout;
