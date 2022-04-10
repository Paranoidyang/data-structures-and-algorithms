/**
 * 题目描述：实现一个你认为比较好的JS继承方式
 * 寄生组合式继承：只执行一次父类的构造函数，子类原型上不会有父类的实例属性
 */

export default function () {
  function Parent(name) {
    this.name = name;
    this.say = () => {
      console.log("say", this.name);
    };
  }
  Parent.prototype.play = function () {
    console.log("play", this.name);
  };

  function Children(name) {
    Parent.call(this, name); //只执行一次父类的构造函数
  }
  Children.prototype = Object.create(Parent.prototype); //拷贝父类原型，赋值给子类原型
  Children.prototype.constructor = Children; //重写子类原型会切断构造函数和原型之间的关系，故需要手动指定回来

  let child = new Children("111");
  console.log("name", child.name);
  child.say();
  child.play();
}
