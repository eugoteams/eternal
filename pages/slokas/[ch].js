/** @format */

import React from "react";
import SlokasComponent from "@/Component/SlokasComponent/SlokasComponent";

const Chapter = (props) => {
  let chapter = props.chapterNumber;
  console.log("ch", chapter);
  return (
    <React.Fragment>
      <SlokasComponent chapter={chapter} />
    </React.Fragment>
  );
};

export async function getStaticPaths() {
  let arrayOfPaths = [];
  [...Array(18)].map((_, index) => {
    let chapterNum = index + 1;
    arrayOfPaths.push({
      params: {
        ch: String(chapterNum),
      },
    });
  });
  return {
    paths: arrayOfPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let chapterNumber = context.params.ch;

  /** code is excuted in Server */
  return {
    props: { chapterNumber },
  };
}

export default Chapter;
