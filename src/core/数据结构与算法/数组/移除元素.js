/**
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

  不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并原地修改输入数组。

  元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

  示例 1: 给定 nums = [3,2,2,3], val = 3, 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。 你不需要考虑数组中超出新长度后面的元素。

  示例 2: 给定 nums = [0,1,2,2,3,0,4,2], val = 2, 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。

  你不需要考虑数组中超出新长度后面的元素。
 */

/**
 * 暴力解法
 * 时间复杂度O(n^2)
 * 空间复杂度O(1)
 * @param {*} nums 
 * @param {*} val 
 * @returns 
 */
function removeElement(nums, val) {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] === val) {
      for (let j = i + 1; j < len; j++) {
        nums[j - 1] = nums[j]
      }
      i--
      len--
    }
  }
  return len
}

/**
 * 快慢指针法
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 * 
 * @param {*} nums 
 * @param {*} val 
 */
function removeElement(nums, val) {
  let slowIndex = 0 //慢指针
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] !== val) {
      // slowIndex是先使用，再++
      nums[slowIndex++] = nums[fastIndex]
    }
  }
  return slowIndex
}

console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))

