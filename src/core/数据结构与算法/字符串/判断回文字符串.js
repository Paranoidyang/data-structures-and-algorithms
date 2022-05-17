/**
 * 题目描述：回文字符串就是就是正着读和倒着读都一模一样的字符串，如'yessey'
 * 回文字符串还有另一个特性：如果从中间位置“劈开”，那么两边的两个子串在内容上是完全对称的。
 */
export default function () {
  /**
   * 判断一个字符串是否是回文字符串
   * @param {*} str 
   * @returns 
   */
  // 用反转字符串判断
  function isPalindrome1(str) {
    // 反转字符串
    let reversedStr = str.split('').reverse().join('')
    return str === reversedStr
  }

  /**
   * 判断一个字符串是否是回文字符串
   * @param {*} str 
   * @returns 
   */
  // 用对称性判断
  function isPalindrome2(str) {
    // 缓存字符串的长度
    const len = str.length
    // 遍历前半部分，判断和后半部分是否对称
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - i - 1]) {
        return false
      }
    }
    return true
  }
  console.log(isPalindrome1('abba'))
  console.log(isPalindrome2('abba'))

}

