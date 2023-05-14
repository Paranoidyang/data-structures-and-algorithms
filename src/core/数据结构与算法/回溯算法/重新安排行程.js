/**
 * 题目描述：给定一个机票的字符串二维数组 [from, to]，子数组中的两个成员分别表示飞机出发和降落的机场地点，对该行程进行重新规划排序。所有这些机票都属于一个从 JFK（肯尼迪国际机场）出发的先生，所以该行程必须从 JFK 开始。
 * 
 * 提示：
 * 如果存在多种有效的行程，请你按字符自然排序返回最小的行程组合。例如，行程 ["JFK", "LGA"] 与 ["JFK", "LGB"] 相比就更小，排序更靠前
   所有的机场都用三个大写字母表示（机场代码）。
   假定所有机票至少存在一种合理的行程。
   所有的机票必须都用一次 且 只能用一次。

   示例 1：
   输入：[["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
   输出：["JFK", "MUC", "LHR", "SFO", "SJC"]

   示例 2：
   输入：[["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
   输出：["JFK","ATL","JFK","SFO","ATL","SFO"]
   解释：另一种有效的行程是 ["JFK","SFO","ATL","JFK","ATL","SFO"]。但是它自然排序更大更靠后。
 */

function findItinerary(tickets) {
  let result = ['JFK']
  let map = {}

  for (const tickt of tickets) {
      const [from, to] = tickt
      if (!map[from]) {
          map[from] = []
      }
      map[from].push(to)
  }

  for (const city in map) {
      // 对到达城市列表排序
      map[city].sort()
  }
  function backtracing() {
      if (result.length === tickets.length + 1) {
          return true
      }
      if (!map[result[result.length - 1]] || !map[result[result.length - 1]].length) {
          return false
      }
      for(let i = 0 ; i <  map[result[result.length - 1]].length; i++) {
          let city = map[result[result.length - 1]][i]
          // 删除已走过航线，防止死循环
          map[result[result.length - 1]].splice(i, 1)
          result.push(city)
          if (backtracing()) {
              return true
          }
          result.pop()
          map[result[result.length - 1]].splice(i, 0, city)
      }
  }
  backtracing()
  return result
}

// 测试
console.log(findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]))
console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]))