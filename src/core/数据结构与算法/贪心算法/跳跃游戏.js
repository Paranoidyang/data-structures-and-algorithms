/**
 * 题目描述：给定一个非负整数数组，你最初位于数组的第一个位置。

  数组中的每个元素代表你在该位置可以跳跃的最大长度。

  判断你是否能够到达最后一个位置。

  示例  1:
  输入: [2,3,1,1,4]
  输出: true
  解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
  
  示例  2:
  输入: [3,2,1,0,4]
  输出: false
  解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
 */

function canJump(nums) {
  const len = nums.length
  if(len === 1) return true // 只有一个元素，就是能达到
  let coverRange = 0 // 覆盖范围, 初始覆盖范围应该是0，因为下面的迭代是从下标0开始的
  for(let i = 0; i <= coverRange; i++) { // 在覆盖范围内更新最大的覆盖范围
    coverRange = Math.max(i + nums[i], coverRange)
    if(coverRange >= len -1) return true // 说明可以覆盖到终点了
  }
  return false
}

// 测试
console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))