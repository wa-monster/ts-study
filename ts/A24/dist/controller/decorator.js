"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.controller = void 0;
require("reflect-metadata");
function controller(target) {
    for (var key in target.prototype) {
        console.log(Reflect.getMetadata('path', target.prototype, key));
    }
}
exports.controller = controller;
function get(path) {
    return function (target, key) {
        Reflect.defineMetadata('path', path, target, key);
    };
}
exports.get = get;
