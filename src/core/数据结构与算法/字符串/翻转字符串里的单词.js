/**
 * 给定一个字符串，逐个翻转字符串中的每个单词。
 * 示例 1：
    输入: "the sky is blue"
    输出: "blue is sky the"
    
   示例 2：
    输入: "  hello world!  "
    输出: "world! hello"
    解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
 */

/**
 * 库函数，水题
 * @param {*} s 
 * @returns 
 */
// function reverseWords(s) {
//   let arr = s.trim().split(' ')
//   return arr.reverse().join(' ')
// }

/**
 * 翻转字符串中的每个单词
 */
function reverseWords(s) {
  const strArr = Array.from(s) // 字符串转数组
  removeExtraSpaces(strArr) // 移除多余空格
  reverse(strArr, 0, strArr.length - 1) // 翻转整个字符串
  let start = 0
  for (let i = 0; i <= strArr.length; i++) {
    if (strArr[i] === ' ' || i === strArr.length) { // 遇到空格或者串尾，说明一个单词结束，进行翻转
      reverse(strArr, start, i - 1) // 翻转单词
      start = i + 1
    }
  }
  return strArr.join('')
}

// 快慢指针
// 去除所有空格并在相邻单词之间添加空格
function removeExtraSpaces(strArr) {
  let slow = 0
  const len = strArr.length
  for (let fast = 0; fast < len; fast++) {
    if (strArr[fast] !== ' ') { // 遇到非空格就处理，即删除所有空格
      if (slow !== 0) strArr[slow++] = ' ' // 手动控制空格，给单词之间添加空格。slow != 0说明不是第一个单词，需要在单词前添加空格。
      while (fast < len && strArr[fast] != ' ') { // 补上该单词，遇到空格说明单词结束
        strArr[slow++] = strArr[fast++]
      }
    }
  }
  strArr.length = slow // slow的大小即为去除多余空格后的大小
}

// 翻转从 start 到 end 的字符
function reverse(strArr, start, end) {
  let left = start
  let right = end
  while (left < right) {
    // 交换
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
    left++
    right--
  }
}

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world!  "))