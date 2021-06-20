/**
 * 使用数组实现的简易双端队列（允许两端操作）
 */
export default function Deque() {
  let queue = []
  this.push_front = function(item) {
    queue.unshift(item)
  }
  this.push_back = function(item) {
    queue.push(item)
  }
  this.pop_front = function() {
    return queue.shift()
  }
  this.pop_back = function(item) {
    return queue.pop()
  }
  this.head = function() {
    return queue[0]
  }
  this.last = function() {
    return queue[queue.length -1]
  }
  this.size = function() {
    return queue.length
  }
}