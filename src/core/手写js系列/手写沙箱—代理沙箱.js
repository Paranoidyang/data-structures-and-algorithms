/**
 * 手写代理沙箱机制
 */
class ProxySandBox {
  proxyWindow = {}
  isRunning = false
  active() {
    this.isRunning = true
  }
  inactive() {
    this.isRunning = false
  }
  constructor(){
    const fakeWindow = Object.create(null)
    this.proxyWindow = new Proxy(fakeWindow,{
        set:(target, prop, value, receiver)=>{
        // 设置时只操作fakeWindow
            if(this.isRunning){
                target[prop] = value
            }
        },
        get:(target, prop, receiver)=>{
            return  prop in target ? target[prop] : window[prop]
        }
    })
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
