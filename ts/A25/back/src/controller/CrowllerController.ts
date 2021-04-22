import fs from "fs";
import path from "path";

import { Request, Response, NextFunction, RequestHandler } from "express";
import { controller, get, use } from "../decorator/index";
import  {getResponseData} from '../utils/uril'
import Crowller from "../utils/app";
import Analyzer from "../utils/biquke";


interface bodyRequest extends Request {
  body: {
    [key: string]: string | undefined;
  };
}
//中间件
const checkLogin = (req:Request,res:Response,next:NextFunction):void=>{
  console.log('checkLogin')
  const isLogin = !!(req.session ? req.session.login : false);
  if(isLogin){
    next()
  }else{
    res.json(getResponseData(null,'请先登录'))
  }
}

const test = (req:Request,res:Response,next:NextFunction):void=>{
  console.log('test')
  next()
}

@controller('/')
export class CrowllerController {
  @get('/getData')
  @use(checkLogin)
  getData(req:bodyRequest,res:Response):void{
    try {
      const analyzer = Analyzer.getInstance();
      const url = `http://www.xbiquge.la/`;
      new Crowller(analyzer, url);
      res.json(getResponseData(true,'爬取成功'))
    } catch (error) {
      res.json(getResponseData(false,'爬取失败'))
    }
  }
  @get('/showData')
  @use(checkLogin)
  @use(test)
  showData(req:bodyRequest,res:Response):void{
    try {
      const position = path.resolve(__dirname,'../../data/course.json')
      const result = fs.readFileSync(position,'utf8')
      res.json(getResponseData(JSON.parse(result)))
    } catch (error) {
      res.json(getResponseData(false,'未爬取到内容'))
    }
  }
}
