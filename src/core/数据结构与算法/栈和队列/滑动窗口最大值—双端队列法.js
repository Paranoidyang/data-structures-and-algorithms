/**
 * 题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 * 示例:输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]
 * 提示：你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
 */

/**
 * 思路一：双指针+遍历法
 */
function maxSlidingWindow(nums, k) {
  const len = nums.length
  let left = 0
  let right = k
  const res = [] // 定义结果数组
  while (right <= len) {// right等于len说明遍历完
    let arr = nums.slice(left, right)//截取滑动窗口内的元素
    console.log(arr)
    // let max = arr[0]
    // for (let i = 1; i < arr.length; i++) {//找出窗口内的最大值
    //   max = arr[i] > max ? arr[i] : max
    // }
    max = Math.max(...arr)// 上面的循环可以用Math.max代替
    res.push(max)// 将最大值推入结果数组
    left++ // 左指针前进一步
    right++// 右指针前进一步
  }
  return res
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))

