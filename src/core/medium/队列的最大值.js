/**
 * 题目描述：请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。若队列为空，pop_front 和 max_value 需要返回 -1
 */

/**
 * 解题分析：一个队列负责存储，另一个队列负责记录最大值（队列头部始终是最大值）
 */
 import Queue from '../../base/queue'
 import Deque from '../../base/deque'


export default function() {
  function MaxQueue() {
    this.queue = new Queue() //普通队列，记录存入的所有值
    this.maxQueue = new Deque()//双端单调队列，头部始终是最大值
  }
  MaxQueue.prototype.max_value = function() {
    return this.queue.size() === 0 ? -1 : this.maxQueue.head()
  }
  MaxQueue.prototype.push_back = function(x) {
    this.queue.enqueue(x)
    if(this.maxQueue.size() === 0) {
      this.maxQueue.push_back(x)
    }else {
      //maxQueue队列的头部始终是最大值，维护其单调递减性
      while(this.maxQueue.last() < x) {
        this.maxQueue.pop_back()
      }
      this.maxQueue.push_back(x)
    }
  }
  MaxQueue.prototype.pop_front = function() {
    if(this.queue.size() === 0) {
      return -1
    }else {
     let front =  this.queue.dequeue()
     //当queue删除的值是最大值时
     if(front === this.maxQueue.head()) {
       this.maxQueue.pop_front()
     }
     return front
    }
  }

  var obj = new MaxQueue()
  var param_1 = obj.max_value()
  console.log('param_1', param_1)//-1
  obj.push_back(1)
  obj.push_back(3)
  obj.push_back(4)
  var param_3 = obj.pop_front()
  var param_1 = obj.max_value()
  console.log('param_3', param_3)//1
  console.log('param_1', param_1)//4

  debugger
  obj.push_back(5)
  var param_3 = obj.pop_front()
  var param_3 = obj.pop_front()
  var param_1 = obj.max_value()
  debugger
  
}

