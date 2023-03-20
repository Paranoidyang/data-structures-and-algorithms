/**
 * 题目描述：给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * 示例：二叉树：[3,9,20,null,null,15,7],
 *   3
    / \
    9  20
      /  \
    15   7
  返回其层次遍历结果：
    [
      [3],
      [9,20],
      [15,7]
    ]

  思路：层序遍历要条件反射出 BFS+队列，衍生问题基本是围绕结果数组做文章。
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
 * 二叉树层序遍历，对结果进行分层
 * @param {*} root 树的根节点
 */
function levelOrder(root) {
  const res = []
  if (!root) return res  // 处理边界条件
  const queue = [root] // 初始化队列queue，并将根节点入队
  while (queue.length > 0) {
    const curLevel = []
    const len = queue.length // 记录当前层级节点数，这一步很关键，因为队列长度后面会发生改变
    for (let i = 0; i < len; i++) { // 循环遍历当前层级的结点
      const top = queue.shift()
      curLevel.push(top.val) // 将队头元素的值推入 curLevel 数组
      // 存放当前层下一层的节点
      if (top.left) queue.push(top.left)
      if (top.right) queue.push(top.right)
    }
    res.push(curLevel) // 把每一层的结果放到结果数组
  }
  return res
}
console.log(levelOrder(root))
