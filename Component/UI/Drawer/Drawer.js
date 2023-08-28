/** @format */

import React from "react";
import classes from "./Drawer.module.css";
import OverlayComponent from "@/Component/OverlayComponent/OverlayComponent";

const Drawer = (props) => {
  const { onClick } = props;
  return (
    <React.Fragment>
      <OverlayComponent openDrawer={true} onOverlayClickListener={onClick}>
        {props.children}
      </OverlayComponent>
    </React.Fragment>
  );
};

export default Drawer;
