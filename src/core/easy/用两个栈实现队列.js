/**
 * 题目描述：用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 */

/**
 * 解题分析：一个栈实现入队列，另一个栈实现出队列
 */

import Stack from '../../base/stack'
export default function() {

  function CQueue() {
    this.stack1 = new Stack()
    this.stack2 = new Stack()
  };
  
  CQueue.prototype.appendTail = function(value) {
    this.stack1.push(value)
  };
  
  CQueue.prototype.deleteHead = function() {
    //空队列，返回-1
    if(this.stack1.size() === 0) {
        return -1
    }
    //只要stack1有值，就将其插入stack2，方便弹出，模拟出队列
    while(this.stack1.size() > 0) {
        this.stack2.push(this.stack1.pop())
    }
    let head = this.stack2.pop()
  
    //出队列后，重新放回stack1
    while(this.stack2.size() > 0) {
        this.stack1.push(this.stack2.pop())
    }
    return head
  };

  CQueue.prototype.size = function() {
    return this.stack1.size()
  }
  
  let myQueue = new CQueue()
  myQueue.appendTail(1)
  myQueue.appendTail(2)
  console.log('myQueue', myQueue, myQueue.size())
  let delItem = myQueue.deleteHead()
  console.log('del元素', delItem)
  console.log('删除后后size', myQueue.size())
}

