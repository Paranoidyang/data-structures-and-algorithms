/**
 * 题目描述：斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

  F(0) = 0，F(1) = 1
  F(n) = F(n - 1) + F(n - 2)，其中 n > 1
  给定 n ，请计算 F(n) 。

 */

/**
 * 时间复杂度O(N)，空间复杂度O(N)
* @param {number} n
* @return {number}
*/
function fib(n) {
  if (n <= 1) return n
  // 初始化状态数组
  const dp = []
  // 初始化已知值
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }
  // 返回目标值
  return dp[n]
}

/**
 * 时间复杂度O(N)，空间复杂度O(1)
* @param {number} n
* @return {number}
*/
function fib(n) {
  if (n <= 1) return n
  // 初始化状态数组
  const dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    const sum = dp[0] + dp[1]
    dp[0] = dp[1]
    dp[1] = sum
  }
  // 返回目标值
  return dp[1]
}

console.log(fib(0), fib(1), fib(2), fib(3), fib(4), fib(5))