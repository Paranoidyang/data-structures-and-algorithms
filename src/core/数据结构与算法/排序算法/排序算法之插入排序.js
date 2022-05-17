/**
 * 题目描述：插入排序 O(n^2)
 * 排序小型数组时，此算法比选择排序和冒泡排序性能要好，算法描述：  
 * 1. 从第一个元素开始，该元素可以认为已经被排序  
 * 2. 取出下一个元素，在已经排序的元素序列中从后向前扫描  
 * 3. 如果该元素（已排序）大于新元素，将该元素移到下一位置  
 * 4. 重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置  
 * 5. 将新元素插入到该位置后  
 * 6. 重复步骤 2~5
 */
export default function () {
  // 插入排序，从小到大排
  function insertSort(arr) {
    let length = arr.length
    for (let i = 1; i < length; i++) {//假定第一项已经排序，所以遍历从第二个位置开始
      let j = i
      let target = arr[i]
      while (j > 0 && arr[j - 1] > target) {//只要变量j比0大，且数组前面的值比待比较的值大，就将前面的值移到当前位置上，并减小j
        arr[j] = arr[j - 1]
        j--
      }
      arr[j] = target
    }
    return arr
  }

  console.log(insertSort([2, 3, 4, 1, 4, 1, 5]))

}
