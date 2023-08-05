/** @format */

import { fileOpt } from "./Utility/helper";

export default async function handler(req, res) {
  let method = req.method;
  let chapters = [];
  if (method === "GET") {
    chapters = JSON.parse(
      fileOpt("/pages/api/db/chapters.json", undefined, false)
    );
  }
  res.status(200).json({ chapters });
}
