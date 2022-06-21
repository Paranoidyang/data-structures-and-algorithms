/**
 * 题目描述：二叉树迭代遍历的3种姿势
 * 给定一个二叉树，返回它的前、中、后序遍历序列。
 * 示例: 输入: [1,null,2,3]
 *   1   
      \   
        2   
      /  
      3 

   前序遍历会输出: [1,2,3]
   思路：借助栈来实现
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
 * 前序遍历
 * @param {*} root 所有遍历函数的入参都是树的根结点对象
 * @returns 
 */
function preorder(root) {
  const res = []//定义结果数组
  if (!root) {//处理边界条件
    return res
  }
  const stack = []//初始化栈结构
  stack.push(root)//先将根结点入栈
  while (stack.length) {//若栈不为空，则重复出栈、入栈操作
    let cur = stack.pop()//将栈顶结点记为当前结点
    res.push(cur.val)
    if (cur.right) {//若当前子树根结点有右孩子，则将右孩子入栈
      stack.push(cur.right)
    }
    if (cur.left) {//若当前子树根结点有左孩子，则将左孩子入栈
      stack.push(cur.left)
    }
  }
  return res//返回结果数组 
}

console.log('前序遍历', preorder(root))

/**
 * 后序遍历
 * @param {*} root 
 * @returns 
 */
function postorder(root) {
  const res = []
  if (!root) {
    return res
  }
  const stack = []
  stack.push(root)
  while (stack.length) {
    let cur = stack.pop()
    res.unshift(cur.val)//注意这里与前序遍历不同，是往res的头部添加元素
    // 注意以下的左右节点的入栈顺序与前序遍历不同
    if (cur.left) {
      stack.push(cur.left)
    }
    if (cur.right) {
      stack.push(cur.right)
    }
  }
  return res

}

console.log('后序遍历', postorder(root))

/**
 * 中序遍历
 * @param {*} root 
 * @returns 
 */
function inorder(root) {
  const res = []
  const stack = []
  let cur = root//用一个 cur 结点充当游标
  while (cur || stack.length) {//当 cur 不为空、或者 stack 不为空时，重复以下逻辑
    while (cur) {//这个 while 的作用是把寻找最左叶子结点的过程中，途径的所有结点都记录下来 
      stack.push(cur)
      cur = cur.left
    }
    // 这部分逻辑的作用是从最左的叶子结点开始，一层层回溯遍历左孩子的父结点和右侧兄弟结点，进而完成整个中序遍历任务。  
    // 第一波内层 while 循环结束， cur 开始承担中序遍历的遍历游标职责
    cur = stack.pop()//取出栈顶元素
    res.push(cur.val)//将栈顶元素入栈
    cur = cur.right//尝试读取 cur 结点的右孩子
  }
  return res
}

console.log('中序遍历', inorder(root))

