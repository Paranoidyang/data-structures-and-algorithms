/**
 * 题目描述：实现compose函数：将嵌套执行的方法作为参数平铺，嵌套执行就是一个函数的返回值将作为另一个函数的参数。
 * 执行的时候从compose函数最右边的参数开始执行，自右往左
 * pipe函数与compose类似，不过参数的执行顺序是自左往右，将reduceRight替换成reduce即可
 */
export default function () {
  const compose =
    (...args) =>
    (x) =>
      args.reduceRight((pre, cur) => cur(pre), x);

  const pipe =
    (...args) =>
    (x) =>
      args.reduce((pre, cur) => cur(pre), x);

  // 测试
  // 用法如下:
  function fn1(x) {
    return x + 1;
  }
  function fn2(x) {
    return x + 2;
  }
  function fn3(x) {
    return x + 3;
  }
  function fn4(x) {
    return x + 4;
  }
  const a = compose(fn1, fn2, fn3, fn4);
  console.log(a(1)); // 1+4+3+2+1=11
}
