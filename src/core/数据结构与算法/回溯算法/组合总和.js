/**
 * 题目描述：给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的数字可以无限制重复被选取。
 * 
 * 说明：
 * 1、所有数字都是正整数。
 * 2、解集不能包含重复的组合。
 * 
 * 示例 1: 
 * 输入：candidates = [2,3,6,7], target = 7,
 * 所求解集为： [ [7], [2,2,3] ]
 * 
 * 示例 2: 
 * 输入：candidates = [2,3,5], target = 8,
 * 所求解集为： [ [2,2,2,2], [2,3,3], [3,5] ]
 */

/**
 * 组合总和
 * @param {*} candidates 整数数组
 * @param {*} target 目标整数
 * @returns 
 */
 function combinationSum(candidates, target) {
  const path = [] // 单条路径
  const result = [] // 结果集
  let sum = 0 // 单条路径之和
  candidates.sort((a,b)=>a-b); // 从小到大排序，方便for循环中剪枝
  const dfs = (candidates, target, index) => {
    if(sum > target)  return
    if(sum === target) {
      result.push([...path]) // 注意保存path的副本，而不是引用
      return
    }
    for(let i = index; i < candidates.length; i++) {
      const num = candidates[i]
      if(sum + num > target) break // 剪枝，如果本层的 sum+candidates[i] 已经大于target，结束本轮for循环
      path.push(num) 
      sum += num
      dfs(candidates, target, i) // 递归，关键点: 不用i+1了，表示可以重复读取当前的数
      path.pop() // 回溯，撤销处理的节点
      sum -= num // 回溯之后，总和也要相应减去
    }
  }
  dfs(candidates, target, 0)
  return result
}

// 测试
console.log(combinationSum([2,3,6,7], 7))
console.log(combinationSum([2,3,5], 8))