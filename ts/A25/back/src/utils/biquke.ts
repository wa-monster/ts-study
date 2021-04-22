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
export default class BiqugeAnalyzer implements Analyze {
  //获取文件的数据
  private generateJsonContent(courseRes: courseResult, filePath: string) {
    let fileContent: Content = {};
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
    fileContent[courseRes.time] = courseRes.data;
    console.log(fileContent);

    return fileContent;
  }
  //解析html获取正确的数据
  private getCourseInfo(html: string, filePath: string) {
    const $ = cheerio.load(html);
    const $li = $(".nav li");
    const arr: Course[] = [];
    $li.each((i, item) => {
      let text: string = $(item).find("a").html() || "";
      let link: string = $(item).find("a").attr("href") || "";
      arr.push({
        text: text,
        link: link,
      });
    });
    return {
      data: arr,
      time: new Date().getTime(),
    };
  }
  public analyze(html: string, filePath: string) {
    const courseRes: courseResult = this.getCourseInfo(html, filePath);
    const fileContent = this.generateJsonContent(courseRes, filePath);
    return JSON.stringify(fileContent);
  }
  private constructor() {}
  private static instance: BiqugeAnalyzer;
  static getInstance() {
    if (!this.instance) {
      this.instance = new BiqugeAnalyzer();
    }
    return this.instance;
  }
}
