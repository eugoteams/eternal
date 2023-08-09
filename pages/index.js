/** @format */

import { Inter } from "next/font/google";
import Navbar from "@/Component/Navbar/Navbar";
import DropDown from "@/Component/UI/DropDown/DropDown";
import FontSelector from "@/Component/UI/FontSelector/FontSelector";
import { useContext, useEffect, useState } from "react";
import useApi from "@/hooks/use-Api";
import { AppContext } from "@/sotre/store";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { fetchData } = useApi();
  const { state, dispatch } = useContext(AppContext);

  const getDataFromApi = () => {
    fetchData("/api/harekrishna", { method: "GET" }).then((data) => {
      if (data["chapters"].length > 0) {
        dispatch({ type: "ADD_CH", payload: data.chapters });
        return;
      }
    });
  };
  console.log("State Test", state);
  useEffect(() => {
    getDataFromApi();
  }, []);
  return (
    <>
      <FontSelector />
      <DropDown />
      <FontSelector />
    </>
  );
}
