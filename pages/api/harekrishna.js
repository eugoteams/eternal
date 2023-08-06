/** @format */

import { fileOpt } from "./Utility/helper";

export default async function handler(req, res) {
  let method = req.method;
  if (method === "GET") {
    fileOpt("chapters", undefined, false).then((chapters) => {
      res.status(200).json({ chapters });
    });
  }
}
