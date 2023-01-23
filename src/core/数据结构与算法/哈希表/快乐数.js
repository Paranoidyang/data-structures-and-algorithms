/**
 * 题目描述：编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。

如果 n 是快乐数就返回 True ；不是，则返回 False 。

 */

/**
 * 辅助函数，将该数替换为它每个位置上的数字的平方和
 * @param {*} n 
 * @returns 
 */
const getSum = (n) => {
  let sum = 0
  while (n) {
    sum += (n % 10) ** 2
    n = Math.floor(n / 10)
  }
  return sum
}

/**
 * 判断一个数是否是快乐数
 * @param {*} n 
 * @returns 
 */
function isHappy(n) {
  let m = new Map()
  while (true) {
    // n出现过，证明已陷入无限循环
    if (m.has(n)) return false
    if (n === 1) return true
    m.set(n, 1)
    n = getSum(n)
  }
}

// 测试
console.log(isHappy(19))
console.log(isHappy(1))
console.log(isHappy(12))
console.log(isHappy(121))