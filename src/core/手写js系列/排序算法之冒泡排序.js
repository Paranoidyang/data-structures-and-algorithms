/**
 * 题目描述：冒泡排序
 * 思路：外循环控制需要比较的元素，比如第一次排序后，最后一个元素就不需要比较了，内循环则负责两两元素比较，将元素放到正确位置上
 */
export default function () {
  // 冒泡排序，从小到大排
  function bubbleSort(arr) {
    let len = arr.length;
    for (let i = len - 1; i > 0; i--) {//控制需要比较的元素
      for (let j = 0; j < i; j++) {//两两比较
        if (arr[j] > arr[j + 1]) {//交换位置
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
      }
    }
    return arr;
  }

  console.log(bubbleSort([2, 3, 4, 1, 4, 1, 5]))

}
