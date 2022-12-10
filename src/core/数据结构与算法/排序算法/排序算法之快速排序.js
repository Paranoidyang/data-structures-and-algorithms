/**
 * 题目描述：快速排序 O(nlog(n))~O(n^2)
 * 1、选取一个数作为中心轴
 * 2、将大于中心轴的数字放在中心轴的右边
 * 3、将小于中心轴的数字放在中心轴的左边
 * 4、分别对左右子序列重复前三步操作，直到序列长度为1
 * 动图可以看该链接：https://zhuanlan.zhihu.com/p/42586566
 * 视频解析：https://www.bilibili.com/video/BV1at411T75o/?spm_id_from=333.788&vd_source=d782b09ba1f0c7d512c543bc6a4583d4
 */

// 需要额外的空间用来储存左右子集，空间复杂度O(n)
// function quickSort(arr) {
//   if (arr.length < 2) return arr;
//   const cur = arr[0]; //选取第一个数为中心轴
//   const left = arr.filter((v, i) => v <= cur && i !== 0);
//   const right = arr.filter((v) => v > cur);
//   return [...quickSort(left), cur, ...quickSort(right)];
// }

// 原地版本（in-place），空间复杂度O(1)
// 快速排序入口
function quickSort(arr, left = 0, right = arr.length - 1) {
  // 定义递归边界，若数组只有一个元素，则没有排序必要
  if (arr.length > 1) {
    // lineIndex表示下一次划分左右子数组的索引位
    const lineIndex = partition(arr, left, right)
    // 如果左边子数组的长度不小于1，则递归快排这个子数组
    if (left < lineIndex - 1) {
      // 左子数组以 lineIndex-1 为右边界
      quickSort(arr, left, lineIndex - 1)
    }
    // 如果右边子数组的长度不小于1，则递归快排这个子数组
    if (lineIndex < right) {
      // 右子数组以 lineIndex 为左边界
      quickSort(arr, lineIndex, right)
    }
  }
  return arr
}
// 以基准值为轴心，划分左右子数组的过程
function partition(arr, left, right) {
  // 基准值默认取中间位置的元素（为什么不能直接Math.floor((left + right)/ 2))？）
  // 当left和right都很大的时候，left+right可能溢出，left + (right - left) / 2就会更好一点
  let pivotValue = arr[Math.floor(left + (right - left) / 2)]
  // 初始化左右指针
  let i = left
  let j = right
  // 当左右指针不越界时，循环执行以下逻辑
  while (i <= j) {
    // 左指针所指元素若小于基准值，则右移左指针
    while (arr[i] < pivotValue) {
      i++
    }
    // 右指针所指元素大于基准值，则左移右指针
    while (arr[j] > pivotValue) {
      j--
    }

    // 若i<=j，则意味着基准值左边存在较大元素或右边存在较小元素，交换两个元素确保左右两侧有序
    if (i <= j) {
      swap(arr, i, j)
      i++
      j--
    }

  }
  // 返回左指针索引作为下一次划分左右子数组的依据
  return i
}

// 快速排序中使用 swap 的地方比较多，我们提取成一个独立的函数
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

console.log(quickSort([2, 3, 4, 1, 4, 1, 5]));