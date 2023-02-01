/**
 * 题目描述：字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
 * 
 * 示例 1：
   输入: s = "abcdefg", k = 2
   输出: "cdefgab"

   示例 2：
   输入: s = "lrloseumgh", k = 6
   输出: "umghlrlose"

   限制：
   1 <= k < s.length <= 10000
 */

/**
 * 偷懒法
 * @param {*} s 字符串
 * @param {*} n  前n个字符
 */
function reverseLeftWords(s, n) {
  return s.slice(n).concat(s.slice(0, n));
}

/**
 * 原地旋转，这里的空间复杂度是O(n)，如果面试要求O(1)，会给字符数组的
 * @param {*} s 字符串
 * @param {*} n  前n个字符
 */
function reverseLeftWords(s, n) {
  /** Utils */
  function reverseWords(strArr, start, end) {
    let temp;
    while (start < end) {
      temp = strArr[start];
      strArr[start] = strArr[end];
      strArr[end] = temp;
      start++;
      end--;
    }
  }
  /** Main code */
  let strArr = s.split(''); // 因为字符串不可变，面试时如果要求原地修改是会给字符数组的形式的
  let length = strArr.length;
  reverseWords(strArr, 0, n - 1); // 反转区间为前n的子串
  reverseWords(strArr, n, length - 1); // 反转区间为n到末尾的子串
  reverseWords(strArr, 0, length - 1); // 反转整个字符串
  return strArr.join('');
}



// 测试
console.log(reverseLeftWords('abcdefg', 2))