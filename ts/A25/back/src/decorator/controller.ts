import router from "../router";
import { RequestHandler } from "express";
import { Methods } from './request'

export function controller(root:string){
  return function (target:new (...args:[])=>any){
    for(let key in target.prototype){
      const path:string = Reflect.getMetadata('path',target.prototype,key)
      const method:Methods = Reflect.getMetadata('method',target.prototype,key)
      const handler:any = target.prototype[key]
      const middlewares:RequestHandler[] = Reflect.getMetadata('middlewares',target.prototype,key)
      console.log('3333')
      if(path && method){
        const fullPath = root === '/' ? path : `${root}${path}`
        if(middlewares){
          router[method](fullPath,...middlewares,handler)
        }else{
          router[method](fullPath,handler)
        }
      }
    }
  }
}