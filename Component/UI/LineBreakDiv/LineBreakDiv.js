/** @format */

import React from "react";


const LineBreakDiv = ({ text, textStyle ,fontValue = 0}) => {
  let lineBreaks = text.split("\n");
  return (
    <React.Fragment>
      <div className={...textStyle} style={{fontSize: fontValue > 0 &&`${fontValue}rem`}}>
        {lineBreaks.map((line, index) => {
          return <p key={`${line}_${index}`}>{line}</p>;
        })}
      </div>
    </React.Fragment>
  );
};

export default LineBreakDiv;
