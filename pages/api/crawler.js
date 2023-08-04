/** @format */

import apiCaller from "./Utility/ApiCaller";

export default async function handler(req, res) {
  const chapterNum = "chapter_number";
  const slokas = "verses_count";
  const baseUrl = " https://bhagavadgitaapi.in/";
  let arrayOfSlokas = [];
  let methed = req.method;
  console.log(methed);
  apiCaller(`${baseUrl}/chapters`).then((chapters) => {
    chapters.map((chapter, _) => {
      // console.log("chapter", chapter[chapterNum]);
      //   [...Array(chapter[slokas])].map((_, index) => {
      //     let delay = 35000 * index;
      //     setTimeout(() => {
      //       console.log(index, "-->", delay);
      //     }, delay);
      //   });
      //   apiCaller(`${baseUrl}slok/${chapter[chapterNum]}/chapter[slokas]`).then(
      //     (slokas) => {
      //       arrayOfSokas.push(slokas);
      //       console.log(arrayOfSokas.length);
      //     }
      //   );
    });

    [...Array(81)].map((_, index) => {
      let delay = 291 * index + 1;
      let url = `${baseUrl}slok/${18}/${index + 1}`;
      // console.log("url", url);
      setTimeout(() => {
        apiCaller(url).then((slokas) => {
          console.log(
            "slokas",
            slokas,
            "--",
            `${baseUrl}slok/${1}/${index + 1}`
          );
        });
        // console.log(index, "-->", delay);
        if (index + 1 === 79) {
          console.log("end", "-->", "end");
        }
      }, delay);
    });
    //console.log("Api Test ::", chapters.length);
    res.status(200).json({ msg: "api sucessfull", chapters });
  });
}
