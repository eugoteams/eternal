/** @format */
import path from "path";
import fs from "fs/promises";

export default async function handler(req, res) {
  let method = req.method;
  let chapter = req.query.ch;
  console.log(chapter);
  let arrayToStoreData = [];
  const addedDataArray = [];
  if (method === "GET") {
    let chapterFile = path.join(
      process.cwd(),
      `/pages/api/db/chapter_${chapter}.json`
    );
    let verseFile = path.join(process.cwd(), "/pages/api/verse.json");
    let newFilePath = path.join(
      process.cwd(),
      `/pages/api/db_new/chapter_${chapter}.json`
    );
    fs.readFile(verseFile).then((content) => {
      JSON.parse(content).map((cnt, index) => {
        if (cnt["chapter_number"] == chapter) {
          // console.log("chapter", cnt["chapter_number"], index);
          arrayToStoreData.push({
            chapter_number: cnt["chapter_number"],
            verse_number: cnt["verse_number"],
            transliteration: cnt["transliteration"],
            word_meanings: cnt["word_meanings"],
          });
        }
        if (arrayToStoreData.length === index) {
          // console.log(arrayToStoreData);
          console.log("Data From github::", arrayToStoreData.length);
          fs.readFile(chapterFile).then((chapterContent) => {
            JSON.parse(chapterContent).map((chContent, _) => {
              let result = arrayToStoreData.find(
                (item, _) => item["verse_number"] === chContent["verse"]
              );
              addedDataArray.push({
                ...chContent,
                transliteration: result["transliteration"],
                word_meanings: result["word_meanings"],
              });
            });
            if (addedDataArray.length === arrayToStoreData.length) {
              console.log("Final Length::", addedDataArray.length);
              fs.writeFile(
                newFilePath,
                JSON.stringify(addedDataArray),
                (err) => {
                  console.log(err);
                }
              );
            }
          });
        }
      });
    });

    res.status(200).json({ msg: "DATA correction", chapter });
  }
}
