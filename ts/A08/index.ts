class Person1 {
  name = "dell";
  getName() {
    return this.name;
  }
}

class Teacher1 extends Person1 {
  getName() {
    return super.getName() + " lee";
  }
}
const teacher1 = new Teacher1();

console.log(teacher1.getName());
