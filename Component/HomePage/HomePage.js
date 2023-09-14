/** @format */

import React from "react";
import Layout from "../Layout/Layout";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <React.Fragment>
      <Layout>
        <p className={`${styles.text}`}>the bhagwatam gita</p>
      </Layout>
    </React.Fragment>
  );
};

export default HomePage;
