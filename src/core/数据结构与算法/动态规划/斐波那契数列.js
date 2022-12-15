/**
 * 题目描述：斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

  F(0) = 0，F(1) = 1
  F(n) = F(n - 1) + F(n - 2)，其中 n > 1
  给定 n ，请计算 F(n) 。

 */

/**
* @param {number} n
* @return {number}
*/
const fib = function (n) {
  if (n < 2) return n
  // 初始化状态数组
  const f = [];
  // 初始化已知值
  f[0] = 0;
  f[1] = 1;
  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 2] + f[i - 1];
  }
  // 返回目标值
  return f[n];
};

console.log(fib(0), fib(1), fib(2), fib(3), fib(4), fib(5))