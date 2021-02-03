interface Item {
  name: string;
}
class DataManager<T extends string | number> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}
// const data = new DataManager([{ name: "1" }]);
// data.getItem(0);
interface Test {
  name: string;
}

const data = new DataManager<string>([]);

function hello<T>(params: T) {
  return params;
}

const func: <T>(params: T) => T = hello;
