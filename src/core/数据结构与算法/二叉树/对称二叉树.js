/**
 * 题目描述：给定一个二叉树，检查它是否是镜像对称的。
 */

 const root = {
  val: "0",
  left: {
    val: "1",
    left: {
      val: "2",
      left: null,
      right: null
    },
    right: {
      val: "3",
      left: null,
      right: null
    }
  },
  right: {
    val: "1",
    left: {
      val: '3',
      left: null,
      right: null
    },
    right: {
      val: "2",
      left: null,
      right: null
    }
  }
};

/**
 * 递归法
 * 递归三部曲:
 * 1、确定递归函数的参数和返回值
 * 2、确定终止条件
 * 3、确定单层递归的逻辑
 * @param {*} root 
 * @returns 
 */
//  function isSymmetric(root) {
//   // 使用递归遍历左右子树 递归三部曲
//     // 1. 确定递归的参数 root.left root.right和返回值true false 
//     const compareNode = function(left, right) {
//       // 2. 确定终止条件 空的情况
//       if(left === null && right !== null || left !== null && right === null) {
//           return false;
//       } else if(left === null && right === null) {
//           return true;
//       } else if(left.val !== right.val) {
//           return false;
//       }
//       // 3. 确定单层递归逻辑
//       let outSide = compareNode(left.left, right.right);
//       let inSide = compareNode(left.right, right.left);
//       return outSide && inSide;
//   }
//   if(root === null) {
//       return true;
//   }
//   return compareNode(root.left, root.right);
//  } 

 /**
  * 迭代法（使用队列）
  * @param {*} root 
  */
function isSymmetric(root) {
  // 首先判断root是否为空
  if(root === null) return true
  const queue = []
  queue.push(root.left)
  queue.push(root.right)
  while(queue.length > 0) {
    let leftNode = queue.shift() //左节点
    let rightNode = queue.shift() //右节点
    if(leftNode === null && rightNode == null) continue
    if(leftNode === null ||  rightNode === null || leftNode.val !== rightNode.val) return false
    queue.push(leftNode.left)   //左节点左孩子入队
    queue.push(rightNode.right) //右节点右孩子入队
    queue.push(leftNode.right)  //左节点右孩子入队
    queue.push(rightNode.left)  //右节点左孩子入队

  }
  return true
}

/**
 * 迭代法（使用栈）
 * 这个迭代法，其实是把左右两个子树要比较的元素顺序放进一个容器，然后成对成对的取出来进行比较，那么其实使用栈也是可以的，代码逻辑原封不动
 * @param {*} root 
 */
function isSymmetric(root) {
  // 首先判断root是否为空
  if(root === null) return true
  const stack = []
  stack.push(root.left)
  stack.push(root.right)
  while(stack.length > 0) {
    let rightNode = stack.pop() //右节点
    let leftNode = stack.pop() //左节点
    if(leftNode === null && rightNode == null) continue
    if(leftNode === null ||  rightNode === null || leftNode.val !== rightNode.val) return false
    stack.push(leftNode.left)   //左节点左孩子入栈
    stack.push(rightNode.right) //右节点右孩子入栈
    stack.push(leftNode.right)  //左节点右孩子入栈
    stack.push(rightNode.left)  //右节点左孩子入栈

  }
  return true
}


//  测试
console.log(isSymmetric(root))