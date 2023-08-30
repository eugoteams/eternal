/** @format */
import React, { useState } from "react";
import OverlayComponent from "@/Component/OverlayComponent/OverlayComponent";
import useStorage from "@/hooks/use-Storage";
import { PERSIST_SETTING } from "@/model/const";

export default function Home() {
  const { clearFromStorage } = useStorage();
  return (
    <React.Fragment>
      <p>we will display the Main Page</p>
      <button
        onClick={(e) => {
          clearFromStorage(PERSIST_SETTING);
        }}
      >
        Clear storage
      </button>
      {/* <OverlayComponent /> */}
    </React.Fragment>
  );
}
