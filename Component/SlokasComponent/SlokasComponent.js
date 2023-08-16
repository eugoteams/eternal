/** @format */

import React, { useContext, useEffect, useState } from "react";
import classes from "./SlokasComponent.module.css";
import usePerfomanceHandler from "@/hooks/use-PerfomanceHandler";
import { GITA_CH } from "@/model/const";
import Setting from "../Setting/Setting";
import { AppContext } from "@/sotre/store";
import ToggleButton from "../UI/ToggleButton/ToggleButton";
import SloaKContainer from "../UI/SloakContainer/SloakContainer";
import Wrapper from "../Wrapper/Wrapper";
const SlokasComponent = (props) => {
  const { state } = useContext(AppContext);
  let fontFamily = state["fontStyle"];
  let sloakFonstSize = state["fontSize"]["sloak"];
  let translationFontSize = state["fontSize"]["translation"];
  let readingPreference = state["readingPreference"];
  let refHookArray = [];
  const [chapterNum, setChapter] = useState(1);
  const { getData } = usePerfomanceHandler();
  const [data, setData] = useState([]);

  useEffect(() => {
    // deactivating the saveToStorage Opt.
    getData(
      "/api/gita",
      {
        method: "POST",
        body: JSON.stringify({ chapter: 1 }),
        headers: { "Content-Type": "application-json" },
      },
      GITA_CH
    ).then((response) => {
      // console.log("response --> with empty effect", chapterNum, response);
      setData((prevState) => response);
    });
  }, []);

  //chapter Effect
  useEffect(() => {
    // deactivating the saveToStorage Opt.
    getData(
      "/api/gita",
      {
        method: "POST",
        body: JSON.stringify({ chapter: chapterNum }),
        headers: { "Content-Type": "application-json" },
      },
      GITA_CH
    ).then((response) => {
      // console.log("response --> with empty effect", chapterNum, response);
      setData((prevState) => response);
    });
  }, [chapterNum]);

  return (
    <React.Fragment>
      <main style={{ fontFamily: `${fontFamily}` }}>
        <Setting />
        <button
          onClick={(e) => {
            setChapter((prevState) => prevState - 1);
          }}
        >
          Chapter --
        </button>
        <button
          onClick={(e) => {
            setChapter((prevState) => prevState + 1);
          }}
        >
          Chapter ++
        </button>
        <section>
          <ToggleButton />
        </section>
        <section className={`${classes.container}`}>
          <div className={`${classes.header}`}>
            <span>ch:{chapterNum}</span>
            <span>slokas:{data.length}</span>
          </div>
          <Wrapper>
            {data.length > 0 &&
              [...Array(data.length)].map((_, index) => {
                let authorID = state["author"]["id"];
                let lang = state["translationTo"];
                let sloakNumber = index + 1;
                let sortedArray = data.find(
                  (sloak, _) => sloak["verse"] === sloakNumber
                );

                const refToSloakContainer = React.createRef();
                refHookArray.push(refToSloakContainer);
                let sloak = sortedArray["slok"];
                let sloakTransliteration = sortedArray["transliteration"];
                let wordMeaning = sortedArray["word_meanings"];
                let sloakTranslation = sortedArray[authorID][lang];
                return (
                  <SloaKContainer
                    ref={refToSloakContainer}
                    key={sloakNumber}
                    chapterNumber={chapterNum}
                    sloakNumber={sloakNumber}
                    sloak={sloak}
                    sloakTransliteration={sloakTransliteration}
                    sloakMeaning={wordMeaning}
                    sloakTranslation={sloakTranslation}
                    // onPlayBtClick={onPlayBtListener}
                  />
                );
              })}
          </Wrapper>
        </section>
      </main>
    </React.Fragment>
  );
};

export default SlokasComponent;
