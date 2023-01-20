/**
 * 题目描述：请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：
 * 实现 MyQueue 类：
    void push(int x) 将元素 x 推到队列的末尾
    int pop() 从队列的开头移除并返回元素
    int peek() 返回队列开头的元素
    boolean empty() 如果队列为空，返回 true ；否则，返回 false
 */

/**
 * 解题分析：一个栈实现入队列，另一个栈实现出队列
 */

class myQueue {
  constructor() {
    this.stack1 = []// 初始化两个栈
    this.stack2 = []
  }
  // 队尾添加元素
  push(x) {
    this.stack1.push(x)
  }
  // 队头删除元素
  pop() {
    if (this.stack2.length <= 0) {
      while (this.stack1.length > 0) {//注意此操作后 stack1 为空，数据都到 stack2 中
        this.stack2.push(this.stack1.pop())
      }
    }
    return this.stack2.pop()// 为了达到逆序的目的，我们只从 stack2 里出栈元素
  }
  // 返回队头元素
  peek() {
    if (this.stack2.length <= 0) {
      while (this.stack1.length > 0) {//注意此操作后 stack1 为空，数据都到stack2中
        this.stack2.push(this.stack1.pop())
      }
    }
    const stack2Len = this.stack2.length// 缓存 stack2 的长度
    return stack2Len ? this.stack2[stack2Len - 1] : -1
  }
  // 队列是否为空
  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0// 若 stack1 和 stack2 均为空，那么队列空
  }
}

let queue = new myQueue()
queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
queue.pop()
queue.pop()
queue.pop()
console.log('peek', queue.peek())
console.log('empty', queue.empty())