/**
 * 简易版Promise，实现then方法，支持执行器异步操作
 */

// 定义3个状态常量
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class myPromise {
  constructor(executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.onResolvedCallbacks = [] // 存放成功的回调，一个promise可以多次then，所以使用数组存储
    this.onRejectedCallbacks = [] // 存放失败的回调，一个promise可以多次catch，所以使用数组存储

    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        this.onResolvedCallbacks.forEach(fn => fn()) // 发布，依次将收集的对应函数执行
      }
    }

    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn()) // 发布，依次将收集的对应函数执行
      }
    }

    try { // 执行器报错时返回一个拒绝的期约
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) onFulfilled(this.value)
    if (this.status === REJECTED) onRejected(this.reason)
    if (this.status === PENDING) {
      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数分别存放起来，
      // 等待状态确定后，再依次将对应的函数执行，发布-订阅模式中的订阅过程
      this.onResolvedCallbacks.push(() => { onFulfilled(this.value) })
      this.onRejectedCallbacks.push(() => { onRejected(this.reason) })
    }
  }
}


// 测试
const promise = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功')
  }, 1000)
}).then((data) => {
  console.log('success', data)
}, (err) => {
  console.log('faild', err)
})