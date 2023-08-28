/** @format */

import React from "react";
const Group = (props) => {
  return (
    <React.Fragment>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: `${props.posV}`,
          justifyContent: `${props.posH}`,
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Group;
