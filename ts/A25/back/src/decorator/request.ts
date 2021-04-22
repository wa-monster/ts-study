import { CrowllerController, LoginController } from '../controller'
export  enum Methods{
  get = 'get',
  post = 'post',
  delete = 'delete',
  put = 'put'
}
//路由
function getTequestDecorator(type:Methods){
  return function (path:string){
    return function (target:CrowllerController | LoginController,key:string){
      Reflect.defineMetadata('path',path,target,key);
      Reflect.defineMetadata('method',type,target,key);
    }
  }
}

export const get = getTequestDecorator(Methods.get)
export const post = getTequestDecorator(Methods.post)
export const put = getTequestDecorator(Methods.put)
export const del = getTequestDecorator(Methods.delete)