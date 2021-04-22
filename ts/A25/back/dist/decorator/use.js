"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
//中间件
function use(middleware) {
    return function (target, key) {
        var originMiddlewares = Reflect.getMetadata('middleware', target, key);
        originMiddlewares && originMiddlewares.push(middleware);
        Reflect.defineMetadata('middlewares', originMiddlewares, target, key);
    };
}
exports.use = use;
