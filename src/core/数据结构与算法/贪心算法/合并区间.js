/**
 * 题目描述：给出一个区间的集合，请合并所有重叠的区间。

  示例 1:
  输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
  输出: [[1,6],[8,10],[15,18]]
  解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

  示例 2:
  输入: intervals = [[1,4],[4,5]]
  输出: [[1,5]]
  解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。

  注意：输入类型已于2019年4月15日更改。 请重置默认代码定义以获取新方法签名。
 */

function merge(intervals) {
  const result = []
  if(intervals.length === 0) return result
  intervals.sort((a, b) => a[0] -b[0]) // 按左边界升序排列
  result.push(intervals[0])
  for(let i = 1; i < intervals.length; i++) {
    const lastOne = result[result.length - 1]
    if(intervals[i][0] > lastOne[1]) { // 不重叠
      result.push(intervals[i])
    }else { // 重叠
      lastOne[1] = Math.max(lastOne[1], intervals[i][1])
    }
    
  }
  return result
}

// 测试
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
console.log(merge([[1,4],[4,5]]))