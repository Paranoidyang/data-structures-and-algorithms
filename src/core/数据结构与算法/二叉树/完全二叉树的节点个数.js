/**
 * 题目描述：给出一个完全二叉树，求出该树的节点个数。
 * 定义：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。
 *      若最底层为第 h 层，则该层包含 1~ 2^(h-1)  个节点。
 * 
 * 完全二叉树只有两种情况，情况一：就是满二叉树，情况二：最后一层叶子节点没有满。
 */

const root = {
  val: "0",
  left: {
    val: "1",
    left: {
      val: "2",
      left: null,
      right: null,
    },
    right: {
      val: "3",
      left: null,
      right: null,
    },
  },
  right: {
    val: "1",
    left: null,
    right: null,
  },
};

/**
 * 递归法
 * @param {*} root 
 */
function getNodesNum(root) {
  if(!root) return 0
  let leftNum = getNodesNum(root.left)   // 左
  let rightNum = getNodesNum(root.right) // 右
  return leftNum + rightNum + 1          // 中
}

/**
 * 迭代法（层序遍历）
 * @param {*} root 
 */
function getNodesNum(root) {
  if(!root) return 0
  const queue = [root]
  let result = 0
  while(queue.length) {
    let length = queue.length
    while(length--) {
       let node = queue.shift()
       result++
       node.left && queue.push(node.left)
       node.right && queue.push(node.right)
    }
  }
  return result
}

// 测试
console.log(getNodesNum(root))