/** @format */

import React, { useEffect, useRef, useState } from "react";
import classes from "./OverlayComponent.module.css";

const OverlayComponent = (props) => {
  const { openDrawer, onOverlayClickListener } = props;

  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <div
          className={`${classes.overlay}`}
          onClick={onOverlayClickListener}
        />
        <div className={`${classes.overlay_cnt}`} style={{ right: 0 }}>
          <div className={`${classes.overlay_cnt_header}`}>
            <h3>setting</h3>
            <span onClick={onOverlayClickListener}>close</span>
          </div>
          <div style={{ marginTop: "0.5rem" }}>{props.children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OverlayComponent;
