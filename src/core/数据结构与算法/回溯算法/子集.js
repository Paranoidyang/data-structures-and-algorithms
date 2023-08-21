/**
 * 题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 
 * 说明：解集不能包含重复的子集。你可以按任意顺序返回解集。
 * 
 * 示例1: 
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
 * 示例 2：
 * 输入：nums = [0]
 * 输出：[[],[0]]
 * 
 */

/**
  * 返回该数组所有可能的子集
  * @param {*} nums 
  */
function subsets(nums) {
  const path = [], result = [], len = nums.length
  const dfs = (nums, startIndex) => {
    result.push([...path])
    if (startIndex >= len) return // 终止条件可以不加，不会无限递归，因为每次递归的下一层就是从i+1开始的，当startIndex >= len时，for循环也不会执行，最后也是return
    for (let i = startIndex; i < len; i++) {
      path.push(nums[i])
      dfs(nums, i + 1)
      path.pop()
    }
  }
  dfs(nums, 0)
  return result
}

//  测试
console.log(subsets([1, 2, 3]))







