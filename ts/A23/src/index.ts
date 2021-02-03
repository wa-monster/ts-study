// //类的装饰器
// //类本身是一个函数

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


const userInfo:any = undefined;
function catchError(msg:string){
  return function catchError (target:any,key:string,descriptor:PropertyDescriptor){
    const fn = descriptor.value
    descriptor.value = function(){
      try {
        fn()
      } catch (error) {
        console.log(msg)
      }
    }
  }
}


class  Test {
  @catchError('userinfo.name不存在')
  getName(){
    return userInfo.name
  }
  @catchError('userinfo.age不存在')
  getAge(){
    return userInfo.age
  }
}

const test = new Test()
test.getName()
test.getAge()