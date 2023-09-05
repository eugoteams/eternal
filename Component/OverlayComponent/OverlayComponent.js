/** @format */

import React from "react";
import classes from "./OverlayComponent.module.css";
import { X } from "lucide-react";

const OverlayComponent = (props) => {
  const { position = "left", onOverlayClickListener, title } = props;

  return (
    <React.Fragment>
      <div className={`${classes.container}`}>
        <div
          className={`${classes.overlay}`}
          onClick={onOverlayClickListener}
        />
        <div
          className={`${classes.overlay_content_box} ${
            classes[`pos_${position}`]
          }`}
        >
          <div className={`${classes.overlay_content_box_header}`}>
            <h3>{title}</h3>
            <span
              onClick={onOverlayClickListener}
              style={{ marginTop: "0.5rem" }}
            >
              <X />
            </span>
          </div>
          <div style={{ marginTop: "0.5rem" }}>{props.children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OverlayComponent;
