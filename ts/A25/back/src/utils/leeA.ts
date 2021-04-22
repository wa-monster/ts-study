import cheerio from "cheerio";
import fs from "fs";
import { Analyze } from "./app";
interface Course {
  text: string;
  link: string;
}

interface courseResult {
  time: number;
  data: Course[];
}
interface Content {
  [propName: number]: Course[];
}

export default class LeeA implements Analyze {
  public analyze(html: string, filePath: string) {
    return html;
  }
}
