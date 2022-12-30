/**
 * 题目描述：编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

            不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

            你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

  示例 1：
  输入：["h","e","l","l","o"]
  输出：["o","l","l","e","h"]

  示例 2：
  输入：["H","a","n","n","a","h"]
  输出：["h","a","n","n","a","H"]
  
 */

/**
 * 库函数（水题目，不推荐）
 * @param {*} str 
 * @returns 
 */
function reverseStr(str) {
  return str.split('').reverse().join('')
}

/**
 * 双指针：对于字符串，我们定义两个指针，一个从字符串前面，一个从字符串后面，两个指针同时向中间移动，并交换元素。
 * @param {*} str 
 * @returns 
 */
function reverseStr(str) {
  let i = 0, j = str.length - 1
  while (i < j) {
    [str[i], str[j]] = [str[j], str[i]]
    i++
    j--
  }
  return str
}
console.log(reverseStr(["h", "e", "l", "l", "o"]))
console.log(reverseStr(["H", "a", "n", "n", "a", "h"]))