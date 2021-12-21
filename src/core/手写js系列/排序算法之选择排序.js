/**
 * 题目描述：选择排序 O(n^2)：先假设当前是最小的，然后通过循环与其他项对比，确认最小项索引，如果最小项索引与当前项索引不一致，则交互它们的位置
 */
export default function () {
  // 选择排序，从小到大排
  function selectSort(arr) {
    let length = arr.length,
      minIndex = 0
    for (let i = 0; i < length - 1; i++) {
      minIndex = i//假设当前项是最小的
      for (let j = i + 1; j < length; j++) {//与其他项对比，找出最小的索引
        if (arr[j] < arr[minIndex]) {
          minIndex = j
        }
      }
      if (i !== minIndex) { //最小值不是当前项，则交换当前项和最小值的位置
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
      }
    }
    return arr
  }

  console.log(selectSort([2, 3, 4, 1, 4, 1, 5]))

}
