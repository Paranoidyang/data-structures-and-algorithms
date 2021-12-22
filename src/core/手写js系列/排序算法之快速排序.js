/**
 * 题目描述：快速排序 O(nlog(n))~O(n^2)
 * 1、选取一个数作为中心轴
 * 2、将大于中心轴的数字放在中心轴的右边
 * 3、将小于中心轴的数字放在中心轴的左边
 * 4、分别对左右子序列重复前三步操作，直到序列长度为1
 */
export default function () {
  function quickSort(arr) {
    if (arr.length < 2) return arr
    const cur = arr[0]//选取第一个数为中心轴
    const left = arr.filter((v, i) => v <= cur && i !== 0)
    const right = arr.filter((v, i) => v > cur))
    return [...quickSort(left), cur, ...quickSort(right)]
  }

  console.log(quickSort([2, 3, 4, 1, 4, 1, 5]))

}
