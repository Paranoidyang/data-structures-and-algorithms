/**
 * 题目描述：给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。
 * 
 * 示例 1:
    输入: 2
    输出: 1
    解释: 2 = 1 + 1, 1 × 1 = 1。

   示例 2:
    输入: 10
    输出: 36
    解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
    说明: 你可以假设 n 不小于 2 且不大于 58。

    dp[i]: 拆分i，得到的最大乘积dp[i]
    优化技巧：尽可能拆成两个差不多的数，所以内层循环改成为j <= i/2
 */

function integerBreak(n) {
  const dp = new Array(n + 1).fill(0) // 数组下标从0开始，所以dp[n]是第n+1个数
  dp[2] = 1
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      // 拆成两个数的情况：j * (i - j)
      // 拆成三个及以上个数的情况：j * dp[i - j]
      // 最后取dp[i]各种情况的最大值
      dp[i] = Math.max(j * (i - j), j * dp[i - j], dp[i])
    }
  }
  console.log(dp)
  return dp[n]
}

// 测试
console.log(integerBreak(2))
console.log(integerBreak(10))

