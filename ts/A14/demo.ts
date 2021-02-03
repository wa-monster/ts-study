interface Bird {
  fly: boolean;
  sing: () => {};
}
interface Dog {
  fly: boolean;
  bark: () => {};
}

function trainAnial(animal: Bird | Dog) {
  if (animal.fly) {
    (animal as Bird).sing();
  } else {
    (animal as Dog).bark();
  }
}
function trainAnialSecond(animal: Bird | Dog) {
  if ("sing" in animal) {
    animal.sing();
  } else {
    animal.bark;
  }
}

class NumberObj {
  count: number;
}
function addSecond(first: object | NumberObj, secnd: object | NumberObj) {
  if (first instanceof NumberObj) {
    return first.count;
  } else {
    return 0;
  }
}
