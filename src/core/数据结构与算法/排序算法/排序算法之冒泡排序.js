/**
 * 题目描述：冒泡排序 O(n^2)：冒泡排序的过程，就是从第一个元素开始，重复比较相邻的两个项，若第一项比第二项更大，则交换两者的位置；反之不动。
  每一轮操作，都会将这一轮中最大的元素放置到数组的末尾。假如数组的长度是 n，那么当我们重复完 n 轮的时候，整个数组就有序了。

 * 思路：外循环控制需要比较的元素，内循环则负责两两元素比较，将元素放到正确位置上。

   冒泡排序时间复杂度在最好情况下是 O(n)，即当数组是有序时
   动图可以看该链接：https://zhuanlan.zhihu.com/p/42586566
 */
export default function () {

  // 基本冒泡思路编码实现
  function bubbleSort(arr) {
    // 缓存数组长度
    const len = arr.length
    // 外层循环用于控制从头到尾的比较+交换到底有多少轮
    for (let i = 0; i < len; i++) {
      // 内层循环用于完成每一轮遍历过程中的重复比较+交换
      for (let j = 0; j < len - 1; j++) {
        // 若相邻元素前面的数比后面的大
        if (arr[j] > arr[j + 1]) {
          // 交换两者
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
      }
    }
    // 返回数组
    return arr
  }

  // 改进版冒泡排序的编码实现
  // 随着外层循环的进行，数组尾部的元素会渐渐变得有序——当我们走完第1轮循环的时候，最大的元素被排到了数组末尾；走完第2轮循环的时候，第2大的元素被排到了数组倒数第2位；走完第3轮循环的时候，第3大的元素被排到了数组倒数第3位......以此类推，走完第 n 轮循环的时候，数组的后 n 个元素就已经是有序的。
  // 内层循环需要规避掉数组中的后 n 个元素
  function betterBubbleSort(arr) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
      // 注意差别在这行，我们对内层循环的范围作了限制
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
      }
    }
    return arr
  }

  // 最佳冒泡排序
  // 如果以这种方式实现，我们会发现冒泡排序时间复杂度在最好情况下是 O(n)，即当数组是有序时只进行一轮比较，通过标识位判断是否有序
  function bestBubbleSort(arr) {
    const len = arr.length

    for (let i = 0; i < len; i++) {
      // 区别在这里，我们加了一个标志位
      let flag = false
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          // 只要发生了一次交换，就修改标志位
          flag = true
        }
      }

      // 若一次交换也没发生，则说明数组有序，直接放过
      if (flag == false) return arr;
    }
    return arr
  }

  console.log(bubbleSort([2, 3, 4, 1, 4, 1, 5]))

}
