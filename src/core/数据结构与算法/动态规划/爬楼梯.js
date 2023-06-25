/**
 * 题目描述：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
   每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
   注意：给定 n 是一个正整数。

  示例 1：
    输入： 2
    输出： 2
    解释： 有两种方法可以爬到楼顶。

    1 阶 + 1 阶
    2 阶

  示例 2：
    输入： 3
    输出： 3
    解释： 有三种方法可以爬到楼顶。

    1 阶 + 1 阶 + 1 阶
    1 阶 + 2 阶
    2 阶 + 1 阶

    分析：本质上是一个斐波那契数列。

 */

/**
 * 动态规划实现
 * 时间复杂度O(N)，空间复杂度O(N)
* @param {number} n
* @return {number}
*/
function climbStairs(n) {
  if (n <= 2) return n // 因为下面直接对dp[2]操作了，防止空指针
  const dp = [] // 定义dp数组，并初始化
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) { // 注意i是从3开始的
    dp[i] = dp[i - 2] + dp[i - 1]
  }
  return dp[n] // 返回目标值
}

/**
 * 动态规划实现
 * 时间复杂度O(N)，空间复杂度O(1)
* @param {number} n
* @return {number}
*/
function climbStairs(n) {
  if (n <= 2) return n
  const dp = []
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    const sum = dp[1] + dp[2]
    // 只需要维护两个数值就可以了，不需要记录整个序列，优化空间复杂度
    dp[1] = dp[2]
    dp[2] = sum
  }
  return dp[2]
}

console.log(climbStairs(2), climbStairs(3), climbStairs(4))

/**
 * 递归实现（会超时）
* @param {number} n
* @return {number}
*/
const climbStairs1 = function (n) {
  // 处理递归边界
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  // 递归计算
  return climbStairs(n - 1) + climbStairs(n - 2)
};

/**
 * 递归+记忆化搜索实现
 * 对于一些实用派的面试官来说，“记忆化搜索”和“动态规划”没有区别，它们都能够以不错的效率帮我们达到同样的目的。这种情况下，下面这个答案就足够了。但是还有一部分面试官，比较讲究，善于咀嚼理论概念。他会告诉你记忆化搜索和动态规划是两个东西，这时候就需要提供最上面的动态规划解法了。
* @param {number} n
* @return {number}
*/
// 定义记忆数组 f
const f = []
const climbStairs2 = function (n) {
  if (n == 1) {
    return 1
  }
  if (n == 2) {
    return 2
  }
  // 若f[n]不存在，则进行计算
  if (f[n] === undefined) f[n] = climbStairs(n - 1) + climbStairs(n - 2)
  // 若f[n]已经求解过，直接返回
  return f[n]
};