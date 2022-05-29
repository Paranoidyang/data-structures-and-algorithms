/**
 * 题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。
 * 示例: 输入: nums = [1,2,3]
  输出:
  [
    [3],
    [1],
    [2],
    [1,2,3],
    [1,3],
    [2,3],
    [1,2],
    []
  ]
 */

/**
 * 返回该数组所有可能的子集
 * @param {*} nums 
 */
function subsets(nums) {
  let res = []
  let len = nums.length
  let subset = []
  function dfs(n) {
    if (n === len) { // 遍历到叶子节点，存入结果
      res.push(subset.slice())
      return
    }
    // 第n层，取，dfs到下一层
    subset.push(nums[n])
    dfs(n + 1)
    // 第n层，不取，dfs到下一层
    subset.pop()
    dfs(n + 1)
  }
  dfs(0) // 从root开始
  return res
}
console.log(subsets([1, 2, 3]))








