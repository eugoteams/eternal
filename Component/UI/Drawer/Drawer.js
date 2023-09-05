/** @format */

import React from "react";
import OverlayComponent from "@/Component/OverlayComponent/OverlayComponent";

const Drawer = (props) => {
  const { position, onClick, title } = props;
  return (
    <React.Fragment>
      <OverlayComponent
        position={position}
        onOverlayClickListener={onClick}
        title={title}
      >
        {props.children}
      </OverlayComponent>
    </React.Fragment>
  );
};

export default Drawer;
