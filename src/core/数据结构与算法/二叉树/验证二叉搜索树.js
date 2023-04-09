/**
 * 题目描述：给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 * 假设一个二叉搜索树具有如下特征：
        节点的左子树只包含小于当前节点的数。
        节点的右子树只包含大于当前节点的数。
        所有左子树和右子树自身必须也是二叉搜索树。

   思路：要知道中序遍历下，输出的二叉搜索树节点的数值是有序序列。
         有了这个特性，验证二叉搜索树，就相当于变成了判断一个序列是不是递增的了。
 */

function isValidBST(root) {
  const arr = []
  // 转为数组
  const traversal = (root) => {
    if(root === null) return
    traversal(root.left)
    arr.push(root.val)
    traversal(root.right)
  }

  traversal(root)

  // 判断数组是否有序
  for(let i = 0; i< arr.length; i++) {
    if(arr[i] >= arr[i + 1]) return false
  }

  return true

}


const root = {
  val: 3,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: null
  },
  right: {
    val: 4,
    left: null,
    right: null,
  }
}

// 测试
console.log(isValidBST(root))