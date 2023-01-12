/**
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
 * 
 * 示例：输入：s = 7, nums = [2,3,1,2,4,3] 输出：2 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 */

/**
 * 滑动窗口解法（双指针法之一）
 * 时间复杂度O(n)？每个元素在滑动窗后进来操作一次，出去操作一次，每个元素都是被操作两次，所以时间复杂度是 2 × n 也就是O(n)。
 * @param {*} s 
 * @param {*} nums 
 */
function minSubArrayLen(s, nums) {
  const len = nums.length
  let start = 0 // 滑动窗口开始指针
  let result = Infinity // 初始化为一个肯定比结果大的值，如果最终还是这个值，说明不存在符合条件的子序列
  let sum = 0
  for (let end = 0; end < len; end++) { // end是滑动窗口的尾指针
    sum += nums[end]
    while (sum >= s) { // 始终保持窗口中所有值的和>=s
      result = Math.min(result, end - start + 1)
      sum -= nums[start] // 开始指针会不断向后移一位，所以总和需要减去移出滑动窗口的值
      start++ // 开始指针不算向后移，缩小滑动窗口，去寻找 >=s 的最小子序列
    }
  }
  return result === Infinity ? 0 : result // 如果result没有被赋值的话，就返回0，说明没有符合条件的子序列
}


/**
 * 暴力解法
 * 时间复杂度O(n^2)
 * @param {*} s 
 * @param {*} nums 
 */
function minSubArrayLen(s, nums) {
  const len = nums.length
  let result = Infinity // 初始化为一个肯定比结果大的值，如果最终还是这个值，说明不存在符合条件的子序列
  let sum = 0
  for (let i = 0; i < len; i++) {
    sum = 0 // 要记得重置为0
    for (let j = i; j < len; j++) {
      sum += nums[j]
      if (sum >= s) {
        result = Math.min(result, j - i + 1) // 记录最小的子序列长度即可
        break // 因为我们是找符合条件最短的子序列，所以一旦符合条件就break
      }
    }
  }
  return result === Infinity ? 0 : result // 如果result没有被赋值的话，就返回0，说明没有符合条件的子序列
}


// 测试
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))