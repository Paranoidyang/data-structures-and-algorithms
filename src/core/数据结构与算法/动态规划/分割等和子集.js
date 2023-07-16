/**
 * 题目描述：给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

  注意: 每个数组中的元素不会超过 100 数组的大小不会超过 200

  示例 1:
  输入: [1, 5, 11, 5]
  输出: true
  解释: 数组可以分割成 [1, 5, 5] 和 [11].

  示例 2:
  输入: [1, 2, 3, 5]
  输出: false
  解释: 数组不能分割成两个元素和相等的子集.

  提示：
  1 <= nums.length <= 200
  1 <= nums[i] <= 100
 */

function canPartition(nums) {
  const sum = nums.reduce((item, prev) => prev += item, 0)
  // 和为奇数，不可能拆成和相等的两个子集
  if (sum % 2 !== 0) return false
  const target = sum / 2
  // dp[j]数组定义：容量为j的背包所能放的最大价值
  const dp = Array(sum / 2 + 1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    for (let j = target; nums[i] <= j; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
      if (dp[j] === target) {
        return true
      }
    }
  }
}

// 测试
console.log(canPartition([1, 5, 11, 5]))
console.log(canPartition([1, 2, 3, 5]))
console.log(canPartition([1, 2]))