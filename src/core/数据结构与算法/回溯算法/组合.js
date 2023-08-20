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
 * 组合
 * @param {*} n 数范围
 * @param {*} k 个数
 * @returns 
 */
function combine(n, k) {
  const path = [] // 单条路径
  const result = [] // 结果集
  const dfs = (n, k, startIndex) => {
    if (path.length === k) {
      result.push([...path]) // 注意保存path的副本，而不是引用
      return
    }
    // 这一行代码可以进行剪枝优化：i <= n ——> i <= n - (k - path.length) + 1
    // k - path.length 是剩下还需要取的个数
    for (let i = startIndex; i <= n; i++) {
      path.push(i) // 处理节点
      dfs(n, k, i + 1) // 递归
      path.pop() // 回溯，撤销处理的节点
    }
  }
  dfs(n, k, 1)
  return result
}

// 测试
console.log(combine(4, 2))









