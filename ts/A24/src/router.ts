import fs from 'fs'
import path from 'path'
import { Router, Request, Response, NextFunction } from "express";
import Crowller from "./utils/app";
import Analyzer from "./utils/biquke";

import  {getResponseData} from './utils/uril'

const router = Router();
interface bodyRequest extends Request {
  body: {
    [key: string]: string | undefined;
  };
}
const checkLogin = (req:Request,res:Response,next:NextFunction)=>{
  const isLogin = req.session ? req.session.login : false;
  if(isLogin){
    next()
  }else{
    res.json(getResponseData(null,'请先登录'))
  }
}

router.get("/", ()=>{});
router.get("/logout", (req: bodyRequest, res: Response) => {
  if (req.session) {
    req.session.login = undefined;
  }
  res.json(getResponseData(true))
});
router.post("/login", (req: bodyRequest, res: Response) => {
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    res.json(getResponseData(true))
  } else {
    if (req.body.password == "123") {
      if (req.session) {
        req.session.login = true;
        res.json(getResponseData(true,'登陆成功'))
      } else {
        res.json(getResponseData(false,'登陆失败'))
      }
    } else {
      res.json(getResponseData(false,'登陆失败'))
    }
  }
});
router.get("/getData",checkLogin, (req: bodyRequest, res: Response) => {
  try {
    const analyzer = Analyzer.getInstance();
    const url = `http://www.xbiquge.la/`;
    new Crowller(analyzer, url);
    res.json(getResponseData(true,'爬取成功'))
  } catch (error) {
    res.json(getResponseData(false,'爬取失败'))
  }

});
router.get("/showData",checkLogin, (req: bodyRequest, res: Response) => {
  try {
    const position = path.resolve(__dirname,'../data/course.json')
    const result = fs.readFileSync(position,'utf8')
    res.json(getResponseData(JSON.parse(result)))
  } catch (error) {
    res.json(getResponseData(false,'未爬取到内容'))
  }

});
export default router;
