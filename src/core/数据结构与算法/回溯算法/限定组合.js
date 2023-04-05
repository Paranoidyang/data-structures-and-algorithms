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

export default function () {

  /**
   * 返回 1 ... n 中所有可能的 k 个数的组合
   * @param {*} n 
   * @param {*} k 
   * @returns 
   */
  function combine(n, k) {
    const res = []// 初始化结果数组
    const subset = []// 初始化组合数组
    dfs(1)// 进入 dfs，起始数字是1
    function dfs(index) {// 定义 dfs 函数，入参是当前遍历到的数字
      if (subset.length === k) {
        debugger
        res.push(subset.slice())
        return
      }
      for (let i = index; i <= n; i++) {// 从当前数字的值开始，遍历 index-n 之间的所有数字
        subset.push(i)// 这是当前数字存在于组合中的情况
        debugger
        dfs(i + 1)// 基于当前数字存在于组合中的情况，进一步 dfs
        subset.pop()// 回溯，这是当前数字不存在于组合中的情况
      }
    }
    return res// 返回结果数组
  };
  console.log(combine(4, 2))

}









