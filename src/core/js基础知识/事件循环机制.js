//概述：js是单线程的，执行过程中产生的异步任务会交给其他线程处理，处理完会放到事件队列里，执行栈空闲的时候会不断检查事件队列，如果有事件就将其添加到执行栈中执行。异步任务分为宏任务和微任务，相应的就会有宏任务队列和微任务队列，等到执行栈空闲的时候会优先检查微任务队列，将里面的任务清空后再检查宏任务队列，也就是在下一次宏任务执行前会先清空微任务队列，就这样不断的进行，这就是事件循环机制。
//常见的宏任务：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering
//常见的微任务：process.nextTick, Promise中的then, Async/Await(实际就是promise)，MutationObserver(html5新特性)

// 经典題目一：
// 下面的代码的执行结果为：5 -> 5,5,5,5,5，即第 1 个 5 直接输出，1 秒之后，输出 5 个 5；
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(new Date, i);
  }, 1000);
}
console.log(new Date, i);
// 如果想符合预期可以修改的方式有以下两种：
// 方式1：将var改成let
// 方式2：setTimeout用一个 自执行函数IIFE 包括起来，生成一个闭包环境
// 自执行函数：圆括号+匿名函数+圆括号
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(new Date, i);
    }, 1000)
  }
  )(i);
}


// 经典題目二：
// await关键字首先会把await表达式右边的代码先执行一遍，然后暂停异步函数的执行，跳出异步函数并接着执行 js 执行栈后面的代码。等到await右边的值可用了，JavaScript运行时会向微任务队列中推送一个恢复异步函数执行的任务。当然，如果是一个立即可用的值，在执行到那里的时候，就会立即向微任务队列推送一个恢复执行的任务，等到执行栈空闲的时候，异步函数就会被恢复执行。

// 下面的代码的执行结果为：script start -> async2 end -> promise -> script end -> async1 end -> promise1 -> promise2 -> setTimeout
// 微任务队列：[恢复async1执行的任务、promise.then、promise.then]
// 宏任务队列：[setTimeout]
console.log('script start')

async function async1() {
  await async2()//await表达式会执行一遍，然后向微任务队列加入一个恢复异步函数执行的任务
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}

// 如果await后面跟的是一个异步函数的调用，则会等到异步函数的值可用了（即执行到async2 end1时）才往微任务队列中加入恢复async1函数执行的任务
// 此时的执行结果为：script start -> async2 end -> Promise -> script end -> async2 end1 -> promise1 -> promise2 -> async1 end -> setTimeout
// 微任务队列为：[async2 end1, promise1, promise2, 恢复async1函数执行的任务]
// 宏任务队列：[setTimeout]
// async function async2() {
//   console.log('async2 end')
//   return Promise.resolve().then(()=>{
//       console.log('async2 end1')
//   })
// }

async1()

setTimeout(function () {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function () {
    console.log('promise1')
  })
  .then(function () {
    console.log('promise2')
  })

console.log('script end')