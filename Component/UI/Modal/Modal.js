/** @format */

import React from "react";
import styles from "./Modal.module.css";
import { X } from "lucide-react";

const Modal = ({ message, onClick }) => {
  return (
    <React.Fragment>
      <div className={`${styles.modal}`}>
        <div className={`${styles.overlay}`} onClick={onClick}></div>
        <div className={`${styles.modal_cnt}`}>
          <div
            style={{
              justifyContent: "end",

              width: "100%",
            }}
            onClick={onClick}
          >
            <X size={14} />
          </div>

          <div>{message}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
