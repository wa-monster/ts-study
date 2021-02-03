// class Person3 {
//   public readonly name: string;
//   constructor(public name: string) {
//     this.name = name;
//   }
//   // public get getName(): string {
//   //   return this._name;
//   // }
// }

// const person3 = new Person3("dell");

// person3.name = "hello"; //只读，不能改
// console.log(person3.name);

//抽象类，只能继承不能new
// abstract class Geom {
//   width: number;
//   radius: number;
//   getType() {
//     return "Gemo";
//   }
//   abstract getArea(): number;
// }

// class Circle {
//   constructor(parameters) {}
// }

// class Square {
//   constructor(parameters) {}
// }
// class Triangle {
//   constructor(parameters) {}
// }
interface Person11 {
  name: string;
}
interface Teacher11 extends Person11 {
  age: string;
  job: string;
}
interface Student11 extends Person11 {}
const teacher11 = {
  name: "312",
  age: 18,
  job: "ss",
  ww: "",
};
const student11 = {
  name: "312",
  age: 18,
};
const getUserInfo = (user: Teacher11 | Student11) => {
  console.log(user.name);
};
getUserInfo(teacher11);
getUserInfo(student11);
