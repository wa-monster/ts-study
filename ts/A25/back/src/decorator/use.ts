import 'reflect-metadata'
import {RequestHandler} from 'express'
import { CrowllerController, LoginController } from '../controller'



//中间件
export function use(middleware:RequestHandler){
  return function (target:CrowllerController | LoginController,key:string){
    const originMiddlewares:RequestHandler[] = Reflect.getMetadata('middleware',target,key)
    originMiddlewares && originMiddlewares.push(middleware)
    Reflect.defineMetadata('middlewares',originMiddlewares,target,key);
  }
}