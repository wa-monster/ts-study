
import { Request, Response } from "express";
import { controller, get} from "./decorator";

interface bodyRequest extends Request {
  body: {
    [key: string]: string | undefined;
  };
}


@controller
class LoginController {
  @get('/login')
  login(req:bodyRequest,res:Response){

  }
  @get('/')
  home(req:bodyRequest,res:Response){
    const isLogin = req.session ? req.session.login : false;
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
