/**
 * 题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 思路：遍历字符串，使用stack存储左括号，当发现是右括号时，如果栈顶是对应的左括号就将栈顶弹出，最后判断stack是否为空，不为空说明有不匹配的括号，即为无效括号

示例 1：
输入：s = "()"
输出：true

示例 2：
输入：s = "()[]{}"
输出：true

示例 3：
输入：s = "(]"
输出：false

示例 4：
输入：s = "([)]"
输出：false

示例 5：
输入：s = "{[]}"
输出：true

 */

/**
   * 判断是否是有效的括号
   * @param {*} str 
   * @returns 
   */
function isValid(str) {
  let stack = []
  let map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  for (const s of str) {
    if (map[s]) { // 遇到左括号入栈
      stack.push(s)
      continue
    }
    // 遇到右括号，则弹出栈顶元素，根据map判断是否是对应的括号，如果不是，不是有效括号
    if (s !== map[stack.pop()]) return false
  }

  return stack.length === 0 // 如果是有效括号，栈最后一定为空

}
console.log(isValid('('))
console.log(isValid(')'))
console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(])'))
console.log(isValid('([)]'))
console.log(isValid('{[]}'))




