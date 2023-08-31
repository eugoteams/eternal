/** @format */

import fs from "fs";
import path from "path";
import apiCaller from "./ApiCaller";

export async function fileOpt(filename, content, write = true) {
  let result;
  let absolutePath = path.join(
    process.cwd(),
    `/pages/api/db_sorted/${filename}.json`
  );
  if (write) {
    //will create the file if not exist..
    result = fs.writeFileSync(absolutePath, JSON.stringify(content));
  } else {
    result = fs.readFileSync(absolutePath);
  }
  return write ? "write-opt" : JSON.parse(result);
}

//call:fetchSlokasForChapter(9, 34);
export function fetchSlokasForChapter(chapter, verses) {
  const baseUrl = "https://bhagavadgitaapi.in/";
  let urlChapter = `${baseUrl}/chapters`;
  let arrayOfSlokas = [];
  let filepath = path.join(
    process.cwd(),
    `/pages/api/db//chapter_${chapter}.json`
  );
  [...Array(verses)].map(async (_, index) => {
    let delay = 200 * index;
    let slokaNumber = index + 1;
    let url = `${baseUrl}/slok/${chapter}/${slokaNumber}`;

    let apiResult = await apiCaller(url);
    arrayOfSlokas.push(apiResult);
    if (arrayOfSlokas.length === verses) {
      console.log(arrayOfSlokas.length);
      fileOpt(filepath, arrayOfSlokas);
      return arrayOfSlokas;
    }
  });
}
