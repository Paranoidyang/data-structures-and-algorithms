/**
 * 题目描述：给定一个非负整数数组，你最初位于数组的第一个位置。

  数组中的每个元素代表你在该位置可以跳跃的最大长度。

  你的目标是使用最少的跳跃次数到达数组的最后一个位置。

  示例:
  输入: [2,3,1,1,4]
  输出: 2
  解释: 跳到最后一个位置的最小跳跃数是 2。从下标为 0 跳到下标为 1 的位置，跳  1  步，然后跳  3  步到达数组的最后一个位置。
  说明: 假设你总是可以到达数组的最后一个位置。
 * 
 */
function jump(nums) {
  const len = nums.length
  if (len == 1) return 0
  let curDistance = 0    // 当前覆盖最远距离下标
  let result = 0         // 记录走的最大步数
  let nextDistance = 0   // 下一步覆盖最远距离下标
  for (let i = 0; i < len; i++) {
    nextDistance = Math.max(nums[i] + i, nextDistance)  // 更新下一步覆盖最远距离下标
    if (i == curDistance) {                             // 遇到当前覆盖最远距离下标
      result++                                          // 需要走下一步
      curDistance = nextDistance                        // 更新当前覆盖最远距离下标（相当于加油了）
      if (nextDistance >= len - 1) break                // 当前覆盖最远距到达集合终点，不用做ans++操作了，直接结束
    }
  }
  return result
}

// 测试
console.log(jump([2,3,1,1,4]))