/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 示例: 输入: [-2,1,-3,4,-1,2,1,-5,4] 输出: 6 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */

/**
 * 暴力解法
 * @param {*} nums 
 */
function maxSubArray(nums) {
  const len = nums.length
  let count = 0
  let result = 0
  for (let i = 0; i < len; i++) { // 设置起始位置
    count = 0
    for (let j = i; j < len; j++) { // 每次从起始位置i开始遍历寻找最大值
      count += nums[j]
      result = count > result ? count : result
    }

  }
  return result
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

/**
 * 贪心解法
 * @param {*} nums 
 * @returns 
 */
function maxSubArray2(nums) {
  let result = -Infinity
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    count += nums[i]
    if (count > result) { // 取区间累计的最大值（相当于不断确定最大子序终止位置）
      result = count
    }
    if (count < 0) { // 相当于重置最大子序起始位置，因为遇到负数一定是拉低总和
      count = 0
    }
  }
  return result
}

console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
