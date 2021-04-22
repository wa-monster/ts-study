import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import './controller/loginController';
import './controller/CrowllerController';
// import router from "./router";
import router  from "./router";

//问题1 express库的类型定义文件 .d.ts文件类型描述不准确
//问题2 使用中间件时，req，res作了修改后，实际上类型并不能实时改变
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cookieSession({
    name: "session",
    keys: ["teacher dell"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
app.use((req: Request, res: Response, next: NextFunction) => {
  req.teacherName = "dell";
  next();
});
app.use(router);
app.listen(7200, () => {
  console.log("server is running");
});
