/**
 * 题目描述：使用队列实现栈的下列操作：
      push(x) -- 元素 x 入栈
      pop() -- 移除栈顶元素
      top() -- 获取栈顶元素
      empty() -- 返回栈是否为空

    注意:
      你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的。
      你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
      你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。

 */


/**
 * 两个队列法
 * 使用两个数组的队列方法（push, shift） 实现栈
 */
class MyStack {
  constructor() {
    this.queue1 = [] // 主队列
    this.queue2 = [] // 用于备份
  }
  push(x) {
    this.queue1.push(x)
  }
  pop() {
    while (this.queue1.length > 1) { // 将que1 导入que2，但要留下最后一个元素
      this.queue2.push(this.queue1.shift())
    }
    const head = this.queue1.shift()
    while (this.queue2.length > 0) { // 将que2 全部导入回que1
      this.queue1.push(this.queue2.shift())
    }
    return head
  }
  top() {
    const top = this.pop()
    this.queue1.push(top)
    return top
  }
  empty() {
    return this.queue1.length === 0
  }
}


/**
 * 一个队列法
 */
class MyStack {
  constructor() {
    this.queue = []
  }
  push(x) {
    this.queue.push(x)
  }
  // 一个和两个队列实现的主要区别在这里
  pop() {
    let size = this.queue.length;
    while (size-- > 1) {
      this.queue.push(this.queue.shift());
    }
    return this.queue.shift();
  }
  top() {
    const top = this.pop()
    this.queue.push(top)
    return top
  }
  empty() {
    return this.queue.length === 0
  }
}



// 测试
const stack = new MyStack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
stack.pop()
stack.pop()
console.log(stack)
console.log(stack.empty())
console.log(stack.top())