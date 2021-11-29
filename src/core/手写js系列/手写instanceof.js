/**
 * 题目描述：instanceof用来判断哪种类型的对象，后面跟构造函数或者class
 *           右边变量（构造函数或class）的prototype在左边变量的原型链上，则 instanceof 就返回true，否则返回false
 */

export default function () {
  function myInstanceof(left, right) {
    // 左边的变量如果是基本类型，直接返回false
    if(typeof left !== 'object') {
      return false
    }
    while (true) {
      if (left === null) {
        return false;
      }
      if (left.__proto__ === right.prototype) {
        return true;
      }
      left = left.__proto__;
    }
  }
  // 测试
  console.log(myInstanceof({}, Object))
}

