/**
 * 题目描述：迭代法实现二叉树的中序遍历
 * 中序遍历访问的顺序和处理的顺序不一样，所以不能跟前、后序遍历那样改几行代码就能实现，需要用另一套写法。
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
 * 中序遍历
 * @param {*} root 
 * @returns 
 */
function inorder(root) {
  const stack = []
  const res = []
  let cur = root // 定义一个指针
  while(stack.length || cur) {
      if(cur) {
          stack.push(cur)    // 不断将访问的左节点放进栈
          cur = cur.left     // 左
      } else {
          cur = stack.pop()  // --> 弹出 中，从栈里弹出的数据，就是要处理的数据（放进result数组里的数据）
          res.push(cur.val) 
          cur = cur.right    // 右
      }
  }
  return res
}

console.log('中序遍历', inorder(root))

