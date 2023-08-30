/** @format */

import React from "react";
import classes from "./OverlayComponent.module.css";

const OverlayComponent = (props) => {
  const { position, onOverlayClickListener } = props;

  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <div
          className={`${classes.overlay}`}
          onClick={onOverlayClickListener}
        />
        <div
          className={
            position === "right"
              ? `${classes.overlay_content_box_right}`
              : `${classes.overlay_content_box}`
          }
        >
          <div className={`${classes.overlay_content_box_header}`}>
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
