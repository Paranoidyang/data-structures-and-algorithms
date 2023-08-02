/**
 * 题目描述：实现函数柯里化，将接收多个参数的函数转化成一系列接收一个参数的函数的技术。
 *          用闭包把参数保存起来，当参数的数量足够了，再开始执行函数
 */

// currying函数
function currying(fn, ...args) {
  const length = fn.length;
  let allArgs = [...args];
  const res = (...newArgs) => {
    allArgs = [...allArgs, ...newArgs]; //用闭包保存参数
    if (allArgs.length === length) {
      return fn(...allArgs);
    } else {
      return res;
    }
  };
  return res;
}


// 测试函数
const add = (a, b, c) => a + b + c;
// const a = currying(add, 1);
const a = currying(add);
a(1)
console.log(a(2, 3))