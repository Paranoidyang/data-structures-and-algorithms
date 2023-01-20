/**
 * 题目描述：设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 * pop() —— 删除栈顶的元素。
 * top() —— 获取栈顶元素。
 * getMin() —— 检索栈中的最小元素。
 */

/**
 * 解题分析：使用两个数组实现，一个数组保存存入的数据，另一个数组始终存入当前最小值
 */

function MinStack() {
  this.arr = []
  this.minArr = []
}

MinStack.prototype.push = function (x) {
  this.arr.push(x)
  if (this.minArr.length === 0 || x <= this.minArr[this.minArr.length - 1]) {//当栈为空或者x小于栈顶元素时，入栈
    this.minArr.push(x)
  }
}

MinStack.prototype.pop = function () {
  let top = this.arr.pop()
  if (top === this.minArr[this.minArr.length - 1]) {
    this.minArr.pop()
  }
}

MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1]
}

MinStack.prototype.getMin = function () {
  console.log('stack', this.arr)
  console.log('minStack', this.minArr)
  return this.minArr[this.minArr.length - 1]
}

let minStack = new MinStack()
minStack.push(0)
minStack.push(0)
minStack.push(1)
minStack.push(-2)
minStack.pop()
console.log('top', minStack.top())
console.log('getMin', minStack.getMin())


