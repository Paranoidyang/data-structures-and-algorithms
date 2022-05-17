/**
 * 题目描述：定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
 */

/**
 * 解题分析：使用两个数组实现，一个数组保存存入的数据，另一个数组始终存入当前最小值
 */

export default function() {

  function MinStack() {
    this.arr = []
    this.minArr = []
  }
  
  MinStack.prototype.push = function(x) {
    this.arr.push(x)
    if(this.minArr.length === 0) {
      this.minArr.push(x)
    }else {
      //保证栈顶始终是最小值
      let currentMin = this.minArr[this.minArr.length - 1]
      if(x > currentMin) {
        this.minArr.push(currentMin)
      }else {
        this.minArr.push(x)
      }
    }
  }
  
  MinStack.prototype.pop = function() {
    this.arr.pop()
    this.minArr.pop()
  }
  
  MinStack.prototype.min = function() {
    console.log('stack', this.arr)
    console.log('minStack', this.minArr)
    return this.minArr[this.minArr.length -1]
  }

  let minStack = new MinStack()
  minStack.push(-2)
  minStack.push(0)
  minStack.push(0)
  let min = minStack.min()
  console.log('min', min)
  
  
}


