/**
 * 题目描述：扁平化数组
 */

// reduce
function flatten1(arr) {
  return arr.reduce(function (prev, next) {
    return prev.concat(Array.isArray(next) ? flatten1(next) : next)
  }, [])
}

// 扩展运算符
function flatten2(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

// 递归
function flatten3(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('参数必须为数组')
  }
  let result = []
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten3(item))
    } else {
      result.push(item)
    }
  }
  return result
}

// toString
function flatten4(arr) {
  return arr.toString().split(',').map(item => +item)
}

let arr = flatten1([1, [[2, 3], 4, 5]])
console.log(arr)

