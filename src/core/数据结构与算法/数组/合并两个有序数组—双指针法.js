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
export default function () {
  /**
   * 合并两个有序数组
   * @param {*} nums1
   * @param {*} nums2 
   * @returns 
   */
  function merge(nums1, nums2) {
    // 初始化两个指针i、j指向两个数组生效部分的尾部，初始化 nums1 尾部索引k
    let i = nums1.length - 1
    let j = nums2.length - 1
    let k = nums1.length + nums2.length - 1
    while (i >= 0 && j >= 0) {
      // 取较大的值，从末尾往前填补
      if (nums1[i] < nums2[j]) {
        nums1[k] = nums2[j]
        k--
        j--
      } else {
        nums1[k] = nums1[i]
        k--
        i--
      }
    }
    // nums2 留下的情况，特殊处理一下 
    while (j >= 0) {
      nums1[j] = nums2[j]
      j--
    }
    return nums1
  }
  console.log(merge([1, 2, 3, 9], [1, 2, 5, 6, 10]))
}
