/**
 * 题目描述：给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的每个数字在每个组合中只能使用一次。
 * 
 * 注意：数组 candidates 中可能有重复的元素
 * 
 * 说明：
 * 1、所有数字都是正整数。
 * 2、解集不能包含重复的组合。
 * 
 * 示例 1: 
 * 输入：candidates = [10,1,2,7,6,1,5], target = 8,
 * 所求解集为： [[1, 7], [1, 2, 5], [2, 6], [1, 1, 6]]
 * 
 * 示例 2: 
 * 输入：candidates = [2,5,2,1,2], target = 5,
 * 所求解集为： [ [1,2,2], [5]]
 */

/**
 * 组合总和
 * @param {*} candidates 整数数组
 * @param {*} target 目标整数
 * @returns 
 */
 function combinationSum2(candidates, target) {
  const path = [] // 单条路径
  const result = [] // 结果集
  let sum = 0 // 单条路径之和
  const used = new Array(candidates.length).fill(false) // 记录元素是否使用过
  candidates.sort((a,b)=>a-b); // 从小到大排序，让其相同的元素都挨在一起
  const dfs = (candidates, target, startIndex, used) => {
    if(sum === target) {
      result.push([...path]) // 注意保存path的副本，而不是引用
      return
    }
    // 如果本层的 sum+candidates[i] 已经大于target，不进行for循环
    for(let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {
      const num = candidates[i]
      const lastNum = candidates[i - 1]
      // used[i - 1] == true，说明同一树枝candidates[i - 1]使用过
      // used[i - 1] == false，说明同一树层candidates[i - 1]使用过
      // 要对同一树层使用过的元素进行跳过
      if(i > 0 && num === lastNum && used[i - 1] === false) continue
      path.push(num) 
      used[i] = true
      sum += num
      dfs(candidates, target, i + 1, used) // 递归，和39.组合总和的区别，这里是i+1，每个数字在每个组合中只能使用一次
      path.pop() // 回溯，撤销处理的节点
      used[i] = false // 回溯之后，使用状态也要恢复
      sum -= num // 回溯之后，总和也要相应减去
    }
  }
  dfs(candidates, target, 0, used)
  return result
}

// 测试
console.log(combinationSum2([10,1,2,7,6,1,5], 8))
console.log(combinationSum2([2,5,2,1,2], 5))