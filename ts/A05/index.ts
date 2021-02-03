//基础类型 boolean, number,string,void,undefined,symbol,null
let count2: number;
count2 = 123;
//对象类型 {},class,function,[]
let func = (str: string) => {
  return parseInt(str, 10);
};

let func1: (str: string) => number = (str) => {
  return parseInt(str, 10);
};
const data = new Date();
//其他case
const rowData = '{"name":"dell"}';
const newData: { name: string } = JSON.parse(rowData);
let temp: number | string = 123;
temp = "456";
