/** @format */

import fs from "fs";
import path from "path";
import apiCaller from "./ApiCaller";

export function fileOpt(filePath, content, write = true) {
  //let absolutePath = path.join(process.cwd(), filePath);
  let absolutePath = `/.next/server/${filePath}`;
  let result;
  if (write) {
    //will create the file if not exist..
    result = fs.writeFileSync(absolutePath, JSON.stringify(content));
  } else {
    result = fs.readFileSync(absolutePath);
  }
  return result;
}

export function fetchSlokasForChapter(chapter, verses) {
  const baseUrl = "https://bhagavadgitaapi.in/";
  let urlChapter = `${baseUrl}/chapters`;
  let arrayOfSlokas = [];
  [...Array(verses)].map(async (_, index) => {
    let delay = 200 * index;
    let slokaNumber = index + 1;
    let url = `${baseUrl}/slok/${chapter}/${slokaNumber}`;

    let apiResult = await apiCaller(url);
    arrayOfSlokas.push(apiResult);
    if (arrayOfSlokas.length === verses) {
      console.log(arrayOfSlokas.length);
      fileOpt(`/pages/api/chapter_${chapter}.json`, arrayOfSlokas);
      return arrayOfSlokas;
    }
  });
}
