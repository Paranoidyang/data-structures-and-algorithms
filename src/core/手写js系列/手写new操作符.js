/**
 * 手写new操作符
 * 使用构造函数，new一个实例的过程发生了一下过程：
          （1）在内存中创建一个新对象。
          （2）这个新对象内部的[[Prototype]]特性被赋值为构造函数的prototype属性。
          （3）构造函数内部的this指向这个新对象
          （4）执行构造函数内部的代码（给新对象添加属性）。
          （5）如果构造函数显式地返回一个非空对象，则返回该对象；否则，返回刚创建的新对象。
 */
function myNew(fn, ...args) {
  // 方法1
  // let obj = object.create(fn.prototype)
  // 方法2
  let obj = {}
  // 将新对象obj关联构造函数的原型
  obj.__proto__ = fn.prototype
  // 为obj添加属性
  let res = fn.call(obj, ...args)
  if (res && (typeof res === "object" || typeof res === "function")) {
    return res;
  } {
    return obj
  }
}

function Person(name, age) {
  this.name = name
  this.age = age
  // return {a: 1}
}
console.log(myNew(Person, '小红', 18))