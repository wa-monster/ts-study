//private 允许我在类的内部被调用
//public 允许我在类的内外被调用
//protected 允许在类内和继承的子类中被调用

// class Person2 {
//   protected name = 2;
//   public sayHi() {
//     console.log(this.name);
//   }
// }
// const person2 = new Person2();
// console.log(person2.name);
// class Person2 {
//   // public name: string;
//   constructor(public name: string) {
//     // this.name = name;
//   }
// }
// const person2 = new Person2("dell");
// console.log(person2.name);

class Person2 {
  constructor(public name: string) {}
}

class Teacher extends Person2 {
  constructor(public age: number) {
    super("dell");
  }
  sayHi() {
    this.name;
  }
}
const teacher2 = new Teacher(123);
console.log(teacher2.age);
