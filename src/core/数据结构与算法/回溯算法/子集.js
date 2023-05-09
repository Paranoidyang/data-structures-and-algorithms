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
  const dfs = (nums) => {
    result.push([...path])
    if(path.length === len) { // 终止条件可以不加
      return
    }
    for(let i = 0; i < nums.length; i++) {
      path.push(nums[i])
      dfs(nums.slice(i + 1))
      path.pop()
    }
  }
  dfs(nums)
  return result
 }

//  测试
 console.log(subsets([1, 2, 3]))







