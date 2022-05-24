// this是在运行时进行绑定的，与函数声明位置无关，只取决于函数的调用方式。
// 有以下四条绑定规则：
// 优先级为：fn() < obj.fn() < fn.call(obj) < new fn()

// --------------------------------------------

// 默认绑定：独立函数调用时，会应用默认绑定，绑定到window，严格模式下，绑定到undefined
// 开启严格模式，只是说使得函数内的this指向undefined，它并不会改变全局中this的指向
"use strict";
var a = 10;
function foo() {
  console.log('this1', this) //undefined
  console.log(window.a) //10
  console.log(this.a) //Uncaught TypeError: Cannot read property 'a' of undefined
}
console.log(window.foo) //f foo() {...}
console.log('this2', this) //window
foo();

// --------------------隐式绑定------------------------

// 隐式绑定：通过上下文对象调用函数会将this绑定到这个上下文对象上
// 一个常见的场景是隐式绑定丢失，它会应用默认绑定，也就是把this绑定到window或者undefined上。
// 常见的丢失形式有：
// 1、使用另一个变量来给函数取别名
// 2、将函数作为参数传递时，参数传递其实是一种隐式赋值，所以传入的函数也会隐式赋值，从而导致丢失this绑定
// 隐式绑定找this技巧：this 永远指向最后调用它的那个对象
function foo() {
  console.log(this.a)
};
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;
var obj2 = { a: 3, foo2: obj.foo }

obj.foo();//打印1，obj.foo()中的this指向调用者obj 
foo2();//打印2，foo2()发生了隐式丢失，调用者是window，使得foo()中的this指向window 
obj2.foo2();//打印3，foo3()发生了隐式丢失，调用者是obj2，使得foo()中的this指向obj2

// ---------------------显式绑定-----------------------

// call/apply/bind显式绑定
// 如果call、apply、bind接收到的第一个参数是空或者null、undefined的话，则会忽略这个参数；bind返回一个函数
function foo() {
  console.log(this.a)
}
var obj = {
  a: 2
}
foo.call(obj) //2

// ----------------------new绑定----------------------

// new绑定：new一个构造函数时，会创建一个新对象，并将函数内部的this指向这个新对象
function foo(a) {
  this.a = a
}
var bar = new foo(2)
console.log(bar.a) //2

// ----------------------箭头函数----------------------

// 箭头函数没有自己的this，它的this是由外层作用域来决定的
var obj = {
  name: 'obj',
  foo1: () => {
    console.log(this.name)
  },
  foo2: function () {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
}
var name = 'window'
obj.foo1()//打印 'window'，foo1是箭头函数，没有自己的this，取决于外层作用域，这里也就是全局作用域
obj.foo2()()//打印 'obj'，返回的是一个箭头函数，所以它的this取决于外层作用域（即foo2函数作用域）的this，而foo2属于隐式调用，this绑定到上下文对象obj

// ----------------------综合题 1----------------------

// 综合题
var name = 'window'
function Person(name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()()//window，返回的是一个普通的匿名函数，调用它的是window，所以打印出window
person1.obj.foo1.call(person2)()//window，使用.call(person2)改变第一层函数中的this，匿名函数和它没关系，依旧是window调用的，所以打印出window。
person1.obj.foo1().call(person2)//person2，通过.call(person2)改变匿名函数内的this，所以绑定有效，因此打印出person2。

person1.obj.foo2()()//obj，第一层为普通函数，第二层为匿名箭头函数。首先让我们明确匿名箭头函数内的this是由第一层普通函数决定的，所以我们只要知道第一层函数内的this是谁就可以了。而这里，第一层函数最后是由谁调用的呢 🤔️？是由obj这个对象，所以打印出obj。
person1.obj.foo2.call(person2)()//person2，使用.call(person2)改变了第一层函数中的this指向，所以第二层的箭头函数会打印出person2。
person1.obj.foo2().call(person2)//obj，使用.call(person2)想要改变内层箭头函数的this指向，但是失败了，所以还是为外层作用域里的this，打印出obj。

// ----------------------综合题 2----------------------

var id = 'global';
var obj = {
  id: 'obj',
  a: function () {
    console.log(this.id);
  },
  b: () => {
    console.log(this.id);
  }
};
obj.a();    // 'obj'
obj.b();    // 'global'
new obj.a()  // undefined，this指向这个new出来的实例，但是这个实例上的id并没有赋值
new obj.b()  // Uncaught TypeError: obj.b is not a constructor，箭头函数不能作为构造函数