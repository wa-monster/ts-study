import superagent from "superagent";
import fs from "fs";
import path from "path";
import Analyzer from "./biquke";

export interface Analyze {
  analyze: (html: string, fillPath: string) => string;
}

class Crowller {
  private filePath = path.resolve(__dirname, "../../data/course.json");
  //获取网页
  private async getRowHtml(url: string) {
    const res = await superagent.get(url);
    return res.text;
  }
  //存入文件
  private writFile(fileContentStr: string) {
    fs.writeFileSync(this.filePath, fileContentStr);
  }
  async initSpiderProcess(analyzer: Analyze, url: string) {
    const html = await this.getRowHtml(url);
    const fileContentStr: string = analyzer.analyze(html, this.filePath);
    this.writFile(fileContentStr);
  }
  constructor(analyzer: Analyze, url: string) {
    this.initSpiderProcess(analyzer, url);
  }
}
const key = "11";
const url = `http://www.xbiquge.la/`;
// const analyzer = Analyzer.getInstance();

// const crowller = new Crowller(analyzer, url);

export default Crowller;
