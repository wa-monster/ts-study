interface Person {
  name: string;
  age: number;
  gender: string;
}

//T extends 'name'
// type T = 'name'
class Teacher {
  constructor(private info: Person) {}
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key];
  }
}
const teacher = new Teacher({
  name: "dell",
  age: 1,
  gender: "wd",
});
const test = teacher.getInfo("name");
console.log();

// //
// type aa = "aa";
// const abc: aa = "aa";
