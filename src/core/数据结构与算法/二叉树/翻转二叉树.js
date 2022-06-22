/**
 * 题目描述：翻转一棵二叉树
 * 示例：   4
          /   \
          2     7
        / \   / \
        1   3 6   9
  输出：
          4
        /   \
        7     2
      / \   / \
      9   6 3   1

  思路：一棵二叉树，经过翻转后会有什么特点？答案是每一棵子树的左孩子和右孩子都发生了交换。

 */

// 二叉树如下：
const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};

/**
 * 迭代实现
 * @param {*} root 树的根节点
 */
function invertTree1(root) {
  if (!root) {
    return root
  }
  const queue = []
  queue.push(root)
  while (queue.length) {
    const top = queue.shift()
    const left = top.left
    const right = top.right
    left && queue.push(left)
    right && queue.push(right)
    // 交换左右节点
    top.left = right
    top.right = left
  }
  return root
}
console.log('迭代实现', invertTree1(root))


/**
 * 递归实现
 * @param {*} root 树的根节点
 */
function invertTree2(root) {
  if (!root) {
    return root
  }
  let left = invertTree2(root.left)//归交换左孩子的子结点
  let right = invertTree2(root.right)//递归交换右孩子的子结点
  // 交换左右节点
  root.left = right
  root.right = left
  return root
}
console.log('递归实现', invertTree2(root))
