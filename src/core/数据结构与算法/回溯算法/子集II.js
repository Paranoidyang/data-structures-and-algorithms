/**
 * 题目描述：给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 
 * 说明：解集不能包含重复的子集。你可以按任意顺序返回解集。
 * 
 * 示例1: 
 * 输入：nums = [1,2,2]
 * 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
 * 
 * 示例 2：
 * 输入：nums = [0]
 * 输出：[[],[0]]
 * 
 * 关键点：如何去重？
 * 
 */

/**
  * 返回该数组所有可能的子集
  * @param {*} nums 
  */
function subsets2(nums) {
  const path = [], result = [], len = nums.length
  const used = new Array(len).fill(false) // 标记元素是否使用过
  nums.sort((a, b) => a - b)
  const dfs = (nums, startIndex) => {
    result.push([...path])
    if (startIndex >= len) return // 终止条件可以不加
    for (let i = startIndex; i < len; i++) {
      // 去重，树枝上相等还没回溯，前一个为true，如果前一个为false，说明是树层上的情况
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) continue
      path.push(nums[i])
      used[i] = true
      dfs(nums, i + 1)
      path.pop()
      used[i] = false
    }
  }
  dfs(nums, 0)
  return result
}

//  测试
console.log(subsets2([1, 2, 2]))
console.log(subsets2([0]))







