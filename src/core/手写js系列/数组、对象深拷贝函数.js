/**
 * 题目描述：利用for循环和递归实现一个深拷贝函数
 */

// 判断是否是对象（不包含函数）
const isObj = (obj) => typeof obj === 'object' && obj !== null
function deepCopy(obj) {
  if (isObj(obj)) { //对象类型
    const result = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) { //只拷贝对象本身的属性，不拷贝其原型上的属性
        result[key] = isObj(obj[key]) ? deepCopy(obj[key]) : obj[key] //递归复制
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