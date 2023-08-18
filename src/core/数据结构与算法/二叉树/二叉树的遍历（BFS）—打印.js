/**
 * 题目描述：按照层次的顺序，从上到下，从左到右地遍历（打印）一个二叉树的节点值，即层序遍历
 * 层序遍历又称 BFS（Breadth-First Search，广度优先算法）
 * 
 * 技巧：借助队列实现
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
 * 层序遍历打印
 * @param {*} root 树的根节点
 */
function bfs(root) {
  const queue = [root] // 初始化队列queue，并将根节点入队
  while (queue.length > 0) {
    const top = queue[0] // 取出队头元素  
    console.log(top.val) //访问当前节点的值
    queue.shift() // 访问完毕，队头元素出队
    top.left && queue.push(top.left) // 如果左子树存在，左子树入队
    top.right && queue.push(top.right) // 如果右子树存在，右子树入队
  }
}

// 测试
bfs(root)
