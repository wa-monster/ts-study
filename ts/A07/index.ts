interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
  say(): string;
}

const getPersonName = (person: Person) => {
  console.log(person.name);
};

const setPersonName = (person: Student, name) => {
  person.name = name;
};
let person = {
  name: "",
  age: 18,
  sex: 12,
  aaa: "",
  say() {
    return "";
  },
  study() {
    return "";
  },
};
setPersonName(person, "222");

getPersonName(person);
//用接口对类做属性约束
class UserP implements Person {
  name = "dell";
  age = 18;
  say() {
    return "";
  }
}

interface Student extends Person {
  study(): string;
}

interface SayHi {
  (bbb: string): string;
}

const saay: SayHi = (ccc: string) => {
  return ccc;
};
//interface和type类型 类似但不完全一致
