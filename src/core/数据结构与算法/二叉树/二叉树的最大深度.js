/**
 * 题目描述：给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 说明: 叶子节点是指没有子节点的节点。
 * 示例： 给定二叉树 [3,9,20,null,null,15,7]，返回它的最大深度 3 。
 */
const root = {
  val: "0",
  left: {
    val: "1",
    left: {
      val: "2",
      left: null,
      right: null,
    },
    right: {
      val: "3",
      left: null,
      right: null,
    },
  },
  right: {
    val: "1",
    left: null,
    right: null,
  },
};
/**
 * 递归法（后序遍历求高度，根节点的高度就是二叉树的最大深度）
 * @param {*} root
 */
function maxdepth(root) {
  //使用递归的方法 递归三部曲
  //1. 确定递归函数的参数和返回值
  const getdepth = function (node) {
    //2. 确定终止条件
    if (node === null) {
      return 0;
    }
    //3. 确定单层逻辑
    let leftdepth = getdepth(node.left);
    let rightdepth = getdepth(node.right);
    let depth = 1 + Math.max(leftdepth, rightdepth);
    return depth;
  };
  return getdepth(root);
}

/**
 * 迭代法（层序遍历）
 * @param {*} root 
 */
 function maxdepth(root) {
  if(!root) return 0
    let count = 0
    const queue = [root]
    while(queue.length) {
        let size = queue.length
        /* 层数+1 */
        count++
        while(size--) {
            let node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return count
}

// 测试
console.log(maxdepth(root));
