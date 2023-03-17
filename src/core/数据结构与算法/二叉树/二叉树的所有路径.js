/**
 * 题目描述：给定一个二叉树，返回所有从根节点到叶子节点的路径。
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
 * 递归+回溯
 * @param {*} root 
 */
function binaryTreePaths(root) {
  // 结果数组
  const res = []
  // 1、确定递归函数、函数参数
  const getPath = (node, curPath) => {
    // 2、确定终止条件，到叶子节点就终止
    if(node.left === null && node.right === null) {
      curPath += node.val
      res.push(curPath)
      return
    }
    // 3、确定单层递归逻辑
    curPath += node.val + '->'
    node.left && getPath(node.left, curPath)
    node.right && getPath(node.right, curPath) // curPath作为函数参数是按值传递的，执行完递归函数之后，curPath依然是之前的数值（相当于回溯了）
    return curPath
  }
  getPath(root, '')
  return res
}

// 测试
console.log(binaryTreePaths(root))