/**
 * 题目描述：给定一个二叉树，在树的最后一行找到最左边的值。
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
 * 迭代法（易理解）
 * @param {*} root 
 * @returns 
 */
function findBottomLeftValue(root) {
  let resNode = null
  if(root === null) return resNode
  let queue = [root] // 初始化队列，并将根节点入队
  while(queue.length) {
      let length = queue.length
      for(let i = 0; i < length; i++) {
          let node = queue.shift()
          if(i === 0) { // 层序遍历 记录最后一行的第一个节点
              resNode = node.val
          }
          node.left && queue.push(node.left)
          node.right && queue.push(node.right)
      }
  }
  return resNode
}

// 测试
console.log(findBottomLeftValue(root))