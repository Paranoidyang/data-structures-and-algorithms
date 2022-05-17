/**
 * 题目描述：冒泡排序 O(n^2)：冒泡排序的过程，就是从第一个元素开始，重复比较相邻的两个项，若第一项比第二项更大，则交换两者的位置；反之不动。
            每一轮操作，都会将这一轮中最大的元素放置到数组的末尾。假如数组的长度是 n，那么当我们重复完 n 轮的时候，整个数组就有序了。
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
