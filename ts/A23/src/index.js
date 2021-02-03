"use strict";
// //类的装饰器
// //类本身是一个函数
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function testDecorator(){
//   return function <T extends new (...args:any[])=>any>(constructor:T){
//     return class extends constructor {
//       name = 'lee';
//       getName(){
//         console.log('wwww')
//       }
//     }
//   }
// }
// //普通方法，target对应的是类的prototype
// function getNamedecorator(target:any,key:string,descriptor:PropertyDescriptor) {
//   console.log(target,key)
//   descriptor.writable = false
//   descriptor.value = function(){
//     return '3333333333333333'
//   }
// }
// function visitDecorator(target:any,key:string,descriptor:PropertyDescriptor){
// }
// function nameDecorator(target:any,key:string):any{
//   // const descriptor: PropertyDescriptor = {
//   //   writable:false
//   // }
//   // return descriptor
//   //这是原型上的key
//   target[key] = 'lee'
// }
// //原型，方法名，参数所在的位置
// function paramDecorator(target:any,mehtod:string,paramIndex:number){
//   console.log(target, mehtod, paramIndex);
// }
// class Test{
//   getInfo(@paramDecorator name:string,age:number){
//     console.log(name,age)
//   }
//   // @nameDecorator
//   // name = 'dell'
//   // constructor(name:string){
//   //   this._name = name
//   // }
//   // public _name:string;
//   // @getNamedecorator
//   // getName(){
//   //   return '3'
//   // }
//   // get name(){
//   //   return this._name
//   // }
//   // @visitDecorator
//   // set name(str:string){
//   //   this._name = str
//   // }
// }
// const test = new Test()
// console.log(test.getInfo('dell',30))
var userInfo = undefined;
function catchError(msg) {
    return function catchError(target, key, descriptor) {
        var fn = descriptor.value;
        descriptor.value = function () {
            try {
                fn();
            }
            catch (error) {
                console.log(msg);
            }
        };
    };
}
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.getName = function () {
        return userInfo.name;
    };
    Test.prototype.getAge = function () {
        return userInfo.age;
    };
    __decorate([
        catchError('userinfo.name不存在')
    ], Test.prototype, "getName", null);
    __decorate([
        catchError('userinfo.age不存在')
    ], Test.prototype, "getAge", null);
    return Test;
}());
var test = new Test();
test.getName();
test.getAge();
