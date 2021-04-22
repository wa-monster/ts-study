"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.put = exports.post = exports.get = exports.Methods = void 0;
var Methods;
(function (Methods) {
    Methods["get"] = "get";
    Methods["post"] = "post";
    Methods["delete"] = "delete";
    Methods["put"] = "put";
})(Methods = exports.Methods || (exports.Methods = {}));
//路由
function getTequestDecorator(type) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', type, target, key);
        };
    };
}
exports.get = getTequestDecorator(Methods.get);
exports.post = getTequestDecorator(Methods.post);
exports.put = getTequestDecorator(Methods.put);
exports.del = getTequestDecorator(Methods.delete);
