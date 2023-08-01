/**
 * 手写代理沙箱机制
 * 
 * ProxySandbox，完全不存在状态恢复的逻辑，同时也不需要记录属性值的变化，因为所有的变化都是沙箱内部的变化，和window没有关系，window上的属性至始至终都没有受到过影响。
 * 
 * 在class的最顶层，通过 = 赋值的属性是实例属性
 */
class ProxySandBox {
  proxyWindow = {}
  isRunning = false

  constructor(){
    // 创建一个没有继承任何属性和方法的空对象，保证代理的干净性
    const fakeWindow = Object.create(null) 
    this.proxyWindow = new Proxy(fakeWindow, {
      set: (target, prop, value) => { // 一定要用箭头函数，否则获取不到this
        if(this.isRunning) target[prop] = value // 启动时只操作fakeWindow
      },
      get(target, prop) {
          return  prop in target ? target[prop] : window[prop]
      }  
    })
  }

  active() {
    this.isRunning = true
  }

  inactive() {
    this.isRunning = false
  }

}

let window = global // vscode编辑器中不存在window

window.city = 'Beijing'
let proxySandBox1 = new ProxySandBox()
let proxySandBox2 = new ProxySandBox()
proxySandBox1.active()
proxySandBox2.active()
proxySandBox1.proxyWindow.city = 'Shanghai'
proxySandBox2.proxyWindow.city = 'Chengdu'
console.log('active:proxySandBox1:window.city:', proxySandBox1.proxyWindow.city)
console.log('active:proxySandBox2:window.city:', proxySandBox2.proxyWindow.city)
console.log('window:window.city:', window.city)
proxySandBox1.inactive()
proxySandBox2.inactive()
console.log('inactive:proxySandBox1:window.city:', proxySandBox1.proxyWindow.city)
console.log('inactive:proxySandBox2:window.city:', proxySandBox2.proxyWindow.city)
console.log('window:window.city:', window.city)