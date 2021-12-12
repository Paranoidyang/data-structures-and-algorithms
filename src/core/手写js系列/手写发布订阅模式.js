/**
 * 题目描述：手写发布订阅，具有listen、trigger、once、remove方法
 */

export default function () {
  class Event {
    constructor() {
      this.clientList = {};
    }
    // 订阅
    listen(key, fn) {
      if (!this.clientList[key]) {
        this.clientList[key] = [];
      }
      this.clientList[key].push(fn);
    }
    // 触发
    trigger() {
      var key = Array.prototype.shift.call(arguments),
        fns = this.clientList[key];
      if (!fns || fns.length === 0) {
        return false;
      }
      for (var i = 0, fn; (fn = fns[i++]); ) {
        fn.apply(this, arguments);
      }
    }
    // 移除订阅
    remove(key, fn) {
      var fns = this.clientList[key];
      if (!fns) {
        return false;
      }
      if (!fn) {
        fns && (fns.length = 0);
      } else {
        for (var l = fns.length - 1; l >= 0; l--) {
          var _fn = fns[l];
          if (_fn === fn) {
            fns.splice(l, 1);
          }
        }
      }
    }
    // 只执行一次订阅
    once(key, fn) {
      function _fn() {
        fn();
        this.remove(key, _fn);
      }
      this.listen(key, _fn);
    }
  }

  let event = new Event();
  let handle = function (price) {
    console.log("价格=" + price); // 输出：价格=2000000'
  };
  event.listen("squareMeter88", handle);
  event.remove("squareMeter88", handle);
  event.trigger("squareMeter88", 2000000);

  event.once("squareMeter99", (price) => {
    console.log("once", price); //获取不到参数，如何解决呢？？？？？
  });
  event.trigger("squareMeter99", 3000000);
  event.trigger("squareMeter99", 4000000);
}
