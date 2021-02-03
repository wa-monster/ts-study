// //定义全局变量
// declare var $: (params: () => void) => void;

interface JqueryInstance {
  html: (html: string) => JqueryInstance;
}
//下面的又叫函数重载
// //定义全局函数
// declare function $(readFunc: () => void): void;
// declare function $(selector: string): JqueryInstance;
// //定义对象和类，命名空间嵌套
// declare namespace $ {
//   namespace fn {
//     class init {}
//   }
// }
// // interface jQuery {
// //   (readFunc: () => void): void;
// //   (selector: string): JqueryInstance;
// // }
// // declare var $: jQuery;

//es6模块化
declare module "jquery" {
  interface JqueryInstance {
    html: (html: string) => JqueryInstance;
  }
  //定义全局函数
  function $(readFunc: () => void): void;
  function $(selector: string): JqueryInstance;
  //定义对象和类，命名空间嵌套
  namespace $ {
    namespace fn {
      class init {}
    }
  }
  export = $;
}
