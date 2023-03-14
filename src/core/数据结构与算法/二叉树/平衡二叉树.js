/**
 * 题目描述：给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 一棵高度平衡二叉树定义为：一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 */

const root = {
  val: "0",
  left: {
    val: "1",
    left: {
      val: "2",
      left: null,
      right: {
        val: '4',
        left: null,
        right: null
      },
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
 * @returns 
 */
function isBalanced(root) {
  return !(getDepth(root) == -1)
}

/**
 * 返回以该节点为根节点的二叉树的高度，如果不是平衡二叉树了则返回-1
 * @param {*} node 
 * @returns 
 */
function getDepth(node) {
  // 2. 确定递归函数终止条件
  if(node === null) return 0;
  // 3. 确定单层递归逻辑
  let leftDepth = getDepth(node.left); //左子树高度
  // 当判定左子树不为平衡二叉树时,即可直接返回-1
  if(leftDepth === -1) return -1;
  let rightDepth = getDepth(node.right); //右子树高度
  // 当判定右子树不为平衡二叉树时,即可直接返回-1
  if(rightDepth === -1) return -1;
  if(Math.abs(leftDepth - rightDepth) > 1) {
      return -1;
  } else {
      return 1 + Math.max(leftDepth, rightDepth);
  }
}

// 测试
console.log(isBalanced(root))