/**
 * 题目描述：二叉树迭代遍历的3种姿势（深度优先搜索思想的应用，DFS）
 * 给定一个二叉树，返回它的前、中、后序遍历序列。
 * 示例: 输入: [1,null,2,3]
 *   1   
      \   
        2   
      /  
      3 

   前序遍历会输出: [1,2,3]
   思路：借助栈来实现
 */

const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
}

/**
 * 前序遍历
 * @param {*} root 所有遍历函数的入参都是树的根结点对象
 * @returns 
 */
function preorder(root) {
  const res = []
  if(!root) return res //处理边界条件
  const stack = []
  stack.push(root)
  while(stack.length) {
    const curr = stack.pop()
    res.push(curr.val)
    curr.right && stack.push(curr.right)  // 先右节点入栈，因为栈是先进后出
    curr.left && stack.push(curr.left) // 然后左节点入栈
  }
  return res
}

console.log('前序遍历', preorder(root))

/**
 * 后序遍历（在前序遍历的代码基础上，只需要修改3行）
 * @param {*} root 
 * @returns 
 */
function postorder(root) {
  const res = []
  if(!root) return res //处理边界条件
  const stack = []
  stack.push(root)
  while(stack.length) {
    const curr = stack.pop()
    res.push(curr.val)
    // 前序遍历：中左右，如果调换以下两行代码的顺序，输出的结果数组就是按“中右左”的顺序输出，此时再将结果数组 reverse 就得到“左右中”顺序的后序遍历
    curr.left && stack.push(curr.left)
    curr.right && stack.push(curr.right)
  }
  return res.reverse() // reverse 翻转
}

console.log('后序遍历', postorder(root))

