/** @format */
import React, { useState } from "react";
import OverlayComponent from "@/Component/OverlayComponent/OverlayComponent";

export default function Home() {
  const [value, setValue] = useState([]);
  console.log(value);
  return (
    <React.Fragment>
      <p>we will display the Main Page</p>
      {/* <OverlayComponent /> */}
    </React.Fragment>
  );
}
