//泛型

function join<T, P>(f: T, s: P): T {
  return f;
}
console.log(join<string, number>("1", 1));

function map<ABC>(params: Array<ABC>) {
  return params;
}

map<number>([222]);
