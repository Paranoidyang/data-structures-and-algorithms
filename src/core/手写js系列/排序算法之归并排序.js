/**
 * 题目描述：归并排序 O(nlog(n))
 * 将原始数组切分成较小的数组，直到每个小数组只有一个元素，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。
 */
export default function () {
  // 辅助函数：合并和排序小数组，产生大数组
  function merge(left, right) {
    const resArr = [];
    while (left.length > 0 && right.length > 0) {
      // 循环比较两个小数组的第一个元素，将小的放进数组里，直到两个数组有一个为空
      resArr.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    return resArr.concat(left, right); //有一个数组为空，就直接将另一个数组拼到resArr的后面
  }

  //将一个大数组分为多个小数组，并调用用来排序的辅助函数
  function mergeSort(arr) {
    let length = arr.length;
    if (length < 2) return arr;
    const mid = Math.floor(length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }

  console.log(mergeSort([2, 3, 4, 1, 4, 1, 5]));
}
