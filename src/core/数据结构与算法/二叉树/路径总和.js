/**
 * 题目描述：给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 */

const root = {
  val: 5,
  left: {
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  },
  right: {
    val: 6,
    left: null,
    right: null,
  },
}

/**
 * 递归法
 * @param {*} root 
 */
function hasPathSum(root, targetSum) {
  let res = false
  if(!root) return res
  const traversal = (root, count) => {
    count += root.val
    // 如果该节点是叶子节点，同时该节点的路径数值等于targetSum，那么就返回true
    if(root.left === null && root.right === null && count === targetSum) {
      return res = true
    }
    root.left && traversal(root.left, count)
    root.right && traversal(root.right, count)
  }
  traversal(root, 0) // count 从 0 开始累计
  return res
}

// 测试
console.log(hasPathSum(root, 6))
console.log(hasPathSum(root, 11))
console.log(hasPathSum(root, 9))