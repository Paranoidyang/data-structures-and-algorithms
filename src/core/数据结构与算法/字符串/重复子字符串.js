/**
 * 题目描述：给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
 * 
 * 示例 1:
    输入: "abab"
    输出: True
    解释: 可由子字符串 "ab" 重复两次构成。

   示例 2:
    输入: "aba"
    输出: False

   示例 3:
    输入: "abcabcabcabc"
    输出: True
    解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)
 */

/**
 * 暴力解法
 * 思路：
 * 1、如果一个字符串可以由它的一个子串重复多次构成，那么必定这个子串长度一定能被原字符串长度整除；
 * 2、且这个子串重复一定次数后等于原串；
 * @param {*} s 
 */
function repeatedSubstringPattern(s) {
  const len = s.length
  for (let i = 0; i < len; i++) {
    let substr = s.substr(0, i)
    if (len % substr.length === 0) {
      let repeat = len / substr.length // 能整除的情况下，计算重复多少次
      if (substr.repeat(repeat) === s) {
        return true
      }
    }
  }
  return false
}

console.log(repeatedSubstringPattern('abab'))
console.log(repeatedSubstringPattern('aba'))
console.log(repeatedSubstringPattern('abcabcabcabc'))

/**
 * 移动匹配解法
 * 思路：
 * 1、将原字符串给出拷贝一遍组成新字符串；
   2、掐头去尾留中间；
   3、如果还包含原字符串，则说明是由重复子串构成。
 * @param {*} s 
 * @returns 
 */
function repeatedSubstringPattern2(s) {
  let str = (s + s).slice(1, -1)
  return str.indexOf(s) !== -1
}

console.log(repeatedSubstringPattern2('abab'))
console.log(repeatedSubstringPattern2('aba'))
console.log(repeatedSubstringPattern2('abcabcabcabc'))