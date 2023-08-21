/**
 * 题目描述：给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * 
 * 示例1：
 * 输入: [1,1,2]
 * 输出: [[1,1,2], [1,2,1], [2,1,1]]
 * 
 * 示例2：
 * 输入：nums = [1,2,3]
 * [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

/**
 * 方法一，不排序，通过额外两个空间记录树层和树枝是否用过
 * @param {*} nums 
 * @returns 
 */
function permuteUnique(nums) {
  const path = [], result = [], len = nums.length
  const used = new Array(len).fill(false)
  const dfs = () => {
    if (path.length === len) {
      result.push([...path])
      return
    }
    const usedSet = new Set()
    for (let i = 0; i < nums.length; i++) {
      if (usedSet.has(nums[i])) continue
      if (used[i]) continue
      path.push(nums[i])
      usedSet.add(nums[i]) // 记录树层是否用过
      used[i] = true // 记录树枝是否用过
      dfs()
      path.pop()
      used[i] = false
    }
  }
  dfs()
  return result
}

/**
 * 方法二，排序，通过额外一个空间即可判断树层和树枝是否用过
 * @param {*} nums 
 * @returns 
 */
//  function permuteUnique(nums) {
//   const path = [], result = [], len = nums.length
//   const used = new Array(len).fill(false) // 记录树枝是否用过
//   nums.sort((a, b) => a -b)
//   const dfs = () => {
//     if(path.length === len) {
//       result.push([...path])
//       return
//     }
//     for(let i = 0; i < nums.length; i++) {
//       if(i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) continue
//       if(used[i] === false) {
//         path.push(nums[i])
//         used[i] = true 
//         dfs()
//         path.pop()
//         used[i] = false
//       }
//     }
//   }
//   dfs()
//   return result
// }

// 测试
console.log(permuteUnique([1, 1, 2]))
console.log(permuteUnique([1, 2, 3]))









