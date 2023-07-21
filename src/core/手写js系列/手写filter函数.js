/**
 * 手写 arr filter 函数，接收一个条件函数，返回一个符合条件的元素集合
 */


Array.prototype.filter1 = function(callback) {
  let _this = this
  const res = []
  for(let i = 0; i < _this.length; i++) {
    const item = _this[i]
    if(callback(item)) {
      res.push(item)
    }
  }
  return res
}

const res = [1, 2, 3].filter1(item => item > 2)
console.log(res)