const arr: (number | string)[] = [1, 2, 3];
const obj: { name: string; age: string }[] = [
  {
    name: "dell",
    age: "16",
  },
];
class Teacher {
  name: string;
  age: string;
  gender: string;
}
//类型别名
type User = { name: string; age: string };
const objArr: User[] = [
  {
    name: "dell",
    age: "16",
  },
  new Teacher(),
];
console.log(objArr);

//元祖 固定长度，固定每个元素的类型，称为元祖
const teacherInfo: [string, string, number] = ["18", "dekk", 18];

type userInfo = [string, string, number];
const userInfos: userInfo[] = [["ss", "bb", 15]];
