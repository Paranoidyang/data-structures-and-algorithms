/**
 * 题目描述：手写防抖、节流函数
 */

export default function () {
  //防抖函数
  function debounce(fn, delay= 300) {
    let timer = null
    //创建一个闭包环境，保持对上一个timer的引用
    return function() {
      if(timer) {
        clearTimeout(timer)
      }
      //setTimeout第一个参数为函数（不立即执行），使用bind更简洁，使用apply或call的话还需要套一层() => {}
      //将this改为当前return的函数作用域下的this
      //解决fn的传参问题，fn可能需要传递参数
      timer = setTimeout(fn.bind(this, ...arguments), delay);
    }
  }

  //节流函数
  function throttle(fn, delay= 2000) {
    let timer = null
    return function() {
      if(timer) return
      timer = setTimeout(() => {
        fn.apply(this, arguments)
        clearTimeout(timer) //终止定时器，timer值仍存在，为一个id
        timer = null //释放内存，使程序能跳过上面的if判断，继续触发
        
      }, delay);
    }
  }

  let getLog = (name) => console.log(name);
  window.addEventListener("resize", debounce(() => {getLog('防抖')}));//测试防抖
  window.addEventListener("resize", throttle(() => {getLog('节流')}));//测试节流

}

