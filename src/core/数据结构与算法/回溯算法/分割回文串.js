/**
 * 题目描述：给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。返回 s 所有可能的分割方案。
 * 
 * 示例1: 输入: "aab" 输出: [ ["aa","b"], ["a","a","b"] ]
 * 示例2: 输入: "a" 输出: [ ["a"] ]
 * 
 * 提示：
 * 1 <= s.length <= 16
 * s 仅由小写英文字母组成
 * 
 * 回文串：对称的字符串，即从头到尾遍历、从尾到头遍历都是相同的字符串
 */

/**
 * 分割回文串
 * @param {*} s 
 * @returns 
 */
function partition(s) {
  const path = [], result = [], len = s.length
  const dfs = (s) => {
    if(path.join('').length === len) { // path收集的回文串总长度与给定字符串长度一致时，收集结果
      result.push([...path])
      return
    }
    for(let i = 1; i <= s.length; i++) {
      const curr = s.slice(0, i)
      if(!isPalindrome(curr)) { // 如果当前子串不是回文串，结束当前循环
        continue
      }
      path.push(curr)
      const remainder = s.slice(i) // 剩余字符串
      dfs(remainder)
      path.pop()
    }
  }
  dfs(s)
  return result
}

// 判断字符串是否是回文串
function isPalindrome(s) {
  return s === s.split('').reverse().join('')
}

// 测试
console.log(partition('aab'))
console.log(partition('a'))
console.log(partition('aba'))

