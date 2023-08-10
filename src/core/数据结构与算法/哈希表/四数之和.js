/**
 * 题目描述：给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 
 * 注意：答案中不可以包含重复的四元组。
 * 
 * 示例： 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。 满足要求的四元组集合为： [ [-1, 0, 0, 1], [-2, -1, 1, 2], [-2, 0, 0, 2] ]
 */

function fourSum(nums, target) {
  const len = nums.length
  nums.sort((a, b) => a - b) // 从小到大排序
  const res = []
  for (let i = 0; i < len - 3; i++) {
    if (nums[i] > target && nums[i] >= 0) break // 剪枝处理，这里使用break，统一通过最后的return返回
    if (i > 0 && nums[i] === nums[i - 1]) continue // 对nums[i]去重
    for (let j = i + 1; j < len - 2; j++) {
      if (nums[i] + nums[j] > target && nums[i] + nums[j] >= 0) break // 2级剪枝处理
      if (j > i + 1 && nums[j] === nums[j - 1]) continue // 对nums[j]去重
      let left = j + 1
      let right = len - 1
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum < target) left++
        else if (sum > target) right--
        else {
          res.push([nums[i], nums[j], nums[left], nums[right]])
          // 去重逻辑应该放在找到一个四元组之后，对nums[left]和nums[right]去重
          while (left < right && nums[left] === nums[left + 1]) left++
          while (left < right && nums[right] === nums[right - 1]) right--
          // 找到答案时，双指针同时收缩
          left++
          right--
        }
      }
    }
  }
  return res
}

// 测试
console.log(fourSum([1, 0, -1, 0, -2, 2], 0))