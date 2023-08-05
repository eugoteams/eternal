/** @format */

import { fileOpt } from "./Utility/helper";
const path = require("path");

export default async function handler(req, res) {
  let method = req.method;
  let chapters = [];
  let absolutePath = path.join(process.cwd(), "/pages/api/db/chapter_12.json");
  console.log("ap", absolutePath);
  if (method === "GET") {
    chapters = JSON.parse(fileOpt(absolutePath, undefined, false));
    console.log(fileOpt(absolutePath, undefined, false));
  }
  res.status(200).json({ chapters });
}
