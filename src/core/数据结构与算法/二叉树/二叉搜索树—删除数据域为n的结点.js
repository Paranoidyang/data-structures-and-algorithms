/**
 * 题目描述：给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。
 * 
 * 一般来说，删除节点可分为两个步骤：
 * 1、首先找到需要删除的节点；
 * 2、如果找到了，删除它。
 * 
 * 说明： 要求算法时间复杂度为 $O(h)$，h 为树的高度。
 * 
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
};

/**
 * 递归法
 * @param {*} root 
 * @param {*} key 
 */
function deleteNode(root, key) {
  if(root === null)  return root
  if(key > root.val) {
    root.right = deleteNode(root.right, key)
    return root
  }else if(key < root.val) {
    root.left = deleteNode(root.left, key)
    return root
  }else {
    // 场景1：该节点是叶子节点
    if(!root.left && !root.right) {
      return null
    }
    // 场景2：有一个孩子节点不存在
    if(root.left && !root.right) {
      return root.left
    }else if(root.right && !root.left) {
      return root.right
    }
    // 场景3：左右节点都存在
    const rightNode = root.right
    // 获取最小节点值
    const minNode = getMinNode(rightNode)
    // 将待删除节点的值替换为最小值节点值
    root.val = minNode.val
    // 删除最小值节点
    root.right = deleteNode(root.right, minNode.val)
    return root
  }
}

/**
 * 辅助函数，获取最小值节点
 * @param {*} root 
 * @returns 
 */
function getMinNode(root) {
  while(root.left) {
    root = root.left
  }
  return root
}

// 测试
console.log(deleteNode(root, 6))