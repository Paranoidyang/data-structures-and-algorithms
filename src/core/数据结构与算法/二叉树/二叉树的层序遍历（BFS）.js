/**
 * 题目描述：二叉树层序遍历：按照层次的顺序，从上到下，从左到右地遍历（打印）一个二叉树的节点值
 * BFS（Breadth-First Search）：即广度优先算法
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
 * 广度优先算法实现的二叉树层序遍历
 * @param {*} root 树的根节点
 */
function BFS(root) {
  const queue = []// 初始化队列queue
  queue.push(root)
  while (queue.length > 0) {
    const top = queue[0]// 取出队头元素  
    console.log(top.val)//访问当前节点的值
    if (top.left) queue.push(top.left)// 如果左子树存在，左子树入队
    if (top.right) queue.push(top.right)// 如果右子树存在，右子树入队
    queue.shift() // 访问完毕，队头元素出队
  }
}
BFS(root)
