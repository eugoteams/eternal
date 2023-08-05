/** @format */

import { fileOpt } from "./Utility/helper";
import path from "path";

export default async function handler(req, res) {
  let method = req.method;
  let { chapter, slok } = req.body;

  let absolutePath = path.join(
    process.cwd(),
    `/pages/api/db/chapter_${chapter}.json`
  );
  if (method === "POST") {
    console.log(
      chapter ? true : false,
      slok ? true : false,
      String(chapter) && String(slok)
    );
    switch (true) {
      case chapter !== undefined && slok !== undefined:
        let result = JSON.parse(fileOpt(absolutePath, undefined, false));
        let sloka = result.find((sloka, _) => {
          return sloka.verse === slok;
        });
        res.status(200).json({ eternalTruth: sloka });
        break;
      case chapter && !slok:
        let eternalTruth = JSON.parse(fileOpt(absolutePath, undefined, false));
        res.status(200).json({ eternalTruth });
        break;
      default:
        res.status(200).json({ error: "we couldn't full-fill your request" });
        break;
    }
  }
}
