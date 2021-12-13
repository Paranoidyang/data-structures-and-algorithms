/**
 * 题目描述：实现LRU缓存机制
 * get()，获取数据，如果密钥在缓存中存在，则取出密钥值；如果不存在则返回-1
 * put()，写入数据，如果密钥已经存在，则变更其数据；如果不存在，则插入数据。当缓存容量达到上限的时候，则在移除最久没使用的数据，从而为新数据腾出空间。
 * 利用map来存储缓存，一个Map对象在迭代时会根据对象中元素的插入顺序来进行，新添加的元素会被插入到map的末尾。
 */

export default function () {
  console.log("LRU");
  class LRUCache {
    constructor(limit) {
      this.cache = new Map();
      this.limit = limit;
    }
    get(key) {
      // key存在，更新位置
      if (this.cache.has(key)) {
        let value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
      } else {
        return -1;
      }
    }
    put(key, value) {
      if (this.cache.has(key)) {
        // key存在，仅修改值
        this.cache.delete(key);
        this.cache.set(key, value);
      } else if (this.cache.size < this.limit) {
        // key不存在，cache未满，直接添加
        this.cache.set(key, value);
      } else {
        // key不存在，cache满了，移除最久没使用的数据，keys()返回的是一个迭代器对象，可以调用next()方法获取第一个键值对
        let oldestKey = this.cache.keys().next().value;
        this.cache.delete(oldestKey);
        this.cache.set(key, value);
      }
    }
  }
  let lruCache = new LRUCache(2);
  lruCache.put("a", 1);
  lruCache.put("b", 2);
  console.log(lruCache.get("a"));
  lruCache.put("c", 3);

  console.log(lruCache.get("a"));
  console.log(lruCache.get("b"));
  console.log(lruCache.get("c"));
}
