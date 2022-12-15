/**
 * 题目描述：二叉树递归遍历的3种姿势（深度优先搜索思想的应用，DFS）
 */
export default function () {
  /**
   * 前序遍历
   * @param {*} root 所有遍历函数的入参都是树的根结点对象
   * @returns 
   */
  function preorder(root) {
    // 递归边界，root 为空
    if (!root) {
      return
    }

    // 输出当前遍历的结点值
    console.log('当前遍历的结点值是：', root.val)
    // 递归遍历左子树 
    preorder(root.left)
    // 递归遍历右子树  
    preorder(root.right)
  }

  /**
   * 中序遍历
   * @param {*} root 
   * @returns 
   */
  function inorder(root) {
    if (!root) {
      return
    }

    inorder(root.left)
    console.log('当前遍历的结点值是：', root.val)
    inorder(root.right)
  }

  /**
   * 后序遍历
   * @param {*} root 
   * @returns 
   */
  function postorder(root) {
    if (!root) {
      return
    }

    postorder(root.left)
    postorder(root.right)
    console.log('当前遍历的结点值是：', root.val)
  }

}
