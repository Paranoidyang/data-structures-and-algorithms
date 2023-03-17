/**
 * 题目描述：计算给定二叉树的所有左叶子之和。
 */

const root = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
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
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null,
  },
};

/**
 * 递归法
 * @param {*} root 
 */
function sumOfLeftLeaves(root) {
  if(!root) return 0 // 如果遍历到空节点，那么左叶子值一定是0
  if(root.left === null && root.right === null) return 0 //其实这个也可以不写，如果不写不影响结果，但就会让递归多进行了一层。
  let leftValue = sumOfLeftLeaves(root.left)
  // 判断当前节点是不是左叶子是无法判断的，必须要通过节点的父节点来判断其左孩子是不是左叶子
  // 如果该节点的左节点不为空，该节点的左节点的左节点为空，该节点的左节点的右节点为空，则找到了一个左叶子
  if(root.left && root.left.left === null && root.left.right === null) {
    leftValue = root.left.val
  }
  let rightValue = sumOfLeftLeaves(root.right)
  return leftValue + rightValue
}

/**
 * 迭代法
 * @param {*} root 
 */
function sumOfLeftLeaves(root) {
  if(!root) return 0
  const queue = [root]
  let sum = 0
  while(queue.length) {
    const node = queue.shift()
    if(node.left && node.left.left === null && node.left.right === null) {
      sum += node.left.val
    }
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }
  return sum
}

// 测试
console.log(sumOfLeftLeaves(root))