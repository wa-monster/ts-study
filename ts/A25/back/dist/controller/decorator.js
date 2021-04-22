"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
// import router from "../router";
var Methods;
(function (Methods) {
    Methods["get"] = "get";
    Methods["post"] = "post";
    Methods["delete"] = "delete";
    Methods["put"] = "put";
})(Methods || (Methods = {}));
//中间件
function use(middleware) {
    return function (target, key) {
        Reflect.defineMetadata('middleware', middleware, target, key);
    };
}
exports.use = use;
// export function controller(target:any){
//   for(let key in target.prototype){
//     const path = Reflect.getMetadata('path',target.prototype,key)
//     const method:Methods = Reflect.getMetadata('method',target.prototype,key)
//     const handler = target.prototype[key]
//     const middleware = Reflect.getMetadata('middleware',target.prototype,key)
//     if(path && method && handler){
//       if(middleware){
//         router[method](path,middleware,handler)
//       }else{
//         router[method](path,handler)
//       }
//     }
//   }
// }
// export function post(path:string){
//   return function (target:any,key:string){
//     Reflect.defineMetadata('method','post',target,key);
//   }
// }
// export function get(path:string){
//   return function (target:any,key:string){
//     Reflect.defineMetadata('path',path,target,key);
//   }
// }
//执行顺序，从下往上
