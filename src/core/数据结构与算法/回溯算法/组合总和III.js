/**
 * 题目描述：找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
 * 
 * 说明：
 * 1、所有数字都是正整数。
 * 2、解集不能包含重复的组合。
 * 
 * 示例 1: 输入: k = 3, n = 7 输出: [[1,2,4]]
 * 示例 2: 输入: k = 3, n = 9 输出: [[1,2,6], [1,3,5], [2,3,4]]
 */

/**
 * 组合总和III
 * @param {*} k 个数
 * @param {*} n 和
 * @returns 
 */
function combinationSum3(k, n) {
  const path = [] // 单条路径
  const result = [] // 结果集
  let sum = 0 // 单条路径之和
  const dfs = (k, n, startIndex) => {
    if (sum > n) return // 剪枝操作
    if (sum === n && path.length === k) { // 注意保存path的副本，而不是引用
      result.push([...path])
      return
    }
    // for 循环做了剪枝优化：i <= 9 ——> i <= 9 - (k - path.length) + 1
    for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
      path.push(i) // 处理节点
      sum += i // 同时计算总和
      dfs(k, n, i + 1) // 递归
      path.pop() // 回溯，撤销处理的节点
      sum -= i // 回溯之后，总和也要相应减去
    }
  }
  dfs(k, n, 1)
  return result
}

// 测试
console.log(combinationSum3(3, 7))
console.log(combinationSum3(3, 9))