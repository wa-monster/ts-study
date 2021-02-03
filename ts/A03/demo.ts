//type annotation 类型注解
//type inference 类型推断
// 如果 TS 能够自动分析变量类型，我们不需要做什么类型注解
// 如果 TS 不能自动分析变量类型，我们需要使用类型注解
// const firstNumber: number = 1;
// const secondNumber: number = 2;
// const total = firstNumber + secondNumber;
function getTotal(f: number, s: number) {
  return s + f;
}
const total = getTotal(1, 2);
