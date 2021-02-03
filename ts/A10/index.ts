//Getter Setter
//底杠+名称 表示私有属性
// class Personn {
//   constructor(private _name: string) {}
//   get name() {
//     return this._name + "lee";
//   }
//   set name(name: string) {
//     this._name = name + "222";
//   }
// }
// const personn = new Personn("dell");
// personn.name = "dddd3333";
// console.log(personn.name);

//单例模式实现
//static 挂在类上
// class Demo {
//   private static instance: Demo;
//   private constructor() {}
//   static getInstance() {
//     if (!this.instance) {
//       this.instance = new Demo();
//     }
//     return this.instance;
//   }
// }

// const demo1 = Demo.getInstance();
// const demo2 = Demo.getInstance();
// console.log(demo1 === demo2);
