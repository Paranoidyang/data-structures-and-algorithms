/**
 * 题目描述：给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
 * 
 * 示例 1：
 *  输入：nums1 = [1,2,2,1], nums2 = [2,2]
    输出：[2]

   示例 2：
    输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    输出：[9,4]
    解释：[4,9] 也是可通过的
 */


function intersection(nums1, nums2) {
  const len = nums1.length
  const set2 = new Set(nums2) //空间换时间
  const resSet = new Set()
  for (let i = 0; i < len; i++) {
    if (set2.has(nums1[i])) { //Set数据结构查找更高效
      resSet.add(nums1[i])
    }
  }
  return [...resSet]
}

console.log(intersection([1, 2, 2, 1], [2, 2]))
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))