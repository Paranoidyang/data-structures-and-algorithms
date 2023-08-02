/**
 * 题目描述：数组去重
 */

// 双重循环
function unique(arr) {
  const res = []
  for (const item of arr) {
    for (var i = 0; i < res.length; i++) {
      if (item === res[i]) break
    }
    // 如果item是唯一的，那么执行完循环，i等于resLen
    if (i === res.length) res.push(item)
  }
  return res
}

// 测试
let array = [1, '1', 1, '1']
console.log(unique(array)) // [1, "1"]