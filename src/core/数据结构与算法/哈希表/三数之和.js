/**
 * 题目描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 
 * 注意： 答案中不可以包含重复的三元组。
 * 
 * 示例：给定数组 nums = [-1, 0, 1, 2, -1, -4]，满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
 * 
 */


/**
 * 双指针法（推荐，如果使用哈希表处理过于繁琐）
 * @param {*} nums 
 */
function threeSum(nums) {
  const len = nums.length
  const res = []
  nums.sort((a, b) => a - b) // 先从小到大排序
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) return res // 排序之后如果第一个元素已经大于零，那么无论如何组合都不可能凑成三元组，直接返回结果就可以了
    if (i > 0 && nums[i] == nums[i - 1]) { // a去重方法，必须是与前一个元素比较（不能是nums[i] == nums[i + 1]，这种写法会把[-1, -1, 2]给过滤掉，因为left其实是在i的下一位），与前一个相同，说明这个结果集已经收集过了，可以pass
      continue;
    }
    let left = i + 1
    let right = len - 1
    while (left < right) { // 求三元组，所以这里不能<=
      if (nums[i] + nums[left] + nums[right] > 0) right--
      else if (nums[i] + nums[left] + nums[right] < 0) left++
      else {
        res.push([nums[i], nums[left], nums[right]]) // 收集结果
        while (nums[left] === nums[left + 1]) left++ // 去重逻辑应该放在找到一个三元组之后，对b 和 c去重，如[-1, -1, 0, 0, 1, 1, 1]这种集合
        while (nums[right] === nums[right - 1]) right--
        left++ // 找到答案时，双指针同时收缩
        right--
      }
    }
  }
  return res
}

// 测试
console.log(threeSum([-1, 0, 1, 2, -1, -4, -3]))