/** @format */
import React from "react";
import HomePage from "@/Component/HomePage/HomePage";

export default function Home({ chapters }) {
  return (
    <React.Fragment>
      <HomePage chapters={chapters} />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const path = require("path");
  const fs = require("fs");
  const subPath = `/pages/api/db_sorted/chapters.json`;
  let absolutePath = path.join(process.cwd(), subPath);
  let chapters = JSON.parse(fs.readFileSync(absolutePath));
  return { props: { chapters } };
}
