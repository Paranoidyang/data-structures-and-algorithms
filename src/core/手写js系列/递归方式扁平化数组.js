/**
 * 题目描述：递归扁平化数组
 */

export default function () {
  function flatten(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('参数必须为数组')
    }
    let result = []
    for (let item of arr) {
      if (Array.isArray(item)) {
        result = result.concat(flatten(item))
      } else {
        result.push(item)
      }
    }
    return result
  }
  let arr = flatten([1, [[2, 3], 4, 5]])
  console.log(arr)
}

