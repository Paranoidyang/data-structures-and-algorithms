/**
 * 题目描述：有 n 件物品，物品体积用一个名为 w 的数组存起来，物品的价值用一个名为 value 的数组存起来；每件物品的体积用 w[i] 来表示，每件物品的价值用 value[i] 来表示。现在有一个容量为 c 的背包，问你如何选取物品放入背包，才能使得背包内的物品总价值最大？
 * 
 * 注意：每种物品都只有1件
 * 
 * 背包问题只需要掌握01背包和完全背包即可。
 * 
 */

/**
 * 二维数组解法
 * @param {*} weight 
 * @param {*} value 
 * @param {*} size 
 * @returns 
 */
function testWeightBagProblem(weight, value, size) {
  // 定义 dp 数组
  // dp[i][j]：下标0~i的物品，任取放入容量为j的背包中，达到的最大价值
  const len = weight.length,
    dp = Array(len).fill().map(() => Array(size + 1).fill(0));

  // 初始化
  for (let j = weight[0]; j <= size; j++) {
    dp[0][j] = value[0];
  }

  // weight 数组的长度len 就是物品个数
  for (let i = 1; i < len; i++) { // 遍历物品
    for (let j = 0; j <= size; j++) { // 遍历背包容量
      if (j < weight[i]) dp[i][j] = dp[i - 1][j];
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]); // 该递归公式由不放物品i和放物品i两个方向推出
    }
  }

  console.table(dp)

  return dp[len - 1][size];
}

function test() {
  console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

test();


// ------------------------------------------------------------------

/**
 * 一维数组解法
 * @param {*} weight 
 * @param {*} value 
 * @param {*} size 
 * @returns 
 */
function testWeightBagProblem(weight, value, size) {
  const len = weight.length,
    dp = Array(size + 1).fill(0);
  for (let i = 1; i <= len; i++) {
    for (let j = size; j >= weight[i - 1]; j--) {
      dp[j] = Math.max(dp[j], value[i - 1] + dp[j - weight[i - 1]]);
    }
  }
  return dp[size];
}


function test() {
  console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

test();