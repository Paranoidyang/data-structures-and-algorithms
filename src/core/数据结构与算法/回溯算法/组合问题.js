/**
 * 题目描述：给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 示例: 输入: n = 4, k = 2
  输出:
  [
    [2,4],
    [3,4],
    [2,3],
    [1,2],
    [1,3],
    [1,4],
  ]
 */

/**
 * 回溯
 * @param {*} n 
 * @param {*} k 
 * @returns 
 */
function combine(n, k) {
  const path = [] // 单条路径
  const result = [] // 结果集
  const backtracking = (n, k, startIndex) => {
    if(path.length === k) {
      result.push([...path]) // 注意保存path的副本，而不是引用
      return
    }
    for(let i = startIndex; i <= n; i++) {
      path.push(i)
      backtracking(n, k, i + 1)
      path.pop() // 回溯
    }
  }
  backtracking(n, k, 1)
  return result
}

// 测试
console.log(combine(4, 2))









