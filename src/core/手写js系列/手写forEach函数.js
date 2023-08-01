/**
 * 题目描述：手写数组遍历方法forEach
 */

//thisArg是可选参数，当执行回调函数 callback 时，用作 this 的值
Array.prototype.myForEach = function (callback, thisArg) {
  if (typeof callback !== 'function') throw new Error(`${callback} is not a function`)
  if (!Array.isArray(this)) throw new Error(`${this} is not a Array`)
  for (let i = 0; i < this.length; i++) {
    callback.call(thisArg, this[i], i, this)
  }
}
// 测试
let arr = [1, 2, 3]
arr.myForEach((item, index, obj) => {
  console.log(`数组索引${index}：`, item, obj)
})