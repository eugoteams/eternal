/** @format */

import { fileOpt } from "./Utility/helper";

export const config = {
  api: {
    responseLimit: "5mb",
  },
};

export default async function handler(req, res) {
  let method = req.method;
  let { chapter, slok } = JSON.parse(req.body);

  if (method === "POST") {
    switch (true) {
      case chapter !== undefined && slok !== undefined:
        fileOpt(`chapter_${chapter}`, undefined, false).then((chapter) => {
          let sloka = chapter.find((sloka, _) => {
            return sloka.verse === slok;
          });

          res.status(200).json({ eternalTruth: sloka });
        });
        break;
      case chapter && !slok:
        fileOpt(`chapter_${chapter}`, undefined, false).then((chapter) => {
          res.status(200).json({ eternalTruth: chapter });
        });
        break;
      default:
        res.status(200).json({ error: "we couldn't full-fill your request" });
        break;
    }
  }
}
