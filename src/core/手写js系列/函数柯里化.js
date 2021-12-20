/**
 * 题目描述：实现函数柯里化，将接收多个参数的函数转化成一系列接收一个参数的函数的技术。
 *          用闭包把参数保存起来，当参数的数量足够l，可以执行函数了，就开始执行函数
 */
export default function () {
  // 柯里函数
  var currying = function (fn) {
    var allArgs = [];

    return function (...args) {
      if (args.length === 0) {
        return fn.apply(this, allArgs);
      } else {
        [].push.apply(allArgs, args);
      }
    }

  };

  // 测试函数
  var cost = (function () {
    var money = 0;

    return function () {
      for (var i = 0, l = arguments.length; i < l; i++) {
        money += arguments[i];
      }
      return money;
    }

  })();

  var cost = currying(cost);    // 转化成currying函数

  cost(100);    // 未真正求值
  cost(200);    // 未真正求值
  cost(300);    // 未真正求值
  console.log(cost());     // 求值并输出：600
}
