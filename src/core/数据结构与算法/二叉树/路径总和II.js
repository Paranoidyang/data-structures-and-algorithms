/**
 * 题目描述：给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
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
      val: 1,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: null,
    right: null,
  },
}

/**
 * 递归法
 * @param {*} root 
 */
function pathSum(root, targetSum) {
  const res = []
  if(!root) return res
  const path = []
  const traversal = (root, count) => {
    count += root.val
    path.push(root.val)
    // 如果该节点是叶子节点，同时该节点的路径数值等于targetSum，那么就保存该路径
    if(root.left === null && root.right === null && count === targetSum) {
      res.push([...path]) // 不能写res.push(path), 要深拷贝
    }
    root.left && traversal(root.left, count, path)
    root.right && traversal(root.right, count, path)
    // 回溯
    let cur = path.pop()
    count -= cur.val
  }
  traversal(root, 0) // count 从 0 开始累计
  return res
}

// 测试
console.log(pathSum(root, 7))