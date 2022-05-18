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
  // 转成数组，方便处理
  const strArr = str.split('')
  const stack = []
  while (strArr.length > 0) {
    // 字符串的头，注：shfit完字符串长度会减小
    let head = strArr.shift()
    // 栈顶
    let stackTop = stack[stack.length - 1]
    // 没有匹配的左括号直接返回false
    if (stack.length === 0 && (head === ')' || head === '}' || head === ']')) {
      return false
    }
    // 如果是左括号，入栈
    if (head === '(' || head === '{' || head === '[') {
      stack.push(head)
    }
    // 如果是右括号，且栈顶为对应左括号，则弹出左括号
    if ((stackTop === '(' && head === ')') || (stackTop === '[' && head === ']') || (stackTop === '{' && head === '}')) {
      stack.pop()
    }
  }
  return stack.length <= 0

}
console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('([)]'))
console.log(isValid('{[]}'))




