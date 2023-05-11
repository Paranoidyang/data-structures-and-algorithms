/**
 * 题目描述：给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * 
 * 示例：
 * 输入: [1,2,3]
 * 输出: [ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ]
 */

/**
 * 方法一：将用过的元素剔除
 * @param {*} nums 
 * @returns 
 */
function permute(nums) {
  const path = [], result = [], len = nums.length
  const dfs = (nums) => {
    if(path.length === len) { // 收集结果
      result.push([...path])
      return
    }
    for(let i = 0; i < nums.length; i++) {
      path.push(nums[i])
      const copyNums = [...nums]
      copyNums.splice(i, 1) // 将用过的元素剔除
      dfs(copyNums)
      path.pop()
    }
  }
  dfs(nums)
  return result
}

/**
 * 方法二：用used标识是否用过
 * @param {*} nums 
 * @returns 
 */
function permute(nums) {
  const path = [], result = [], len = nums.length
  const used = new Array(len).fill(false) // 标识是否已经用过
  const dfs = () => {
    if(path.length === len) { // 收集结果
      result.push([...path])
      return
    }
    for(let i = 0; i < nums.length; i++) {
      if(used[i]) continue // 用过直接跳过
      path.push(nums[i]) // 如果没用过，放入路径数组，打上标识
      used[i] = true
      dfs() // 递归
      path.pop() // 回溯
      used[i] = false
    }
  }
  dfs()
  return result
}

// 测试
console.log(permute([1, 2, 3]))
console.log(permute([1]))
console.log(permute([1, 2]))









