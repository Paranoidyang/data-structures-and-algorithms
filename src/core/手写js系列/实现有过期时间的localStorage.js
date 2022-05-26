/**
 * 题目描述：实现具有过期时间的localStorage
 * 思路：localStorage 继承自 Storage 对象， 所以我们可以扩展Storage原型方法。
 */

/**
 * 设置有过期时间的localStorage
 * @param {*} key 
 * @param {*} value 
 * @param {*} age 时间戳，相对时间，必须为number类型
 */
Storage.prototype.setStorageWithAge = (key, value, age) => {
  if (isNaN(age) || age < 1) throw new Error("age must be a number");
  const obj = {
    data: value, //存储值
    time: Date.now(), //存值时间戳
    maxAge: age, //过期时间
  };
  localStorage.setItem(key, JSON.stringify(obj));
};

/**
 * 读取有过期时间的localStorage
 * @param {*} key 
 * @returns 
 */
Storage.prototype.getStorageWithAge = key => {
  if (!localStorage.getItem(key)) return
  const { data, time, maxAge } = JSON.parse(localStorage.getItem(key));
  if (Date.now() > time + maxAge) {//当前时间大于有效的时间点，说明过期了
    localStorage.removeItem(key);
    return;
  }
  return data;
};

// 测试
localStorage.setStorageWithAge('test', '测试过期时间', 5000);
localStorage.getStorageWithAge('test');