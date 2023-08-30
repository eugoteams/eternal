/** @format */
import { fileOpt } from "./Utility/helper";

export default async function handler(req, res) {
  let method = req.method;
  let chapter = req.query.ch;
  let translator = req.query.translator;
  let sloakBytranslator = [];
  console.log("chapter", translator);
  // let sortedArray = [];
  let arr = await fileOpt(`db_sorted/chapter_${chapter}`, undefined, false);

  // [...Array(arr.length)].map((_, index) => {
  //   let sloakNum = index + 1;
  //   // console.log("-->", sloakNum);
  //   let result = arr.filter((sloak, index) => sloak["verse"] === sloakNum);
  //   if (result.length > 0) {
  //     sortedArray.push(result[0]);
  //   }
  //   if (sortedArray.length === arr.length) {
  //     console.log(" Sorting Finished");
  //     fileOpt(`db_sorted/chapter_${chapter}`, sortedArray);
  //     console.log(" writing  Finished");
  //   }
  // });
  // console.log(arr.length);
  if (method === "GET") {
    arr.map((sloak, index) => {
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
      // console.log(sloak[translator]);
    });
    res.status(200).json({ data: sloakBytranslator });
  }
}
