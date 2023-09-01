/** @format */
import React, { useEffect, useState } from "react";
import OverlayComponent from "@/Component/OverlayComponent/OverlayComponent";
import useStorage from "@/hooks/use-Storage";
import { PERSIST_SETTING } from "@/model/const";
import useApi from "@/hooks/use-Api";

export default function Home() {
  const { clearFromStorage } = useStorage();
  const { fetchData } = useApi();

  useEffect(() => {
    fetchData("api/gita", {
      method: "POST",
      body: JSON.stringify('{\n  "chapter":18,\n  "slok":47\n}'),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((data) => {
      console.log("loading filter", data);
      console.log("--->", data);
    });
  }, []);
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
