/** @format */

import React from "react";
import classes from "./Modal.module.css";
import { X } from "lucide-react";
import IconHolder from "../IconHolder/IconHolder";
import Stack from "../Stack/Stack";

const Modal = ({ message, onClick }) => {
  return (
    <React.Fragment>
      <div className={`${classes.modal}`}>
        <div className={`${classes.overlay}`} onClick={onClick}></div>
        <div className={`${classes.modal_cnt}`}>
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
