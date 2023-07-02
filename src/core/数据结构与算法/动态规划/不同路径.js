/**
 * 题目描述：一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

  机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

  问总共有多少条不同的路径？
 */
function uniquePaths(m, n) {
  const dp = Array(m).fill().map(() => Array(n))

    for (let i = 0; i < m; ++i) {
        dp[i][0] = 1
    }

    for (let i = 0; i < n; ++i) {
        dp[0][i] = 1
    }

    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
}

// 测试
console.log(uniquePaths(3, 7))
console.log(uniquePaths(2, 3))
console.log(uniquePaths(7, 3))
console.log(uniquePaths(3, 3))