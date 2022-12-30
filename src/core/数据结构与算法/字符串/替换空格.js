/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 示例 1： 输入：s = "We are happy."
   输出："We%20are%20happy."
 */

/**
 * 双指针
* @param {string} s
* @return {string}
*/
function replaceSpace(s) {
  // 字符串转为数组
  const strArr = Array.from(s);
  let count = 0;

  // 计算空格数量
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === ' ') {
      count++;
    }
  }

  let left = strArr.length - 1;
  let right = strArr.length + count * 2 - 1;

  // 要从后向前填充，如果从前向后填充就是O(n^2)的算法了，因为每次添加元素都要将添加元素之后的所有元素向后移动。
  while (left >= 0) {
    if (strArr[left] === ' ') {
      strArr[right--] = '0';
      strArr[right--] = '2';
      strArr[right--] = '%';
      left--;
    } else {
      strArr[right--] = strArr[left--];
    }
  }

  // 数组转字符串
  return strArr.join('');
};

console.log(replaceSpace('We are happy.'))