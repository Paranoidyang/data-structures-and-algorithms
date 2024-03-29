/**
 * 二叉树主要有两种遍历方式：
    1、深度优先遍历：先往深走，遇到叶子节点再往回走。
    2、广度优先遍历：一层一层的去遍历。

  深度优先遍历（DFS）：
    前序遍历（递归法，迭代法——借助栈）
    中序遍历（递归法，迭代法——借助栈）
    后序遍历（递归法，迭代法——借助栈）

  广度优先遍历（BFS）：
    层次遍历（迭代法，借助队列）

  递归三部曲：
    1、确定递归函数的参数和返回值： 确定哪些参数是递归的过程中需要处理的，那么就在递归函数里加上这个参数， 并且还要明确每次递归的返回值是什么进而确定递归函数的返回类型。
    2、确定终止条件： 写完了递归算法, 运行的时候，经常会遇到栈溢出的错误，就是没写终止条件或者终止条件写的不对，操作系统也是用一个栈的结构来保存每一层递归的信息，如果递归没有终止，操作系统的内存栈必然就会溢出。
    3、确定单层递归的逻辑： 确定每一层递归需要处理的信息。在这里也就会重复调用自己来实现递归的过程。
 */

/**
 * 前序遍历（打印出结果）
 * @param {*} root 所有遍历函数的入参都是树的根结点对象
 * @returns 
 */
function preorderTraversal(root) {
  if (!root) return                            // 确定终止条件
  console.log('当前遍历的结点值是: ', root.val)  // 输出当前遍历的结点值
  preorderTraversal(root.left)                 // 递归遍历左子树
  preorderTraversal(root.right)                // 递归遍历右子树 
}

/**
 * 前序遍历（遍历结果存入数组）
 * @param {*} root
 * @returns 
 */
function preorderTraversal(root) {
  const preorder = (curr, res) => {
    if (!curr) return
    res.push(curr.val)
    preorder(curr.left, res)
    preorder(curr.right, res)
  }
  const result = []
  preorder(root, result)
  return result
}

// ----------------------中、后序遍历只需要调整下递归代码顺序即可-------------------------

/**
 * 中序遍历
 * @param {*} root 
 * @returns 
 */
function inorderTraversal(root) {
  if (!root) return
  inorderTraversal(root.left)
  console.log('当前遍历的结点值是：', root.val)
  inorderTraversal(root.right)
}

/**
 * 后序遍历
 * @param {*} root 
 * @returns 
 */
function postorderTraversal(root) {
  if (!root) return
  postorderTraversal(root.left)
  postorderTraversal(root.right)
  console.log('当前遍历的结点值是：', root.val)
}
