/** @format */

import { fileOpt } from "./Utility/helper";
import path from "path";

export default async function handler(req, res) {
  let method = req.method;
  let chapters = [];
  let absolutePath = path.join(process.cwd(), "/pages/api/db/chapters.json");
  console.log("ap", absolutePath);
  if (method === "GET") {
    chapters = JSON.parse(fileOpt(absolutePath, undefined, false));
  }
  res.status(200).json({ chapters });
}
