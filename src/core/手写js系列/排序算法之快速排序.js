/**
 * 题目描述：快速排序 O(nlog(n))~O(n^2)
 * 1、选取一个数作为中心轴
 * 2、将大于中心轴的数字放在中心轴的右边
 * 3、将小于中心轴的数字放在中心轴的左边
 * 4、分别对左右子序列重复前三步操作，直到序列长度为1
 * https://github.com/mqyqingfeng/Blog/issues/52
 */
export default function () {
  // 需要额外的空间用来储存左右子集，空间复杂度O(n)
  // function quickSort(arr) {
  //   if (arr.length < 2) return arr;
  //   const cur = arr[0]; //选取第一个数为中心轴
  //   const left = arr.filter((v, i) => v <= cur && i !== 0);
  //   const right = arr.filter((v) => v > cur);
  //   return [...quickSort(left), cur, ...quickSort(right)];
  // }

  // 原地版本（in-place），空间复杂度O(1)
  function quickSort(arr) {
    // 交换元素
    function swap(arr, a, b) {
      [arr[a], arr[b]] = [arr[b], arr[a]];
    }

    function partition(arr, left, right) {
      var pivot = arr[left];
      var storeIndex = left;

      for (let i = left + 1; i <= right; i++) {
        if (arr[i] < pivot) {
          swap(arr, ++storeIndex, i);
        }
      }

      swap(arr, left, storeIndex);

      return storeIndex;
    }

    function sort(arr, left, right) {
      if (left < right) {
        var storeIndex = partition(arr, left, right);
        sort(arr, left, storeIndex - 1);
        sort(arr, storeIndex + 1, right);
      }
    }

    sort(arr, 0, arr.length - 1);

    return arr;
  }

  console.log(quickSort([2, 3, 4, 1, 4, 1, 5]));
}
