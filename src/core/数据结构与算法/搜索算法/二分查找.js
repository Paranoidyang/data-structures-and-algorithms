/**
 * 题目描述：二分查找 O(nlog(n))，对已排序的数组进行查找的算法
 * 1、选择数组的中间值
 * 2、如果选中值是目标元素，那么算法执行完毕
 * 3、如果目标元素比选中值小，则取选中值左边的子数组，继续进行二分查找
 * 4、如果目标元素比选中值大，则取选中值右边的子数组，继续进行二分查找
 */

/**
   * 递归版本
   * @param {*} arr 已排序好的数组（从小到大）
   * @param {*} target 目标元素
   * @param {*} start 开始索引
   * @param {*} end 结束索引
   * @returns 
   */
function binarySearch(arr, target, start, end) {
  let midIndex = Math.floor((start + end) / 2) // 取中间值索引
  let mid = arr[midIndex]
  if (start >= end) return -1 // start和end相等，意味着所有的元素已经检查完毕了，还没命中的话就说明没有目标元素；而start > end是不符合下面逻辑的，直接退出
  if (target === mid) return midIndex // 找到目标
  if (target < mid) {
    return binarySearch(arr, target, start, midIndex - 1)
  } else {
    return binarySearch(arr, target, start + 1, end)
  }
}

// 测试
let arr = [1, 2, 3, 4]
console.log('target所在索引：', binarySearch(arr, 3, 0, arr.length - 1))

/**
 * 非递归版本
 * @param {*} arr 已排序好的数组（从小到大）
 * @param {*} target 目标元素
 * @returns 
 */
function binarySearch(arr, target) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let midIndex = Math.floor((start + end) / 2)
    let mid = arr[midIndex]
    if (target === mid) {
      return midIndex
    } else if (target > mid) {
      start = midIndex + 1
    } else {
      end = midIndex - 1
    }
  }

  return -1
}

// 测试
let arr = [1, 2, 3, 4]
console.log('target所在索引：', binarySearch(arr, 1))
