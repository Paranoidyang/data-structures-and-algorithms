/**
 * 题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 全排列：从n个不同元素中任取m（m≤n）个元素，按照一定的顺序排列起来，叫做从n个不同元素中取出m个元素的一个排列。当m=n时所有的
 *        排列情况叫全排列。
 * 回溯算法：从一条路往前走，能进则进，不能进则退回来，换一条路再试。
 * 递归与回溯相辅相成，一般递归函数的下面就是回溯的逻辑。
 * 回溯法都可以抽象成一个N叉树形结构，横向通过for循环处理，纵向通过递归处理
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
export default function () {
  /**
 * 返回所有可能的全排列
 * @param {*} nums 没有重复数字的数组
 */
  function permute(nums) {
    const res = []
    const used = [] //标识是否已经用过，其实也可以用path.includes判断，这里以空间换时间

    function dfs(path) {
      if (path.length === nums.length) {// 递归边界条件：路径数组的长度和 nums 相等，说明路径找到了
        debugger
        res.push(path.slice())
        return
      }
      for (let num of nums) {
        debugger
        if (used[num]) continue// 判断当前数组有没有用过，用过直接跳过
        path.push(num)// 如果没用过，放入路径数组，打上标识
        used[num] = true
        dfs(path)// 针对当前路径继续递归
        path.pop()// 回溯
        used[num] = false// 使用的标记也要清空
      }
    }
    dfs([])
    return res
  }

  // 测试
  console.log(permute([1, 2, 3]))


}









