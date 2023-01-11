/**
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

   示例 1： 输入：nums = [-4,-1,0,3,10] 输出：[0,1,9,16,100] 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]

   示例 2： 输入：nums = [-7,-3,2,3,11] 输出：[4,9,9,49,121]

 */

/**
 * 暴力解法（平方后排序）
 * 时间复杂度O(n + nlogn)
 * @param {*} nums 
 * @returns 
 */
function sortedSquares(nums) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    nums[i] = nums[i] * nums[i]
  }
  return nums.sort((a, b) => a - b)
}

/**
 * 双指针法
 * 时间复杂度O(n)，空间换时间
 * @param {*} nums 
 * @returns 
 */
function sortedSquares(nums) {
  const len = nums.length
  let start = 0, end = len - 1, k = len - 1 // 首指针、尾指针、数据填充进结果数组中的索引（从右向左填充）
  let res = new Array(len).fill(0) // 长度相同的结果数组

  while (start <= end) {
    // 平方
    const left = nums[start] * nums[start]
    const right = nums[end] * nums[end]

    if (left > right) {
      res[k--] = left
      start++
    } else {
      res[k--] = right
      end--
    }
  }
  return res
}


console.log(sortedSquares([-4, -1, 0, 3, 10]))