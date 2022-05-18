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
export default function () {
  /**
   * 最多删除一个字符。判断是否能成为回文字符串
   * @param {*} str 
   */
  function validPalindrome(str) {
    const len = str.length
    // i、j分别为左右指针
    let i = 0, j = len - 1
    // 当左右指针均满足对称时，一起向中间前进
    while (i < j && str[i] === str[j]) {
      i++
      j--
    }
    // 尝试判断跳过左指针元素后字符串是否回文
    if (isPalindrome(i++, j)) {
      return true
    }
    // 尝试判断跳过右指针元素后字符串是否回文
    if (isPalindrome(i, j--)) {
      return true
    }

    // 工具方法，用于判断字符串是否回文
    function isPalindrome(st, ed) {
      while (st < ed) {
        if (str[st] === str[ed]) {
          st++
          ed--
        } else {
          return false
        }
      }
      return true
    }
    // 默认返回 false
    return false
  }


  console.log(validPalindrome('aaaa'))



}

