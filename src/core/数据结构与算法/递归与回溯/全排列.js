/**
 * 题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 全排列：从n个不同元素中任取m（m≤n）个元素，按照一定的顺序排列起来，叫做从n个不同元素中取出m个元素的一个排列。当m=n时所有的
 *        排列情况叫全排列。
 * 回溯算法：从一条路往前走，能进则进，不能进则退回来，换一条路再试。
 * 技巧：只要分析出重复的逻辑，就要想到递归，虽然不是100%，但是又很大概率可以这样解决。
 * 解法：有BFS和DFS两种解法，DFS更节约空间。
 * 示例：
    输入: [1,2,3]
    输出: [
      [1,2,3],
      [1,3,2],
      [2,1,3],
      [2,3,1],
      [3,1,2],
      [3,2,1]
    ]
 */

/**
 * 返回所有可能的全排列
 * @param {*} nums 没有重复数字的数组
 */
function permute(nums) {
  const res = []
  const used = []

  function dfs(path) {
    // 递归边界条件：路径数组的长度和 nums 相等，说明路径找到了
    if (path.length === nums.length) {
      res.push(path.slice())
      return
    }
    for (let num of nums) {
      // 判断当前数组有没有用过，用过直接跳过
      if (used[num]) continue
      // 如果没用过，放入路径数组，打上标识
      path.push(num)
      used[num] = true
      // 针对当前路径继续递归
      dfs(path)
      // 回溯
      path.pop()
      // 使用的标记也要清空
      used[num] = false
    }
  }
  dfs([])
  return res
}
// 测试
console.log(permute([1, 2, 3]))








