/**
 * 完整版Promise，实现then方法，支持执行器异步操作，还有最重要的链式调用和值穿透
 */

export default function () {
  // 定义3个状态常量
  const PENDING = 'pending';
  const FULFILLED = 'fulfilled';
  const REJECTED = 'rejected';

  // 判断x是否是promise或者普通值，做不同的处理，涉及递归调用
  const resolvePromise = (promise2, x, resolve, reject) => {
    // 自己等待自己完成，循环引用，抛出类型错误
    if (promise2 === x) {
      return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    // 标识是否调用过resolve或reject，只允许调用一次
    let called;
    
    if ((typeof x === 'object' && x != null) || typeof x === 'function') {
      try {
        // 取then的时候可能报错，所以这里用try...catch
        let then = x.then;
        if (typeof then === 'function') {// 认为 x 是一个 promise，其实也不一定，可能是一个带有then方法的普通对象
          then.call(x, y => {//执行then
            if (called) return;
            called = true;
            // 递归解析的过程（promise 中可能还有 promise）
            resolvePromise(promise2, y, resolve, reject);
          }, r => {
            // 只要失败就失败
            if (called) return;
            called = true;
            reject(r);
          });
        } else {
          // 如果 x.then 是个普通值就直接返回 resolve 作为结果
          resolve(x);
        }
      } catch (e) {
        if (called) return;
        called = true;
        reject(e)
      }
    } else {
      // 如果 x 是个普通值就直接返回 resolve 作为结果
      resolve(x)
    }
  }

  class Promise {
    constructor(executor) {
      this.status = PENDING;
      this.value = undefined;
      this.reason = undefined;
      this.onResolvedCallbacks = [];
      this.onRejectedCallbacks= [];

      let resolve = (value) => {
        if(this.status ===  PENDING) {
          this.status = FULFILLED;
          this.value = value;
          this.onResolvedCallbacks.forEach(fn=>fn());
        }
      }

      let reject = (reason) => {
        if(this.status ===  PENDING) {
          this.status = REJECTED;
          this.reason = reason;
          this.onRejectedCallbacks.forEach(fn=>fn());
        }
      }

      try {
        executor(resolve,reject)
      } catch (error) {
        reject(error)
      }
    }

    // 3个原型方法

    then(onFulfilled, onRejected) {
      //onFufilled，onRejected是可选的，这里对没有传值时进行兼容，以实现then().then().then(value)调用时可以值穿透
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
      //因为错误的值要让后面访问到，所以这里也要抛出错误，不然会在之后 then 的 resolve 中捕获
      onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
      //每次调用 then 都返回一个新的 promise，这个新promise实例基于onResolved处理程序的返回值构建
      let promise2 = new Promise((resolve, reject) => {

        if (this.status === FULFILLED) {
          //Promise A+规定这里必须是异步的，此处用setTimeout宏任务模拟，实际v8引擎是处理成微任务的
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              // 判断x是promise还是普通值，需要做不同的处理
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e)
            }
          }, 0);
        }

        if (this.status === REJECTED) {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e)
            }
          }, 0);
        }

        if (this.status === PENDING) {
          this.onResolvedCallbacks.push(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e)
            }
          });

          this.onRejectedCallbacks.push(()=> {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            };
          });
        }
      });

      return promise2;
    }

    catch(errCallback){
      return this.then(null,errCallback)
    }

    finally(callback) {
      return this.then((value)=>{
        return Promise.resolve(callback()).then(()=>value)
      },(reason)=>{
        return Promise.resolve(callback()).then(()=>{throw reason})
      })  
    }

    // 4个静态方法

    static resolve (parameter) {
      // 如果传入 Promise 就直接返回
      if (parameter instanceof Promise) {
        return parameter;
      }
      // 转成常规方式
      return new Promise((resolve, reject) =>  {
        resolve(parameter);
      });
    }
  
    static reject (reason) {
      return new Promise((resolve, reject) => {
        reject(reason);
      });
    }
  
    static all(values) {
      if (!Array.isArray(values)) {
        const type = typeof values;
        return new TypeError(`TypeError: ${type} ${values} is not iterable`)
      }
      
      return new Promise((resolve, reject) => {
        let resultArr = [];
        let orderIndex = 0;
        const processResultByKey = (value, index) => {
          resultArr[index] = value;
          if (++orderIndex === values.length) {
              resolve(resultArr)
          }
        }
        for (let i = 0; i < values.length; i++) {
          let value = values[i];
          if (value && typeof value.then === 'function') {
            value.then((value) => {
              processResultByKey(value, i);
            }, reject);
          } else {
            processResultByKey(value, i);
          }
        }
      });
    }

    static race(promises) {
      return new Promise((resolve, reject) => {
        // 一起执行就是for循环
        for (let i = 0; i < promises.length; i++) {
          let val = promises[i];
          if (val && typeof val.then === 'function') {
            val.then(resolve, reject);
          } else { // 普通值
            resolve(val)
          }
        }
      });
    }
    
    
  }


  // 测试
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('完整版成功');
    }, 1000);
  }).then((data) => {
    console.log('success', data)
  }, (err) => {
    console.log('faild', err)
  })

  const a = Promise.resolve(5)
  a.then(value => {
    console.log(value)
  })
  console.log(a)

}