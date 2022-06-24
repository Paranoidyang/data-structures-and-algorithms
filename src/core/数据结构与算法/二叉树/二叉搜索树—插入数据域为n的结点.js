/**
 * 题目描述：往二叉搜索树中插入数据域为某一特定值的结点
 */

// 二叉树节点构造函数
function TreeNode(n) {
  return {
    val: n
  }
}

// 二叉树如下：
const root = {
  val: 6,
  left: {
    val: 3,
    left: {
      val: 1
    },
    right: {
      val: 4,
    }
  },
  right: {
    val: 8,
    right: {
      val: 9
    }
  }
};

/**
 * 往二叉搜索树中插入数据域为 n 的结点
 * @param {*} root 
 * @param {*} n 
 * @returns 
 */
function insertIntoBST(root, n) {
  if (!root) {//若 root 为空，说明当前是一个可以插入的空位
    root = new TreeNode(n)//用一个值为 n 的结点占据这个空位
    return root
  }
  if (root.val > n) {//当前结点数据域大于n，继续在左子树查找
    root.left = insertIntoBST(root.left, n)
  } else if (root.val < n) {//当前结点数据域小于n，继续在右子树查找
    root.right = insertIntoBST(root.right, n)
  }

  return root//返回插入后二叉搜索树的根结点

}
console.log(insertIntoBST(root, 7))
