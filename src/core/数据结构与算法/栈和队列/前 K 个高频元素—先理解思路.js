/**
 * 题目描述：给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 * 
 * 示例 1:
 *  输入: nums = [1,1,1,2,2,3], k = 2
    输出: [1,2]

   示例 2:
    输入: nums = [1], k = 1
    输出: [1]

   提示：
    你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
    你的算法的时间复杂度必须优于 $O(n \log n)$ , n 是数组的大小。
    题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
    你可以按任意顺序返回答案。
 */

function topKFrequent(nums, k) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // 创建小顶堆
  const heap = new Heap((a, b) => a[1] - b[1]);

  // entry 是一个长度为2的数组，0位置存储key，1位置存储value
  for (const entry of map.entries()) {
    heap.push(entry);

    if (heap.size() > k) {
      heap.pop();
    }
  }

  // return heap.queue.map(e => e[0]);

  const res = [];

  for (let i = heap.size() - 1; i >= 0; i--) {
    res[i] = heap.pop()[0];
  }

  return res;
}

// js 没有堆 需要自己构造
class Heap {
  constructor(compareFn) {
    this.compareFn = compareFn;
    this.queue = [];
  }

  // 添加
  push(item) {
    // 推入元素
    this.queue.push(item);

    // 上浮
    let index = this.size() - 1; // 记录推入元素下标
    let parent = Math.floor((index - 1) / 2); // 记录父节点下标

    while (parent >= 0 && this.compare(parent, index) > 0) { // 注意compare参数顺序
      [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]];

      // 更新下标
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  // 获取堆顶元素并移除
  pop() {
    // 堆顶元素
    const out = this.queue[0];

    // 移除堆顶元素 填入最后一个元素
    this.queue[0] = this.queue.pop();

    // 下沉
    let index = 0; // 记录下沉元素下标
    let left = 1; // left 是左子节点下标 left + 1 则是右子节点下标
    let searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;

    while (searchChild !== undefined && this.compare(index, searchChild) > 0) { // 注意compare参数顺序
      [this.queue[index], this.queue[searchChild]] = [this.queue[searchChild], this.queue[index]];

      // 更新下标
      index = searchChild;
      left = 2 * index + 1;
      searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
    }

    return out;
  }

  size() {
    return this.queue.length;
  }

  // 使用传入的 compareFn 比较两个位置的元素
  compare(index1, index2) {
    // 处理下标越界问题
    if (this.queue[index1] === undefined) return 1;
    if (this.queue[index2] === undefined) return -1;

    return this.compareFn(this.queue[index1], this.queue[index2]);
  }

}


// 测试
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))