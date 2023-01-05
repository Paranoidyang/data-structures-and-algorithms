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
  // 字符串转数组
  const strArr = Array.from(s);
  // 移除多余空格
  removeExtraSpaces(strArr);
  // 翻转
  reverse(strArr, 0, strArr.length - 1);

  let start = 0;

  for (let i = 0; i <= strArr.length; i++) {
    if (strArr[i] === ' ' || i === strArr.length) {
      // 翻转单词
      reverse(strArr, start, i - 1);
      start = i + 1;
    }
  }

  return strArr.join('');
}

// 删除多余空格
function removeExtraSpaces(strArr) {
  let slowIndex = 0;
  let fastIndex = 0;

  while (fastIndex < strArr.length) {
    // 移除开始位置和重复的空格
    if (strArr[fastIndex] === ' ' && (fastIndex === 0 || strArr[fastIndex - 1] === ' ')) {
      fastIndex++;
    } else {
      strArr[slowIndex++] = strArr[fastIndex++];
    }
  }

  // 移除末尾空格
  strArr.length = strArr[slowIndex - 1] === ' ' ? slowIndex - 1 : slowIndex;
}

// 翻转从 start 到 end 的字符
function reverse(strArr, start, end) {
  let left = start;
  let right = end;

  while (left < right) {
    // 交换
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    left++;
    right--;
  }
}

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world!  "))