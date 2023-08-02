/**
 * 题目描述：实现一个你认为比较好的JS继承方式
 * 寄生组合式继承：只执行一次父类的构造函数，子类原型上不会有父类的实例属性
 */

// es5写法
function Parent(name) {
  this.name = name
  this.say = () => {
    console.log("say", this.name)
  }
}
Parent.prototype.play = function () {
  console.log("play", this.name)
}

function Children(name) {
  Parent.call(this, name) //只执行一次父类的构造函数
}
Children.prototype = Object.create(Parent.prototype) //拷贝父类原型，赋值给子类原型
Children.prototype.constructor = Children //重写子类原型会切断最初原型与构造函数之间的关系，故需要手动指定回来

// 不指定回来会怎样？
// 如果是创建实例之后重写子类的原型，会导致子类实例无法访问子类原型上的数据和方法

// 测试
let child = new Children("111")
// Children.prototype = Object.create(Parent.prototype) // 创建实例之后重写子类的原型，会导致子类实例无法访问子类原型上的数据和方法
console.log("name", child.name)
child.say()
child.play()
console.log(child instanceof Children)