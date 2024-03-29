/**
 * 题目描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * 示例 1:
 *  输入: "aba"
    输出: True
    示例 2:
    输入: "abca"
    输出: True
    解释: 你可以删除c字符。
    注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 */

/**
   * 最多删除一个字符。判断是否能成为回文字符串
   * @param {*} str 
   */
function validPalindrome(str) {
  // 工具方法，用于判断字符串是否回文
  const isPalindrome = (start, end) => {
    while (start < end) {
      if (str[start] === str[end]) {
        start++
        end--
      } else {
        return false
      }
    }
    return true
  }
  const len = str.length
  let i = 0, j = len - 1 // i、j分别为左右指针
  while (i < j && str[i] === str[j]) { // 当左右指针均满足对称时，一起向中间前进
    i++
    j--
  }
  if (isPalindrome(i++, j)) return true // 尝试判断跳过左指针元素后字符串是否回文
  if (isPalindrome(i, j--)) return true // 尝试判断跳过右指针元素后字符串是否回文
  return false // 默认返回 false
}


console.log(validPalindrome('aaaa'))

