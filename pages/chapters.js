/** @format */

import ChapterComponent from "@/Component/ChapterComponent/ChapterComponent";
import React from "react";

const Chapters = ({ chapters }) => {
  return (
    <React.Fragment>
      <ChapterComponent chapters={chapters} />
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const path = require("path");
  const fs = require("fs");
  const subPath = `/pages/api/db_sorted/chapters.json`;
  let absolutePath = path.join(process.cwd(), subPath);
  let chapters = JSON.parse(fs.readFileSync(absolutePath));
  return { props: { chapters } };
}

export default Chapters;
