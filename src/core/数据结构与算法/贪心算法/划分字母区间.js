/**
 * 题目描述：字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。

示例：
  输入：S = "ababcbacadefegdehijhklij"
  输出：[9,7,8] 解释： 划分结果为 "ababcbaca", "defegde", "hijhklij"。 每个字母最多出现在一个片段中。 像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。

提示：
  S的长度在[1, 500]之间。
  S只包含小写字母 'a' 到 'z' 。
 */

function partitionLabels(s) {
  let map = {}
  for(let i = 0; i < s.length; i++) { // 统计每一个字符最后出现的位置
      map[s[i]] = i
  }
  let result = []
  let left = 0
  let right = 0
  for(let i = 0; i < s.length; i++) {
      right = Math.max(right, map[s[i]]) // 找到字符出现的最远边界
      if(right === i) { // 如果字符最远出现位置下标和当前下标相等了，则找到了分割点
          result.push(right - left + 1) // 收集字母区间长度
          left = i + 1
      }
  }
  return result
}

// 测试
console.log(partitionLabels('ababcbacadefegdehijhklij'))
console.log(partitionLabels('eccbbbbdec'))