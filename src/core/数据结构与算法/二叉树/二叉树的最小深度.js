/**
 * 题目描述：给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 说明: 叶子节点是指没有子节点的节点
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
function minDepth(root) {
  if(!root) return 0
  if(!root.left && !root.right) return 1 // 到叶子节点 返回 1
  if(!root.left) { // 只有右节点时 递归右节点
    return minDepth(root.right) + 1
  }
  if(!root.right) { // 只有左节点时 递归左节点
    return minDepth(root.left) + 1
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}

// 测试
console.log('minDepth',minDepth(root))