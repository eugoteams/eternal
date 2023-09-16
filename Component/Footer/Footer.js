/** @format */

import React from "react";
import styles from "./Footer.module.css";
import FooterBottom from "./FooterBottom/FooterBottom";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={`${styles.container}`}>
        <FooterBottom />
      </div>
    </React.Fragment>
  );
};

export default Footer;
