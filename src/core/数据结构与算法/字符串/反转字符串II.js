/**
 * 题目描述：给定一个字符串 s 和一个整数 k，从字符串开头算起, 每计数至 2k 个字符，就反转这 2k 个字符中的前 k 个字符。

            如果剩余字符少于 k 个，则将剩余字符全部反转。

            如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

  示例:
  输入: s = "abcdefg", k = 2
  输出: "bacdfeg"
  
 */

/**
 * 反转字符串
 * @param {*} s 
 * @param {*} k 
 * @returns 
 */
function reverseStr(s, k) {
  const strArr = Array.from(s)
  const len = s.length
  for (let i = 0; i < len; i += (2 * k)) {
    // 1. 每隔 2k 个字符的前 k 个字符进行反转
    // 2. 剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符
    if (i + k <= len) {
      reverse(strArr, i, i + k - 1);
      continue;
    }
    // 3. 剩余字符少于 k 个，则将剩余字符全部反转。
    reverse(strArr, i, len - 1);
  }
  return strArr.join('');
}

console.log(reverseStr('abcdefg', 2))


/**
 * 双指针：对于字符串，我们定义两个指针，一个从字符串前面，一个从字符串后面，两个指针同时向中间移动，并交换元素。
 * @param {*} str 
 * @returns 
 */
function reverse(str, i = 0, j = str.length - 1) {
  while (i < j) {
    [str[i], str[j]] = [str[j], str[i]]
    i++
    j--
  }
  return str
}