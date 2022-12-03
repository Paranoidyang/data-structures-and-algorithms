/**
 * 手写沙箱机制
 */
class SanapShotSandbox {
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

window.city = 'Beijing'
const sanbox = new SanapShotSandbox()
console.log('window.city', window.city) //Beijing
sanbox.active()
window.city = 'Shenzhen'
console.log('window.city', window.city) //Shenzhen
sanbox.inactive()
console.log('window.city', window.city) //Beijing