/** @format */

import React from "react";
import Layout from "../Layout/Layout";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <React.Fragment>
      <Layout>
        <p className={`${classes.text}`}>the bhagwatam gita</p>
      </Layout>
    </React.Fragment>
  );
};

export default HomePage;
