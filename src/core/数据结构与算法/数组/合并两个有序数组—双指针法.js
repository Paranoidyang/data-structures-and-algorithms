/**
 * 题目描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 示例:
 * 输入:
    nums1 = [1,2,3,0,0,0], m = 3
    nums2 = [2,5,6], n = 3
    输出: [1,2,2,3,5,6]

  思路：
  1、首先我们定义两个指针，各指向两个数组生效部分的尾部
  2、每次只对指针所指的元素进行比较。取其中较大的元素，把它从 nums1 的末尾往前面填补
  3、由于 nums1 的有效部分和 nums2 并不一定是一样长的。我们还需要考虑其中一个提前到头的这种情况：
    1）如果提前遍历完的是 nums1 的有效部分，剩下的是 nums2。那么这时意味着 nums1 的头部空出来了，直接把 nums2 整个补到 nums1 前面去即可。
    2）如果提前遍历完的是 nums2，剩下的是 nums1。由于容器本身就是 nums1，所以此时不必做任何额外的操作。

 */
/**
 * 合并两个有序数组
 * @param {*} nums1
 * @param {*} nums2 
 * @returns 
 */
function merge(nums1, nums2) {
  let i = 0, j = 0// 初始化两个指针，分别指向 nums1 和 nums2
  const res = []// 初始化结果数组
  const len1 = nums1.length// 缓存nums1的长度
  const len2 = nums2.length// 缓存nums2的长度
  // 合并两个子数组
  while (i < len1 && j < len2) {
    if (nums1[i] < nums2[j]) {
      res.push(nums1[i])
      i++
    } else {
      res.push(nums2[j])
      j++
    }
  }
  // 若其中一个子数组首先被合并完全，则直接拼接另一个子数组的剩余部分
  if (i >= len1) {
    return res.concat(nums2.slice(j))
  } else {
    return res.concat(nums1.slice(i))
  }
}
console.log(merge([1, 2, 3, 9], [1, 2, 5, 6, 10]))
