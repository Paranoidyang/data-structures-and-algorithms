/**
 * 题目描述：给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。
 * 
 * 二叉搜索树是一个有序树：
 * 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
 * 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
 * 它的左、右子树也分别为二叉搜索树。
 * 
 * 技巧：
 * 1、利用二叉搜索树节点的有序性，可以不使用辅助栈或队列就可以写出迭代法。
 * 2、对于一般二叉树，递归过程中还有回溯的过程，例如走一个左方向的分支走到头了，那么要调头，在走右分支。而对于二叉搜索树，不需要回溯的过程，因为节点的有序性就帮我们确定了搜索的方向。
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
 * @param {*} val 
 */
function searchBST(root, val) {
  if(root === null || root.val === val) return root  // 如果root为空，或者找到这个数值了，就返回root节点
  if(root.val > val) return searchBST(root.left, val)
  if(root.val < val) return searchBST(root.right, val)
}

/**
 * 迭代法
 * @param {*} root 
 * @param {*} val 
 */
function searchBST(root, val) {
  while(root !== null) {
    if(root.val > val) root = root.left
    else if(root.val < val) root = root.right
    else return root
  }
  return null
}

// 测试
console.log(searchBST(root, 6))