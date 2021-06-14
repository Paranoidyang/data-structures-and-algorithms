/**
 * 使用数组实现的简易队列
 */
export default function Queue() {
  let queue = []
  this.enqueue = function(item) {
    queue.push(item)
  }
  this.dequeue = function(item) {
    return queue.shift(item)
  }
  this.head = function() {
    return queue[0]
  }
  this.size = function() {
    return queue.length
  }
}