/**
 * 题目描述：扁平化数组
 */

export default function () {
  // 递归
  function flatten1(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('参数必须为数组')
    }
    let result = []
    for (let item of arr) {
      if (Array.isArray(item)) {
        result = result.concat(flatten1(item))
      } else {
        result.push(item)
      }
    }
    return result
  }

// reduce
function flatten2(arr) {    
  return arr.reduce(function(prev, next){ 
      return prev.concat(Array.isArray(next) ? flatten2(next) : next)    }, [])
  }

  let arr = flatten1([1, [[2, 3], 4, 5]])
  console.log(arr)
}

