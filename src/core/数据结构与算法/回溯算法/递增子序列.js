/**
 * 题目描述：给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是2。
 * 
 * 示例1: 
 * 输入：nums = [4, 7, 6, 7]
 * 输出：[[4, 6], [4, 7], [4, 6, 7],  [6, 7], [7,7], [4,7,7]]
 * 
 * 说明：
 * 1、给定数组的长度不会超过15
 * 2、数组中的整数范围是 [-100,100]。
 * 3、给定数组中可能包含重复数字，相等的数字应该被视为递增的一种情况。
 */

function findSubsequences(nums) {
  const path = [], result = []
  const dfs = (nums, startIndex) => {
    if(path.length >= 2) {
      result.push([...path])
    }
    const usedSet = new Set() // 记录树层是否使用过某个数
    for(let i = startIndex; i < nums.length; i++) {
      const end = path[path.length -1]
      if(usedSet.has(nums[i])) continue
      if(path.length > 0 && nums[i] < end) continue
      path.push(nums[i])
      usedSet.add(nums[i])
      dfs(nums, i + 1)
      path.pop()
    }
  }
  dfs(nums, 0)
  return result
}

// 测试
console.log(findSubsequences([4, 7, 6, 7]))





