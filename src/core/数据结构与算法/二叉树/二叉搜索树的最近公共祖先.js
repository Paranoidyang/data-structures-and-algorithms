/**
 * 题目描述：给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 * 
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 * 
 * 说明:
 * 1、所有节点的值都是唯一的。
 * 2、p、q 为不同节点且均存在于给定的二叉搜索树中。
 * 
 * 技巧：由二叉搜索树的有序性可知，当我们从上向下去递归遍历，第一次遇到的数值在 [p, q] 区间的节点，就是 p 和 q 的最近公共祖先。
 * 
 */

 function lowestCommonAncestor (root, p, q) {
  if(root === null) return null
  // 两个节点都小于当前节点，说明公共祖先在左子树，递归左子树
  if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q) 
  // 两个节点都大于当前节点，说明公共祖先在右子树，递归右子树
  if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q)
  // 其他情况说明 root 的值在 [p, q] 区间，则这个节点就是 p 和 q 的最近公共祖先
  return root
}

// 测试
const p = {
  val: 1,
  left: null,
  right: null
}
const q = {
  val: 8,
  left: null,
  right: null
}
const root = {
  val: 6,
  left: {
    val: 4,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: p
  },
  right: {
    val: 7,
    left: null,
    right: q
  }
}
console.log(lowestCommonAncestor(root, p, q))