// 对原型的理解？
// 每个构造函数都有一个prototype属性指向原型对象，构造函数生成的实例也都有一个内部指针指向这个原型对象（这个内部指针在某些浏览器上会暴露为_proto_属性），访问一个实例属性时， 首先会在当前实例上找，没找到，则会到实例的原型上找，如果我们把一个实例的原型赋值为另外一个实例对象，而这个实例对象又有自己的原型，这样查找属性就会一层一层的往上找，直到原型链的末端null为止，所以原型链其实就是实例与原型构成一个链条。

// 为什么原型链的末端是null?
// 为了逻辑上的完整性，原型链是不能有环的，否则遍历原型链就没有终点，而根据定义，null没有原型，就作为原型链的终点了

// hasOwnProperty()方法用于判断实例上是否有某个属性
// 如果想要判断某个属性是否在对象原型上，可以使用下面的方法
function hasPrototypeProperty(object, name) {
  return !object.hasOwnProperty(name) && (name in object);//in运算符会查找实例以及原型链上的所有属性
}

// 注意：prototype是函数才有的属性，普通对象是没有的。
// JavaScript内置的函数有以下几个：Object,Number,Boolean,String,Array,RegExp,Date,Function,Error等，他们本质是函数对象，所以他们的__proto__是Function.prototype
// 而Math、JSON是以对象的形式存在的，没有prototype属性，所以是undefined。
Object.__proto__ //Function.prototype
Array.__proto__ //Function.prototype
Function.__proto__//Function.prototype
Function.prototype.__proto__ //Object.prototype 
Array.prototype.__proto__//Object.prototype
Object.prototype.__proto__ //null，Object.prototype作为顶层对象，是原型链的末端
