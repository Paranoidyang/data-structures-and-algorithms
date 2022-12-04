/**
 * 题目描述：利用for循环和递归实现一个深拷贝函数
 */

// 判断是否是对象（不包含函数）
function isObj(obj) {
  return typeof obj === 'object' && obj !== null
}
function deepCopy(obj) {
  if (isObj(obj)) {//对象类型
    let result = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {//只拷贝对象本身的属性，不拷贝其原型上的属性
        if (isObj(obj[key])) {
          result[key] = deepCopy(obj[key]) //递归复制
        } else {
          result[key] = obj[key]
        }
      }
    }
    return result
  } else {//兼容基本类型和function，function的深拷贝没有实际应用场景，lodash中的处理也是直接返回
    return obj
  }
}

// let a = 1
// let b = deepCopy(a)
// console.log(b)

// let a = null
// let b = deepCopy(a)
// console.log(b)

let a = function a() { console.log('abc') }
let b = deepCopy(a)
console.log(b)

let obj = { name: 'lisi', address: { province: '广东' } }
let objCopy = deepCopy(obj)
objCopy.address.province = '北京'
console.log(obj, objCopy)