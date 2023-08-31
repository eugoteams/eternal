/** @format */
import { fileOpt } from "./Utility/helper";

export default async function handler(req, res) {
  let method = req.method;
  let chapter = req.query.ch;
  let translator = req.query.translator;
  let sloakBytranslator = [];
  let arr = await fileOpt(`chapter_${chapter}`, undefined, false);
  arr.map((sloak, _) => {
    sloakBytranslator.push({
      _id: sloak["_id"],
      chapter: sloak["chapter"],
      verse: sloak["verse"],
      slok: sloak["slok"],
      transliteration: sloak["transliteration"],
      word_meanings: sloak["word_meanings"],
      translation: sloak[translator],
      translator: translator,
    });
  });
  if (method === "GET") {
    res.status(200).json({ data: sloakBytranslator });
  }
}
