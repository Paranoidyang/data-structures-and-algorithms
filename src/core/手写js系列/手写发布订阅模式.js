/**
 * 题目描述：手写发布订阅，具有on、emmit、once、off方法
 */

export default function () {
  class Event {
    constructor() {
      this.events = {};
    }
    // 订阅
    on(key, fn) {
      if (!this.events[key]) {
        this.events[key] = [];
      }
      this.events[key].push(fn);
    }
    // 触发
    emit(key, ...args) {
      this.events[key] &&
        this.events[key].forEach((fn) => fn.apply(this, args));
    }
    // 移除订阅
    off(type, fn) {
      if (!this.events[type]) return;
      this.events[type] = this.events[type].filter((item) => {
        return item !== fn;
      });
    }
    // 只执行一次订阅
    once(key, fn) {
      function _fn(...args) {
        fn(...args);
        this.off(key, _fn);
      }
      this.on(key, _fn);
    }
  }

  let event = new Event();
  let handle = function (price) {
    console.log("价格=" + price); // 输出：价格=2000000'
  };
  event.on("squareMeter88", handle);
  // event.off("squareMeter88", handle);
  event.emit("squareMeter88", 2000000);

  event.once("squareMeter99", (price) => {
    console.log("once", price);
  });
  event.emit("squareMeter99", 3000000);
  event.emit("squareMeter99", 4000000);
}
