/**
 * 题目描述：根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。
 * 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
 * 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
 * 思路：尝试去维持一个递减栈，当遍历过的温度，维持的是一个单调递减的态势时，我们就对这些温度的索引下标执行入栈操作；只要出现了一个数字，它打破了这种单调递减的趋势，也就是说它比
 *      前一个温度值高，这时我们就对前后两个温度的索引下标求差，得出前一个温度距离第一次升温的目标差值。
 * 
 * 栈结构可以帮我们避免重复操作。
 * 避免重复操作的秘诀就是及时地将不必要的数据出栈，避免它对我们后续的遍历产生干扰。
 */

/**
   * 过几天升温
   * @param {*} T 温度数组
   * @returns 
   */
function dailyTemperatures(T) {
   let len = T.length
   let stack = []
   let res = (new Array(len)).fill(0)//  初始化结果数组，注意数组定长，占位为0
   for (let i = 0; i < len; i++) {
      while (stack.length && T[i] > T[stack[stack.length - 1]]) {// 若栈不为0，且存在打破递减趋势的温度值
         let top = stack.pop()// 将栈顶温度值对应的索引出栈
         res[top] = i - top// 计算 当前栈顶温度值与第一个高于它的温度值 的索引差值
      }
      stack.push(i)// 注意栈里存的不是温度值，而是索引值，这是为了后面方便计算
   }
   return res // 返回结果数组

}
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))




