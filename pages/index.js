/** @format */
import React from "react";
import useStorage from "@/hooks/use-Storage";
import { PERSIST_SETTING } from "@/model/const";
import HomePage from "@/Component/HomePage/HomePage";

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

      <HomePage />
      {/* <OverlayComponent /> */}
    </React.Fragment>
  );
}
