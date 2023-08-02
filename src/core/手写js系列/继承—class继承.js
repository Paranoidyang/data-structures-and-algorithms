/**
 * 使用class实现继承
 */

class Parent {
  constructor(name) {
    this.name = name
    this.say = function() {
      console.log('say', this.name)
    }
  }
  play() {
    console.log('play', this.name)
  }
  
}

class Children extends Parent {
  constructor(name) {
    super() // 塑造子类的this
    this.name = name
  }
}

// 测试
let child = new Children("111")
console.log("name", child.name)
child.say()
child.play()