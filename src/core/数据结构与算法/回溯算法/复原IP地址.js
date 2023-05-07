/**
 * 题目描述：给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 * 有效的 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
 * 
 * 例如："0.1.2.201" 和 "192.168.1.1" 是有效的 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是无效的IP地址。
 * 
 * 示例 1：
 * 输入：s = "25525511135"
 * 输出：["255.255.11.135","255.255.111.35"]
 * 
 * 示例 2：
 * 输入：s = "0000"
 * 输出：["0.0.0.0"]
 * 
 * 示例 3：
 * 输入：s = "1111"
 * 输出：["1.1.1.1"]
 * 
 * 示例 4：
 * 输入：s = "010010"
 * 输出：["0.10.0.10","0.100.1.0"]
 * 
 * 示例 5：
 * 输入：s = "101023"
 * 输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 */

function restoreIpAddresses(s) {
  const path = [], result = [], len = s.length
  const dfs = (s) => {
    if(path.length === 4 && path.join('').length === len) {// path长度为4，同时字符串总长度等于原字符串长度时，收集结果
      result.push(path.join('.'))
      return
    }
    if(path.length > 4) return // path长度>4，直接退出递归
    for(let i = 1; i <= s.length; i++) {
      const curr = s.slice(0, i)
      if(Number(curr) < 0 || Number(curr) > 255 || (curr.length > 1 && curr.startsWith('0'))) { // 当前数值 < 0 或者 > 255 或者 长度 > 1且含有前导0时，结束当前循环
        continue
      }
      path.push(curr)
      const remainder = s.slice(i) // 剩余字符串
      dfs(remainder) // 递归
      path.pop() // 回溯
    }
  }
  dfs(s)
  return result
}

// 测试
console.log(restoreIpAddresses('25525511135'))
console.log(restoreIpAddresses('0000'))
console.log(restoreIpAddresses('010010'))
console.log(restoreIpAddresses('101023'))