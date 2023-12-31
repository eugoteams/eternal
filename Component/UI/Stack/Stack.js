/** @format */

import React from "react";

/**
 *
 * stacks the childern one below the other with marginTop: 1rem
 * @param {} props
 * @returns
 */

const Stack = (props) => {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0.5rem",
          marginTop: "1rem",
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Stack;
