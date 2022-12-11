/**
 * 题目描述：归并排序 O(nlog(n))
 * 思路：分治思想，递归实现。
 * 1、分解：将需要被排序的数组从中间分割为两半，然后再将分割出来的每个子数组各分割为两半，重复以上操作，直到单个子数组只有一个元素为止。
 * 2、合并：从粒度最小的子数组开始，两两合并、确保每次合并出来的数组都是有序的。
 * 3、完成：当数组被合并至原有的规模时，就得到了一个完全排序的数组
 * 动图可以看该链接：https://zhuanlan.zhihu.com/p/42586566
 * 视频解析：https://www.bilibili.com/video/BV1et411N7Ac/?spm_id_from=333.788&vd_source=d782b09ba1f0c7d512c543bc6a4583d4
 */


//将一个大数组分为多个小数组，并调用用来排序的辅助函数
function mergeSort(arr) {
  let len = arr.length;
  if (len < 2) return arr; // 处理边界情况
  const mid = Math.floor(len / 2);
  const leftArr = mergeSort(arr.slice(0, mid)); // 递归分割左子数组，然后合并为有序数组
  const rightArr = mergeSort(arr.slice(mid)); // 递归分割右子数组，然后合并为有序数组
  return mergeArr(leftArr, rightArr); // 合并左右两个有序数组
}

// 辅助函数：合并两个有序的小数组，产生有序的大数组（双指针法）
function mergeArr(arr1, arr2) {
  let i = 0, j = 0// 初始化两个指针，分别指向 arr1 和 arr2
  const res = []// 初始化结果数组
  const len1 = arr1.length// 缓存arr1的长度
  const len2 = arr2.length// 缓存arr2的长度
  // 合并两个子数组
  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++
    }
  }
  // 若其中一个子数组首先被合并完全，则直接拼接另一个子数组的剩余部分
  if (i >= len1) {
    return res.concat(arr2.slice(j))
  } else {
    return res.concat(arr1.slice(i))
  }
}

console.log(mergeSort([2, 3, 4, 1, 4, 1, 5]));
