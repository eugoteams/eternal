/** @format */

import React from "react";
import SlokasComponent from "@/Component/SlokasComponent/SlokasComponent";

const Chapter = (props) => {
  let chapter = props.chapterNumber;
  let content = props.content;
  return (
    <React.Fragment>
      <SlokasComponent chapter={chapter} content={content} />
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
  /** code is excuted in Server */
  let chapterNumber = context.params.ch;
  const path = require("path");
  const fs = require("fs");
  const subPath = `/pages/api/db_sorted/chapter_${chapterNumber}.json`;
  let absoluteFilePath = path.join(process.cwd(), subPath);
  let content = JSON.parse(fs.readFileSync(absoluteFilePath));
  return {
    props: { chapterNumber, content },
  };
}

export default Chapter;
