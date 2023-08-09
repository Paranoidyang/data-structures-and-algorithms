/**
 * 题目描述：给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 示例：
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
 * 
 * 思路：在遍历数组的过程中，用一个 Map 来记录已经遍历过的数字及其对应的索引值。然后每遍历到一个新数字的时候，都回到 Map 里去查询 targetNum 与该数的差值是否已经在前面的数字中出现过了。若出现  *      过，则直接return对应索引。
 * 
 * 以上思路的时间复杂度为O(n)，如果用双循环做的话时间复杂度是O(n^2)，我们要学会用空间换时间，避免超时
 * 
 * 记住一个结论：几乎所有的求和问题，都可以转化为求差问题。
 */

/**
   * 两数之和
   * @param {*} nums 目标数组
   * @param {*} target 和 
   * @returns 
   */
function twoSum(nums, target) {
  let diffs = new Map()
  let len = nums.length
  for (let i = 0; i < len; i++) {
    const item = nums[i]
    if (diffs.has(target - item)) {//判断当前值对应的 target 差值是否存在（是否已遍历过）
      return [diffs.get(target - item), i]//若有对应差值，那么答案get！
    }
    diffs.set(item, i)//若没有对应差值，则记录当前值
  }
  return false
}

console.log(twoSum([2, 7, 1, 4], 9))
