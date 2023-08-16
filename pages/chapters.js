/** @format */

import ChapterComponent from "@/Component/ChapterComponent/ChapterComponent";
import usePerfomanceHandler from "@/hooks/use-PerfomanceHandler";
import { STORAGE_KEY } from "@/model/const";
import { AppContext } from "@/sotre/store";
import React, { useContext, useEffect, useState } from "react";

const Chapters = (props) => {
  const [client, setClient] = useState(false);
  const { dispatch } = useContext(AppContext);
  const { getData } = usePerfomanceHandler();

  useEffect(() => {
    getData("api/harekrishna", { method: "GET" }, STORAGE_KEY).then(
      (response) => {
        dispatch({ type: "ADD_CH", payload: response });
      }
    );
  }, [client]);

  useEffect(() => {
    setClient((prevState) => true);
  }, []);
  return (
    <React.Fragment>
      <ChapterComponent />
    </React.Fragment>
  );
};

export default Chapters;

export async function getStaticPath() {
  return {
    paths: [
      {
        params: "chapters",
      },
    ],
  };
}
