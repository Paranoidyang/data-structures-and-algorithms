/**
 * 题目描述：给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
 * 
 * 示例 1：
    输入：n = 3
    输出：5

   示例 2：
    输入：n = 1
    输出：1

   提示：1 <= n <= 19
 */

function numTrees(n) {
  let dp = new Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j]
    }
  }

  return dp[n]
}

// 测试
console.log(numTrees(3))