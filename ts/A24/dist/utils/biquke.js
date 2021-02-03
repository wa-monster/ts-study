"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = __importDefault(require("cheerio"));
var fs_1 = __importDefault(require("fs"));
var BiqugeAnalyzer = /** @class */ (function () {
    function BiqugeAnalyzer() {
    }
    //获取文件的数据
    BiqugeAnalyzer.prototype.generateJsonContent = function (courseRes, filePath) {
        var fileContent = {};
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, "utf-8"));
        }
        fileContent[courseRes.time] = courseRes.data;
        console.log(fileContent);
        return fileContent;
    };
    //解析html获取正确的数据
    BiqugeAnalyzer.prototype.getCourseInfo = function (html, filePath) {
        var $ = cheerio_1.default.load(html);
        var $li = $(".nav li");
        var arr = [];
        $li.each(function (i, item) {
            var text = $(item).find("a").html() || "";
            var link = $(item).find("a").attr("href") || "";
            arr.push({
                text: text,
                link: link,
            });
        });
        return {
            data: arr,
            time: new Date().getTime(),
        };
    };
    BiqugeAnalyzer.prototype.analyze = function (html, filePath) {
        var courseRes = this.getCourseInfo(html, filePath);
        var fileContent = this.generateJsonContent(courseRes, filePath);
        return JSON.stringify(fileContent);
    };
    BiqugeAnalyzer.getInstance = function () {
        if (!this.instance) {
            this.instance = new BiqugeAnalyzer();
        }
        return this.instance;
    };
    return BiqugeAnalyzer;
}());
exports.default = BiqugeAnalyzer;
