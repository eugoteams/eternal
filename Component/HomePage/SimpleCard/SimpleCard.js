/** @format */

import React from "react";
import styles from "./SimpleCard.module.css";
import { BiSolidCube } from "react-icons/bi";

const SimpleCard = ({ title, content }) => {
  return (
    <React.Fragment>
      <div className={`${styles.container}`}>
        <BiSolidCube className={`${styles.icon}`} />
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </React.Fragment>
  );
};

export default SimpleCard;
