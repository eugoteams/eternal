/** @format */

import React from "react";
import styles from "./OverlayComponent.module.css";
import { X } from "lucide-react";

const OverlayComponent = (props) => {
  const { position = "left", onOverlayClickListener, title } = props;

  return (
    <React.Fragment>
      <div className={`${styles.container}`}>
        <div className={`${styles.overlay}`} onClick={onOverlayClickListener} />
        <div
          className={`${styles.overlay_content_box} ${
            styles[`pos_${position}`]
          }`}
        >
          <div className={`${styles.overlay_content_box_header}`}>
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
