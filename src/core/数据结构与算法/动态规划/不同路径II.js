/**
 * 题目描述：一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 */
function uniquePathsWithObstacles(obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  // 不能这样：const dp = new Array(m).fill(new Array(n).fill(0))，
  // 因为 new Array(n).fill(0) 只会执行一次，dp 数组中的每个子数组都指向同一个内存地址。
  const dp = new Array(m).fill().map(() => new Array(n).fill(0))

  for (let i = 0; i < m && obstacleGrid[i][0] === 0; ++i) {
    dp[i][0] = 1
  }

  for (let i = 0; i < n && obstacleGrid[0][i] === 0; ++i) {
    dp[0][i] = 1
  }

  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
}

// 测试
console.log(uniquePathsWithObstacles())