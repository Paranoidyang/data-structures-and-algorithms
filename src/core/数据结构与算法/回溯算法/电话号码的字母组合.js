/**
 * 题目描述：给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 示例: 
 * 输入："23"   
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 * 
 * 说明：尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 */

/**
 * 电话号码的字母组合
 * @param {*} digits 
 */
function letterCombinations(digits) {
  if(!digits) return []
  const letterMap = {
    0: '',
    1: '',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
    '*': '',
    '#': '',
  }
  let path = ''
  let result = []
  const dfs = (digits, index) => { // index 表示当前递归的是 digits 中的第几个数
    if(path.length === digits.length) {
      result.push(path) // 收集结果
      return
    }
    let letters = letterMap[digits[index]] // 取数字对应的字符集
    for(let i = 0; i < letters.length; i++) {
      path = `${path}${letters[i]}` // 记录单条路径
      dfs(digits, index + 1) // 递归，注意 index + 1，下一层要处理下一个数字了
      path = path.slice(0, -1) // 回溯
    }

  }
  dfs(digits, 0)
  return result
}

// 测试
console.log(letterCombinations('0#'))