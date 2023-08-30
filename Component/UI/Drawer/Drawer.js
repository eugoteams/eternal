/** @format */

import React from "react";
import OverlayComponent from "@/Component/OverlayComponent/OverlayComponent";

const Drawer = (props) => {
  const { position, onClick } = props;
  return (
    <React.Fragment>
      <OverlayComponent position={position} onOverlayClickListener={onClick}>
        {props.children}
      </OverlayComponent>
    </React.Fragment>
  );
};

export default Drawer;
