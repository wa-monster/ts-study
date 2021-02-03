"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var router_1 = __importDefault(require("./router"));
//问题1 express库的类型定义文件 .d.ts文件类型描述不准确
//问题2 使用中间件时，req，res作了修改后，实际上类型并不能实时改变
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(cookie_session_1.default({
    name: "session",
    keys: ["teacher dell"],
    maxAge: 24 * 60 * 60 * 1000,
}));
app.use(function (req, res, next) {
    req.teacherName = "dell";
    next();
});
app.use(router_1.default);
app.listen(7200, function () {
    console.log("server is running");
});
