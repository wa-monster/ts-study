
import { Request, Response } from "express";
import { controller,get, post } from "../decorator/index";
import  {getResponseData} from '../utils/uril'
interface bodyRequest extends Request {
  body: {
    [key: string]: string | undefined;
  };
}


@controller('/')
export class LoginController {
  static isLogin(req:Request){
    return !!(req.session ? req.session.login : false)
  }
  @get('/logout')
  logout(req:bodyRequest,res:Response):void{
    if (req.session) {
      req.session.login = undefined;
    }
    res.json(getResponseData(true))
  }
  @post('/login')
  login(req:bodyRequest,res:Response):void{
    const isLogin = LoginController.isLogin(req)
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
  }
  @get('/')
  home(req:bodyRequest,res:Response){
    const isLogin = LoginController.isLogin(req)
    if (isLogin) {
      res.send(`
        <html>
          <body>
            <a href="/getData">爬取内容</a>
            <a href="/showData">展示内容</a>
            <a href="/logout">退出</a>
          </body>
        </html>  
      `);
    } else {
      res.send(`
      <html>
        <body>
          <form action="/login" method="post" enctype="application/x-www-form-urlencoded">  
            <input type="text" name="password" />  
            <button type="submit">登陆</button>  
          </form>
        </body>
      </html>  
    `);
    }
  }
}
