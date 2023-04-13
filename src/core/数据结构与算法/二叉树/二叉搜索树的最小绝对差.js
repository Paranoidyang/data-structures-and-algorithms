/**
 * 题目描述：给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。
 * 
 * 示例：
 * 输入：
 *        1
 *         \
 *          3
 *         /
 *        2
 * 
 * 输出：1
 * 
 * 提示：树中至少有 2 个节点。
 */

/**
 * 递归法1 —— 先转换为有序数组
 * @param {*} root 
 * @returns 
 */
function getMinimumDifference(root) {
  // 中序遍历，构造从小到大有序数组
  const sortedArr = []
  const inorder = function(root) {
    if(!root) return
    inorder(root.left)
    sortedArr.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  let res = Infinity
  // 遍历有序数组，求出最小绝对差
  for(let i = 1; i < sortedArr.length; i++) {
    res = Math.min(res, sortedArr[i] - sortedArr[i-1])
  }
  return res
}

/**
 * 递归法2 —— 在递归的过程中更新最小值
 * @param {*} root 
 * @param {*} */ 
function getMinimumDifference(root) {
  let res = Infinity
  let preNode = null
  // 中序遍历
  const inorder = (node) => {
      if(!node) return
      inorder(node.left)
      // 更新res
      if(preNode) res = Math.min(res, node.val - preNode.val)
      // 记录前一个节点         
      preNode = node
      inorder(node.right)
  }
  inorder(root)
  return res
}

// 测试
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
console.log(getMinimumDifference(root))