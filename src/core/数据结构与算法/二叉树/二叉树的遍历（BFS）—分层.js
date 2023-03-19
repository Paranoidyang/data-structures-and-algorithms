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

// 二叉树如下：
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
};
/**
 * 二叉树层序遍历，对结果进行分层
 * @param {*} root 树的根节点
 */
function levelOrder(root) {
  const res = []//初始化结果数组
  if (!root) {//处理边界条件
    return res
  }
  const queue = []//初始化队列queue
  queue.push(root)//队列第一个元素是根结点
  while (queue.length > 0) {
    const level = []
    const len = queue.length//缓存刚进入循环时的队列长度，这一步很关键，因为队列长度后面会发生改变
    for (let i = 0; i < len; i++) {//循环遍历当前层级的结点
      const top = queue.shift()//取出队列的头部元素
      level.push(top.val)//将头部元素的值推入 level 数组
      if (top.left) {//如果当前结点有左孩子，则推入下一层级
        queue.push(top.left)
      }
      if (top.right) {//如果当前结点有右孩子，则推入下一层级
        queue.push(top.right)
      }
    }
    res.push(level)//将 level 推入结果数组
  }
  return res
}
console.log(levelOrder(root))
