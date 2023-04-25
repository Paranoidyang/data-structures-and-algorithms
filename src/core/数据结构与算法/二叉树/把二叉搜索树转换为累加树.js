/**
 * 题目描述：给出二叉搜索树的根节点，该树的节点值各不相同，请你将其转换为累加树，使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。
 * 
 * 技巧：中序遍历（左中右）是个从小到大的有序序列，那么反过来中序遍历（右中左）就是一个从大到小的序列，然后将已遍历的节点值累加即可
 */

function convertBST(root) {
  let sum = 0
  const traversal = (root) => {
    if(!root) return
    traversal(root.right)
    sum += root.val
    root.val = sum
    traversal(root.left)
  }
  traversal(root)
  return root
}

// 测试
const root = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}
console.log(convertBST(root))