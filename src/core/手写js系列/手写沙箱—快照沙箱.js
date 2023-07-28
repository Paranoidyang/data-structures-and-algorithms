/**
 * 手写快照沙箱机制
 * 
 * 两个重要的问题：
 *   1、会改变全局window的属性，如果同时运行多个微应用，多个应用同时改写window上的属性， 势必会出现状态混乱，这也就是为什么快照沙箱无法支持多各微应用同时运行的原因。
 *   2、会通过for(prop in window){}的方式来遍历window上的所有属性，window属性众多，这其实是一件很耗费性能的事情。
 * 
 */
class SnapshotSandbox {
  constructor() {
    this.windowSnapshot = {}
    this.modifyPropsMap = {}
  }

  active() {
    // 保存window对象上所有属性的值
    for (const prop in window) {
      this.windowSnapshot[prop] = window[prop]
    }
    // 恢复上一次在运行微应用的时候所修改过的window上的属性
    Object.keys(this.modifyPropsMap).forEach(prop => {
      window[prop] = this.modifyPropsMap[prop]
    })
  }

  inactive() {
    for (const prop in window) {
      if (this.windowSnapshot[prop] !== window[prop]) {
        // 记录修改了window上哪些属性
        this.modifyPropsMap[prop] = window[prop]
        // 将window上的属性还原至微应用运行之前的状态 
        window[prop] = this.windowSnapshot[prop]
      }
    }
  }
}

let window = global // vscode编辑器中不存在window

window.city = 'Beijing'
const sanbox = new SnapshotSandbox()
console.log('window.city', window.city) //Beijing
sanbox.active()
window.city = 'Shenzhen'
console.log('window.city', window.city) //Shenzhen
sanbox.inactive()
console.log('window.city', window.city) //Beijing
sanbox.active()
console.log('window.city', window.city) //Shenzhen
