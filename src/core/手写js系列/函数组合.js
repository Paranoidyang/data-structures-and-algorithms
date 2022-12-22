/**
 * compose函数：函数组合可以将多个函数组合成一个函数，执行的时候从最右边的参数向左执行，前一个函数的返回值作为下一个函数的参数。
 * pipe函数与compose类似，不过参数的执行顺序是自左往右，将reduceRight替换成reduce即可
 * 优点：可以将复杂任务分割成多个子任务，然后通过组合函数再组合成复杂任务
 */

function compose(...args) {
  return x => args.reduceRight((prev, curr) => curr(prev), x)
}

function pipe(...args) {
  return x => args.reduce((prev, curr) => curr(prev), x)
}

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
